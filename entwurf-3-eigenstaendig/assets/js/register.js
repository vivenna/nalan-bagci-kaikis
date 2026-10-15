// Praxis zum Schloss – Entwurf 3 „Register“ (vivenna)
// Register als Bogen von oben (mobil), Lesemarke im Inhaltsregister der Landing Pages,
// Markierung des heutigen Tags in den Sprechzeiten. Seitenübergänge laufen über CSS
// (View Transitions). Ohne JavaScript steht das Register als normale Navigation oben.
(function () {
  'use strict';

  var $ = function (s, k) { return (k || document).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || document).querySelectorAll(s)); };

  /* ---------- Register als Bogen von oben (nur schmale Bildschirme) ---------- */
  var register = $('#register'), oeffner = $('[data-register-oeffnen]'), schliesser = $('[data-register-schliessen]'), hintergrund = $('[data-register-hintergrund]');
  var schmal = window.matchMedia('(max-width: 63.99em)');
  function setzen(offen) {
    if (!register || !schmal.matches) return;
    register.classList.toggle('ist-offen', offen);
    hintergrund.hidden = !offen;
    oeffner.setAttribute('aria-expanded', String(offen));
    document.body.style.overflow = offen ? 'hidden' : '';
    if (offen) { register.setAttribute('aria-modal', 'true'); register.setAttribute('role', 'dialog'); schliesser.focus(); }
    else { register.removeAttribute('aria-modal'); register.removeAttribute('role'); oeffner.focus(); }
  }
  if (register && oeffner) {
    oeffner.addEventListener('click', function () { setzen(true); });
    schliesser.addEventListener('click', function () { setzen(false); });
    hintergrund.addEventListener('click', function () { setzen(false); });
    register.addEventListener('click', function (e) { if (e.target.closest('a') && schmal.matches) { register.classList.remove('ist-offen'); hintergrund.hidden = true; document.body.style.overflow = ''; } });
    document.addEventListener('keydown', function (e) {
      if (!register.classList.contains('ist-offen')) return;
      if (e.key === 'Escape') { setzen(false); return; }
      if (e.key !== 'Tab') return;
      var f = $$('a[href], button', register).filter(function (el) { return el.offsetParent !== null; });
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    schmal.addEventListener('change', function () { if (!schmal.matches) { register.classList.remove('ist-offen'); hintergrund.hidden = true; document.body.style.overflow = ''; } });
  }

  // Sprache gewählt: Register schließt sich, dahinter erscheint die Seite in der neuen Sprache
  document.addEventListener('sprachewechsel', function () { if (register && register.classList.contains('ist-offen')) setzen(false); });

  /* ---------- Inhaltsregister: Lesemarke folgt dem aktiven Abschnitt ---------- */
  var toc = $('[data-inhaltsregister]');
  if (toc && 'IntersectionObserver' in window) {
    var links = $$('a', toc), marke = $('.inhaltsregister__marke', toc);
    var abschnitte = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    var aktivSetzen = function (id) {
      links.forEach(function (a) {
        var an = a.getAttribute('href') === '#' + id;
        a.classList.toggle('ist-aktiv', an);
        if (an) { a.setAttribute('aria-current', 'location'); if (marke) marke.style.transform = 'translateY(' + a.parentElement.offsetTop + 'px)'; }
        else a.removeAttribute('aria-current');
      });
    };
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) { if (e.isIntersecting) aktivSetzen(e.target.id); });
    }, { rootMargin: '-20% 0px -70% 0px' });
    abschnitte.forEach(function (s) { io.observe(s); });
    if (abschnitte[0]) aktivSetzen(abschnitte[0].id);
  }

  /* ---------- Sprechzeiten: heutigen Tag markieren (Zeitzone Berlin) ---------- */
  try {
    var tag = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short' }).format(new Date());
    var nr = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[tag];
    $$('[data-tag="' + nr + '"]').forEach(function (z) { z.classList.add('ist-heute'); });
  } catch (e) { /* ohne Intl keine Markierung */ }
})();
