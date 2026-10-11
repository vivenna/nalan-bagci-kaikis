// Praxis zum Schloss – Entwurf 2 „Verwandt“ (vivenna)
// Mega-Menü, mobile Überlagerung, Masken-/Clip-Reveals, Haarlinien und scrollgesteuerter
// Fortschritt der Schritte. Ohne JavaScript ist alles sichtbar und bedienbar
// (Leistungen-Link führt zum Hub, Akkordeons sind native <details>).
(function () {
  'use strict';

  var bewegungAus = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || document).querySelectorAll(s)); };
  var t = function (key, de) { return window.Sprache ? window.Sprache.t(key, de) : de; };

  /* ---------- Mega-Menü ---------- */
  var megaKnopf = $('[data-mega-knopf]'), mega = $('#mega');
  function megaSetzen(offen, fokus) {
    if (!megaKnopf) return;
    megaKnopf.setAttribute('aria-expanded', String(offen));
    mega.hidden = !offen;
    if (offen && fokus) { var erster = $('a', mega); if (erster) erster.focus(); }
  }
  if (megaKnopf && mega) {
    megaKnopf.addEventListener('click', function (e) { e.stopPropagation(); megaSetzen(megaKnopf.getAttribute('aria-expanded') !== 'true', false); });
    megaKnopf.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); megaSetzen(true, true); } });
    document.addEventListener('click', function (e) { if (!mega.hidden && !mega.contains(e.target)) megaSetzen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mega.hidden) { megaSetzen(false); megaKnopf.focus(); } });
    document.addEventListener('focusin', function (e) { if (!mega.hidden && !mega.contains(e.target) && e.target !== megaKnopf) megaSetzen(false); });
  }

  /* ---------- Mobile Überlagerung mit Fokusfalle ---------- */
  var ebene = $('#menue-ebene'), oeffner = $('[data-menue-oeffnen]'), schliesser = $('[data-menue-schliessen]');
  function ebeneSetzen(offen) {
    if (!ebene) return;
    ebene.hidden = !offen;
    oeffner.setAttribute('aria-expanded', String(offen));
    document.body.style.overflow = offen ? 'hidden' : '';
    if (offen) schliesser.focus(); else oeffner.focus();
  }
  if (ebene && oeffner) {
    oeffner.addEventListener('click', function () { ebeneSetzen(true); });
    schliesser.addEventListener('click', function () { ebeneSetzen(false); });
    ebene.addEventListener('click', function (e) { if (e.target.closest('a')) { ebene.hidden = true; document.body.style.overflow = ''; } });
    document.addEventListener('keydown', function (e) {
      if (ebene.hidden) return;
      if (e.key === 'Escape') { ebeneSetzen(false); return; }
      if (e.key !== 'Tab') return;
      var f = $$('a[href], button, summary', ebene).filter(function (el) { return el.offsetParent !== null; });
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
  }

  /* ---------- Sprechzeiten: heutigen Tag markieren (Zeitzone Berlin) ---------- */
  try {
    var tag = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short' }).format(new Date());
    var nr = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[tag];
    $$('[data-tag="' + nr + '"]').forEach(function (z) { z.classList.add('ist-heute'); });
  } catch (e) { /* ohne Intl keine Markierung */ }

  /* ---------- Reveals beim Scrollen ---------- */
  var ziele = $$('.maske, .enthuellen, .einblenden, .abschnitt__raster, .faktenleiste');
  if ('IntersectionObserver' in window && !bewegungAus) {
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ist-sichtbar'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    ziele.forEach(function (el) { io.observe(el); });
  } else {
    ziele.forEach(function (el) { el.classList.add('ist-sichtbar'); });
  }

  /* ---------- Scrollgesteuert: Fortschritt der Schritte, Parallax mit Maß ---------- */
  var schrittListen = $$('[data-fortschritt]'), felder = $$('[data-parallax]'), geplant = false;
  function beimScrollen() {
    geplant = false;
    var vh = window.innerHeight;
    schrittListen.forEach(function (liste) {
      var r = liste.getBoundingClientRect();
      var p = bewegungAus ? 1 : Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height));
      liste.style.setProperty('--fortschritt', p.toFixed(3));
      $$('.schritt', liste).forEach(function (s) { if (bewegungAus || s.getBoundingClientRect().top < vh * 0.6) s.classList.add('ist-erreicht'); });
    });
    if (bewegungAus) return;
    felder.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      var max = parseFloat(el.getAttribute('data-parallax')) || 24;
      var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
      el.style.transform = 'translate3d(0,' + (p * max).toFixed(1) + 'px,0)';
    });
  }
  window.addEventListener('scroll', function () { if (!geplant) { geplant = true; requestAnimationFrame(beimScrollen); } }, { passive: true });
  window.addEventListener('resize', beimScrollen);
  beimScrollen();

  /* ---------- Sprachwechsel: Beschriftungen, die das Skript setzt ---------- */
  document.addEventListener('sprachewechsel', function () {
    if (oeffner) oeffner.setAttribute('aria-label', t('allg.menue.oeffnen', 'Menü öffnen'));
    if (schliesser) schliesser.setAttribute('aria-label', t('allg.menue.schliessen', 'Menü schließen'));
  });
})();
