# QA-Bericht – Phase 5

Stand: 12. Oktober 2026 · geprüft: alle drei Entwürfe, 58 Seiten (E1 23, E2 18, E3 17)

Dieser Bericht hält fest, was geprüft wurde, womit, mit welchem Ergebnis, was dabei repariert wurde und was offen bleibt. Offene Punkte stehen in Abschnitt 5 und sind nicht als erledigt markiert.

---

## 1. Ergebnis in Kürze

- **Alle Pflichtprüfungen bestanden.** 0 Konsolenfehler, 0 tote Links oder Assets, alle 316 Termin-Links zeigen exakt auf die Doctolib-URL, Sprachmenü und `lang` stimmen, 0 axe-Verstöße (WCAG 2.0–2.2, A/AA) auf allen 58 Seiten bei 375 und 1440 px, kein horizontaler Überlauf von 320 bis 1440 px.
- **Lighthouse** (12 Schlüsselseiten, mobil und Desktop): Performance 97–100, Barrierefreiheit 100, Best Practices 100. SEO 63 liegt ausschließlich am gewollten `noindex`.
- **In dieser Phase gefunden und behoben:** 13 Fehler, darunter drei ernste: zerfallene Listen in Entwurf 3, eine wirkungslose Fokusfalle im Mobilmenü von Entwurf 1, ein per Tastatur nicht erreichbares Mega-Menü in Entwurf 2 (Abschnitt 4).
- **Nicht geprüft:** Firefox (startet in der Prüfumgebung nicht), echte Mobilgeräte, Screenreader von Hand, Rich-Results-Test von Google (Abschnitt 5).

## 2. Prüfumgebung

| | |
|---|---|
| System | macOS 27.0.1 |
| Browser | Google Chrome 154 (über Playwright 1.63, `channel: chrome`), WebKit-Engine von Playwright (Build 2359, entspricht Safari) |
| Barrierefreiheit | axe-core 4.13 über `@axe-core/playwright`, Regeln `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` und zusätzlich die experimentellen Regeln |
| Performance/SEO | Lighthouse 13.5 (CLI, simulierte Drosselung: „Slow 4G“ mobil bzw. Desktop-Preset) |
| Server | (a) `python3 -m http.server` im Repo-Root, Aufruf `/entwurf-1-fundament/` usw.; (b) Testserver mit gzip im **übergeordneten** Ordner, Aufruf `/nalan-bagci-kaikis/entwurf-…/` – das entspricht GitHub Pages unter `https://<name>.github.io/<repo>/`; (c) `file://` ohne Server |
| Eigene Prüfskripte im Repo | `tools/pruefe-seiten.py`, `tools/pruefe-uebersetzungen.py` |

Die Browser-Skripte (Playwright, axe, Lighthouse, Screenshots) lagen außerhalb des Repos und gehören nicht zur Lieferung.

## 3. Ergebnisse nach Prüfbereich

### 3.1 Links, Assets, Konsole, 404

| Prüfung | Ergebnis |
|---|---|
| `tools/pruefe-seiten.py`: interne Links und Assets mit exakter Groß-/Kleinschreibung, Anker, Doctolib-URL und Attribute, `noindex`, genau eine `h1`, Title ≤ 60 und Description ≤ 155 Zeichen, JSON-LD parsebar, doppelte IDs, externe Ressourcen | 58 Seiten, **0 Fehler** |
| HTTP-Crawl aller Seiten im Unterpfad (b), inkl. `srcset`, CSS-`url()` und Ordner-URLs | 61 Seitenaufrufe, 38 Assets, **0 Fehler**, kein Pfad verlässt den Unterordner |
| Konsole und Netzwerk bei 60 Ganzseiten-Aufnahmen (alle Entwürfe, 4 Schlüsselseiten, 375/768/1440 px, DE/EN/TR) | **0 Fehler, 0 Warnungen, 0 Antworten ≥ 400** |
| Externe Ressourcen (Fonts, CDNs, Tracker, Karten) | **keine**; Schriften liegen lokal, Kartenlinks öffnen OSM/Google erst auf Klick in neuem Fenster |

### 3.2 Termin-Links (Doctolib)

316 Links auf 58 Seiten, alle exakt `https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/`, alle mit `target="_blank" rel="noopener noreferrer"` und Hinweis auf die Weiterleitung. Kein Anfrageformular.

### 3.3 Sprachmenü (Demo)

| Prüfung | Chrome | WebKit |
|---|---|---|
| Umschalten DE → EN → TR, `<html lang>` wechselt mit | ✓ | ✓ |
| Wahl bleibt beim Seitenwechsel erhalten (localStorage) | ✓ | ✓ |
| auch über `file://` ohne Server | ✓ | ✓ |
| Hinweis „nur auf Deutsch verfügbar“ auf nicht übersetzten Seiten (in der gewählten Sprache) | ✓ | ✓ |
| Startseite, Termin & Kontakt, Akupunktur vollständig übersetzt (keine fehlenden TR-Schlüssel) | ✓ | – |

`tools/pruefe-uebersetzungen.py`: 314 benötigte Schlüssel, EN und TR je 327, **0 Probleme** (fehlende Schlüssel, abweichende Tags). 11 Schlüssel werden derzeit nicht verwendet (Reserve, z. B. `allg.tag.6`).

### 3.4 Tastatur, Fokus, Bewegung

| Prüfung | E1 | E2 | E3 |
|---|---|---|---|
| Sprunglink „Zum Inhalt springen“ erscheint bei Fokus | ✓ | ✓ | ✓ |
| Mobilmenü: öffnet per Enter, Fokus bleibt bei 40× Tab im Menü, Escape schließt, Fokus kehrt zum Knopf zurück | ✓ (nach Korrektur) | ✓ | ✓ |
| Desktop-Untermenüs per Tastatur (Enter, Tab hinein, Escape, Fokus zurück) | ✓ Leistungen, Sprache | ✓ Mega-Menü (nach Korrektur) | – (Register ist fest sichtbar) |
| Sichtbarer Fokus auf allen geprüften Tab-Stopps | ✓ ¹ | ✓ ¹ | ✓ |
| `prefers-reduced-motion`: kein Text bleibt unsichtbar, keine Bewegung | ✓ | ✓ | ✓ |
| Ohne JavaScript: alle Inhalte sichtbar, Navigation nutzbar | ✓ | ✓ | ✓ |

¹ Bei Kartenlinks liegt der Fokusrahmen auf der ganzen Karte (`:focus-within`), nicht auf dem Link selbst. Das automatische Skript meldet das als „ohne Fokus“. Per Screenshot geprüft: Der Rahmen ist deutlich sichtbar (E1 3 px Marineblau, E2 2 px Tinte).

### 3.5 Kontrast und automatische Barrierefreiheitsprüfung

- **axe, alle 58 Seiten, 375 und 1440 px:** 0 Verstöße gegen WCAG 2.0–2.2 A/AA, Kontrast und Zielgrößen (2.5.8) eingeschlossen.
- **Experimentelle Regel `p-as-heading`:** 2 Meldungen in E2 (groß gesetzte Telefonnummer) und 11 in E3 (10× groß gesetzter Name der Ärztin im Block „Ihre Praxis“, 1× Telefonnummer). Das sind keine Überschriften, die Meldungen sind Fehltreffer der Heuristik.
- **Lighthouse Barrierefreiheit:** 100 auf allen 24 Messungen.

### 3.6 Darstellung und Überlauf

- **Kein horizontales Scrollen** bei 320, 375, 768, 900, 1024, 1152, 1280, 1366 und 1440 px, auf allen 58 Seiten und in allen Entwürfen. Gemessen wurde die Dokumentbreite; als Verursacher zählen nur Elemente, die kein Vorfahr abschneidet.
- **Überlappungen in Rasterzellen** (375–1440 px): nur noch ein Rest in E1, Unsere Praxis, bei 1024 px. Dort ragt eine Platzhalter-Pille 4 px über ihre Zelle, optisch nicht wahrnehmbar.
- **Gleiches Layout mit und ohne Webschrift:** Die Startseite von E1 ist mit und ohne Webschrift bei 375 bis 1440 px zeilengleich (siehe 4.1).
- **WebKit:** Bei 375 und 1440 px über HTTP und `file://` gibt es auf den fünf Hauptseiten jedes Entwurfs keinen Überlauf und keine Konsolenfehler.

### 3.7 Lighthouse

Server (b) mit gzip im Unterpfad, also wie bei GitHub Pages. Werte: Performance / LCP / CLS.

| Entwurf | Seite | Mobil: Perf. / LCP / CLS | Desktop: Perf. / LCP / CLS | Barrierefr. (mobil / Desktop) | Best Practices | SEO |
|---|---|---|---|---|---|---|
| E1 | Startseite | 97 / 2,6 s / 0 | 100 / 0,5 s / 0 | 100 / 100 | 100 | 63 |
| E1 | Leistungen-Einstieg | 98 / 2,3 s / 0 | 100 / 0,5 s / 0 | 100 / 100 | 100 | 63 |
| E1 | Akupunktur (LP) | 100 / 1,8 s / 0 | 100 / 0,4 s / 0 | 100 / 100 | 100 | 63 |
| E1 | Termin & Kontakt | 100 / 1,9 s / 0 | 100 / 0,4 s / 0 | 100 / 100 | 100 | 63 |
| E2 | Startseite | 97 / 2,3 s / 0 | 100 / 0,5 s / 0,009 | 100 / 100 | 100 | 63 |
| E2 | Leistungen-Einstieg | 99 / 1,9 s / 0 | 100 / 0,4 s / 0,01 | 100 / 100 | 100 | 63 |
| E2 | Akupunktur (LP) | 99 / 1,8 s / 0,006 | 100 / 0,4 s / 0 | 100 / 100 | 100 | 63 |
| E2 | Termin & Kontakt | 99 / 1,8 s / 0,009 | 100 / 0,4 s / 0 | 100 / 100 | 100 | 63 |
| E3 | Startseite | 99 / 1,8 s / 0 | 100 / 0,4 s / 0,025 | 100 / 100 | 100 | 63 |
| E3 | Leistungen-Einstieg | 100 / 1,7 s / 0,001 | 100 / 0,4 s / 0,002 | 100 / 100 | 100 | 63 |
| E3 | Akupunktur (LP) | 100 / 1,7 s / 0 | 100 / 0,4 s / 0 | 100 / 100 | 100 | 63 |
| E3 | Termin & Kontakt | 100 / 1,7 s / 0 | 100 / 0,4 s / 0,004 | 100 / 100 | 100 | 63 |

- **SEO 63:** Als einziger SEO-Audit schlägt `is-crawlable` fehl, wegen des gewollten `noindex, nofollow`. Ohne `noindex` liegt der Wert rechnerisch bei 100.
- **Ohne gzip** (`python3 -m http.server`), Startseiten mobil: E1 90 (LCP 3,5 s), E2 94 (LCP 2,8 s), E3 97 (LCP 2,4 s). Der Unterschied kommt vor allem von der Startseite von E1. Sie enthält die Emblem-Linienzeichnung inline (30 KB), weil die Strich-Animation das braucht, und hat ein größeres Stylesheet (67 KB unkomprimiert).
- **Messbedingungen:** Gemessen wurde lokal mit simulierter Drosselung. Auf GitHub Pages und echten Geräten weichen die Werte ab.

### 3.8 Metadaten, JSON-LD, Breadcrumbs, FAQ

- **Kopfdaten:** Alle 58 Seiten haben `<meta name="robots" content="noindex, nofollow">`, eine eigene Title (≤ 60 Zeichen) und eine eigene Description (≤ 155 Zeichen), `lang="de"`, Open-Graph-Angaben, Favicons und genau eine `h1`.
- **JSON-LD:** alle Blöcke parsebar.
  - Physician: auf 58 Seiten, vollständig mit Adresse, Geo-Koordinaten und Öffnungszeiten auf Startseite und Termin & Kontakt.
  - MedicalWebPage: 58.
  - BreadcrumbList: 55; es fehlt nur auf den drei Startseiten.
  - FAQPage: 41.
- **FAQ-Schema:** Auf jeder Seite mit FAQPage stimmen Anzahl und Wortlaut der Fragen mit den sichtbaren `<details>`-Fragen überein. Das zusätzliche `<details>` in E2 ist das mobile Leistungsmenü, keine FAQ.
- **Breadcrumbs:** Die Namen im JSON-LD stimmen mit den sichtbaren Brotkrumen überein. Ausnahme ist E3, dort stehen sichtbar die Registernummern davor („03 Naturheilkunde“, „03.1 Akupunktur“). Das ist gewollt, Teil des Registerkonzepts; im JSON-LD stehen die Namen ohne Nummern.
- **Grenze der Prüfung:** Die Daten sind strukturell geprüft (Parsen, Typen, Pflichtfelder, Abgleich mit dem Sichtbaren). Der Rich-Results-Test von Google und der Schema.org-Validator wurden nicht benutzt, weil sie eine öffentlich erreichbare Seite oder das Hochladen des Quelltexts verlangen. Das gehört zum Livegang.

### 3.9 Texte gegen Abschnitt 7 und 8 des Auftrags

Maschinell durchsucht wurden der sichtbare Text aller 58 Seiten, alle Inhaltsdateien (`shared/inhalte/de/*.md`, `entwurf-*/inhalte/*.md`) und die Übersetzungen EN/TR. Die Muster:

| Muster | Treffer | Bewertung |
|---|---|---|
| „Heilpraktiker…“ | 0 | – |
| heilen/heilt/Heilung, cure/heal, şifa/iyileştir | 2 | beide in Hinweisen „… ist kein Heilversprechen“ (EN) – zulässig |
| garantiert/guarantee | 0 | – |
| Entgiftung/Entschlackung/detox/toksin | 0 | (ein Fehltreffer im Muster: türk. „ağrılarında“) |
| Alternativmedizin | 0 | – |
| „Dr.“ vor dem Namen | 0 | Name überall „Nalan Bagci-Kaikis“ (OF-02) |
| Superlative (beste, führend, einzigartig, optimal …) | 0 werbliche | 17× „am besten“ als Rat („am besten telefonisch“) – zulässig |
| Esoterik (Energiefluss, Meridian, Qi, Chakra, Selbstheilungskräfte …) | 0 | – |
| „nebenwirkungsfrei“, „wirkt immer“ | 0 | – |
| Gelbfieber | nur neutral | Hinweis, dass nur zugelassene Stellen impfen dürfen, plus Platzhalter zur Bestätigung (OF-07); keine Behauptung, die Praxis sei Impfstelle |
| Lehrpraxis | nur Platzhalter/Vergangenheit | „Lehrpraxen der Charité“ (Werdegang) und Platzhalter (OF-01) |
| private GMX-Adresse | 0 | – |

Zusätzlich gelesen wurden die Einstiege aller drei Startseiten. Die Reihenfolge der Rollen ist überall Fachärztin für Allgemeinmedizin → Lehrärztin bzw. Lehre und Forschung → Naturheilverfahren als ärztliche Ergänzung. Naturheilkunde-Seiten nennen Grenzen und Kosten und verweisen auf die ärztliche Diagnose. Zahlen, Bewertungen, Zertifikate und Preise sind nicht erfunden; fehlende Angaben stehen als sichtbare Platzhalter da (35 Zeilen, Register in `docs/offene-fragen.md`).

**Nicht ersetzt** wird die fachliche und rechtliche Durchsicht durch die Ärztin, insbesondere nach dem Heilmittelwerbegesetz (HWG), sowie die Durchsicht der EN/TR-Texte durch Muttersprachler (Abschnitt 5).

### 3.10 Vollständigkeit und Verschiedenheit

- **Entwurf 1 enthält jede inhaltlich richtige alte Seite.** Alle 78 Ziele der Zuordnung alt → neu (`docs/sitemap.md` §5, drei Entwürfe, Anker eingeschlossen) existieren. Keine der 111 Vorlagenseiten wurde übernommen (Liste in `docs/sitemap.md` §6).
- **Die drei Entwürfe unterscheiden sich sichtbar und strukturell:**

| | E1 Fundament | E2 Verwandt | E3 Eigenständig |
|---|---|---|---|
| Seiten | 23 (jede alte Leistung einzeln) | 18 (Hausärztliches gebündelt, drei kleine Verfahren auf der Naturheilkunde-Seite) | 17 (Hub „Anliegen“ statt Leistungsliste, Kernset von 8 Landing Pages) |
| Navigation | Kopfleiste mit Untermenü, Overlay mobil | Serviceleiste, Mega-Menü, Overlay mobil | feste Register-Spalte, mobil als Bogen von unten |
| Schrift | Fraunces + Figtree | Instrument Sans + Source Serif 4 | Archivo allein (Breitenachse) |
| Farbe | Marine/Türkis/Creme | Marine/Türkis/Creme | Marine/Türkis/Creme |
| Bewegung | Zeichnen, Schweben, Laufband | Masken-, Clip- und Haarlinien-Reveals, Fortschritt | Seitenübergänge (View Transitions), Lesemarke |

- **Gemessen:** E1–E2 teilen 17 % ihrer CSS-Klassen, E1–E3 13 %, E2–E3 22 %. Gemeinsam sind fast nur Hilfsklassen wie `sr-only`, `huelle` oder `platzhalter`. Bei den Farben überschneiden sich E1–E2 bei 9 % (Logo-Türkis, Weiß), E1–E3 und E2–E3 bei je 5 % (nur Weiß).

### 3.11 GitHub Pages und `file://`

- **Unterpfad:** Unter `/nalan-bagci-kaikis/entwurf-…/` (Server b) laufen alle Seiten, Assets, Schriften, Übersetzungen und Sprachwechsel. Diese Bedingung lag auch allen Lighthouse-Messungen und Screenshots zugrunde.
- **`python3 -m http.server` im Repo-Root** (Aufruf `/entwurf-1-fundament/` usw.): fehlerfrei.
- **`file://`:** In Chrome und WebKit laden alle drei Entwürfe ohne Konsolenfehler. Sprachwechsel und gespeicherte Sprachwahl funktionieren. Die Webschriften werden dort bewusst nicht vorgeladen, weil WebKit Font-Preloads über `file://` mit Fehler abbricht. Sie laden normal über das CSS.
- **`.nojekyll`** ist vorhanden, alle Pfade sind relativ, alle Dateinamen klein geschrieben.

### 3.12 Screenshots

Ganzseiten-Aufnahmen von Startseite, Leistungen-Einstieg, Akupunktur und Termin & Kontakt, als Kontaktbögen in `docs/qa/`. Die Bögen zeigen jeweils den oberen Teil jeder Seite, bis 2600 px Bogenhöhe.

| Datei | Inhalt |
|---|---|
| `entwurf-N-de-1440.webp`, `-768`, `-375` | Deutsch, vier Seiten nebeneinander |
| `entwurf-N-en-tr-375.webp` | Startseite, Akupunktur, Termin & Kontakt – erst Englisch, dann Türkisch |
| `entwurf-N-en-tr-1440.webp` | dieselben drei Seiten auf Englisch, dazu die Startseite auf Türkisch |

Das kleine Schild „Entwurf von vivenna“ steht fest am unteren Rand und erscheint deshalb in Ganzseiten-Aufnahmen mitten auf der Seite.

## 4. In Phase 5 gefundene und behobene Fehler

| # | Entwurf | Fehler | Ursache | Behebung |
|---|---|---|---|---|
| 1 | E1 | Startseite verschob sich beim Laden (CLS 0,21 am Desktop, Lighthouse Performance 87 mobil / 89 Desktop) | Ersatzschrift Georgia läuft ~15 % breiter als Fraunces, der Einstiegstitel brach anders um | Ersatzschriften mit `size-adjust` („Fraunces Ersatz“, „Figtree Ersatz“), Vorladen der zwei Hauptschriften (nur über http/https), Platz für die Status-Pille reserviert, zweiter Reiter schon per CSS ausgeblendet → CLS 0, Performance 97/100 |
| 2 | E1 | Einstiegstitel „als Ganzes sehen.“ brach bei 1024 px immer, bei 1440 px je nach Schriftdarstellung um (604 von 605 px) | Titelgröße aus dem Startseiten-Entwurf ohne Reserve | max. 6,3 rem statt 6,6 rem, im zweispaltigen Bereich `clamp(4.5rem, 7.2vw, 6.3rem)` (dokumentiert in `design-entscheidungen.md`) |
| 3 | E1 | Font-Preload lud ins Leere (404) – bei der Arbeit an Nr. 1 entstanden | fehlender Schrägstrich im Pfad | Pfad korrigiert, per Lighthouse/Konsole bestätigt |
| 4 | E1 | Mobilmenü: Tab sprang aus dem geöffneten Menü in verdeckte Seiteninhalte | Fokusfalle prüfte nur erstes/letztes Element; der Menüknopf steht im Quelltext hinter der Navigation | Falle führt die Tab-Reihenfolge jetzt selbst |
| 5 | E2 | Mega-Menü „Leistungen“ per Tab nicht erreichbar (Panel schloss sich beim Weiter-Tabben) | Panel steht im Quelltext hinter dem Kopf | Tab führt vom offenen Knopf ins Panel, nach dem letzten Link zum nächsten Hauptpunkt; Shift+Tab zurück |
| 6 | E3 | Listen mit Fettdruck/Links zerfielen: ein Buchstabe pro Zeile, bis 1650 px hoch (Anliegen: Untersuchungen, Impfungen, Termin & Kontakt: Notfälle) | Listenpunkt als zweispaltiges Raster; Text neben `<strong>` landete als anonymes Element in der 1,6-rem-Strichspalte | Strich absolut positioniert, Listenpunkt einspaltig |
| 7 | E3 | Nummern „02.1“ … „02.5“ brachen in „02.“ / „1“ um | feste Spaltenbreite | Spalte `minmax(…, max-content)`, `nowrap` |
| 8 | E3 | Startseite bei 1024 px: Termin-Knopf ragte 21 px aus dem Bild, Telefonnummer in die Nachbarspalte | drei Spalten neben der festen Register-Spalte | drei Spalten erst ab 80em, darunter zwei |
| 9 | E2 | Unsere Praxis bei 1024 px: 117 px horizontaler Überlauf, Faktenliste mit Worttrennung mitten im Wort | Bildplatzhalter mit Seitenverhältnis wurde breiter als die Spalte; Liste zweispaltig nach Fensterbreite | Platzhalter `min-width: 0`; Liste schaltet per Container-Abfrage nach eigener Breite |
| 10 | alle | „Label in Name“ (WCAG 2.5.3): E1 Sprachknopf („DE“ hieß „Sprache wählen“), E2 Sprachknöpfe („TR“ hieß „Türkçe“), E3 Register-Knopf („Register“ hieß „Menü öffnen“) | `aria-label` ohne den sichtbaren Text | sichtbarer Text + ergänzender Screenreader-Text, `aria-label` entfernt |
| 11 | alle | Silbentrennung wie „Ber-lin“, „Ter-mine“ auf schmalen Bildschirmen | `hyphens: auto` ohne Mindestlängen | `hyphenate-limit-chars: 10 4 4` (WebKit: `-webkit-hyphenate-limit-before/after`) |
| 12 | E3 | Kontrast der Messing-Nummern unter 4,5 : 1 (axe) | Messing `#A8823F` zu hell | `#9A7637`, im Fuß Messing-Hell (dokumentiert in `design-entscheidungen.md`) |
| 13 | alle | Überlauf bei 320/375 px (lange Wörter in Rastern, Seitentitel) | Rasterkinder mit `min-width: auto` | `min-width: 0`, `overflow-wrap`, Silbentrennung in Seitentiteln |

## 5. Offen – vor dem Livegang zu erledigen oder zu entscheiden

### Technische Prüfungen, die hier nicht möglich waren

- **Firefox nicht getestet.** Headless-Firefox startet in der Prüfumgebung nicht. Vor dem Livegang einmal von Hand prüfen, vor allem Sprachmenü, Container-Abfragen (Firefox ≥ 110) und die Seitenübergänge in E3 (View Transitions; wo der Browser sie nicht kann, wechselt die Seite ohne Übergang).
- **Echte Geräte nicht getestet.** Geprüft wurden nur Chrome und die WebKit-Engine über Playwright. iOS Safari (Notch, `100svh`, Bogen von unten in E3) und Android Chrome sollten von Hand geprüft werden.
- **Screenreader nicht von Hand getestet** (VoiceOver, NVDA). Abgedeckt sind nur automatische Prüfungen sowie DOM- und Tastaturtests.
- **Rich-Results-Test von Google und Schema.org-Validator** erst mit öffentlicher URL möglich.
- **Lighthouse-Werte** sind lokal und simuliert. Nach dem Livegang mit echten Felddaten (CrUX/PageSpeed Insights) neu bewerten.

### Bewusste Entwurfszustände (keine Fehler, aber vor Livegang ändern)

- **`noindex, nofollow`** auf allen Seiten, daher SEO 63. Zum Livegang entfernen, dazu `canonical`, `hreflang`, `og:url`, `sitemap.xml` und `robots.txt` ergänzen (siehe `README.md`).
- **Schild „Entwurf von vivenna“:** Es steht fest unten links (E3: unten rechts) und kann auf schmalen Bildschirmen beim Scrollen Inhalte kurz überdecken. Es ist nur für die Entwürfe gedacht und entfällt live.
- **Sichtbare Platzhalter** (35 Zeilen) bleiben stehen, bis die Praxis die Angaben liefert (`docs/offene-fragen.md`).
- **EN/TR:** Nur eine Demo. Es gibt drei voll übersetzte Seiten plus die Oberfläche; die Übersetzungen sind nicht muttersprachlich geprüft. Für den Livegang sind eigene URLs (`/en/`, `/tr/`) mit `hreflang` statt der Umschaltung per Skript vorgesehen.
- **Ärztliche und rechtliche Durchsicht** aller Texte (HWG, Berufsordnung) steht aus, ebenso die offenen Fragen OF-01 (Lehrärztin), OF-02 (Name/Titel), OF-04 (Sprechzeiten), OF-07 (Gelbfieber) und OF-21 (Kosten).

### Kleinere bekannte Punkte

- **E1 Startseite ohne gzip:** mobil 90 statt 97, wegen der inline eingebetteten Emblem-Linienzeichnung (30 KB). GitHub Pages komprimiert, für einen anderen Host gzip/brotli aktivieren.
- **E1 Unsere Praxis bei 1024 px:** Eine Platzhalter-Pille ragt 4 px über ihre Rasterzelle. Nicht sichtbar, entfällt mit dem echten Text.
- **E3 Brotkrumen:** Sie lesen die Registernummern mit vor („03.1 Akupunktur“). Das ist gewollt, sollte aber bei der Screenreader-Prüfung bewertet werden.
- **Silbentrennung in Safari:** `hyphenate-limit-chars` greift nur in Chromium. Safari erhält die gleichwertigen `-webkit-`-Eigenschaften, Firefox trennt ohne Mindestlängen.
