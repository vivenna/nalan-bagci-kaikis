/* =====================================================================
   Kurze Hinweise unten: „noch nicht erstellt“ und „noch nicht übersetzt“
   ---------------------------------------------------------------------
   Drei Fälle, je ca. 1 Sekunde Hinweis (Aussehen: .noch-nicht-hinweis in
   der style.css des jeweiligen Entwurfs):

   1. Klick auf einen Link zu einer Seite, die es noch nicht gibt
      (<a aria-disabled="true"> ohne href): „noch nicht erstellt“.
   2. Klick auf das Sprachmenü einer Seite, die nicht übersetzt ist
      (alle außer der Startseite): „noch nicht übersetzt“.
   3. Auf der Startseite ist Englisch oder Türkisch gewählt und es wird ein
      Link zu einer anderen Seite angeklickt: Die Zielseite gibt es nur auf
      Deutsch. Der Hinweis erscheint dort nach dem Laden, und zwar in der
      Sprache, die beim Klick gewählt war (Text in sessionStorage).

   Texte kommen über Sprache.t() (shared/js/sprache.js, Übersetzungen in
   shared/inhalte/uebersetzungen/).
   ===================================================================== */
(function () {
  'use strict';

  var ANZEIGE_MS = 1000;
  var MERKER = 'praxis-uebersetzungshinweis';
  var MERKER_MAX_ALTER_MS = 5000;
  var hinweis = null;
  var zeitgeber = null;

  function t(key, deutsch) { return window.Sprache ? window.Sprache.t(key, deutsch) : deutsch; }
  function uebersetzbar() { return document.body.getAttribute('data-i18n-seite') === 'voll'; }

  function zeige(text) {
    if (!hinweis) {
      hinweis = document.createElement('div');
      hinweis.className = 'noch-nicht-hinweis';
      hinweis.setAttribute('role', 'status');
      document.body.appendChild(hinweis);
    }
    hinweis.textContent = text;
    hinweis.classList.remove('ist-sichtbar');
    void hinweis.offsetWidth; // Übergang bei erneutem Klick von vorn starten
    hinweis.classList.add('ist-sichtbar');
    clearTimeout(zeitgeber);
    zeitgeber = setTimeout(function () { hinweis.classList.remove('ist-sichtbar'); }, ANZEIGE_MS);
  }

  function textNichtUebersetzt() { return t('allg.nicht-uebersetzt', 'Diese Seite wurde noch nicht übersetzt.'); }

  // Fall 2 im Aufnahmeschritt, weil sprache.js den Klick dort abfängt.
  document.addEventListener('click', function (e) {
    if (uebersetzbar() || !e.target.closest) return;
    if (e.target.closest('[data-sprache-wahl], .sprachwahl__knopf')) zeige(textNichtUebersetzt());
  }, true);

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;

    // Fall 1
    if (a.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
      zeige(t('allg.noch-nicht-erstellt', 'Diese Seite wurde noch nicht erstellt.'));
      return;
    }

    // Fall 3: auf der übersetzten Startseite zu einer (deutschen) Unterseite
    if (!uebersetzbar() || !window.Sprache || window.Sprache.aktuell() === 'de') return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (!a.href || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    if (a.protocol !== location.protocol || a.host !== location.host || a.pathname === location.pathname) return;
    try { sessionStorage.setItem(MERKER, JSON.stringify({ text: textNichtUebersetzt(), zeit: Date.now() })); } catch (err) { /* gesperrt: dann ohne Hinweis */ }
  });

  // Fall 3, Zielseite: Hinweis einmalig anzeigen
  try {
    var gemerkt = sessionStorage.getItem(MERKER);
    if (gemerkt) {
      sessionStorage.removeItem(MERKER);
      var m = JSON.parse(gemerkt);
      if (!uebersetzbar() && m && Date.now() - m.zeit < MERKER_MAX_ALTER_MS) zeige(m.text);
    }
  } catch (err) { /* ohne Hinweis weiter */ }
})();
