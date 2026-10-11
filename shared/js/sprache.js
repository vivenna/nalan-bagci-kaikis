/* =====================================================================
   Sprachumschaltung Deutsch / English / Türkçe (Demo)
   ---------------------------------------------------------------------
   Gemeinsam für alle drei Entwürfe. Jeder Entwurf gestaltet sein eigenes
   Sprachmenü; dieses Skript übernimmt nur die Logik:

   - Elemente mit data-i18n="schluessel" bekommen den übersetzten Inhalt
     (innerHTML). data-i18n-attr="content:schluessel;aria-label:schluessel2"
     übersetzt Attribute. Deutsch steht im HTML und wird beim Zurück-
     schalten wiederhergestellt. data-i18n-Elemente nicht verschachteln.
   - Knöpfe mit data-sprache-wahl="de|en|tr" schalten um (aria-pressed).
   - Elemente mit data-sprache-hinweis erscheinen auf Seiten ohne
     vollständige Übersetzung (body ohne data-i18n-seite="voll").
   - Die Wahl wird in localStorage gemerkt; <html lang> wird gesetzt.
   - Die Übersetzungen (shared/inhalte/uebersetzungen/en.js, tr.js) werden
     erst bei Bedarf als <script> nachgeladen – kein fetch, daher auch per
     file:// lauffähig.
   - Andere Skripte reagieren auf das Ereignis „sprachewechsel“ und holen
     dynamische Texte über Sprache.t(schluessel, deutscherText).

   Produktiv würde man statt dessen je Sprache eigene Seiten unter /en/
   und /tr/ ausliefern (mit hreflang) – siehe README.
   ===================================================================== */
(function () {
  'use strict';

  var SPRACHEN = ['de', 'en', 'tr'];
  var SPEICHER = 'praxis-sprache';
  var wurzel = document.documentElement;
  var skript = document.currentScript;
  var basis = skript ? skript.src.replace(/js\/sprache\.js(?:[?#].*)?$/, '') : '';
  var original = new Map();
  var aktuell = 'de';

  function lies() { try { return localStorage.getItem(SPEICHER); } catch (e) { return null; } }
  function merke(l) { try { localStorage.setItem(SPEICHER, l); } catch (e) { /* privat/gesperrt: dann eben nicht merken */ } }
  function woerterbuch(l) { return (window.UEBERSETZUNGEN || {})[l] || null; }

  function lade(l, fertig) {
    if (l === 'de' || woerterbuch(l)) { fertig(); return; }
    var s = document.createElement('script');
    s.src = basis + 'inhalte/uebersetzungen/' + l + '.js';
    s.onload = s.onerror = function () { fertig(); };
    document.head.appendChild(s);
  }

  function sichere(el) {
    if (!original.has(el)) {
      var attrs = {};
      (el.getAttribute('data-i18n-attr') || '').split(';').forEach(function (paar) {
        var name = paar.split(':')[0];
        if (name) attrs[name.trim()] = el.getAttribute(name.trim());
      });
      original.set(el, { html: el.hasAttribute('data-i18n') ? el.innerHTML : null, attrs: attrs });
    }
    return original.get(el);
  }

  function anwenden(l) {
    var w = l === 'de' ? null : woerterbuch(l);
    if (l !== 'de' && !w) l = 'de';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var o = sichere(el);
      var neu = w ? w[el.getAttribute('data-i18n')] : null;
      el.innerHTML = neu != null ? neu : o.html;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var o = sichere(el);
      el.getAttribute('data-i18n-attr').split(';').forEach(function (paar) {
        var teile = paar.split(':');
        var name = (teile[0] || '').trim();
        var key = (teile[1] || '').trim();
        if (!name || !key) return;
        var neu = w ? w[key] : null;
        if (neu != null) el.setAttribute(name, neu);
        else if (o.attrs[name] != null) el.setAttribute(name, o.attrs[name]);
      });
    });

    aktuell = l;
    wurzel.setAttribute('lang', l);
    wurzel.setAttribute('data-sprache', l);

    var vollstaendig = document.body && document.body.getAttribute('data-i18n-seite') === 'voll';
    document.querySelectorAll('[data-sprache-hinweis]').forEach(function (el) {
      el.hidden = l === 'de' || vollstaendig;
    });

    document.querySelectorAll('[data-sprache-wahl]').forEach(function (knopf) {
      var aktiv = knopf.getAttribute('data-sprache-wahl') === l;
      knopf.setAttribute('aria-pressed', aktiv ? 'true' : 'false');
      knopf.classList.toggle('ist-aktiv', aktiv);
    });

    document.dispatchEvent(new CustomEvent('sprachewechsel', { detail: { sprache: l } }));
  }

  function setze(l) {
    if (SPRACHEN.indexOf(l) < 0) l = 'de';
    merke(l);
    lade(l, function () { anwenden(l); wurzel.classList.remove('sprache-laedt'); });
  }

  window.Sprache = {
    sprachen: SPRACHEN.slice(),
    aktuell: function () { return aktuell; },
    setze: setze,
    t: function (key, deutsch) {
      var w = aktuell === 'de' ? null : woerterbuch(aktuell);
      return w && w[key] != null ? w[key] : deutsch;
    }
  };

  document.addEventListener('click', function (e) {
    var knopf = e.target.closest ? e.target.closest('[data-sprache-wahl]') : null;
    if (!knopf) return;
    e.preventDefault();
    setze(knopf.getAttribute('data-sprache-wahl'));
  });

  function start() {
    var l = lies();
    if (SPRACHEN.indexOf(l) < 0) l = 'de';
    if (l === 'de') {
      anwenden('de');
      wurzel.classList.remove('sprache-laedt');
    } else {
      setze(l);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
