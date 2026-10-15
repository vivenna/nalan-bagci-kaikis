// Praxis zum Schloss – Entwurf 1 „Fundament“ (vivenna)
// Grundlage: Skript des Startseiten-Entwurfs, erweitert für die mehrseitige Website.
// Architektur: ein kleines Skript ohne Bibliotheken. Alles, was beim Scrollen passiert, läuft
// gebündelt in EINEM requestAnimationFrame-Durchlauf. Die Seite funktioniert vollständig ohne
// Skript; es verfeinert nur Bewegung, Menüs und Live-Informationen.
// Texte, die das Skript erzeugt, kommen über Sprache.t() aus shared/js/sprache.js (DE/EN/TR).
(function () {
  'use strict';

  var bewegungAus = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var feinZeiger = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || document).querySelectorAll(s)); };
  var t = function (key, de) { return window.Sprache ? window.Sprache.t(key, de) : de; };
  var sprache = function () { return window.Sprache ? window.Sprache.aktuell() : 'de'; };

  /* ---------- Sprechzeiten: eine Quelle (data-sprechzeiten am Kopf, aus praxisdaten.yml) ---------- */
  var kopf = $('[data-kopf]');
  var zeiten = {};
  try { zeiten = JSON.parse(kopf.getAttribute('data-sprechzeiten')) || {}; } catch (e) { zeiten = {}; }
  var TAGE_DE = ['', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

  function uhrzeit(h) {
    var std = Math.floor(h), min = Math.round((h % 1) * 60), l = sprache();
    if (l === 'de') return std + (min ? ':' + String(min).padStart(2, '0') : '') + ' Uhr';
    var s = String(std).padStart(2, '0') + (l === 'tr' ? '.' : ':') + String(min).padStart(2, '0');
    return s;
  }
  function ersetze(text, werte) { return text.replace(/\{(\w+)\}/g, function (_, k) { return werte[k]; }); }

  function berlinJetzt() {
    // Zeitzone fest auf Berlin, damit Besucher im Ausland korrekte Angaben sehen.
    try {
      var teile = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
      var w = {}; teile.forEach(function (x) { w[x.type] = x.value; });
      return { tag: { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }[w.weekday], h: +w.hour + (+w.minute) / 60 };
    } catch (e) { var d = new Date(); return { tag: ((d.getDay() + 6) % 7) + 1, h: d.getHours() + d.getMinutes() / 60 }; }
  }

  function status() {
    var j = berlinJetzt(), heute = zeiten[j.tag] || [], i;
    for (i = 0; i < heute.length; i++) {
      if (j.h >= heute[i][0] && j.h < heute[i][1]) {
        var z = uhrzeit(heute[i][1]);
        return { offen: true, j: j, kurz: ersetze(t('allg.status.offen-kurz', 'Geöffnet bis {z}'), { z: z }), lang: ersetze(t('allg.status.offen-lang', 'Jetzt geöffnet · bis {z}'), { z: z }) };
      }
    }
    for (i = 0; i < heute.length; i++) {
      if (j.h < heute[i][0]) {
        var z2 = uhrzeit(heute[i][0]);
        return { offen: false, j: j, kurz: ersetze(t('allg.status.heute-kurz', 'Öffnet heute {z}'), { z: z2 }), lang: ersetze(t('allg.status.heute-lang', 'Geschlossen · öffnet heute um {z}'), { z: z2 }) };
      }
    }
    for (var n = 1; n <= 7; n++) {
      var tag = ((j.tag - 1 + n) % 7) + 1;
      if (zeiten[tag] && zeiten[tag].length) {
        var z3 = uhrzeit(zeiten[tag][0][0]);
        if (n === 1) return { offen: false, j: j, kurz: ersetze(t('allg.status.morgen-kurz', 'Öffnet morgen {z}'), { z: z3 }), lang: ersetze(t('allg.status.morgen-lang', 'Geschlossen · öffnet morgen um {z}'), { z: z3 }) };
        var name = t('allg.tag.' + tag, TAGE_DE[tag]);
        return { offen: false, j: j, kurz: ersetze(t('allg.status.tag-kurz', 'Öffnet {tag} {z}'), { tag: name, z: z3 }), lang: ersetze(t('allg.status.tag-lang', 'Geschlossen · öffnet {tag} um {z}'), { tag: name, z: z3 }) };
      }
    }
    return null;
  }

  function heuteText(tag) {
    var z = zeiten[tag];
    if (!z || !z.length) return t('allg.status.heute-geschlossen', 'Heute geschlossen');
    return t('allg.status.heute', 'Heute') + ' · ' + z.map(function (b) { return uhrzeit(b[0]).replace(' Uhr', '') + '–' + uhrzeit(b[1]); }).join(' & ');
  }

  function aktualisiereStatus() {
    var s = status(); if (!s) return;
    var pill = $('[data-status-pill]');
    if (pill) { pill.hidden = false; pill.classList.toggle('ist-offen', s.offen); $('[data-status-kurz]', pill).textContent = s.kurz; }
    var karte = $('[data-status-karte]');
    if (karte) {
      $('.schwebe__label', karte).textContent = heuteText(s.j.tag);
      $('[data-status-lang]', karte).textContent = s.offen ? t('allg.status.jetzt-offen', 'Jetzt geöffnet') : s.kurz;
      $('.status__punkt', karte).classList.toggle('ist-offen', s.offen);
    }
    $$('[data-status-gross]').forEach(function (gross) {
      gross.innerHTML = '';
      var p = document.createElement('span'); p.className = 'status__punkt' + (s.offen ? ' ist-offen' : ''); p.setAttribute('aria-hidden', 'true');
      gross.appendChild(p); gross.appendChild(document.createTextNode(s.lang));
    });
    // Heute im Wochenplan markieren und „Jetzt“-Linie setzen (Achse 8–20 Uhr)
    $$('.wochenplan__tage li').forEach(function (li) { li.classList.toggle('ist-heute', +li.getAttribute('data-tag') === s.j.tag); });
    $$('.jetzt').forEach(function (alt) { alt.remove(); });
    $$('.wochenplan__tage li[data-tag="' + s.j.tag + '"] .wochenplan__spur').forEach(function (zeile) {
      if (s.j.h < 8 || s.j.h > 20) return;
      var linie = document.createElement('span'); linie.className = 'jetzt'; linie.setAttribute('aria-hidden', 'true');
      var hh = Math.floor(s.j.h), mm = Math.round((s.j.h - hh) * 60);
      linie.setAttribute('data-zeit', hh + ':' + String(mm).padStart(2, '0'));
      linie.style.left = ((s.j.h - 8) / 12 * 100) + '%';
      zeile.appendChild(linie);
    });
  }
  aktualisiereStatus();
  setInterval(aktualisiereStatus, 60000);

  /* ---------- Menü (mobil) mit Fokusfalle ---------- */
  var menueKnopf = $('.menue-knopf'), nav = $('#hauptnavigation');
  function menue(offen) {
    nav.classList.toggle('ist-offen', offen);
    menueKnopf.setAttribute('aria-expanded', String(offen));
    menueKnopf.setAttribute('aria-label', offen ? t('allg.menue.schliessen', 'Menü schließen') : t('allg.menue.oeffnen', 'Menü öffnen'));
    document.body.classList.toggle('menue-offen', offen);
  }
  if (menueKnopf && nav) {
    menueKnopf.addEventListener('click', function () { menue(menueKnopf.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) menue(false); });
    document.addEventListener('keydown', function (e) {
      if (!nav.classList.contains('ist-offen')) return;
      if (e.key === 'Escape') { menue(false); menueKnopf.focus(); return; }
      if (e.key !== 'Tab') return;
      // Reihenfolge selbst führen: Der Knopf steht im Quelltext hinter der Navigation,
      // der Browser würde von ihm aus sonst in den verdeckten Seiteninhalt springen.
      var fokussierbar = [menueKnopf].concat($$('a[href], button:not([disabled])', nav).filter(function (el) { return el.offsetParent !== null; }));
      var i = fokussierbar.indexOf(document.activeElement), n = fokussierbar.length;
      e.preventDefault();
      fokussierbar[e.shiftKey ? (i <= 0 ? n - 1 : i - 1) : (i + 1) % n].focus();
    });
  }

  /* ---------- Untermenü „Leistungen“ und Sprachwahl (aufklappbar, Esc und Klick daneben schließen) ---------- */
  $$('.untermenue-knopf').forEach(function (knopf) {
    var panel = document.getElementById(knopf.getAttribute('aria-controls'));
    knopf.addEventListener('click', function (e) {
      e.stopPropagation();
      var offen = knopf.getAttribute('aria-expanded') !== 'true';
      knopf.setAttribute('aria-expanded', String(offen)); panel.hidden = !offen;
    });
  });
  $$('.sprachwahl__knopf').forEach(function (knopf) {
    var wahl = knopf.closest('.sprachwahl');
    knopf.addEventListener('click', function (e) {
      e.stopPropagation();
      var offen = !wahl.classList.contains('ist-offen');
      wahl.classList.toggle('ist-offen', offen); knopf.setAttribute('aria-expanded', String(offen));
      if (offen) { var aktiv = $('[aria-pressed="true"]', wahl) || $('button', $('.sprachwahl__liste', wahl)); if (aktiv) aktiv.focus(); }
    });
  });
  function schliesseAufklapper(ausser) {
    $$('.untermenue-knopf[aria-expanded="true"]').forEach(function (k) {
      if (window.innerWidth < 1024 || (ausser && k.parentNode.contains(ausser))) return;
      k.setAttribute('aria-expanded', 'false'); document.getElementById(k.getAttribute('aria-controls')).hidden = true;
    });
    $$('.sprachwahl.ist-offen').forEach(function (w) {
      if (ausser && w.contains(ausser)) return;
      w.classList.remove('ist-offen'); $('.sprachwahl__knopf', w).setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', function (e) { schliesseAufklapper(e.target); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var offenerKnopf = $('.untermenue-knopf[aria-expanded="true"]') || $('.sprachwahl.ist-offen .sprachwahl__knopf');
    schliesseAufklapper(null);
    if (offenerKnopf && window.innerWidth >= 1024) offenerKnopf.focus();
  });
  document.addEventListener('focusin', function (e) { if (window.innerWidth >= 1024) schliesseAufklapper(e.target); });

  /* ---------- Reiter (Leistungen auf der Startseite) ---------- */
  var reiter = $('[data-reiter]');
  if (reiter) {
    var tabs = $$('[role="tab"]', reiter);
    var setzeZeiger = function (tab) {
      reiter.style.setProperty('--z-links', tab.offsetLeft + 'px');
      reiter.style.setProperty('--z-breite', tab.offsetWidth + 'px');
      reiter.style.setProperty('--z-oben', tab.offsetTop + 'px');
      reiter.style.setProperty('--z-hoehe', tab.offsetHeight + 'px');
    };
    var waehle = function (tab, fokus, animieren) {
      tabs.forEach(function (x) {
        var an = x === tab;
        x.setAttribute('aria-selected', String(an)); x.tabIndex = an ? 0 : -1;
        var panel = document.getElementById(x.getAttribute('aria-controls'));
        panel.hidden = !an;
        panel.removeAttribute('data-js-versteckt');
        if (an && animieren) { panel.classList.remove('ist-neu'); void panel.offsetWidth; panel.classList.add('ist-neu'); }
      });
      setzeZeiger(tab); if (fokus) tab.focus();
    };
    tabs.forEach(function (x, i) {
      x.addEventListener('click', function () { waehle(x, false, true); });
      x.addEventListener('keydown', function (e) {
        var n = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (n) { e.preventDefault(); waehle(tabs[(i + n + tabs.length) % tabs.length], true, true); }
        if (e.key === 'Home') { e.preventDefault(); waehle(tabs[0], true, true); }
        if (e.key === 'End') { e.preventDefault(); waehle(tabs[tabs.length - 1], true, true); }
      });
    });
    var aktiv = function () { return tabs.filter(function (x) { return x.getAttribute('aria-selected') === 'true'; })[0]; };
    // Ohne JS sind alle Panels sichtbar; mit JS zeigt der Reiter nur das gewählte.
    waehle(aktiv(), false, false);
    window.addEventListener('resize', function () { setzeZeiger(aktiv()); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setzeZeiger(aktiv()); });
    document.addEventListener('sprachewechsel', function () { requestAnimationFrame(function () { setzeZeiger(aktiv()); }); });
  }

  /* ---------- Wort-für-Wort-Satz (wird nach einem Sprachwechsel neu aufgebaut) ---------- */
  var satz = $('[data-woerter]'), woerter = [], gelesen = 0;
  function woerterBauen() {
    if (!satz || bewegungAus) return;
    var sr = satz.querySelector('.sr-only');
    var text = (sr ? sr.textContent : satz.textContent).trim();
    // Vollständiger Satz für Screenreader, einzelne Wörter nur visuell.
    satz.innerHTML = '<span class="sr-only">' + text + '</span>' + text.split(/\s+/).map(function (w) { return '<span class="wort" aria-hidden="true">' + w + '</span>'; }).join(' ');
    woerter = $$('.wort', satz);
    woerter.forEach(function (w, i) { w.classList.toggle('ist-an', i < gelesen); });
  }
  woerterBauen();
  document.addEventListener('sprachewechsel', function () { woerterBauen(); aktualisiereStatus(); beimScrollen(); });

  /* ---------- Einblenden beim Scrollen ---------- */
  if ('IntersectionObserver' in window && !bewegungAus) {
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ist-sichtbar'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    $$('.reveal, [data-wochenplan]').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal, [data-wochenplan]').forEach(function (el) { el.classList.add('ist-sichtbar'); });
  }

  /* ---------- Alles, was vom Scrollen abhängt: ein rAF-Durchlauf ---------- */
  var zeitleiste = $('[data-zeitleiste]');
  var parallax = $$('[data-parallax]'), punkte = zeitleiste ? $$('.zeitleiste__punkt', zeitleiste) : [];
  var letztesY = window.scrollY, geplant = false, zeitMax = 0;
  if (zeitleiste && bewegungAus) { zeitleiste.style.setProperty('--fortschritt', '1'); punkte.forEach(function (p) { p.classList.add('ist-erreicht'); }); }

  function beimScrollen() {
    geplant = false;
    var y = window.scrollY, vh = window.innerHeight;
    // Kopf (mobil): Glas ab 24 px, beim Runterscrollen ausblenden, beim Hochscrollen zeigen
    if (kopf) {
      kopf.classList.toggle('ist-gescrollt', y > 24);
      var runter = y > letztesY && y > 320 && !document.body.classList.contains('menue-offen');
      kopf.classList.toggle('ist-versteckt', runter);
    }
    letztesY = y;
    if (bewegungAus) return;
    parallax.forEach(function (el) {
      var f = parseFloat(el.getAttribute('data-parallax')) || 0;
      if (y < vh * 1.2) el.style.transform = 'translate3d(0,' + (y * f).toFixed(1) + 'px,0)';
    });
    if (woerter.length) {
      var r = satz.getBoundingClientRect();
      var p = (vh * 0.82 - r.top) / (r.height + vh * 0.35);
      // Einmal gelesene Wörter bleiben hervorgehoben – ruhiger beim Zurückscrollen.
      gelesen = Math.max(gelesen, Math.round(Math.max(0, Math.min(1, p)) * woerter.length));
      woerter.forEach(function (w, i) { w.classList.toggle('ist-an', i < gelesen); });
    }
    if (zeitleiste) {
      var z = zeitleiste.getBoundingClientRect();
      zeitMax = Math.max(zeitMax, Math.max(0, Math.min(1, (vh * 0.62 - z.top) / z.height)));
      zeitleiste.style.setProperty('--fortschritt', zeitMax.toFixed(3));
      punkte.forEach(function (pt) { if (pt.getBoundingClientRect().top < vh * 0.62) pt.classList.add('ist-erreicht'); });
    }
  }
  window.addEventListener('scroll', function () { if (!geplant) { geplant = true; requestAnimationFrame(beimScrollen); } }, { passive: true });
  window.addEventListener('resize', beimScrollen);
  beimScrollen();

  /* ---------- Feinheiten für Maus/Trackpad ---------- */
  if (feinZeiger && !bewegungAus) {
    // Lichtkegel auf Karten
    $$('[data-licht]').forEach(function (k) {
      k.addEventListener('pointermove', function (e) {
        var r = k.getBoundingClientRect();
        k.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        k.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
    // Leicht „magnetische“ Hauptknöpfe (max. 6 px)
    $$('[data-magnet]').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) / r.width * 12).toFixed(1) + 'px');
        b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) / r.height * 8).toFixed(1) + 'px');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
  }

  /* ---------- Sprachwahl: Kürzel im Knopf aktualisieren ---------- */
  document.addEventListener('sprachewechsel', function (e) {
    $$('[data-sprache-kuerzel]').forEach(function (el) { el.textContent = e.detail.sprache.toUpperCase(); });
    $$('.sprachwahl.ist-offen').forEach(function (w) { w.classList.remove('ist-offen'); $('.sprachwahl__knopf', w).setAttribute('aria-expanded', 'false'); });
    // Sprache gewählt: mobiles Menü schließt sich, dahinter erscheint die Seite in der neuen Sprache
    if (nav && nav.classList.contains('ist-offen')) { menue(false); if (menueKnopf) menueKnopf.focus(); }
    if (menueKnopf) menueKnopf.setAttribute('aria-label', menueKnopf.getAttribute('aria-expanded') === 'true' ? t('allg.menue.schliessen', 'Menü schließen') : t('allg.menue.oeffnen', 'Menü öffnen'));
  });
})();
