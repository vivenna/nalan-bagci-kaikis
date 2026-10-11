# Vorarbeit: Auswertung des Entwurfsordners (Phase 0)

Stand: 11.10.2026 · Grundlage: `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf` (im Folgenden **ENTWURF**, nur gelesen, nichts verändert) · Auftrag: `master-prompt.md`, Abschnitt 11, Phase 0

Kennzeichnung: **Fakt** (mit Quelle), **Vermutung**, **Annahme**. Pfade ohne Präfix beziehen sich auf ENTWURF. Zeilenangaben:

- `index.html` = `redesign/site/index.html`. Die Datei ist zeilengleich mit `redesign/quellen/index.vorlage.html`; nur Zeile 115 enthält statt `<!--EMBLEM-->` das eingesetzte Emblem-SVG (geprüft: Vorlage + `quellen/emblem-linien.svg` ergibt byte-gleich `site/index.html`).
- `style.css` = `redesign/site/assets/css/style.css` (474 Zeilen, vollständig gelesen).
- `main.js` = `redesign/site/assets/js/main.js` (222 Zeilen, vollständig gelesen).

---

## 0. Begriffe, Messgrundlage, Kurzfazit

### Begriffe (Verwechslungsgefahr)

- Im ENTWURF heißt der vorhandene Startseiten-Entwurf **„Entwurf 2“** (`redesign/`, Titelzeile von `style.css` und `main.js`). Ein früherer „Entwurf 1 (schlicht)“ existiert nur in der Git-Historie des ENTWURF-Repos (Commit `2e56b99`, laut `redesign/README.md:146`) und spielt keine Rolle.
- In diesem Repo ist genau dieser vivenna-„Entwurf 2“ die Basis für **unseren Entwurf 1** (`entwurf-1-fundament/`). In diesem Dokument heißt er **„Startseiten-Entwurf“**.

### Messgrundlage dieser Auswertung (11.10.2026)

- Alle in Abschnitt 1 genannten Dateien gelesen. Screenshots aus `redesign/screenshots/` angesehen (Laptop, Tablet, Mobil, Menü offen).
- Technische Prüfung an einer **Kopie** von `redesign/site/` im Scratchpad. Der ENTWURF-Ordner blieb unberührt. Werkzeuge:
  - Playwright 1.63 mit Chromium und WebKit. Firefox ließ sich in der Sandbox nicht starten (Profilfehler) → in Phase 5 nachholen.
  - Lighthouse 13.5.0, je 1 Lauf mobil und Desktop, lokaler Server, Unterpfad `/site/` wie bei GitHub Pages.
  - fontTools 4.66 für die Glyphentabellen (cmap).
  - Eigene Kontrastrechnung nach WCAG 2.x, inklusive Alpha-Überlagerung.
- **Fakt (Dateizeiten):** HTML und CSS des Entwurfs wurden zuletzt am 01.10.2026 um 18:10 bzw. 18:08 geändert, `main.js` um 17:02. Die Screenshots in `redesign/screenshots/` (17:11–17:12) und die Lighthouse-Berichte (17:09) sind **älter als der Endstand**. Sichtbar ist das z. B. an der Menüreihenfolge (Screenshot: „Ihre Ärztin“ an 2. Stelle, HTML: an 4. Stelle) und am fehlenden „Termin buchen“-Knopf im mobilen Menü. Die Videos in `redesign/vorschau/` (18:18 und 18:27) zeigen den Endstand. Die eigene Nachmessung steht in Abschnitt 6.6.

### Kurzfazit

1. Die Analyse der alten Website ist gründlich und mit Belegen versehen: Technik, SEO, Recht, Inhalte, Wettbewerb und NAP-Widersprüche. Phase 1 kann darauf aufsetzen und muss vor allem Seitenliste und Texte vervollständigen.
2. Der Startseiten-Entwurf ist technisch stark: mobil 94/100/100, 344 KB, 11 Anfragen, keine Drittanbieter. Er ist sauber in Custom Properties organisiert und hat eine klare Formen- und Bewegungssprache aus Bogenfenster, Emblem-Linien, Türkis-Akzentstrich und Fraunces-Kursive.
3. Für Entwurf 1 muss Folgendes behoben werden:
   - In allen drei Schriftdateien **fehlen ğ, ş, İ, Ğ und Ş**.
   - Die Schrift-Preloads lassen unter `file://` in WebKit die Hauptschriften ausfallen.
   - Ohne JavaScript sind der Naturheilkunde-Reiter und das mobile Menü unsichtbar.
   - Fällt nur `main.js` aus, bleiben 36 Elemente unsichtbar.
   - Die schwebende Aktionsleiste widerspricht Abschnitt 2.3.
   - Termin-CTA ist ein Platzhalter mit Anfrage-Ablauf.
   - Es fehlt ein Sprachmenü.
4. Zur Rollenhierarchie:
   - Der Hero nennt die Fachärztin erst im Untertext, nach „Naturheilkunde“.
   - Lehrärztin bzw. Lehrpraxis kommt gar nicht vor und ist im ENTWURF auch **nicht belegt**: Belegt ist nur die frühere Tätigkeit in Lehrpraxen der Charité und die Lehre am Institut für Allgemeinmedizin der Charité.
   - Title (86 Zeichen) und Description (210 Zeichen) sind zu lang.
5. Weitere Mängel:
   - Zwei Kontrastfehler: die Verfahren-Nummern mit 2,45:1 und im ungünstigsten Fall der Nebentext auf den Schwebe-Karten mit 4,19:1.
   - Die Zeitleiste bleibt bei reduzierter Bewegung leer.
   - Touch-Ziele unter 44 px im Fuß und bei den Notrufnummern.
   - Es gibt totes Markup und toten Code (Details in Abschnitt 6).

---

## 1. Vorhandene Analyse

### 1.1 Dokumente und Kernaussagen

| Dokument | Kernaussagen (1–3) | Darauf bauen wir auf |
|---|---|---|
| `SUMMARY.md` | (1) Die Anfrage ist echt: Das KBV-Register bestätigt Ärztin, Praxis, Adresse, Telefon und E-Mail. (2) Die alte Website hat gute Inhalte, steht aber auf einem veralteten Kauf-Theme (Holamed, Unyson, WPBakery), braucht mobil 11,6 s bis zum LCP, und 94 von 119 Sitemap-URLs sind Theme-Demo-Seiten. (3) Empfehlung: Relaunch als statische Website; behalten werden Domain, Texte (überarbeitet), Porträt, Logo-Idee, Türkis und „eine Seite pro Leistung“. | Faktenrahmen, Problemliste nach Schwere, Vorher-Werte |
| `CHECKLISTE.md` | Die Phasen A–E sind erledigt. Offen sind nur das Feedback zum Prototyp (NEEDS-HUMAN Nr. 5) und das Kundengespräch. | **Es gibt kein dokumentiertes Feedback** von Auftraggeber oder Ärztin zum Startseiten-Entwurf |
| `01-praxis/praxis-recherche.md` (+ `belege/kbv-umkreis-…txt`) | (1) Steckbrief: Einzelpraxis; Fachärztin für Allgemeinmedizin (KBV); Zusatzbezeichnungen Akupunktur, Homöopathie, Naturheilverfahren nur laut arzt-auskunft (nicht bei der Kammer geprüft); eigene Praxis seit 10/2019, in der Schloßstraße 21 seit 04/2021; Sprachen Englisch und Türkisch nur laut Verzeichnis. (2) NAP ist uneinheitlich: 5 Schreibweisen des Namens, 030 3255050 je nach Quelle Telefon oder Fax, 3 verschiedene Sprechzeiten-Versionen. (3) Die „Praxis **am** Schloss“ (Klausenerplatz 2) ist fast namensgleich. Kein Wettbewerber nutzt `Physician`-Schema. Ein Doctolib-Profil wurde am 01.10. nicht gefunden. | Belegte Faktenbasis; Widersprüche → `docs/offene-fragen.md`. Die Doctolib-URL stammt jetzt vom Auftraggeber (`master-prompt.md` §1) und ist neuer als die Recherche |
| `02-website/inhalt-struktur.md` | (1) 25 echte Seiten: Startseite, Hauptseiten, 2 Kategorieseiten, 16 Leistungsseiten, Impressum, Datenschutz. Dazu 94 Demo-URLs (Liste in §6). (2) Sichtbare Fehler: verstümmelte Überschrift „Wir betrachten den sondern deren Ursachen.“, türkisches İ in Versalien („VORSORGELEİSTUNGEN“), auf „Orthomolekulare Medizin“ steht Mesotherapie-Text, die Phytotherapie-Seite enthält einen Fremdtext der TK. (3) Es fehlen Team, Sprachen, Barrierefreiheit, Rezeptbestellung und ein Termin-Hinweis auf den Leistungsseiten. | Grundlage für Phase 1: Seitenliste und ausgeschlossene Vorlagenseiten. Die Zählung „25“ in Phase 1 nachprüfen: Die Seiten-Sitemap enthält `/leistungsspektrum/` zusätzlich zur Kategorie `/services-category/leistungsspektrum/` |
| `02-website/technik.md` | (1) WordPress 6.7.1, Holamed 1.8.2, Unyson 2.7.25 (geschlossen, CVE-2023-44472 ohne Fix), WPBakery 6.10; Hosting bei Alfahosting in Deutschland, keine Sicherheits-Header. (2) Lighthouse alt, mobil: 62/86/92/92, LCP 11,64 s, 3.939 KB. (3) Barrierefreiheit: kein Sprunglink, Fokus nur an 3 von 20 Stellen erkennbar, keine H1, Uhrzeiten als „°°“. | Vorher-Werte für `qa-bericht.md`; Negativliste der Barrierefreiheit |
| `02-website/seo-lokal.md` | (1) Keine Descriptions, keine H1 auf der Startseite, keine JSON-LD-Daten, kein Open Graph. (2) Empfohlenes Title-Muster „Hausärztin in Berlin-Charlottenburg · Naturheilkunde & Akupunktur \| Praxis zum Schloss“; vorgeschlagene Schema-Felder: geo, Öffnungszeiten, Fachgebiet, Sprachen, `isAcceptingNewPatients`, `sameAs`. (3) Deutsche URLs nach dem Muster `/leistungen/akupunktur/`; Abgrenzung zur „Praxis am Schloss“ über Name und Adresse. | Meta- und Schema-Konzept. **Achtung:** Das Title-Muster hat 86 Zeichen und stellt die Naturheilkunde vor die Fachärztin → für master-prompt §2 und §5 anpassen |
| `02-website/recht-datenschutz.md` | (1) Das Impressum ist unvollständig: Kammer, Berufsbezeichnung, Berufsrecht und KV fehlen; dazu TMG statt DDG, ein toter OS-Link und eine veröffentlichte Steuernummer. (2) Die Datenschutzerklärung ist ein Generatortext mit falschem Hoster und Diensten, die gar nicht genutzt werden; reCAPTCHA lädt ohne Einwilligung. (3) Die HWG-auffälligen Formulierungen sind wörtlich aufgelistet (§5.2). Vorschlag für die Qualifikation: „Fachärztin für Allgemeinmedizin, Zusatzbezeichnungen Akupunktur und Naturheilverfahren · reisemedizinische Beratung“. | Impressum und Datenschutz als markierte Entwürfe mit den Daten der alten Seite; HWG-Negativliste für alle Texte |
| `02-website/lighthouse-berichte/zusammenfassung.md` | Alte Startseite mobil: 62, LCP 11,64 s, 3.939 KB, 70 Anfragen. Desktop: 90, CLS 0,18. Unterseiten mobil: 63–68. | Vorher-Werte |
| `02-website/rohdaten/` (gesichtet, Inhalt folgt in Phase 1) | Enthält das HTML aller echten Seiten, 12 Teil-Sitemaps, 11 Demo-Stichproben, `leistungen/_texte-bereinigt.txt`, Verzeichnisprofile, Browser-Audit und Lighthouse-JSON. Abruf: 01.10.2026, 04:52 UTC. | Primärquelle für Phase 1 |
| `02-website/screenshots/` | Die alte Website in 360, 768, 1366 und 1920 px sowie Demo-Seiten (u. a. „homepage-plastic“). | Vorher-Bilder |
| `03-empfehlung/erhalten-optimieren-neu.md` | (1) Relaunch statt Optimierung, weil das Fundament ein Auslaufmodell ist. (2) **Behalten:** flache Navigation und eine Seite je Leistung. **Neu:** Trennung „Hausärztliche Versorgung“ / „Naturheilkunde & Akupunktur“; Sprechzeiten, Anfahrt und Telefon prominent; Sprachen; Barrierefreiheit. (3) Terminbuchung per Link oder Button, der vor dem Klick nichts lädt. | Bestätigt den Leistungs-Hub mit zwei Gruppen und Unterseiten sowie Doctolib als reinen Link |
| `intern/README.md` | Der Ordner ist vertraulich, hat ein eigenes Git ohne Remote und enthält die Original-Anfrage mit privater Absenderadresse. | Wurde nur inhaltlich ausgewertet; keine Absenderdaten übernommen |
| `intern/input/anfrage.md` (inhaltlich) | Wünsche der Ärztin: modern, hochwertig, seriös; patientenfreundlich; gut auf allen Geräten; schnell; lokal auffindbar; Schwerpunkte professionell dargestellt; Online-Terminbuchung; datenschutzkonform. | Deckt sich mit master-prompt §2 |
| `intern/00-plausibilitaet/plausibilitaet.md` | (1) Identität über das KBV-Register belegt, Konfidenz hoch. (2) „Dr.“ steht weder im Register noch im Impressum, deshalb ist der Prototyp bewusst ohne Titel. (3) Doctolib wurde damals nicht gefunden (HTTP 410, Bot-Schutz möglich). | Namensführung „Nalan Bagci-Kaikis“ ohne „Dr.“, bis die Frage geklärt ist |
| `intern/FRAGEN.md` | 30 Fragen an die Ärztin. Für uns relevant: Nr. 9 (Porträtrechte), 11 (aktuelles Leistungsangebot), 12 (Freigabe nach HWG), 13 (Name/Titel), 14 (Zusatzbezeichnungen), 15 (Sprechzeiten), 16 (Fax?), 17 (Praxisname), 20 (Mehrsprachigkeit), 27 (Barrierefreiheit, ÖPNV), 28 (Logo als Vektor). | Vorlage für `docs/offene-fragen.md` |
| `intern/NEEDS-HUMAN.md` | Nr. 5 fragt Feedback zum Entwurf ab: Wirkung, Tempo, Nutzung des Porträts, Leitsatz „Den Menschen als Ganzes sehen“ und Live-Status trotz widersprüchlicher Sprechzeiten. Alles ist unbeantwortet. | Diese Fragen in `docs/offene-fragen.md` übernehmen |
| `intern/entwurf-antwort-mail.md` | Antwortentwurf mit Vorschlag für ein Telefonat. | Kein Inhalt für die Website |
| `redesign/README.md` | (1) Leitidee: Das Bogenfenster aus dem Schloss-Emblem wird zur Bühne; das Emblem zeichnet sich, die Ärztin tritt ins Fenster. (2) Farben „exakt aus Logo und bisheriger Website“; die Herkunftstabelle der Inhalte steht in §„Herkunft der Inhalte“. (3) Messwerte und Anleitung für GitHub Pages. **Veraltet:** Pfad „Neuer Ordner“; Reihenfolge der Abschnitte (README: Ärztin vor Sprechzeiten, HTML: Ärztin am Ende); „Kopfzeile wird zu Glas und blendet sich beim Runterscrollen aus“ (im CSS nicht mehr umgesetzt, siehe Abschnitt 4, Nr. 18). | Die Herkunftstabelle ist der Beleg für die Startseiten-Texte |
| `redesign/lighthouse-berichte/zusammenfassung.md` | Entwurf mobil: 94/100/100/63, LCP 2,93 s, 342 KB, 11 Anfragen. Desktop: 98/100/100/63, CLS 0,082. SEO 63 ergibt sich nur aus `noindex`. | Zielmarke; am 11.10. nachgemessen und bestätigt (6.6) |
| `redesign/quellen/*` | Originaldateien der alten Website: Logo `massage_logo_01.png`, Emblem `icon.png` (2016 px), `cropped-icon*.png`, Porträt `portrait-original.png` (1000×1499, PNG mit Alpha). Dazu `emblem-linien.svg` (mit potrace erzeugt) und `index.vorlage.html` mit `baue-index.py`, das das Emblem inline einsetzt. | Quellen für `shared/assets/`. Der Build-Schritt entfällt, weil wir das fertige HTML kopieren |
| `redesign/vorschau/*.mp4` | Rundgang-Videos: Desktop 8,3 MB, Mobil 6,8 MB. | Nur ansehen; **nicht ins Repo** (master-prompt §9: keine Videos) |
| `werkzeuge/*.mjs`, `*.py`, `*.sh` | Skripte für Browser-Audit, axe (WCAG 2.0–2.2, A und AA, 360 und 1366 px), Prototyp-Prüfung (4 Breiten, Fokus, Fremdanfragen, Touch-Ziele), Lighthouse-Serie mit Median-Auswertung, Bildaufbereitung (sharp: AVIF q58, WebP q78 mit Alpha q90, 480/720/960 px), Emblem-Vektorisierung (potrace, Teilpfade nach Höhe verzögert) und Video-Rundgang. | Methoden für Phase 5 wiederverwenden (gehören nicht zur Lieferung); Parameter der Bild-Pipeline übernehmen |

### 1.2 Bereits belegte Kernfakten (für Phase 1 gegenzuprüfen)

| Angabe | Wert | Quelle | Status |
|---|---|---|---|
| Name | Nalan Bagci-Kaikis (ohne „Dr.“) | KBV 116117, Impressum alte Website (`plausibilitaet.md` Nr. 1, 5) | Fakt; Titel und Schreibweise offen (FRAGEN Nr. 13) |
| Berufsbezeichnung | Fachärztin für Allgemeinmedizin | KBV, arzt-auskunft; Lebenslauf „Erwerb des Facharztes für Allgemeinmedizin“ (`rohdaten/seite-unsere-praxis.html`) | Fakt |
| Zusatzbezeichnungen | Akupunktur, Homöopathie, Naturheilverfahren | arzt-auskunft | Verzeichnisangabe, zu bestätigen |
| Lehre | Lehrpraxen der Charité; wissenschaftliche Mitarbeiterin am Institut für Allgemeinmedizin der Charité, „Vorlesungen und Seminare für die Lehre“ | `rohdaten/seite-unsere-praxis.html` | Fakt (frühere Tätigkeit). **Dass die eigene Praxis eine Lehrpraxis ist, ist im ENTWURF nicht belegt** |
| Praxis | „Praxis zum Schloss“, Schloßstraße 21, 14059 Berlin-Charlottenburg | KBV, Website | Fakt |
| Telefon / E-Mail | 030 3223612 · info@hausarztpraxis-zum-schloss.de | KBV, Website | Fakt; 030 3255050 Telefon oder Fax unklar |
| Seit | eigene Praxis seit Oktober 2019; Schloßstraße 21 seit April 2021 | „Unsere Praxis“, „Kontakt“ | Fakt (Eigenangabe) |
| Sprechzeiten | Mo 9–12 + 15–17, Di/Mi 9–12, Do 9–12 + 15–18, Fr 9–12 | Kontaktseite alte Website | Fakt, aber **widersprüchlich**: arzt-auskunft nennt freitags geschlossen, Jameda „bis 13 Uhr“ |
| Versicherte | gesetzlich, privat, Selbstzahler | arzt-auskunft, Jameda | Verzeichnisangabe |
| Sprachen | Deutsch, Englisch, Türkisch | arzt-auskunft | Verzeichnisangabe, auf der alten Website nicht erwähnt |
| Zugang | „ebenerdig oder Aufzug“ | arzt-auskunft | Verzeichnisangabe, zu bestätigen |
| Leistungen | 5 hausärztliche Bereiche + 11 naturheilkundliche Verfahren (16 Leistungsseiten) | Website, `rohdaten/leistungen/` | Fakt |

---

## 2. Design-Tokens des Startseiten-Entwurfs

### 2.1 Farben

| Token | Wert | Rolle im Entwurf | Herkunft |
|---|---|---|---|
| `--marine` | `#2C3662` | Text und Überschriften (`--text`); dunkle Flächen (Laufband, Termin-Bereich, Aktionskachel, Reiter-Zeiger, Plakette, Sprunglink); Fokusrahmen; Schrift auf Türkis-Knöpfen | Logo „PRAXIS ZUM“. **Fakt:** zweithäufigste deckende Pixelfarbe in `quellen/massage_logo_01.png` (2.227 px) |
| `--logo-tuerkis` | `#00A09B` | Status-Punkt „offen“, Start des Bogen-Verlaufs, Zeitleisten-Verlauf, Avatar-Hintergrund, Hervorhebung „heute“, Strichfarbe von `emblem-linien.svg` | Logo „SCHLOSS“ und Emblem. **Fakt:** häufigste Pixelfarbe im Logo (3.211 px); `icon.png` hat `#00A19B` |
| `--tuerkis` | `#47CCC8` | Fläche des Primärknopfs; Akzentstrich der Überzeile; Link-Unterstreichung; Schwung-Linie; Emblem-Zeichnung (`color`); Akzentwörter im Laufband; Wochenplan-Blöcke; Fokus im Termin-Bereich und im Laufband; `emblem-linien-hell.svg` | Hauptfarbe der alten Website. **Fakt:** 6× in den Roh-HTML-Dateien |
| `--tuerkis-tief` | `#29AEAA` | Verfahren-Nummern; Schatten des Primärknopfs (`rgb(41 174 170 / .9)`) | Zweites Türkis der alten Website (1× im Roh-HTML) |
| `--creme` | `#F6F3ED` | Seitenhintergrund, Kopf, Vollfläche des Menüs, Schrift auf Dunkel, `theme-color` | Flächenfarbe der alten Website (1× im Roh-HTML) |
| `--marine-tief` | `#222A4E` | Ende des Termin-Verlaufs | abgeleitet |
| `--creme-tief` | `#EEE9DF` | `html`-Hintergrund, Fuß, Ende des Leistungen-Verlaufs | abgeleitet |
| `--weiss` | `#FFFFFF` | Hintergrund des Sprechzeiten-Abschnitts | – |
| `--text` | `= #2C3662` | Fließtext | – |
| `--text-weich` | `rgb(44 54 98 / .74)` ≈ `#606786` auf Creme | Nebentext, Einleitungen, Beschriftungen | abgeleitet |
| `--linie` | `rgb(44 54 98 / .12)` | Rahmen, Trennlinien, Wochenplan-Kontur | abgeleitet |
| `--tuerkis-hauch` | `rgb(71 204 200 / .16)` | Icon-Kreise, Lichtkegel, Kontakt-Icons | abgeleitet |

**Fest verdrahtete Farben, nicht als Token angelegt** (für Entwurf 1 als Tokens nachziehen):

- `#1a7f8a`: Mitte des Bogen-Verlaufs, `style.css:214`.
- `#33437a`: hellste Stelle des Termin-Verlaufs, `:411`.
- `#6fd8d4`: Ende des Block-Verlaufs, `:395`.
- `rgb(20 26 54 / .35)`: Schatten des Porträts, `:221`.
- `rgb(255 255 255 / .05 … .9)`: Glas- und Kartenflächen.
- `rgb(246 243 237 / .7 / .82 / .85)`: Text auf Dunkel.
- `rgb(44 54 98 / .25 / .35 / .58)`: Rahmen, Status-Punkt „zu“, blasse Wörter.

Farbverläufe:

- Bogen: `linear-gradient(165deg, #00A09B 0%, #1a7f8a 42%, #2C3662 100%)`.
- Termin-Bereich: `radial-gradient(120% 90% at 85% 10%, #33437a, marine 45%, marine-tief)`.
- Held: zwei weiche Farbnebel (`::before` Türkis 26 %, `::after` Marine 8 %).
- Leistungen: Creme → Creme-tief.

### 2.2 Schriften

| Familie | Datei (Größe) | Achsen | eingesetzte Gewichte | Unicode-Abdeckung | Einbindung |
|---|---|---|---|---|---|
| **Fraunces** (Titel, Kursiv-Akzente) | `fraunces-latin-opsz-normal.woff2` (67.304 B), `fraunces-latin-opsz-italic.woff2` (81.520 B) | `opsz` 9–144, `wght` 100–900 (fvar) | 300 (Kursiv-Akzente), 340 (h2-Kursive, Haltungssatz), 360 (Straße), 380 (h1), 400 (Menü, Zahlen), 420 (h2), 500 (h3) | Subset „latin“: U+0020–007E, U+00A0–00FF, U+0131, U+0152–0153, U+02BC, U+02C6, U+02DA, U+02DC, U+0300–0301, U+0303–0304, U+0308 (Kursive zusätzlich U+0323), U+2013–2014, U+2018–201A, U+201C–201E, U+2022, U+2026, U+2032–2033, U+2039–203A, U+2044, U+20AC, U+2122, U+2212, U+2215 | `@font-face` mit `font-weight: 100 900`, `font-display: swap`, **ohne `unicode-range`** (`style.css:15–24`); `font-optical-sizing: auto` auf h1–h3 |
| **Figtree** (Text, Knöpfe) | `figtree-latin-wght-normal.woff2` (20.156 B) | `wght` 300–900 | 400 (Fließtext), 500, 600 (Navigation, Knöpfe), 700 (Überzeilen, Labels), 800 (Notrufnummern) | Subset „latin“ (wie oben, zusätzlich U+0102, U+2191, U+2193) | `font-weight: 300 900`, `swap` (`:25–29`); **keine Kursive geladen** |

- **Fakt:** Alle drei Dateien sind byte-gleich mit den Dateien von `@fontsource-variable/fraunces` bzw. `figtree` 5.3.0 (SHA-256 verglichen). Lizenz: SIL OFL 1.1. Die Lizenztexte liegen bei (`assets/fonts/LICENSE-*.txt`).
- Fallbacks: `"Iowan Old Style", Georgia, serif` bzw. `system-ui, -apple-system, "Segoe UI", sans-serif` (`style.css:48–49`).
- Preload im `<head>`: Figtree und Fraunces normal, jeweils mit `crossorigin` (`index.html:20–21`). Die Kursive wird nicht vorgeladen.
- `body { font-feature-settings: "ss01" on }` (`style.css:71`) **wirkt nicht**. **Fakt (fontTools):** Keines der beiden Subsets enthält ein GSUB-Feature `ss01`. Fraunces hat `liga` und `rvrn`, Figtree hat `ccmp`, `dnom`, `frac`, `locl`, `numr`, `pnum`, `rvrn`, `tnum`.
- Türkische Zeichen: siehe 6.2. **ğ, İ, ş, Ğ und Ş fehlen.**

### 2.3 Typo-Skala

| Stufe | Selektor | Größe | Zeilenhöhe / Laufweite / Gewicht |
|---|---|---|---|
| H1 (Held) | `.held__titel` | `clamp(3rem, 1.2rem + 7.2vw, 6.6rem)` | `.98` / `-.035em` / 380 |
| H1-Vorzeile | `.held__titel .vorzeile` | `.8rem` Figtree, Versalien | 1.4 / `.18em` / 700, Türkis-Strich 2rem × 2px davor |
| H2 | `h2` | `clamp(2.3rem, 1.4rem + 3.6vw, 4.4rem)` | 1.08 / `-.02em` / 420; `em` kursiv 340 |
| H2 Sonderfälle | `.kontakt__strasse` · `.aerztin__name h2` | `clamp(2.3rem, .9rem + 7.6vw, 7rem)` · `clamp(2.6rem, 1.6rem + 3.6vw, 4.6rem)` | `.95` / `-.04em` / 360 · 1 |
| H3 | `h3` | `1.35rem` | 1.08 / `-.01em` / 500 |
| H3 Varianten | große Kachel · Schritt · Verfahren | `clamp(1.6rem, 1.2rem + 1vw, 2.1rem)` · `1.45rem` · `1.25rem` | – |
| Großer Satz | `.haltung__satz` | `clamp(1.7rem, 1rem + 3.4vw, 3.6rem)` Fraunces | 1.22 / `-.02em` / 340 |
| Einleitung | `.held__einleitung` | `clamp(1.15rem, 1.05rem + .4vw, 1.35rem)` | 1.6 |
| Fließtext | `body` | `1.125rem` (18 px) Figtree | 1.65 |
| Text mittel | Kacheln, Verfahren, Knöpfe | `1.02rem` / `1rem` / Knopf `600 1.02rem/1.1` | – |
| Klein | Fakten · Sprachen · Fuß-Hinweis · Status | `.95rem` · `.92rem` · `.88rem` · `.85rem` | – |
| Überzeile | `.eyebrow` | `.8rem`, Versalien | `.18em` / 700 |
| Kleinst | Schwebe-Label · Kontakt-Label · Jetzt-Marke · Schwebe-Label mobil | `.78rem` · `.76rem` · `.72rem` · `.68rem` (≈ 10,9 px, Versalien) | `.08–.12em` / 700 |
| Display-Akzente | Laufband · Zahl auf Schwebe-Karte · Zeitleisten-Marke · Verfahren-Nr. · Menü mobil | `clamp(1.4rem, 1rem + 1.4vw, 2.1rem)` kursiv 300 · `1.7rem` · `1.55rem` · `1.6rem` kursiv 300 · `clamp(2rem, 9vw, 2.8rem)` 400 | – |

Satz:

- `text-wrap: balance` für Überschriften, `pretty` für Absätze.
- `hyphens: auto` für `p` und `li`; der Haltungssatz trennt nur manuell.
- **Nebenwirkung:** Adressen werden getrennt, z. B. „Schloßstra-ße 21“ in der Zeitleiste bei 1366 px (eigener Screenshot).

### 2.4 Abstände und Container

| Token / Regel | Wert | Verwendung |
|---|---|---|
| `--huelle` | `80rem` (1280 px) | `max-width` von `.huelle` |
| `--rand` | `clamp(1.1rem, 4vw, 3rem)` | seitlicher Innenabstand von `.huelle` (17,6–48 px) |
| `--abstand` | `clamp(5rem, 11vw, 9.5rem)` | vertikaler Abschnittsabstand (`.abschnitt`, `.termin`); `.haltung` unten `× .55` |
| Abschnittskopf | `margin-bottom: clamp(2.5rem, 5vw, 4rem)`; `max-width` 52rem (Termin 48rem) | – |
| Held | oben `calc(--kopf-hoehe + clamp(1.5rem, 4vw, 3rem))` (Desktop ohne Kopfhöhe), unten `clamp(3.5rem, 7vw, 6rem)` | – |
| Rastergrößen | Held `clamp(2.5rem, 6vw, 4rem)`; Kacheln `1rem`, ab 64em `1.25rem`; zweispaltige Bereiche `3–6rem` (Natur 4, Zeiten 5, Kontakt 5, Ärztin 6) | – |
| Textbreiten | 26rem (Notfall), 28rem (Hinweis), 34rem (Einleitung, Ärztin), 38rem (Nachsatz), 40rem (Fußnote), 64rem (Haltung) | – |
| Kachel-Innenabstand | `clamp(1.6rem, 3vw, 2.2rem)`; Schritt `2rem`; Wochenplan `clamp(1.4rem, 3vw, 2.4rem)` | – |

### 2.5 Radien

- `--radius`: `28px` für Kacheln, Schritte, Wochenplan und den unteren Rand des Bogens.
- `--radius-klein`: `16px` für Natur-Hinweis und Notfall-Kasten.
- Pillen `999px`: Knöpfe, Reiter, Status, Sprachen, Aktionsleiste, Plakette, Sprunglink.
- Weitere Werte, fest verdrahtet:
  - 20px: Schwebe-Karten, Kontakt-Karten (mobil 16px).
  - 22px: Reiter mobil.
  - 14px: Zeile im Wochenplan.
  - 12px: Spur im Wochenplan.
  - 10px: Block im Wochenplan.
  - 6px: Fokusrahmen, Jetzt-Marke.
- **Bogen:** `999px 999px 28px 28px`. Das ist die Signaturform.

### 2.6 Schatten

| Token / Ort | Wert |
|---|---|
| `--schatten` | `0 1px 2px rgb(44 54 98 / .05), 0 12px 32px -12px rgb(44 54 98 / .18)` |
| `--schatten-gross` (Bogen) | `0 30px 80px -30px rgb(44 54 98 / .45)` |
| Kachel beim Hover | `0 2px 4px rgb(44 54 98 / .05), 0 28px 50px -24px rgb(44 54 98 / .35)` |
| Primärknopf | `0 10px 24px -12px rgb(41 174 170 / .9)`; beim Hover `0 14px 30px -14px rgb(44 54 98 / .8)` |
| Aktionsleiste | `0 20px 40px -18px rgb(44 54 98 / .55)` |
| Wochenplan „heute“ | `0 8px 24px -16px rgb(44 54 98 / .5)` |
| Avatar-Ring | `0 0 0 4px var(--creme), 0 0 0 5.5px var(--tuerkis)` |
| Porträt | `filter: drop-shadow(0 24px 30px rgb(20 26 54 / .35))` |
| Kopf nach dem Scrollen (mobil) | `0 1px 0 var(--linie)` |
| Glas | `backdrop-filter: blur(16px) saturate(1.3)` (Schwebe-Karten, Aktionsleiste), `blur(6px)` (Schritte) |

### 2.7 Easing und Dauern

- `--ease: cubic-bezier(.22, .8, .16, 1)`, ein weiches Ausrollen. Es ist die Standardkurve für fast alles.
- Emblem-Linien: `cubic-bezier(.45, .05, .2, 1)`. Schweben: `ease-in-out`. Laufband: `linear`. Wortfarbe: `ease`.
- Dauern im Überblick: `.35s` (Knöpfe, Icons, Wortfarbe) · `.4s` (Kopfhöhe, Reiter-Text) · `.45s` (Menü, Nav-Strich, Menü-Knopf) · `.5s` (Kopf, Lichtkegel, Zeitleisten-Punkt, Verfahren-Nr., Aktionsleiste) · `.55s` (Reiter-Zeiger) · `.6s` (Kachel-Hover) · `.7s` (Panel) · `1s` / `1.1s` (Einblendungen, Intro, Bogen, Wochenplan) · `1.4s` (Porträt) · `1.8s` (Emblem-Kreis) · `2.2s` / `2.4s` (Scroll-Hinweis, Puls, endlos) · `7s` (Schweben, endlos) · `55s` (Laufband, endlos).
- Staffelungen: Intro `110ms × --i`, Einblendungen `90ms × --i`, Menüpunkte `60ms × --n`, Wochenplan-Tage `80ms`. Emblem-Teilpfade `--d` von 0,35 bis 1,45 s, im CSS `× .55 + .3s`.

### 2.8 Breakpoints

| Bedingung | px | Wirkung |
|---|---|---|
| `max-width: 30em` | ≤ 480 | Kompakte Schwebe-Karten; Wochenplan mit Kurz-Tagen („Mo“), Zeiten unter den Balken; `--tag-breite` 3.2rem |
| `max-width: 34em` | ≤ 544 | Reiter untereinander, Zeiger vertikal |
| `min-width: 40em` | ≥ 640 | Kacheln und Verfahren zweispaltig; Aktionskachel quer |
| `min-width: 48em` | ≥ 768 | Logo 200 px (gescrollt 176 px) |
| `min-width: 56em` | ≥ 896 | Schritte dreispaltig; Fuß dreispaltig |
| `max-width: 63.99em` / `min-width: 64em` | 1024 | **Hauptumschaltung:** Menü-Overlay vs. Leiste; Kopf fixiert (mobil) vs. im Seitenfluss (Desktop); Status-Pille; Held zweispaltig; Kacheln dreispaltig, große Kachel über 2 Zeilen; Natur, Zeiten, Kontakt und Ärztin zweispaltig mit `position: sticky` (`top` 7rem bzw. 8rem); Aktionsleiste aus |
| `min-width: 64em` und `min-height: 50em` | ≥ 1024 × 800 | Scroll-Hinweis sichtbar |
| `hover: hover` | – | Alle Hover-Effekte |
| `(hover: hover) and (pointer: fine)` (JS) | – | Lichtkegel und Magnet |
| `prefers-reduced-motion` | – | siehe Abschnitt 4 |
| `print` | – | Kopf, Aktionsleiste, Plakette, Laufband und Scroll-Hinweis ausgeblendet |

### 2.9 Kopf

- `--kopf-hoehe: 5.25rem` (84 px).
- Mobil (< 64em): `position: fixed`. Nach 24 px Scrollen bekommt er die Klasse `.ist-gescrollt`: Höhe 4.25rem (68 px), Logo 168 → 150 px (ab 48em: 200 → 176 px), dazu eine Haarlinie als Schatten. Hintergrund bleibt Creme, also **kein Glas**.
- `scroll-padding-top: 4.25rem`, mobil (`style.css:65`).
- Desktop (≥ 64em): `position: relative` im Seitenfluss, ohne Effekte (`style.css:181–185`).

### 2.10 z-Index

| Ebene | Wert |
|---|---|
| Sprunglink | 200 |
| Kopf | 100 |
| Aktionsleiste | 95 |
| Entwurf-Plakette | 90 |
| Marke, Menü-Knopf (im Kopf) · Schwebe-Karten · Jetzt-Linie | 2 |
| Menü-Overlay (im Kopf) · Kantenblende Laufband · Reiter-Knöpfe | 1 |
| Reiter-Zeiger | 0 |
| Farbnebel im Held, Kachel-Lichtkegel, Emblem der großen Kachel, Termin-Emblem | −1 (in `isolation: isolate`) |

### 2.11 Steuer-Variablen in Komponenten

| Variable | Bedeutung |
|---|---|
| `--i` | Index für die Staffelung von Intro und Einblendung |
| `--d` | Verzögerung je Emblem-Teilpfad |
| `--n` | Index der Menüpunkte |
| `--mx`, `--my` | Knopf: Magnet-Versatz; Kachel: Mausposition |
| `--von`, `--bis` | Wochenplan-Block in Stunden; **gleichzeitig Datenquelle für den Live-Status** |
| `--tag-breite` | Breite der Tagesspalte im Wochenplan |
| `--z-links`, `--z-breite`, `--z-oben`, `--z-hoehe` | Position des Reiter-Zeigers |
| `--fortschritt` | Füllstand der Zeitleiste |

---

## 3. Komponenten-Inventar

| Komponente | Klassen / Attribute | Zweck | Varianten | Zustände | Fundstelle |
|---|---|---|---|---|---|
| Sprunglink | `.sprunglink` → `#inhalt` | „Zum Inhalt springen“ | – | außerhalb des Bildes, bei `:focus` sichtbar (Marine-Pille) | HTML 49, CSS 95–96 |
| Icon-Sprite | `svg.sprite > symbol#i-*`, `.icon` | eigene Linien-Icons (Strich 1.7, rund) | 13 Symbole: telefon, pfeil, schild, spritze, puls, stethoskop, gespraech, blatt, ort, post, zugang, sprache, kalender; **`i-ort` und `i-kalender` sind ungenutzt** | – | HTML 52–66, CSS 88 |
| Kopf | `.kopf[data-kopf]`, `.kopf__innen`, `.marke`, `.kopf__aktionen` | Logo, Navigation, Status, Termin | mobil fixiert, Desktop im Fluss | `.ist-gescrollt` (mobil kleiner); `.ist-versteckt` wird per JS gesetzt, hat aber **keine CSS-Wirkung** | HTML 68–90, CSS 128–185, JS 167–171 |
| Hauptnavigation | `nav.hauptnav#hauptnavigation`, `.hauptnav__termin` | 4 Ankerlinks und „Termin buchen“ (nur mobil) | mobil Vollflächen-Overlay mit großen Serifen-Links; Desktop Zeile mit Türkis-Unterstrich beim Hover | `.ist-offen`; ohne JS statisch | HTML 73–81, CSS 137–179 |
| Menü-Knopf | `.menue-knopf[aria-expanded][aria-controls]` | Menü öffnen und schließen | – | zwei Linien werden zum Kreuz; Label wechselt „Menü öffnen/schließen“; Esc schließt | HTML 85–87, CSS 148–153, JS 90–102 |
| Knöpfe | `.knopf` + `--primaer`, `--rahmen`, `--text`, `--klein`, `--gross`; `.pfeil-link` | CTAs und Sekundäraktionen | Primär: Türkis mit Marine-Schrift. Rahmen: Glas mit Marine-Kontur. Text: unterstrichen. Größen: klein 44 px, normal 52 px, groß 64 px | Hover: Primär wird Marine mit weißer Schrift, Pfeil +3 px; `[data-magnet]`; `[data-platzhalter]` | CSS 104–125 |
| Status-Pille | `.status[data-status-pill][hidden]`, `.status__punkt` | „Geöffnet bis 18 Uhr“ / „Öffnet morgen 9 Uhr“ | nur ab 64em | `.ist-offen` (Punkt in Logo-Türkis, Puls-Ring) | HTML 83, CSS 141–145, 177–178 |
| Überzeile | `.eyebrow`, `.eyebrow--hell`, `.vorzeile` | Abschnittsmarke mit Türkis-Strich (Wiedererkennung) | hell auf Dunkel | – | CSS 99–101, 197–198 |
| Held | `.held`, `__raster`, `__text`, `__titel`, `.zeile`, `.intro-zeile`, `.intro[style=--i]`, `.schwung` + `.schwung__linie`, `__einleitung`, `__knoepfe`, `__fakten` | Einstieg mit H1, Einleitung, 2 CTAs und Fakten | einspaltig, ab 64em zweispaltig `1.08fr .92fr`, `min-height: min(100svh − 9rem, 50rem)` | Intro-Animation | HTML 94–132, CSS 188–208 |
| Bühne / Bogen | `.buehne`, `.bogen[data-parallax]`, `svg.emblem-linien` (`.e-kreis` + 85 Teilpfade), `.bogen__portrait` | Bogenfenster mit Emblem-Zeichnung und freigestelltem Porträt | – | Auftritt, Parallax | HTML 113–120, CSS 211–221 |
| Schwebe-Karten | `.schwebe` + `--status[data-status-karte]`, `--seit`; `__label`, `__wert`, `__zahl`, `__text` | Live-Status „heute“ und „seit 2019“ als Glas-Karten über dem Bogen | Position links-mitte bzw. rechts-unten; kompakt ≤ 30em | Status-Punkt; Schweben | HTML 121–128, CSS 223–232 |
| Scroll-Hinweis | `.scroll-hinweis` (`a` → `#philosophie`) | Maus-Symbol mit rollendem Punkt | nur ≥ 1024 × 800 | Animation „rollen“ | HTML 131, CSS 234–236 |
| Laufband | `.laufband[aria-hidden]`, `.laufband__spur` (Inhalt doppelt), `i` (Kuppel-Maske) | Leistungsbegriffe als Fries in Fraunces-Kursive auf Marine | jedes dritte Wort Türkis | Lauf; Pause beim Hover | HTML 135–140, CSS 263–273 |
| Haltung | `.haltung`, `.haltung__satz[data-woerter]`, `.wort`, `.ist-an`, `.haltung__nachsatz` | Leitsatz der Praxis, Wort für Wort | – | Wörter blass → Marine | HTML 143–149, CSS 276–283, JS 139–146, 179–185 |
| Abschnitt | `.abschnitt`, `.abschnitt__kopf`, `.huelle` | Grundrahmen | Leistungen (Verlauf), Zeiten (Weiß), Kontakt (Creme), Ärztin (mit Wasserzeichen) | – | CSS 90, 292–293 |
| Reiter | `.reiter[role=tablist][data-reiter]`, `button[role=tab]`, `.reiter__zeiger`; `.panel[role=tabpanel]` | Umschalten Hausärztlich / Naturheilkunde | Pillenleiste; ≤ 34em untereinander | `aria-selected`; `.ist-neu` (Panel blendet ein); ohne JS: aktiver Knopf mit Marine-Fläche, **zweites Panel bleibt `hidden`** | HTML 159–221, CSS 297–307, JS 104–137 |
| Kacheln | `.kacheln[role=list]`, `.kachel[data-licht]`, `--gross`, `--aktion`, `.kachel__icon` | Leistungsbereiche als Karten | groß (2 Zeilen, Emblem-Wasserzeichen, Verlauf), Aktion (Marine, ganze Breite, Telefon-Pfeil-Link) | Hover: −6 px, Schatten, Lichtkegel, Icon in Türkis dreht −8° | HTML 166–199, CSS 309–328 |
| Naturheilkunde-Block | `.natur`, `__einleitung` (Desktop sticky), `__icon`, `__hinweis` (Türkis-Kante), `__weitere` | Einordnung, Kostenhinweis, Liste | – | – | HTML 203–220, CSS 330–343 |
| Verfahren-Liste | `ol.verfahren`, `.verfahren__nr` | nummerierte Verfahren mit Kurzbeschreibung | ab 40em zweispaltig | Hover: Nummer +6 px | HTML 209–218, CSS 335–341 |
| Sprechzeiten-Block | `.zeiten`, `__raster`, `__status[data-status-gross][aria-live]`, `__hinweis` | Status-Pille groß und Hinweis zur Terminvergabe | – | live (minütlich) | HTML 226–253, CSS 371–375 |
| Notfall-Kasten | `.notfall`, `.notfall__titel` | 116 117 und 112 | – | – | HTML 233–237, CSS 376–378 |
| Wochenplan | `.wochenplan[data-wochenplan]`, `__achse`, `__tage li[data-tag]`, `__tag` (`.lang`/`.kurz`), `__spur`, `.block[style=--von;--bis]`, `__text`, `.jetzt[data-zeit]` (per JS) | Sprechzeiten als Zeitachse 8–20 Uhr; die Liste ist zugleich Textfassung | ≤ 30em: Kurz-Tage, Zeiten unter den Balken | Blöcke wachsen ein; `.ist-heute`; Jetzt-Linie. **Totes Markup:** `span.wochenplan__jetzt` (HTML 250) wird nicht benutzt | HTML 241–251, CSS 380–408, JS 75–85 |
| Termin-Bereich | `.termin`, `__emblem` (Wasserzeichen hell), `__kopf`, `__aktion`, `__online`, `__fussnote` | dunkler CTA-Block | – | Platzhalter-Knopf; **`.entwurf-chip` (CSS 429) ungenutzt** | HTML 256–274, CSS 411–429 |
| Schritte | `ol.schritte`, `.schritt`, `.schritt__nr` | 3 nummerierte Schritte (Glas auf Marine) | ab 56em dreispaltig | Hover: −4 px, heller | HTML 263–267, CSS 416–423 |
| Kontakt | `.kontakt__raster`, `__adresse`, `__strasse` (Riesenzeile), `__ort`, `__knoepfe`, `__liste` (Icon-Karten), `__label` | Adresse, Kartenlinks, Telefon, E-Mail, Zugang, Versicherung | – | – | HTML 277–295, CSS 432–441 |
| Ärztin | `.aerztin`, `__wasserzeichen`, `__raster`, `__kopf` (Desktop sticky), `__name`, `.avatar`, `__titel`, `__text`, `.sprachen` | Kurzprofil mit Avatar-Ring und Sprach-Chips | – | – | HTML 298–318, CSS 346–357 |
| Zeitleiste | `ol.zeitleiste[data-zeitleiste]`, `__punkt`, `__marke` | Werdegang in 5 Stationen | – | Linie füllt sich (`--fortschritt`); `.ist-erreicht` | HTML 319–325, CSS 359–368, JS 186–191 |
| Fuß | `.fuss`, `__raster`, `__marke`, `__klein`; `nav[aria-label=Seitenbereiche]`, `nav[aria-label=Rechtliches]` | Logo, Name, Anker, Rechtliches (Platzhalter), Datenschutz-Satz | ab 56em dreispaltig | – | HTML 330–352, CSS 444–452 |
| Entwurf-Plakette | `aside.entwurf-plakette` | „Entwurf von vivenna · nicht die offizielle Website“ | mobil kurz | fixiert unten links; rückt über die Aktionsleiste (`body:has()`) | HTML 354–357, CSS 455–467 |
| Aktionsleiste | `nav.aktionsleiste` | „Anrufen“ und „Termin“ (nur < 64em) | – | erscheint nach 55 % Viewport-Höhe (`.ist-sichtbar`); ohne JS immer sichtbar | HTML 359–362, CSS 460–469, JS 172 |
| Hilfsklassen | `.sr-only`, `[data-platzhalter]` | Screenreader-Text; Platzhalter-Links (Klick wird verhindert, `title` gesetzt) | – | – | CSS 89, JS 218–221 |

---

## 4. Animationen und Interaktionen

Grundprinzip (Fakt):

- Ein Inline-Skript setzt vor dem ersten Zeichnen die Klasse `html.js` (`index.html:25`).
- Alle **Einstiegs- und Endlos-Animationen** stehen in `@media (prefers-reduced-motion: no-preference)` und verlangen `.js`.
- `main.js` wertet `matchMedia('(prefers-reduced-motion: reduce)')` aus. Bei „reduzieren“ entfallen Wortaufbau, Parallax, Zeitleiste, Lichtkegel, Magnet und das Ausblenden bei Einblendungen (`main.js:8, 141, 149, 174, 198`).
- Ein globaler Sicherheitsblock setzt bei „reduzieren“ alle `animation-duration` und `transition-duration` auf `.001ms` (`style.css:471–473`).
- Alle Scroll-Effekte laufen gebündelt in **einem** `requestAnimationFrame`-Durchlauf (`main.js:163–195`, Scroll-Listener `passive`).

| # | Name | Auslöser | Technik | Dauer / Verzögerung / Easing | ohne JS | reduzierte Bewegung | Fundstelle |
|---|---|---|---|---|---|---|---|
| 1 | **Emblem-Zeichnung** | Laden | Inline-SVG mit 86 Pfaden (`pathLength="1"`), `stroke-dasharray: 1`, Keyframes `zeichnen` (dashoffset 1 → 0). Der Kreis `.e-kreis` zuerst; die Teilpfade sind nach Unterkante sortiert (unten zuerst = „das Schloss wächst“), `--d` 0,35–1,45 s | Kreis 1,8 s ab 0,2 s; Teilpfade 1,05 s, Verzögerung `--d × .55 + .3s` (≈ 0,49–1,10 s), `cubic-bezier(.45,.05,.2,1)` | Linien fertig gezeichnet (Deckkraft .62, Türkis) | fertig gezeichnet, keine Animation | CSS 219–220, 246–247; `werkzeuge/emblem-vektorisieren.mjs` |
| 2 | **Bogen-Auftritt** | Laden | `clip-path: inset(100% 0 0 0)` → `inset(0)` (Keyframes `bogen-auf`); öffnet von unten nach oben | 1 s ab 0,1 s, `--ease` | sofort sichtbar | sofort sichtbar | CSS 244, 257 |
| 3 | **Porträt-Auftritt** | Laden | Deckkraft 0 → 1, `translate(-50%, 10%) scale(1.03)` → `translate(-50%, 0) scale(1)` | 1,4 s ab 1,25 s | sofort sichtbar | sofort sichtbar | CSS 248, 258 |
| 4 | **Intro-Zeilen** (H1) | Laden | Zeilen-Maske (`.zeile { overflow: hidden }`), `.intro-zeile` von `translateY(108%)` → 0 | 1,1 s, Verzögerung `--i × 110ms + 120ms` (230 / 340 ms) | sichtbar | sichtbar | CSS 199–200, 240, 254 |
| 5 | Intro-Einblendung (Vorzeile, Einleitung, Knöpfe, Fakten) | Laden | `.intro`: Deckkraft 0 + `translateY(18px)` → Ausgangslage (`auftauchen`) | 1 s; Vorzeile 80 ms, sonst `--i × 110ms + 200ms` (530 / 640 / 750 ms) | sichtbar | sichtbar | CSS 241–242, 255 |
| 6 | **Schwung-Linie** unter „Ganzes“ | Laden | SVG-Pfad mit `stroke-dashoffset` 1 → 0, `vector-effect: non-scaling-stroke` | 1 s ab 1,05 s | gezeichnet | gezeichnet | HTML 100, CSS 201–203, 243 |
| 7 | **Schwebe-Karten** | Laden, danach endlos | (a) `auftauchen` (Deckkraft, `translateY(16px) scale(.96)`); (b) `schweben`: Eigenschaft `translate` 0 → −8 px → 0, getrennt von `transform` | (a) 1 s ab 1,75 s bzw. 1,95 s; (b) 7 s `ease-in-out` endlos ab 2,8 s bzw. 3,6 s | sichtbar, ruhig | sichtbar, ruhig | CSS 249–251, 259 |
| 8 | **Parallax** des Bogens | Scrollen | rAF: `translate3d(0, scrollY × 0.04 px, 0)` auf `[data-parallax]`, solange `scrollY < 1,2 × Viewport` | direkt (ohne Transition) | keins | aus | HTML 114, JS 175–178 |
| 9 | **Laufband** | Zeit (endlos) | doppelter Inhalt, `translateX(-50%)`; Kantenblende per Verläufen 12vw | 55 s `linear` endlos; **Pause nur beim Hover** (Hover-Geräte) | läuft (reines CSS) | steht | CSS 263–273 |
| 10 | **Wort-für-Wort-Haltungssatz** | Scrollen | JS zerlegt den Satz in `span.wort[aria-hidden]` und legt den ganzen Satz zusätzlich in `.sr-only` ab. Fortschritt `p = (0,82·vh − top) / (Höhe + 0,35·vh)`; einmal gelesene Wörter bleiben an (Maximum) | Farbwechsel 0,35 s `ease`; blass = Marine 58 % (3,28:1) → Marine | Satz vollständig dunkel | Satz vollständig dunkel (keine Zerlegung) | JS 139–146, 179–185; CSS 278–282 |
| 11 | **Reveal-Einblendungen** (36 Elemente `.reveal` + Wochenplan) | Scrollen in den Sichtbereich | IntersectionObserver (`threshold .12`, `rootMargin 0 0 -8% 0`); Klasse `.ist-sichtbar`, danach `unobserve`. CSS: Deckkraft 0 + `translateY(28px)` → Ausgangslage | Deckkraft 1 s, Bewegung 1,1 s, Verzögerung `--i × 90ms` | sichtbar | sichtbar (keine Ausblendung, Klasse sofort gesetzt) | JS 148–156, CSS 286–289 |
| 12 | **Reiter mit Zeiger** | Klick, Pfeiltasten, Pos1, Ende | ARIA-Tabs mit automatischer Aktivierung, Roving-Tabindex. Der Zeiger wird über CSS-Variablen aus `offsetLeft/Width` gesetzt (≤ 34em vertikal über `offsetTop/Height`). Panel-Wechsel per `hidden` + `.ist-neu` → `panel-ein` | Zeiger 0,55 s; Panel 0,7 s (von Deckkraft 0, +14 px); Textfarbe 0,4 s | Zeiger aus, aktiver Knopf mit Marine-Fläche; **Panel 2 nicht erreichbar** | Zeiger und Panel springen | JS 104–137, CSS 297–307 |
| 13 | **Kachel-Lichtkegel** (`data-licht`) | Mausbewegung | `pointermove` setzt `--mx/--my` in px; `::before` mit `radial-gradient(420px circle at --mx --my, tuerkis-hauch, transparent 65%)` | Kegel blendet in 0,5 s ein | nur CSS-Hover (Kegel in der Mitte) | Kegel mittig, keine Verfolgung | JS 200–206, CSS 312–316 |
| 14 | Kachel-Hover | Hover | `translateY(-6px)`, größerer Schatten, Icon `rotate(-8deg) scale(1.06)` mit Türkis-Fläche | 0,6 s / 0,5 s | ja (CSS) | Endzustand ohne Übergang | CSS 315–319 |
| 15 | **Magnetische Knöpfe** (`data-magnet`: Held-CTA, Termin-CTA) | Mausbewegung | `pointermove` → `--mx` bis ±6 px, `--my` bis ±4 px; `transform: translate(--mx, --my)`; `pointerleave` setzt zurück | 0,35 s | – | aus | JS 208–215, CSS 105–111 |
| 16 | Knopf- und Link-Hover | Hover | Primär: Farbwechsel zu Marine; Pfeil +3 px (Pfeil-Link +4 px); Desktop-Navigation: Unterstrich `scaleX(0 → 1)`, Ursprung wandert von rechts nach links | 0,35 s / 0,45 s | ja | ohne Übergang | CSS 111–125, 175–176 |
| 17 | Verfahren- und Schritt-Hover | Hover | Nummer +6 px; Schritt −4 px und heller | 0,5 s / 0,6 s | ja | ohne Übergang | CSS 339, 419 |
| 18 | **Kopfzeile „Glas/ausblenden“** | Scrollen | JS setzt `.ist-gescrollt` (> 24 px) und `.ist-versteckt` (beim Runterscrollen, > 320 px, Menü zu). **Fakt (CSS, Test):** Mobil wirkt nur `.ist-gescrollt` (Höhe 84 → 68 px, kleineres Logo, Haarlinie). Glas (`backdrop-filter`) und Ausblenden gibt es im CSS nicht; der Kopf bleibt mobil immer sichtbar (Kommentar `style.css:65`). Desktop: Kopf im Seitenfluss, ohne Effekte | Höhe und Logo 0,4 s | Kopf fixiert, volle Höhe | Endzustände ohne Übergang | JS 167–171, CSS 128–135, 181–185 |
| 19 | **Live-Status** | Laden + `setInterval` 60 s | Liest die Zeiten aus den CSS-Variablen `--von/--bis` der Wochenplan-Blöcke (eine Datenquelle). „Jetzt“ über `Intl.DateTimeFormat` mit Zeitzone `Europe/Berlin`. Schreibt in Pille, Schwebe-Karte und den großen Status (`aria-live="polite"`) | sofort; Puls-Ring 2,4 s endlos bei „offen“ | statische Texte („Mo–Fr 9–12 Uhr · Mo & Do auch nachmittags“) | funktioniert, Puls steht | JS 13–88, CSS 141–145 |
| 20 | **Wochenplan: Jetzt-Linie und heute** | Laden, minütlich | `span.jetzt` in der heutigen Spur bei `left = (h − 8) / 12`, nur zwischen 8 und 20 Uhr; Zeitmarke per `::before content: attr(data-zeit)`; Zeile `.ist-heute` hervorgehoben | sofort | keine Linie | Linie da | JS 75–85, CSS 403–408 |
| 21 | Wochenplan-Blöcke wachsen | Scrollen (IntersectionObserver) | `.block`: `scaleX(0)` → 1 (Ursprung links) | 1 s, je Tag +80 ms | volle Blöcke | volle Blöcke | CSS 397–402 |
| 22 | **Zeitleiste füllt sich** | Scrollen | rAF: `--fortschritt = max(…, (0,62·vh − top) / Höhe)` → `::after { transform: scaleY(var(--fortschritt)) }`; Punkte `.ist-erreicht`, sobald `top < 0,62·vh` | Punkte 0,5 s | volle Linie, alle Punkte aktiv | **Fehler:** Linie bleibt leer, Punkte grau (`main.js:174` bricht vor der Zeitleiste ab) | JS 186–191, CSS 359–366 |
| 23 | **Scroll-Hinweis** | Zeit (endlos) | Punkt `translateY(0 → 14px)` und ausblenden (`rollen`) | 2,2 s endlos | statisch | statisch | CSS 234–236, 252, 260 |
| 24 | **Aktionsleiste** | Scrollen | `.ist-sichtbar` ab `scrollY > 0,55·vh`; vorher `translate(-50%, 160%)` mit Deckkraft 0. Die Plakette rückt darüber | 0,5 s | **immer sichtbar** | erscheint ohne Übergang | JS 172, CSS 460–469 |
| 25 | Menü öffnen | Klick, Esc, Link-Klick | Overlay: Deckkraft und `visibility`; Punkte nacheinander (`--n × 60ms`, +14 px); Menü-Knopf wird zum Kreuz; `body.menue-offen { overflow: hidden }` | 0,45 s / 0,5 s | statische Liste (siehe 6.5: unsichtbar) | ohne Übergang | JS 90–102, CSS 148–170 |
| 26 | Weiches Scrollen zu Ankern | Klick auf Anker | `scroll-behavior: smooth` | Browser | ja | aus | CSS 66 |
| 27 | Platzhalter-Links | Klick | `preventDefault`, setzt `title` „Wird im Projekt … verknüpft.“ | – | Sprung zu `#termin` bzw. `#inhalt` | – | JS 218–221 |

Zusätzliche Feinheiten:

- `-webkit-tap-highlight-color: transparent` und `user-select: none` auf Knöpfen, Reitern und der Aktionsleiste (`style.css:77–78`).
- Reiter-Zeiger wird bei `resize` und nach `document.fonts.ready` neu berechnet (`main.js:135–136`).
- Druckansicht (`style.css:474`).

---

## 5. Bilder und Grafiken im Entwurf

Maße mit sharp gelesen, Größen in Byte.

| Datei (`redesign/site/assets/img/`) | Maße | Format | Größe | Verwendung | Herkunft |
|---|---|---|---|---|---|
| `logo-praxis-zum-schloss.png` | 400 × 101 | PNG (Palette, Alpha) | 5.874 | Kopf und Fuß, angezeigt 200 × 51 bzw. 190 px (2x) | alte Website `wp-content/uploads/2017/07/massage_logo_01.png` (`quellen/massage_logo_01.png`, 16.971 B), neu komprimiert. **Nur Raster, keine Vektor-Wortmarke** |
| `portrait-480/720/960.avif` | 480 × 720 · 720 × 1079 · 960 × 1439 | AVIF (Alpha) | 20.031 · 37.799 · 60.221 | Held, `<picture>` mit `srcset` und `sizes="(min-width: 64em) 30rem, 80vw"`, Preload, `fetchpriority="high"` | aus `quellen/portrait-original.png` (1000 × 1499, PNG mit Alpha, 1,7 MB). **Vermutung:** identisch mit `wp-content/uploads/2022/04/hausarzt-nalan-bagci-kaikis.png` der Seite „Unsere Praxis“; die Seitenverhältnisse der srcset-Varianten passen, ein Byte-Vergleich fehlt |
| `portrait-480/720/960.webp` | wie oben | WebP (Alpha) | 26.524 · 54.048 · 83.900 | Fallback | wie oben |
| `portrait-kopf-240/480.avif` | 240² · 480² | AVIF | 7.172 · 18.524 | Avatar „Ihre Ärztin“, 1x/2x, `loading="lazy"`, `alt=""` | Ausschnitt aus dem Porträt |
| `portrait-kopf-240/480.webp` | 240² · 480² | WebP | 8.940 · 23.180 | Fallback | wie oben |
| `emblem-linien.svg` | viewBox 1008² | SVG, Strich `#00A09B` | 24.485 | Wasserzeichen „Ihre Ärztin“ (`img`, 7 %), Hintergrund der großen Kachel (12 %) | potrace-Vektorisierung von `icon.png` (Emblem, 2016 px, alte Website) |
| `emblem-linien-hell.svg` | viewBox 1008² | SVG, Strich `#47CCC8` | 24.485 | Wasserzeichen im Termin-Bereich (14 %) | wie oben |
| Inline-Emblem in `index.html:115` | viewBox 1008² | SVG, 86 Pfade, `currentColor` | 27.350 (`quellen/emblem-linien.svg`) | animierte Zeichnung im Bogen | wie oben, mit Klassen und `--d` |
| `favicon-48.png` | 48 × 48 | PNG (Alpha) | 2.877 | Favicon | aus `icon.png` |
| `apple-touch-icon.png` | 180 × 180 | PNG (auf Weiß) | 19.982 | Apple-Touch-Icon | aus `icon.png` |
| `vorschau-og.jpg` | 1200 × 630 | JPEG q82 | 49.483 | `og:image` (Emblem auf Creme) | aus `icon.png` |
| Inline-SVG-Sprite | 24er-viewBox | SVG | – | 13 Linien-Icons (2 ungenutzt) | eigene Zeichnung |
| Schwung-Linie | viewBox 220 × 24 | Inline-SVG | – | Unterstrich „Ganzes“ | eigene Zeichnung |
| Kuppel-Trenner Laufband | 24er-viewBox | SVG als data-URI in `mask` | – | Trennzeichen | eigene Zeichnung „aus dem Emblem“ |

Weitere Dateien in `redesign/quellen/`: `icon.png` (2016², 168.099 B), `cropped-icon.png` (512²), `cropped-icon-270x270.png`. Sie sind Originale der alten Website, im Entwurf aber nicht direkt eingebunden.

**Nicht vorhanden:** Fotos der Praxisräume, des Eingangs und des Teams (`inhalt-struktur.md` §4). Die Stockfotos der alten Website werden zu Recht nicht verwendet. Auf Unterseiten braucht es deshalb gestaltete Platzhalter oder eine bildlose Gestaltung (master-prompt §7).

---

## 6. Technische Prüfung

### 6.1 Anforderung → erfüllt? → Abweichung → Anpassung für Entwurf 1

| # | Anforderung (master-prompt) | erfüllt? | Befund / Abweichung | Nötige Anpassung für Entwurf 1 |
|---|---|---|---|---|
| 1 | Kein Framework, kein Build, kein npm (§9) | ja | Reines HTML, CSS und Vanilla-JS ohne Bibliothek. Einziger Bauschritt: `baue-index.py` setzt das Emblem ein; das Ergebnis liegt fertig vor | Fertiges `index.html` kopieren, kein Bauskript übernehmen |
| 2 | Ausschließlich relative Pfade (§9) | teilweise | `assets/…` und im CSS `../fonts`, `../img` sind relativ. **Abweichungen:** Logo-Link `href="./"` (`index.html:70`) zeigt unter `file://` den Verzeichnisinhalt statt der Startseite. `og:image` ist relativ und damit für Crawler wirkungslos. JSON-LD `url` und `logo` zeigen absolut auf die alte Domain bzw. eine alte WordPress-Upload-Datei | Alle internen Links mit explizitem `index.html` bzw. `seite.html`. `og:image` bis zum Livegang weglassen (in die README-Vorbereitungsliste). JSON-LD ohne `url` und `logo` |
| 3 | GitHub Pages ohne Einrichtung, `.nojekyll` (§9) | ja | `site/.nojekyll` vorhanden; unter dem Unterpfad `/site/` ohne Fehler (eigener Test) | Repo-Root hat `.nojekyll` bereits |
| 4 | Funktioniert unter `file://` (§6, §9) | **nein** | **Fakt (Test 11.10.):** Chromium meldet 2 Konsolenfehler (CORS beim Font-Preload mit `crossorigin`), lädt die Schriften aber. **WebKit lädt Fraunces normal und Figtree nicht** (Fallback-Schriften), nur die nicht vorgeladene Kursive. Ohne die beiden Preload-Zeilen laden in WebKit alle drei. Firefox in dieser Umgebung nicht testbar | Font-Preloads entfernen (Performance-Verlust gering, Messung in Phase 5) oder nur bei `http(s):` per Skript einfügen. Lösung in Phase 5 in allen drei Engines prüfen |
| 5 | Schriften lokal, woff2, `font-display: swap`, Subsetting (§7, §9) | teilweise | Lokal, woff2, `swap` und Subset „latin“ sind vorhanden. **Türkisch: ğ, İ, ş, Ğ, Ş fehlen** (6.2). `@font-face` ohne `unicode-range`. `ss01` ohne Wirkung. Keine Figtree-Kursive; `<em>` im Fließtext würde schräg gerechnet | Subset „latin-ext“ von Fraunces (normal und kursiv) und Figtree ergänzen, für beide Subsets `unicode-range` setzen (Werte wie in `@fontsource-variable` 5.3.0). `ss01` streichen. Für Fließtext `em` als Fraunces-Kursive oder Gewicht gestalten, keine falsche Figtree-Kursive |
| 6 | Lizenzen der Schriften (§7) | ja | SIL OFL 1.1, Lizenztexte liegen bei | Lizenzdateien mitkopieren; **Dateinamen in Kleinbuchstaben** (z. B. `ofl-fraunces.txt`, `ofl-figtree.txt`), denn §9 verlangt nur Kleinbuchstaben |
| 7 | `noindex, nofollow` (§5) | ja | `index.html:7` | Auf jeder Seite |
| 8 | `<title>` ≤ 60 Zeichen (§5) | **nein** | 86 Zeichen; Naturheilkunde steht vor der Fachärztin | z. B. „Praxis zum Schloss · Fachärztin für Allgemeinmedizin, Berlin“ (60 Zeichen). Endgültig in Phase 2/3 |
| 9 | Description ≤ 155 Zeichen (§5) | **nein** | 210 Zeichen | kürzen; Reihenfolge Fachärztin → (Lehre, falls belegt) → Naturheilkunde |
| 10 | Genau eine H1, saubere H2/H3 (§5) | ja | Eine H1 (Vorzeile und Leitsatz). Die Hierarchie springt nicht. Der Haltung-Abschnitt hat keine Überschrift (`aria-labelledby` auf ein `<p>`) | beibehalten; auf Unterseiten Breadcrumb und H1 im Seitenkopf |
| 11 | JSON-LD nur mit belegten Daten (§5) | teilweise | gültiges JSON, `Physician`. Belegstatus je Feld in 6.4; `knowsLanguage` und Öffnungszeiten stehen nur unter Vorbehalt | Felder nach 6.4; zusätzlich `MedicalWebPage`, `BreadcrumbList`, `FAQPage` auf Unterseiten |
| 12 | Open Graph Titel und Beschreibung (§5) | ja | `og:type`, `og:locale`, `og:title`, `og:description` vorhanden; `og:image` relativ; `og:url` fehlt (laut Vorgabe richtig) | je Seite OG-Titel und -Beschreibung; `og:image` und `og:url` erst zum Livegang |
| 13 | Kontraste WCAG AA (§9) | teilweise | 2 echte Fehler: Verfahren-Nummern 2,45:1 (große Schrift, Ziel 3:1); Nebentext der Schwebe-Karten im ungünstigsten Fall 4,19:1. Details in 6.3 | Token `--tuerkis-text` (z. B. `#1A7F8A`, 4,26:1 auf Creme) für Nummern und Akzentziffern; Schwebe-Karten mit `rgb(255 255 255 / .86)` oder Nebentext in Marine |
| 14 | Sichtbarer Fokus (§9) | ja | 3 px Marine, im Termin-Bereich und Laufband Türkis; alle Tab-Stopps mit Rahmen (Test: 16 von 16) | beibehalten, auch für neue Komponenten (Akkordeon, Sprachwahl) |
| 15 | Sprunglink (§9) | ja | `index.html:49` → `main#inhalt` | auf jeder Seite |
| 16 | Tastaturbedienung Menü, Akkordeon, Sprachmenü (§9) | teilweise | Reiter: Pfeile, Pos1, Ende; Menü: Esc mit Fokus zurück. **Abweichungen:** Im mobilen Menü stehen die Links im DOM *vor* dem Menü-Knopf, und es gibt keinen Fokusfang; Tab führt nach dem Öffnen hinter das Overlay (Test: nächster Fokus „Termin vereinbaren“ im Held). Das Laufband ist nur per Hover pausierbar | Menü-Knopf im DOM vor die Navigation (oder Fokus beim Öffnen in die Navigation setzen und Fokusfang); `inert` auf `main` und `footer`, solange das Menü offen ist. Laufband: kleiner Pause-Knopf oder Stopp nach einigen Durchläufen (WCAG 2.2.2) |
| 17 | `prefers-reduced-motion` (§9) | weitgehend | Alle Animationen sind aus oder sofort im Endzustand. **Fehler:** Die Zeitleiste bleibt leer (`--fortschritt: 0`, keine Punkte aktiv), weil `beimScrollen()` vorher abbricht | Bei „reduzieren“ die Zeitleiste sofort voll setzen (wie ohne JS) |
| 18 | Inhalte ohne JS lesbar (§9) | **nein** | **Fakt (Test, JS aus):** (a) Das Panel „Naturheilkunde & Akupunktur“ hat `hidden` im HTML und ist nicht erreichbar. (b) Mobiles Menü: Die Links sind dauerhaft unsichtbar (`li { opacity: 0 }` ohne `.js`-Bindung, `style.css:160`) und ragen über den Kopf hinaus (Nav-Box y = −143 bis 227 px bei 84 px Kopfhöhe). (c) Wenn nur `main.js` fehlt (Pfadfehler, Blocker), bleiben alle **36 `.reveal`-Elemente auf Deckkraft 0**, weil `.js` schon inline gesetzt ist | (a) `hidden` erst per JS setzen. (b) Die Menüpunkt-Animation an `.js` binden; ohne JS die Navigation als normale Liste unter dem Kopf bzw. im Fuß. (c) `.js`-Klasse erst in `main.js` setzen oder per Fallback (z. B. `html.js-bereit` aus `main.js`) |
| 19 | Bilder: Formate, `srcset`/`sizes`, `width`/`height`, `lazy` (§9) | ja | Porträt AVIF/WebP in 3 Breiten, Avatar 1x/2x, alle `img` mit `width`/`height`, `lazy` unterhalb des Folds, Hero mit `fetchpriority`. LCP-Element mobil ist das **Logo** (die H1 ist noch animiert), Desktop das Porträt | übernehmen; Bild-Pipeline (sharp, Qualitäten) für weitere Bilder nutzen |
| 20 | Touch-Ziele ≥ 44 px (§9) | **nein** | Gemessen bei 360 px: Fuß-Links 19 px hoch; Notrufnummern 24 px (116 117: 57 × 24, 112: 27 × 24); Logo-Link 168 × 42; Telefon-Links im Text 19–30 px; Reiter ≈ 44 | Fuß-, Navigations- und Notruf-Links mit `min-height: 44px` bzw. Polster; Logo-Link 44 px hoch |
| 21 | Termin-CTA → Doctolib, einheitlich, `target="_blank" rel="noopener noreferrer"`, Hinweis „Sie werden zu Doctolib weitergeleitet“ (§6) | **nein** | 6 CTAs zeigen auf `#termin`, mit 4 Beschriftungen: „Termin“ (Kopf, Fuß, Aktionsleiste), „Termin buchen“ (Menü), „Termin vereinbaren“ (Held), „Online Termin anfragen“ (Platzhalter, `index.html:269`). Der Termin-Abschnitt beschreibt einen **Anfrage-Ablauf** in 3 Schritten („Kontaktdaten angeben“, „Wir prüfen Ihre Anfrage“) | Alle CTAs auf `https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/`, Beschriftung einheitlich „Termin online buchen“, `sr-only`-Zusatz „(Doctolib, neues Fenster)“ wie bei den Karten-Links. Den Abschnitt neu fassen: Buchung über Doctolib, Telefon als Alternative, Notfall-Hinweis bleibt. Kein Formular |
| 22 | Keine Sticky-Banner über dem Inhalt (§2.3) | **nein** | Die Aktionsleiste „Anrufen / Termin“ liegt mobil dauerhaft über dem Inhalt (257 × 61 px, unten mittig; zusammen mit der darüber gerückten Plakette rund 100 von 800 px Bildhöhe bei 360 px Breite, ≈ 13 %). Die Entwurf-Plakette ist ebenfalls fixiert | Aktionsleiste **entfernen**. Stattdessen den vorhandenen, mobil ausgeblendeten Knopf „Termin“ im fixierten Kopf zeigen (`style.css:168`); Telefon im Menü und im Held. Plakette als nicht fixierter Hinweis (Fuß oder oberer Rand). Entscheidung in `docs/design-entscheidungen.md` begründen (§2 hat Vorrang vor „alle Interaktionen übernehmen“) |
| 23 | Sprachmenü DE/EN/TR (§6) | **nein** | fehlt. Außerdem: „English“ und „Türkçe“ (`index.html:109, 314–315`) ohne `lang="en"`/`lang="tr"`. Alle JS-Texte (Status, Wochentage, „Uhr“) sind fest deutsch | Sprachwahl im Kopf (Desktop) und im Menü (mobil) im Stil der Reiter-Pille; `data-i18n`; Statustexte und Wochentage aus `en.js`/`tr.js`; nach dem Sprachwechsel Reiter-Zeiger neu messen und den Haltungssatz neu zerlegen; `lang`-Attribute an fremdsprachigen Einsprengseln |
| 24 | Mehrseitigkeit (§9) | **nein** | Einseiter mit Ankern (`#leistungen`, `#sprechzeiten`, `#kontakt`, `#aerztin`, `#termin`); Impressum und Datenschutz sind Platzhalter (`#inhalt`) | Navigation auf Seiten umstellen (Hub, Praxis/Ärztin, Termin & Kontakt usw. laut `docs/sitemap.md`); die Startseiten-Abschnitte werden zu Teasern mit „Mehr“-Links; `aria-current="page"` |
| 25 | Karte: keine Einbettung ohne Einwilligung (§6) | ja | Nur zwei Links zu Google Maps (`rel="noopener"`, `target="_blank"`, `sr-only`-Hinweis); nichts wird vor dem Klick geladen | übernehmen; `rel="noopener noreferrer"`; zusätzlich einen OpenStreetMap-Link; auf „Termin & Kontakt“ eine stilisierte Karte (statisch) |
| 26 | Rollenhierarchie Fachärztin → Lehrärztin → Naturheilkunde (§2.4) | **nein** | Vorzeile „Hausarztpraxis in Berlin-Charlottenburg“; H1 „Den Menschen als *Ganzes* sehen.“; Einleitung „Hausärztliche Versorgung und Naturheilkunde … – bei Nalan Bagci-Kaikis, Fachärztin für Allgemeinmedizin.“ → Fachärztin steht am Ende, Naturheilkunde gleichrangig. **Lehrärztin fehlt** (und ist nicht belegt, 1.2). Title stellt Naturheilkunde nach vorn. Leistungen-H2 „Schulmedizin und Naturheilkunde – unter einem Dach.“ gewichtet gleich | Vorzeile (Teil der H1) → „Fachärztin für Allgemeinmedizin · Berlin-Charlottenburg“. Einleitung beginnt mit Name und Fachärztin; Naturheilkunde als „ärztlich verantwortete Ergänzung“. Lehrpraxis nur mit Beleg (Phase 1), sonst Eintrag in `docs/offene-fragen.md`. Leitsatz „Den Menschen als Ganzes sehen“ (Quelle: alte Startseite) kann bleiben. Leistungen-H2 umformulieren (z. B. Hausärztliche Medizin, *ergänzt um Naturheilkunde*) |
| 27 | Keine Heilpraktiker-Anmutung, HWG (§2.4, §7) | ja | Kein „Heilpraktikerin“. Naturheilkunde sachlich mit Hinweis „kein Heilversprechen“ und Kostenhinweis (`index.html:206–207`). Laufband und Reiter beginnen mit hausärztlichen Leistungen | Ton beibehalten |
| 28 | Externe Abhängigkeiten, Tracker (§7) | ja | **Fakt (Netzwerk):** 11 Anfragen, alle lokal; 0 Drittanbieter, 0 Cookies, 0 Konsolenmeldungen über http | so lassen; Fuß-Satz „setzt keine Cookies …“ prüfen, sobald die Sprachwahl `localStorage` nutzt (Formulierung anpassen, kein Banner nötig) |
| 29 | Lighthouse ≥ 90 (§9) | ja | Messung 11.10.: mobil 94/100/100/63, Desktop 98/100/100/63 (SEO nur wegen `noindex`) | Zielmarke für alle Seiten |
| 30 | Responsive, keine horizontale Scrollbar (§9) | ja | 320 und 360 px: `scrollWidth` = Viewport | – |
| 31 | Favicon, Apple-Touch, `theme-color` aus dem Logo (§9) | ja | aus dem Emblem abgeleitet; `theme-color #F6F3ED` | übernehmen (nach `shared/assets/logo/`) |
| 32 | Bildrechte nur Praxisbilder (§7) | ja | Logo, Emblem und Porträt stammen von der alten Website | Nutzungsrechte am Porträt offen (FRAGEN Nr. 9) → `docs/offene-fragen.md` |
| 33 | Keine Videos und Rohdateien im Repo (§9) | – | `vorschau/*.mp4` (15 MB), `quellen/portrait-original.png` (1,7 MB) | nicht kopieren; nur die optimierten Varianten |
| 34 | Wahrheit vor Wirkung (§8) | teilweise | Der Live-Status „Jetzt geöffnet“ kennt keine Feiertage, keinen Urlaub und keine Vertretung, und die Sprechzeiten sind widersprüchlich (1.2). **Vermutung:** `aria-live` wird jede Minute neu befüllt (`innerHTML = ''`), auch wenn sich der Text nicht ändert; Screenreader könnten das wiederholt ansagen (nicht mit Screenreader geprüft) | Status-Wortlaut einschränken („laut regulären Sprechzeiten“), nur bei Textänderung schreiben; offene Frage zu Sprechzeiten und Feiertagen |
| 35 | Code-Qualität, keine toten Dateien (§9) | teilweise | Tot bzw. ohne Wirkung: `.wochenplan__jetzt` und `[data-jetzt-zeit]` (HTML 250), `.entwurf-chip` (CSS 429), `.ist-versteckt` (JS 170), `i-ort` und `i-kalender`, `ss01`, `aria-hidden="false"` an `.buehne`, die Transition auf `backdrop-filter` am Kopf. README in Teilen veraltet | beim Kopieren bereinigen |
| 36 | Typografie Deutsch/Türkisch | teilweise | `hyphens: auto` trennt Adressen und Namen („Schloßstra-ße 21“) | Adressen, Telefonnummern und Namen mit `&nbsp;` bzw. `hyphens: manual`; `lang` je Sprache für korrekte Trennung |

### 6.2 Glyphenprüfung Türkisch (fontTools, cmap)

Geprüft wurden die Zeichen ç ğ ı İ ö ş ü und ihre Großbuchstaben Ç Ğ Ş Ö Ü.

| Datei | vorhanden | **fehlt** | weitere deutsche/typografische Zeichen (äöüß, „“‚‘’, –—·…€§°×) |
|---|---|---|---|
| `fraunces-latin-opsz-normal.woff2` | ç ı ö ü Ç Ö Ü | **ğ İ ş Ğ Ş** | alle vorhanden |
| `fraunces-latin-opsz-italic.woff2` | ç ı ö ü Ç Ö Ü | **ğ İ ş Ğ Ş** | alle vorhanden |
| `figtree-latin-wght-normal.woff2` | ç ı ö ü Ç Ö Ü | **ğ İ ş Ğ Ş** | alle vorhanden |

- Folge: In TR-Texten (und z. B. bei der Schreibweise „Bağcı“) würde der Browser einzelne Buchstaben aus Georgia bzw. system-ui ersetzen. Das sieht man als Stilbruch mitten im Wort. „Türkçe“ selbst ist unkritisch (ç, ü vorhanden).
- **Lösung (geprüft):** Die Subsets „latin-ext“ aus `@fontsource-variable` 5.3.0 enthalten genau ğ İ ş Ğ Ş (und die latin-Zeichen nicht; sie ergänzen sich also). Größen:

  | Datei | Größe |
  |---|---|
  | `fraunces-latin-ext-opsz-normal.woff2` | 59.388 B |
  | `fraunces-latin-ext-opsz-italic.woff2` | 71.460 B |
  | `figtree-latin-ext-wght-normal.woff2` | 10.280 B |

  Achsen wie bei latin. Einbindung mit `unicode-range`:
  - latin: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`
  - latin-ext: `U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF`

  Der Browser lädt latin-ext dann nur auf Seiten, die solche Zeichen enthalten. Die Darstellung in Phase 5 im Browser prüfen.

### 6.3 Kontraste (eigene Rechnung, WCAG-Formel, Alpha über dem jeweiligen Grund verrechnet)

| Paar | Kontrast | Ziel | Ergebnis |
|---|---|---|---|
| Marine auf Creme (Text, Titel) | 10,47:1 | 4,5 | ok |
| Marine auf Weiß / auf Creme-tief | 11,59:1 / 9,58:1 | 4,5 | ok |
| Text-weich (Marine 74 %) auf Creme / Weiß / Creme-tief | 5,00 / 5,29 / 4,76:1 | 4,5 | ok |
| Text-weich auf Kachel (Weiß 82 % über Creme-tief) | 5,19:1 | 4,5 | ok |
| Text-weich auf Held im Türkis-Nebel (26 %, Kernzone) | 4,56:1 | 4,5 | knapp ok |
| Text-weich auf Kontaktkarte (Weiß 70 % über Creme) | 5,20:1 | 4,5 | ok |
| Marine auf Türkis (Primärknopf, Wochenplan-Block) | 5,93:1 | 4,5 | ok |
| Marine auf `#6FD8D4` (Ende des Block-Verlaufs) | 6,87:1 | 4,5 | ok |
| Weiß auf Marine (Hover, Sprunglink, Jetzt-Marke) | 11,59:1 | 4,5 | ok |
| Creme auf Marine (Laufband, Aktionskachel, aktiver Reiter, Plakette) | 10,47:1 | 4,5 | ok |
| Türkis auf Marine (Laufband-Akzent, Pfeil-Link, Plakette) | 5,93:1 | 4,5 | ok |
| Türkis auf `#33437A` (Termin-H2-Kursive, hellste Stelle) | 4,83:1 | 3 (große Schrift) | ok |
| Creme 82 % auf Marine / auf Schritt-Karte | 7,62 / 5,61:1 | 4,5 | ok |
| Creme 85 % auf `#33437A` · Creme 70 % auf Marine · auf `#33437A` | 6,68 · 6,03 · 5,11:1 | 4,5 | ok |
| Haltungssatz blass (Marine 58 %) auf Creme | 3,28:1 | 3 (große Schrift) | ok |
| **Türkis-tief `#29AEAA` auf Creme / Creme-tief** (Verfahren-Nr., 25,6 px) | **2,45 / 2,25:1** | 3 | **nicht erfüllt** |
| **Text-weich auf Schwebe-Karte über Marine** (Weiß 78 %, ungünstigster Fall) | **4,19:1** | 4,5 | **nicht erfüllt**. Über `#1A7F8A`: 4,47; über Logo-Türkis: 4,58. Mit Weiß 86 %: ≥ 4,59 |
| Marine auf Schwebe-Karte · auf Aktionsleiste über Marine | 7,75 · 8,38:1 | 4,5 | ok |
| Fokus Marine auf Creme · Türkis auf Marine (Nicht-Text) | 10,47 · 5,93:1 | 3 | ok |
| Türkis auf Creme (nur Deko: Striche, Punkte, Link-Unterstreichung) | 1,77:1 | – | rein dekorativ; Links sind zusätzlich unterstrichen und in Marine gesetzt |
| Logo-Türkis auf Creme (Status-Punkt) | 2,92:1 | 3 (Nicht-Text) | Hinweis: Der Status steht auch als Text da |
| Rand von `.knopf--rahmen` (Marine 25 %) auf Creme | 1,57:1 | 3 | Hinweis: Der Knopf ist über Text und Form erkennbar; für einen stärkeren Rand 40–50 % nehmen |
| Vorschläge für ein dunkleres Akzent-Türkis | `#1A7F8A`: 4,26 / 3,90 (Creme / Creme-tief); `#007F7B`: 4,39 / 4,02 | – | Ein Token `--tuerkis-text` für Text-Akzente auf hellem Grund |

### 6.4 JSON-LD (`index.html:26–46`) – Belegstatus

| Feld | Wert im Entwurf | Beleg | Bewertung für Entwurf 1 |
|---|---|---|---|
| `@type` | `Physician` | – | übernehmen; auf der Startseite ggf. `["MedicalClinic","Physician"]` bzw. getrennte Knoten (Praxis/Ärztin), Entscheidung in Phase 2 |
| `name` | „Praxis zum Schloss – Nalan Bagci-Kaikis“ | Website, KBV | Fakt |
| `description` | Allgemeinmedizin, Vorsorge, Impfungen, Diagnostik, Akupunktur, Naturheilverfahren | Leistungen der alten Website | Fakt; Reihenfolge passt |
| `medicalSpecialty` | `https://schema.org/PrimaryCare` | Fachärztin für Allgemeinmedizin (KBV) | passend |
| `url` | `https://www.hausarztpraxis-zum-schloss.de/` | bisherige Domain | **weglassen** bis zum Livegang (endgültige Domain unklar, vgl. §5) |
| `logo` | `…/wp-content/uploads/2017/07/icon.png` | alte WordPress-Datei | **entfernen**; die Datei verschwindet beim Relaunch |
| `telephone` | `+49 30 3223612` | KBV, Website | Fakt |
| `email` | info@… | KBV, Website | Fakt |
| `address` | Schloßstraße 21, 14059 Berlin, DE | KBV, Website | Fakt |
| `knowsLanguage` | de, en, tr | nur arzt-auskunft | Verzeichnisangabe → zu bestätigen |
| `openingHoursSpecification` | Mo–Fr 9–12, Mo 15–17, Do 15–18 | Kontaktseite der alten Website | Fakt, aber Quellen widersprechen sich → zu bestätigen |
| `sameAs` | Jameda, arzt-auskunft | Profil-URLs (`plausibilitaet.md`) | belegt; Abwägung: Die Profile sind nicht beansprucht → Frage an die Ärztin |
| fehlt: `geo` | – | Koordinaten nur aus dem Google-Maps-Link im Entwurf (52.5143189, 13.296208) | **Vermutung**, nicht übernehmen ohne Prüfung |
| fehlt: `isAcceptingNewPatients`, `image` | – | nicht belegt | weglassen |

### 6.5 Testprotokoll: ohne JS, reduzierte Bewegung, ohne `main.js`, `file://`

| Szenario | Ergebnis (11.10.2026, Kopie im Scratchpad) |
|---|---|
| JS aus, 360 px | Inhalt sichtbar (0 Elemente mit Deckkraft 0 in `main`). **Aber:** Menü-Knopf verborgen, Navigationslinks unsichtbar (Deckkraft 0) und über den Kopf hinausragend, Logo gestaucht; Aktionsleiste dauerhaft sichtbar; Panel Naturheilkunde `hidden` |
| JS aus, 1366 px | 0 unsichtbare Elemente; Panel Naturheilkunde nicht sichtbar (Höhe 0) |
| Reduzierte Bewegung, 1366 px | 0 unsichtbare Elemente, Laufband steht, Puls aus, Wochenplan-Blöcke voll, Satz nicht zerlegt; **Zeitleiste leer** (`--fortschritt: 0`, 0 Punkte erreicht) |
| `main.js` blockiert | **36 von 36** `.reveal` bleiben unsichtbar |
| `file://` Chromium | Seite funktioniert; 2 Konsolenfehler (Font-Preload, CORS) |
| `file://` WebKit | Fraunces normal und Figtree `unloaded` → Fallback-Schriften; ohne Preload alle geladen |
| `file://` Firefox | in der Sandbox nicht startbar → Phase 5 |
| http, Unterpfad `/site/` | 0 Konsolenmeldungen, 0 Fehler, 0 Drittanbieter |

### 6.6 Lighthouse-Nachmessung (11.10.2026, lokal, 1 Lauf je Gerät)

| Gerät | Performance | Barrierefreiheit | Best Practices | SEO | LCP | CLS | Gewicht | Anfragen |
|---|---|---|---|---|---|---|---|---|
| mobil | 94 | 100 | 100 | 63 (nur `is-crawlable`/`noindex`) | 2,93 s (Element: Logo) | 0 | 344 KB | 11 |
| Desktop | 98 | 100 | 100 | 63 (nur `noindex`) | 0,61 s (Porträt) | 0,088 (`.held__text`, vermutlich Schriftwechsel) | 327 KB | 11 |

Die Werte entsprechen der Messung vom 01.10. Der spätere Umbau des Kopfs hat sie nicht verschlechtert.

---

## 7. Folgerungen für Entwurf 1

### 7.1 Unverändert übernehmen (1:1)

- **Alle Farb-Tokens** (2.1), Fraunces und Figtree mit den Achsen, die **Typo-Skala** (2.3), `--huelle`, `--rand`, `--abstand`, Radien, Schatten, `--ease` und die Dauern. Die fest verdrahteten Verlaufsfarben werden zusätzlich als Tokens angelegt, ohne ihre Werte zu ändern.
- **Formensprache:**
  - Bogenfenster (`999px 999px 28px 28px`).
  - Emblem-Linien als Zeichnung und Wasserzeichen.
  - Überzeile mit Türkis-Strich.
  - Fraunces-Kursive als Akzent in Überschriften (`h2 em`).
  - Glas-Karten.
  - Pillen-Knöpfe in Türkis mit Marine-Schrift.
  - Marine-Bereich mit radialem Verlauf und Emblem-Wasserzeichen.
  - Haarlinien in `--linie`.
- **Startseite:** Aufbau und Reihenfolge der Abschnitte. Folgende Bausteine bleiben: Held mit Bühne, Laufband, Haltung, Reiter mit Kacheln und Verfahren-Liste, Wochenplan mit Live-Status und Jetzt-Linie, Termin-Block (Gestaltung), Kontakt mit Riesen-Straßenzeile, Ärztin mit Avatar und Zeitleiste, Fuß.
- **Alle Animationen und Interaktionen aus Abschnitt 4**, mit Ausnahme der Aktionsleiste (siehe 7.2). Dazu gehören Timing, Staffelung, die rAF-Bündelung und das Prinzip „nur mit `.js` und ohne Bewegungsreduktion“.
- **Barrierefreiheits-Muster:**
  - Sprunglink.
  - Fokusrahmen.
  - `sr-only`-Satz beim Wortaufbau.
  - ARIA-Tabs.
  - Wochenplan-Liste als Textfassung.
  - `sr-only`-Hinweis „(…, neues Fenster)“ an externen Links.
  - Druck-CSS.
- **Assets:**
  - Optimierte Porträt-Varianten, Avatar, Logo-PNG, beide Emblem-SVGs, Favicon und Apple-Touch-Icon → `shared/assets/`.
  - Schriften → `entwurf-1-fundament/assets/fonts/`.
  - Inline-Emblem nur auf der Startseite.

### 7.2 Konkret anpassen

1. **Termin:**
   - Alle CTAs auf die Doctolib-URL legen, mit `target="_blank" rel="noopener noreferrer"` und der Beschriftung „Termin online buchen“.
   - `data-platzhalter` an den CTAs entfernen.
   - Den Termin-Abschnitt textlich neu fassen: keine Anfrage-Schritte, sondern Doctolib-Buchung, dazu Telefon als Alternative und Notfall-Hinweis.
   - Hinweis „Sie werden zu Doctolib weitergeleitet“ am Knopf und auf „Termin & Kontakt“.
2. **Aktionsleiste entfernen** (§2.3). Mobil stattdessen den kleinen „Termin“-Knopf im fixierten Kopf einblenden (`style.css:168`). Bei 320 px dafür das Logo verkleinern (z. B. 140 px). Die **Entwurf-Plakette** nicht fixiert, sondern als dezenten Hinweis im Fuß oder am oberen Rand. Beides in `docs/design-entscheidungen.md` begründen.
3. **Kopf und Navigation auf Mehrseitigkeit umstellen:**
   - Seitenlinks statt Anker; `aria-current="page"` mit dauerhaftem Türkis-Unterstrich.
   - Sprachwahl DE | EN | TR in Reiter-Optik als Segmented Control mit Zeiger: Desktop im Kopf, mobil unten im Overlay-Menü.
   - Die Staffelung `--n` für mehr als 5 Menüpunkte erweitern.
   - Prüfen, ob die Desktop-Navigation mit mehr Punkten bei 1024 px noch passt; sonst den Umschaltpunkt anheben.
4. **Mobiles Menü:**
   - Knopf im DOM vor die Navigation oder Fokus-Management mit Fokusfang.
   - `inert` auf den Hintergrund.
   - Ohne JS als sichtbare Liste.
   - Die Punkt-Animation an `.js` binden.
5. **Progressive Enhancement absichern:**
   - Das Panel Naturheilkunde ist ohne JS sichtbar; `hidden` setzt erst JS.
   - Die `.js`-Klasse setzt `main.js` selbst, oder es gibt einen Fallback.
   - Bei reduzierter Bewegung ist die Zeitleiste sofort voll.
6. **Schriften:**
   - latin-ext ergänzen, `unicode-range` für beide Subsets.
   - Font-Preloads entfernen oder nur bei http(s) setzen (`file://`/WebKit).
   - `ss01` streichen.
   - Lizenzdateien in Kleinbuchstaben benennen.
7. **Rollenhierarchie im Hero:**
   - Vorzeile „Fachärztin für Allgemeinmedizin · Berlin-Charlottenburg“; die Vorzeile ist Teil der H1.
   - Einleitung in der Reihenfolge Fachärztin → (Lehre, falls belegt) → ärztlich verantwortete Naturheilkunde.
   - Leistungen-H2 umgewichten.
   - Title ≤ 60 und Description ≤ 155 Zeichen.
   - Leitsatz und Bühne bleiben.
8. **Kontraste:**
   - Neues Token `--tuerkis-text` (Vorschlag `#1A7F8A`) für Verfahren-Nummern und Akzentziffern auf Hell.
   - Schwebe-Karten mit Weiß 86 % oder Nebentext in Marine.
9. **Touch-Ziele:** Fuß-Links, Notrufnummern, Logo-Link und Navigationslinks auf mindestens 44 px.
10. **i18n-Fähigkeit von `main.js`:**
    - Statustexte, Wochentage und Uhrzeitformat aus den Übersetzungen.
    - Nach dem Sprachwechsel `setzeZeiger()` und die Wortzerlegung neu ausführen.
    - `aria-live` nur bei Textänderung befüllen.
    - `lang`-Attribute an „English“ und „Türkçe“.
11. **Live-Status:** Formulierung absichern („laut regulären Sprechzeiten“) und die Feiertags- bzw. Urlaubsfrage als offene Frage aufnehmen. Die Sprechzeiten bleiben **eine** Quelle: der Wochenplan bzw. die Daten in `shared/inhalte/de/`.
12. **Metadaten:**
    - `og:image` und JSON-LD `url`/`logo` bis zum Livegang weglassen (README-Liste).
    - `knowsLanguage` und Öffnungszeiten nur mit Vermerk.
    - Auf Unterseiten `MedicalWebPage`, `BreadcrumbList` und `FAQPage`.
13. **Pfade:** Logo-Link und alle internen Links mit explizitem `index.html`; Asset-Pfade je nach Ordnertiefe (`../shared/assets/…`); CSS-`url()` relativ zur CSS-Datei.
14. **Aufräumen:** totes Markup und tote Regeln aus 6.1 Nr. 35 entfernen; Adressen und Namen gegen Silbentrennung schützen; Google-Maps-Links mit `noreferrer`, zusätzlich ein OSM-Link.

### 7.3 Neu entwickeln (Unterseiten-Komponenten in der Sprache des Startseiten-Entwurfs)

| Komponente (Vorschlag Klassenname) | Zweck | Gestaltung aus vorhandenen Bausteinen |
|---|---|---|
| Seitenkopf `.seitenkopf` | H1, Einordnung, dezenter Termin-CTA, Vertrauenszeile (Landing Page §5 Nr. 1) | Überzeile mit Türkis-Strich, H1 in Fraunces mit kursivem Akzent, Fakten-Punkte wie `.held__fakten`, Farbnebel wie im Held. Optional ein kleines Bogenfenster mit Emblem-Linien (statisch per `img`) statt Foto |
| Breadcrumb `.brotkrumen` | sichtbare Pfadnavigation und `BreadcrumbList` | Figtree `.85rem`, Trenner als kleine Kuppel (Laufband-Maske), aktuelles Element in `--text-weich` |
| Fließtext `.prosa` | lange Texte (Leistungen, Praxis, Rechtliches) | max. 40rem; h2/h3 aus der Skala; Listen mit Türkis-Punkten; `em` als Fraunces-Kursive; Absatzabstände aus `--abstand`-Bruchteilen |
| Inhalt mit Seitenleiste `.inhalt-raster` | Text plus Leistungsnavigation (die alte Website hatte eine gute Seitenleiste) | Zweispaltig ab 64em mit `position: sticky` wie `.natur__einleitung`; Liste im Stil von `.verfahren` (Nummer bzw. Pfeil, Haarlinien) |
| Leistungs-Hub `.hub-gruppe` | Gruppen (Hausärztlich / Vorsorge / Naturheilkunde) mit Link-Karten | `.kacheln` und `.kachel` als `<a>` mit Lichtkegel und Hover; die Naturheilkunde-Gruppe mit Einordnung wie `.natur` und Hinweisbox |
| Kurzantwort `.kurzantwort` | „Worum geht es?“ (§5 Nr. 2) | Karte mit Türkis-Kante links wie `.natur__hinweis`, etwas größere Schrift |
| Für wen `.liste-punkte` | „Für wen / wann sinnvoll“ ohne Heilversprechen | Punkte wie `.held__fakten`, zweispaltig ab 40em |
| Ärztliche Einordnung `.einordnung` | Rollenhierarchie verankern (§5 Nr. 4) | Marine-Fläche wie `.kachel--aktion` mit Avatar und Satz „Diagnostik und Verantwortung liegen bei …“ |
| Ablauf `.ablauf` | Schritte von der Buchung bis zur Behandlung | helle Variante von `.schritte`: Kreis-Nummer in Fraunces, Karten in Weiß 82 % |
| Fakten `.faktenraster` | Dauer, Kosten, Vorbereitung, Hinweise | Icon-Karten wie `.kontakt__liste` (Label in Versalien); Platzhalter-Variante bei fehlenden Daten |
| Zwischen-CTA `.cta-band` | ruhiger Termin-Hinweis mit Telefon (§5 Nr. 7, 11) | kompakte Variante von `.termin` (Marine-Verlauf, Emblem-Wasserzeichen hell, Primärknopf normaler Größe, kein `--gross`) |
| FAQ `.faq` | 4–7 Fragen, Akkordeon, `FAQPage` | `<details>`/`<summary>` (ohne JS bedienbar), Plus-Symbol dreht wie der Menü-Knopf, Haarlinien wie `.verfahren`; Höhenanimation nur ohne Bewegungsreduktion |
| Verwandte Leistungen `.verwandt` | Querverlinkung | 3 kompakte Kacheln mit Pfeil-Link |
| Praxis kurz `.praxis-kurz` | Ärztin, Adresse, Sprechzeiten, Telefon (§5 Nr. 10) | Avatar mit Ring, Name in Fraunces, Kontakt-Karten, Mini-Wochenplan |
| Hinweis Naturheilkunde `.hinweis-ergaenzend` | „ergänzt die schulmedizinische Behandlung, ersetzt sie nicht“ | wie `.natur__hinweis` |
| Sprachwahl `.sprachwahl` | DE/EN/TR, `localStorage`, `html[lang]` | Pillenleiste mit Zeiger wie `.reiter`, im Menü als große Serifen-Optionen |
| Hinweis „nur Deutsch“ `.hinweis-sprache` | Seiten ohne Übersetzung | schmale Creme-tief-Leiste mit Überzeilen-Stil, nicht fixiert |
| Tabelle `.tabelle` | Sprechzeiten-Textfassung, Vorsorge-Intervalle | Kopf im Überzeilen-Stil, Zeilen mit Haarlinien, Zahlen mit `tnum` (Figtree hat `tnum`) |
| Statische Karte `.karte` | Anfahrt ohne Einbettung | stilisierte Fläche in Creme-tief mit Emblem-Marker und Straßenlinien in `--linie`; Knöpfe „Route planen“ (Google) und „OpenStreetMap“ |
| Platzhalter `.platzhalter` | fehlende Bilder oder Daten, klar erkennbar | gestrichelter Rahmen und Etikett im Stil von `.entwurf-chip` (wird damit wiederverwendet) |
| Rechtstext `.rechtstext` | Impressum, Datenschutz | `.prosa` mit nummerierten Abschnitten; HTML-Kommentar „Entwurf: vor Livegang rechtlich prüfen lassen“ |
| Erweiterter Fuß | Kontakt, Sprechzeiten kurz, Navigation, Rechtliches, Sprachwahl | Raster wie `.fuss__raster`, auf 4 Spalten erweitert, Touch-Ziele ≥ 44 px |

### 7.4 Für `docs/offene-fragen.md` vormerken

- Lehrärztin/Lehrpraxis: Beleg fehlt im ENTWURF (Phase 1 prüfen).
- Titel „Dr.“ und Schreibweise des Namens.
- Zusatzbezeichnungen.
- Verbindliche Sprechzeiten, Akutsprechstunde, Feiertage und Live-Status.
- 030 3255050: Telefon oder Fax?
- Sprachen EN/TR bestätigen.
- Barrierefreier Zugang.
- Nutzungsrechte am Porträt.
- Logo als Vektor.
- Aktuelles Leistungsangebot (FRAGEN Nr. 11).
- Freigabe der Naturheilkunde-Texte.
- `sameAs` auf nicht beanspruchte Profile.
- Ungeklärtes Feedback zum Startseiten-Entwurf (NEEDS-HUMAN Nr. 5).
- Entscheidung Aktionsleiste und Plakette.
