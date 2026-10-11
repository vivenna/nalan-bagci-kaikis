# Analyse der alten Website hausarztpraxis-zum-schloss.de

Stand: 11.10.2026 · Ergebnis von Phase 0 und Phase 1 (siehe `master-prompt.md` Abschnitt 11). Dieses Dokument ist die **Faktenbasis** für alle drei Entwürfe: Jede Angabe in den neuen Texten muss sich auf Abschnitt 6 zurückführen lassen oder ist ein gekennzeichneter Platzhalter (`docs/offene-fragen.md`).

Kennzeichnung: **Fakt** (mit Quelle) · **Vermutung** (begründete Deutung) · **Annahme** (Arbeitsdefinition).

## Inhalt

1. Grundlage und Methode
2. Vorarbeit im Entwurfs-Ordner
3. Seitenliste der echten Seiten
4. Navigation, Kopfleiste, Fuß, Formulare
5. Inhalte und Textbefunde je Seite
6. Belegte Faktenliste
7. Bilder und Medien
8. Stärken, Schwächen, Chancen
9. Ausgeschlossene Vorlagenseiten und Zweifelsfälle
10. Abgleich mit dem 01.10.2026, JavaScript-Stichprobe, Weiterleitungen
11. Folgerungen für die Entwürfe

---

## 1. Grundlage und Methode

- **Live-Abruf** aller Sitemap-URLs und aller über Menü, Fuß, Fließtext und WordPress-Standardpfade gefundenen Seiten am **11.10.2026** (sequenziell, ≥ 0,5 s Pause, Browser-User-Agent). Insgesamt **141 URLs**: 119 aus der XML-Sitemap (`/wp-sitemap.xml` mit 12 Teil-Sitemaps), 15 über Links, 7 über WordPress-Pfade. Zusätzlich WordPress-REST-API (`/wp-json/wp/v2/pages`, `posts`, `media`).
- **Abgleich** mit den Rohdaten der Voranalyse vom 01.10.2026 (`ENTWURF/02-website/rohdaten/`, ENTWURF = `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf`): **keine Änderung**, alle echten Seiten byte-identisch (Abschnitt 10).
- **Browser-Stichprobe:** 20 Seiten (10 echt, 2 Zweifel, 8 Vorlage) in Chromium (Playwright 1.63) gerendert und mit dem statischen HTML verglichen: Kein Inhalt erscheint erst per JavaScript.
- **Texte:** Der gesamte sichtbare Inhalt der 25 Praxisseiten (22 echte Seiten, 2 Kategorie-Archive, die leere Seite `/leistungsspektrum/`) wurde wörtlich als Markdown gesichert. Grundlage für die überarbeiteten Texte in `shared/inhalte/de/`.
- **Bilder:** alle 45 Bildverweise der Praxisseiten geladen, einzeln angesehen, Metadaten (XMP) ausgelesen, Entscheidung je Bild (Abschnitt 7).
- **Externe Gegenprüfung** einzelner Angaben (nur als Prüfhinweis, nie als Inhaltsquelle): amtliche Liste der Berliner Gelbfieberimpfstellen, Projektsteckbrief der Bundesärztekammer.
- **Verweise der Form `alt/…`** bezeichnen Arbeitsdateien dieses Abrufs im lokalen Arbeitsverzeichnis. Sie sind nicht Teil des Repositorys. Inhaltlich entsprechen sie den Rohdaten unter `ENTWURF/02-website/rohdaten/`.
- **Grenzen:** Google-Rankings, Google-Unternehmensprofil und Search-Console-Daten wurden nicht automatisiert erhoben (siehe `ENTWURF/02-website/seo-lokal.md`). Zusatzbezeichnungen wurden nicht bei der Ärztekammer verifiziert. Rechtliche Einschätzungen sind Hinweise, keine Rechtsberatung.

### Kennzahlen des Inventars

| Kennzahl | Wert |
|---|---|
| URLs im Inventar gesamt | **141** (Sitemap 119, über Links gefunden 15, über WordPress-Pfade gefunden 7) |
| echt | **22** |
| zweifel | **8** |
| vorlage | **111** |
| davon in der Sitemap | 119 URLs: 22 echt, 5 zweifel, 92 vorlage |
| Änderungen seit 01.10.2026 | **keine** (Sitemaps, robots.txt und alle 24 damals gespeicherten Praxisseiten byte-identisch) |
| Inhalte, die erst per JavaScript erscheinen | **keine** (20 Seiten in Chromium geprüft) |

- **Fakt:** Die XML-Sitemap (`/wp-sitemap.xml` mit 12 Teil-Sitemaps) enthält wie am 01.10.2026 genau 119 URLs; `/sitemap.xml` leitet per 301 auf `/wp-sitemap.xml` weiter, `/sitemap_index.xml` liefert 404 (Quelle: `alt/sitemaps/_abruf.json`).
- **Fakt:** Laut REST-API (`/wp-json/wp/v2/pages`) gibt es genau 42 veröffentlichte WordPress-Seiten, dieselben 42 wie in `wp-sitemap-posts-page-1.xml`; Beiträge (`/wp-json/wp/v2/posts`): 0; PDF-Dateien in der Mediathek (`/wp-json/wp/v2/media?mime_type=application/pdf`): 0. Auf keiner Seite ist eine PDF- oder andere Datei zum Herunterladen verlinkt (Quelle: `alt/html/wp-json_*.json`, Linkauswertung in `alt/auswertung.json`).
- **Fakt:** Die 22 echten Seiten sind genau die Seiten, die über Hauptmenü, Termin-Button und Footer-Menü erreichbar sind (siehe `navigation.md`). Keine echte Praxisseite liegt außerhalb dieser Navigation; über Links und Pfade kamen nur Weiterleitungen, Archive, Paginierungen und Feeds hinzu.
- **Fakt (neu gegenüber der Analyse vom 01.10.):** Die Leistungsseite Enzymtherapie enthält einen fachfremden Absatz über Prednisolon mit Link auf `https://prednisolonkaufen.com/` (Quelle: `alt/html/services_enzymtherapie.html`; bereits in `ENTWURF/02-website/rohdaten/leistungen/services_enzymtherapie.html` enthalten, in `ENTWURF/02-website/inhalt-struktur.md` aber nicht erwähnt). **Vermutung:** eingeschleuster Pharma-Spam-Link; Absatz und Link dürfen nicht übernommen werden, die Praxis sollte die alte WordPress-Installation prüfen lassen.
- **Fakt:** Auf der gesamten alten Website gibt es keinen Link zu Doctolib; „Termin“ führt auf ein Anfrageformular (`/termin/`).

**Annahmen für dieses Inventar**
- `im_menue = true` heißt: Die URL ist aus der seitenweiten Navigation erreichbar (Hauptmenü inklusive Mega-Menü und Termin-Button, Footer-Menü „Entdecken“, Footer-Button). Die genaue Position steht in `menueposition`.
- URL-Schreibvarianten derselben Seite (ohne Schrägstrich, ohne `www`, `http`) sind keine eigenen Seiten und stehen nur im Abschnitt „Weiterleitungen und geprüfte Pfade“. Echte alte Slugs mit 301-Weiterleitung (`/homepage-massage/`, `/blog/`) sind dagegen im Inventar.
- Wortzahl = Wörter im Hauptinhalt (`.main-wrapper` ohne Seitenleiste; Kopfleiste, Menü, Seitenkopf mit H1 und Footer sind nicht mitgezählt), gezählt im statischen HTML. Zugeklappte Akkordeons zählen mit. Abweichungen zu den Zahlen vom 01.10.2026 (z. B. Aufbaukuren 968 statt 1.010) kommen von der Zählmethode, denn das HTML ist identisch.
- Unterschied zur Zählung vom 01.10.2026 („94 von 119 Sitemap-URLs Demo“): Dort zählten die beiden Kategorie-Archive als echte Seiten. Hier sind sie „zweifel“, ebenso die beiden Slider-Einträge und der Topbar-Baustein mit echtem Inhalt; `/leistungsspektrum/` ist „vorlage“.

## 2. Vorarbeit im Entwurfs-Ordner

Ausführlich in [`docs/vorarbeit-entwurfsordner.md`](vorarbeit-entwurfsordner.md) (Phase 0). Kurzfassung:

- Die Voranalyse vom 01.10.2026 (Technik, Inhalt, lokales SEO, Recht/Datenschutz, Empfehlung) ist inhaltlich weiter gültig. Diese Analyse ergänzt sie um ein vollständiges URL-Inventar, eine belegte Faktenliste mit Quellen je Angabe und neue Funde (Spam-Link, Gelbfieberimpfstelle, Projektleitung).
- Der **Startseiten-Entwurf** (`ENTWURF/redesign/site/`) ist die Basis von Entwurf 1. Er nutzt die Farben aus Logo und alter Website (Marineblau `#2C3662`, Logo-Türkis `#00A09B`, Türkis `#47CCC8` / `#29AEAA`, Creme `#F6F3ED`), Fraunces + Figtree, das Bogenfenster aus dem Schloss-Emblem und rund 20 Animationen.
- **Glyphen:** Die eingebundenen Schriftdateien (Latin-Subset) enthalten **ğ, İ, ş, Ğ, Ş nicht**. Für Türkisch müssen die latin-ext-Subsets ergänzt werden.
- **Abweichungen von den Vorgaben**, die Entwurf 1 beheben muss: Termin-Knöpfe zeigen auf ein Anfrage-Platzhalterformular statt auf Doctolib; mobile Aktionsleiste liegt dauerhaft über dem Inhalt (Widerspruch zu „keine Sticky-Banner“); Einseiter ohne Sprachmenü; Hero nennt die Fachärztin erst nach der Naturheilkunde; Title/Description zu lang; ohne JavaScript bleiben Reiter-Panel und Mobilmenü unsichtbar; Zeitleiste bei reduzierter Bewegung leer; zwei Kontraste unter 4,5 : 1; kleine Touch-Ziele im Fuß; Schrift-Preloads mit `crossorigin` scheitern per `file://` in WebKit.
- Gemessen (11.10.2026, lokal): Lighthouse mobil 94/100/100, Desktop 98/100/100 (Performance/Barrierefreiheit/Best Practices; SEO nur wegen `noindex` niedriger), keine Drittanbieter, keine Cookies.

---

## 3. Seitenliste der echten Seiten (22)

Reihenfolge wie in der Navigation. Alle 22 stehen in der Sitemap, liefern HTTP 200 ohne Weiterleitung und sind mit dem Stand vom 01.10.2026 byte-identisch.

| # | URL | Titel (`<title>`) | Zweck | Menüposition | Wörter |
|---|---|---|---|---|---|
| 1 | `/` | PRAXIS ZUM SCHLOSS – Dr. Nalan BAGCI KAIKIS | Startseite: Slider (Porträt, „NALAN BAGCI KAIKIS“, „NATURMEDIZIN“), Praxisvorstellung mit Facharzt-Untertitel, Kacheln zu 6 Leistungsbereichen, Karussell der 11 naturheilkundlichen Leistungen, Leitsatz, Buttons Termin/Telefon, Corona-Hinweis, Stichwortlisten Vorsorge/Diagnostik, Links zu 4 Arztverzeichnissen | Hauptmenü 1 „STARTSEITE“; Logo; Footer „Entdecken“ 1 | 522 |
| 2 | `/unsere-praxis/` | UNSERE PRAXIS – PRAXIS ZUM SCHLOSS | Vorstellung der Ärztin: Zitat Dr. Edward Bach, Porträt, Lebenslauf in Ich-Form (Ausbildung, Stationen, Schwerpunkte, eigene Praxis seit Oktober 2019) | Hauptmenü 3 „UNSERE PRAXIS“; Footer „Entdecken“ 2; Copyright-Zeile (Name) | 293 |
| 3 | `/services/vorsorgeleistungen/` | VORSORGELEİSTUNGEN – PRAXIS ZUM SCHLOSS | Leistungsseite (Schulmedizin): Vorsorge-Übersicht als Akkordeon | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Leistungsspektrum“ › 1. VORSORGELEİSTUNGEN; Seitenleiste aller Leistungsseiten; Kachel auf der Startseite | 282 |
| 4 | `/services/impfungen-und-reisemedizin/` | IMPFUNGEN UND REISEMEDIZIN – PRAXIS ZUM SCHLOSS | Leistungsseite (Schulmedizin): Reiseimpfungen und Reisemedizin | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Leistungsspektrum“ › 2. IMPFUNGEN UND REISEMEDIZIN; Seitenleiste aller Leistungsseiten; Kachel auf der Startseite | 712 |
| 5 | `/services/therapeutische-leistungen/` | THERAPEUTISCHE-LEISTUNGEN – PRAXIS ZUM SCHLOSS | Leistungsseite (Schulmedizin): Hausärztliche Behandlung | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Leistungsspektrum“ › 3. THERAPEUTISCHE-LEISTUNGEN; Seitenleiste aller Leistungsseiten; Kachel auf der Startseite | 214 |
| 6 | `/services/diagnostische-leistungen/` | DIAGNOSTISCHE LEISTUNGEN – PRAXIS ZUM SCHLOSS | Leistungsseite (Schulmedizin): Diagnostik als Akkordeon | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Leistungsspektrum“ › 4. DIAGNOSTISCHE LEISTUNGEN; Seitenleiste aller Leistungsseiten; Kachel auf der Startseite | 214 |
| 7 | `/services/psychosomatische-medizin/` | PSYCHOSOMATISCHE MEDIZIN – PRAXIS ZUM SCHLOSS | Leistungsseite (Schulmedizin): Psychosomatische Betreuung | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Leistungsspektrum“ › 5. PSYCHOSOMATISCHE MEDIZIN; Seitenleiste aller Leistungsseiten; Kachel auf der Startseite | 339 |
| 8 | `/services/aderlass/` | ADERLASS – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Aderlass | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 1. ADERLASS; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 161 |
| 9 | `/services/face-recovery-massage/` | AKUPUNKTUR – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Akupunktur | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 2. AKUPUNKTUR; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 291 |
| 10 | `/services/aufbaukuren/` | AUFBAUKUREN – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Aufbaukuren/Aufbauinfusionen | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 3. AUFBAUKUREN; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 968 |
| 11 | `/services/blutegeltherapie/` | BLUTEGELTHERAPIE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Blutegeltherapie | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 4. BLUTEGELTHERAPIE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 195 |
| 12 | `/services/eigenbluttherapie/` | EIGENBLUTTHERAPIE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Eigenbluttherapie | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 5. EIGENBLUTTHERAPIE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 146 |
| 13 | `/services/enzymtherapie/` | ENZYMTHERAPIE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Enzymtherapie/Schlangengifttherapie | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 6. ENZYMTHERAPIE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 301 |
| 14 | `/services/mesotherapie/` | MESOTHERAPIE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Mesotherapie | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 7. MESOTHERAPIE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 333 |
| 15 | `/services/neuraltherapie-nach-huneke/` | NEURALTHERAPIE NACH HUNEKE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Neuraltherapie nach Huneke | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 8. NEURALTHERAPIE NACH HUNEKE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 160 |
| 16 | `/services/orthomolekulare-medizin/` | ORTHOMOLEKULARE MEDİZİN – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Orthomolekulare Medizin | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 9. ORTHOMOLEKULARE MEDİZİN; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 258 |
| 17 | `/services/phytotherapie-homoeopathie/` | PHYTOTHERAPIE / HOMÖOPATHIE – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Phytotherapie/Homöopathie | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 10. PHYTOTHERAPIE / HOMÖOPATHIE; Seitenleiste aller Leistungsseiten; Karussell der Startseite | 890 |
| 18 | `/services/schroepfen-hacamat-hijama/` | SCHRÖPFEN (HACAMAT, HIJAMA) – PRAXIS ZUM SCHLOSS | Leistungsseite (Naturheilkunde): Schröpfen (Hacamat, Hijama) | Hauptmenü 2 „LEISTUNGSSPEKTRUM“ › Spalte „Naturheilkundliche Therapien“ › 11. SCHRÖPFEN (HACAMAT, HIJAMA); Seitenleiste aller Leistungsseiten; Karussell der Startseite | 385 |
| 19 | `/kontakt/` | KONTAKT – PRAXIS ZUM SCHLOSS | Kontakt & Terminvergabe: Regeln zur Terminvergabe, Notfallnummern 116117/112, Kontaktformular, Sprechzeiten, Telefon, Fax, E-Mail | Hauptmenü 4 „KONTAKT“; Footer „Entdecken“ 3; Footer-Button „Kontakt“ | 210 |
| 20 | `/termin/` | Termin – PRAXIS ZUM SCHLOSS | Terminanfrage per Formular (Name, Telefon, E-Mail, Wunschdatum, vormittags/Nachmittag, Beschreibung, Einwilligung) | Button „Termin“ rechts im Hauptmenü; Button „Termin“ auf der Startseite | 36 |
| 21 | `/impressum/` | Impressum – PRAXIS ZUM SCHLOSS | Impressum (Angaben gemäß § 5 TMG) | Footer „Entdecken“ 4 | 72 |
| 22 | `/datenschutzerklaerung/` | Datenschutz­erklärung – PRAXIS ZUM SCHLOSS | Datenschutzerklärung der alten Website | Footer „Entdecken“ 5 | 3100 |

**Begründung und inhaltliche Hinweise je echter Seite**

| URL | Begründung (Indiz) | Hinweise für die Textüberarbeitung |
|---|---|---|
| `/` | Praxiseigene Inhalte (Name der Ärztin, „Fachärztin für Allgemeinmedizin, Akupunktur und Naturheilkunde, Reisemedizin“, Praxisbeschreibung, Telefon 0303223612), technisch aus der Theme-Demo „Homepage Massage“ umgebaut (WordPress-Titel laut REST-API, alter Slug /homepage-massage/ leitet hierher). | Corona-Hinweis „STOP !!! Bitte betreten Sie unsere Praxis nicht“ veraltet (Stand 2020/21); Überschrift „Wir betrachten den / sondern deren Ursachen.“ verstümmelt; keine H1; Teaser „ORTHOMOLEKULARE MEDİZİN“ zeigt den Mesotherapie-Text; Link ärzte-naturheilverfahren.de laut ENTWURF/02-website/inhalt-struktur.md tot (HTTP 404, 01.10.2026) |
| `/unsere-praxis/` | Lebenslauf der Ärztin mit überprüfbaren Einzelangaben (geb. 1973 in Berlin-Schöneberg, Studium FU Berlin/Humboldt-Universität/Charité, Facharzt für Allgemeinmedizin, Institut für Allgemeinmedizin der Charité, eigene Praxis seit Oktober 2019) und Porträt hausarzt-nalan-bagci-kaikis.png. | Seite beginnt mit Bach-Zitat „Versagen der modernen medizinischen Wissenschaft“; Tippfehler „Human Medizin“, „HumboldtUniversität“, „Charité`“ |
| `/services/vorsorgeleistungen/` | Praxistext „Die Prävention von Gesundheitsstörungen liegt uns sehr am Herzen“ mit Akkordeon zu Impfungen, Check-up 35, Hautkrebsscreening, Krebsvorsorge Frau/Mann, Darmkrebs-Früherkennung, J1/J2, Jugendarbeitsschutzuntersuchung, geriatrischem Basisassessment und psychosomatischer Grundversorgung. | Titel/H1 „VORSORGELEİSTUNGEN“ mit türkischem İ |
| `/services/impfungen-und-reisemedizin/` | Praxistext „REISEIMPFUNGEN – REISEMEDIZIN – ZUGELASSENE GELBFIEBERIMPFSTELLE“ mit Beratung vor Auslandsreisen (712 Wörter). | – |
| `/services/therapeutische-leistungen/` | Praxistext zur hausärztlichen Begleitung „von Halsschmerzen bis zum gleichzeitigen Auftreten von verschiedenen internistischen Erkrankungen“ einschließlich Überweisungen. | Titel/H1 „THERAPEUTISCHE-LEISTUNGEN“ mit Bindestrich |
| `/services/diagnostische-leistungen/` | Praxistext mit Akkordeon zu Anamnese, Labor, DMP-Programmen, Ruhe- und Belastungs-EKG, Langzeit-Blutdruck, Spirometrie, Sonographie, Duplexsonographie und Speziallabor (mit Hinweis, dass nicht alles von der Kasse übernommen wird). | – |
| `/services/psychosomatische-medizin/` | Praxistext „Körper und Seele sind untrennbar miteinander verbunden“ zur psychosomatischen Betreuung in der Hausarztpraxis. | – |
| `/services/aderlass/` | Leistungsbeschreibung „Der Aderlass ist vermutlich eines der ältesten Ausleitungsverfahren“, im Menü unter „Naturheilkundliche Therapien“ und im Startseiten-Karussell. | – |
| `/services/face-recovery-massage/` | Inhalt ist die Leistungsseite AKUPUNKTUR der Praxis (Titel, H1, Menüeintrag, Text zur traditionellen chinesischen Medizin); nur der Slug „face-recovery-massage“ stammt aus der Theme-Demo. | Slug passt nicht zum Inhalt; Tippfehler „damlas“ |
| `/services/aufbaukuren/` | Leistungsbeschreibung „Aufbauinfusionen – Aufbaukuren bei schweren Erkrankungen“ (968 Wörter, längste Leistungsseite). | Fließtext-Link auf koenigshof-gesundheitszentrum.de (Vermutung: Textquelle); Tippfehler „Aufkur“, „Revitaöisierend“ laut ENTWURF/02-website/inhalt-struktur.md |
| `/services/blutegeltherapie/` | Leistungsbeschreibung zum therapeutischen Einsatz von Blutegeln (Hirudo medicinalis) als Ausleitungsverfahren. | – |
| `/services/eigenbluttherapie/` | Leistungsbeschreibung Eigenbluttherapie (146 Wörter) mit Fließtext-Link „sprechen Sie uns an, wir beraten Sie gerne persönlich!“ auf die Kontaktseite. | Link zeigt auf https://hausarztpraxis-zum-schloss.de/kontakt/ (ohne www, 301) |
| `/services/enzymtherapie/` | Leistungsbeschreibung Enzymtherapie bzw. „SCHLANGENGIFTTHERAPIE“ der Praxis, im Menü und im Startseiten-Karussell. | fachfremder Absatz zu Prednisolon mit Link auf https://prednisolonkaufen.com/ (Vermutung: eingeschleuster Pharma-Spam-Link; war bereits am 01.10.2026 vorhanden); Herstellerformulierung „zum Wohle von Mensch und Tier“ |
| `/services/mesotherapie/` | Leistungsbeschreibung Mesotherapie (u. a. „Fältchen, Haarausfall, kleine Fettpölsterchen oder Cellulite“). | ästhetische Indikationen und Wirkversprechen („schnell, preiswert und nahezu schmerzfrei“) – für HWG-konforme Neufassung prüfen |
| `/services/neuraltherapie-nach-huneke/` | Leistungsbeschreibung Neuraltherapie mit Herleitung aus Hunekes Entdeckung 1925. | – |
| `/services/orthomolekulare-medizin/` | Leistungsbeschreibung „Medizin der richtigen Moleküle“, deren zweiter Absatz allerdings fachlich falsch aus der Mesotherapie-Seite stammt („mit sehr feinen Nadeln … in die Haut injiziert“). | Mesotherapie-Absatz entfernen; Titel „MEDİZİN“ mit türkischem İ |
| `/services/phytotherapie-homoeopathie/` | Leistungsbeschreibung „Typisch Homöopathie: Ähnlichkeitsprinzip, Globuli, Potenzierung & Co.“ und Phytotherapie (890 Wörter). | Passagen wortgleich aus einem TK-Artikel (laut ENTWURF/02-website/inhalt-struktur.md); Fließtext-Link auf phytodoc.de |
| `/services/schroepfen-hacamat-hijama/` | Leistungsbeschreibung „(BLUTIGES) SCHRÖPFEN (HACAMAT (TR.), HIJAMA (ARAB.)“ mit Geschichte und Anwendung. | Zitat mit Fremdkürzel „(S.S.)“ laut ENTWURF/02-website/inhalt-struktur.md |
| `/kontakt/` | Praxisspezifische Texte zur Terminvergabe, Sprechzeiten (Mo 9–12 & 15–17, Di/Mi/Fr 9–12, Do 9–12 & 15–18 Uhr), Telefon 030/3223612, Fax 030/3255050 (Icon „fa-fax“), E-Mail info@hausarztpraxis-zum-schloss.de und ein Kontaktformular. | Sprechzeiten überschrieben mit „Sonderöffnungszeiten während der Corona-Pandemie“; „neue Praxisräume … ab April 2021“ veraltet; Formular in Du-Form („Dein Name“, „Deine E-Mail“); Formular nutzt Google reCAPTCHA v3 |
| `/termin/` | Funktionsseite der Praxis mit Terminanfrage-Formular („Terminanfrage Senden“), Ziel des Termin-Buttons im Kopfbereich jeder Seite; eine Doctolib-Verlinkung gibt es auf der gesamten alten Website nicht. | außer dem Formular kein erklärender Text (36 Wörter); Formular nutzt Google reCAPTCHA v3 |
| `/impressum/` | Pflichtangaben der Praxis: „PRAXIS ZUM SCHLOSS, Allgemeinmedizinerin Nalan Bagci Kaikis, Schloßstraße 21, 14059 Berlin“, Telefon, E-Mail, Steuernummer ZN 11372101809. | unter der Überschrift „Umsatzsteuer-ID“ steht eine Steuernummer; Kammer, Berufsbezeichnung, berufsrechtliche Regelungen fehlen (vgl. ENTWURF/02-website/recht-datenschutz.md); Rechtsgrundlage „§ 5 TMG“ veraltet (vgl. ebd.) |
| `/datenschutzerklaerung/` | Seiteneigene Datenschutzerklärung (3.100 Wörter, WordPress-Änderungsdatum 03.06.2022) mit Abschnitten zu Borlabs Cookie, Google Fonts, Adobe Fonts und Kontaktformular – bezieht sich auf die Technik der alten Website. | inhaltlich an die alte Technik gebunden, für neue Website neu zu fassen |

Gruppierung der Leistungen laut Menü (**Fakt**, Quelle: `#menu-main-menu` in `alt/html/startseite.html`):
- **Leistungsspektrum** (5): Vorsorgeleistungen, Impfungen und Reisemedizin, Therapeutische Leistungen, Diagnostische Leistungen, Psychosomatische Medizin.
- **Naturheilkundliche Therapien** (11): Aderlass, Akupunktur (Slug `face-recovery-massage`), Aufbaukuren, Blutegeltherapie, Eigenbluttherapie, Enzymtherapie, Mesotherapie, Neuraltherapie nach Huneke, Orthomolekulare Medizin, Phytotherapie/Homöopathie, Schröpfen (Hacamat, Hijama).

---

## 4. Navigation, Kopfleiste, Fuß, Formulare

Quelle: Quelltext der Startseite und aller echten Seiten (identisch auf allen 25 Praxisseiten), `alt/texte/_kopf-fuss.md`.

**Kopfleiste (Topbar, nur Desktop):** „TEL: 0303223612“ · „Anschrift: Schloßstraße 21, 14059 Berlin“ · „Dr. Nalan Bagci Kaikis“ · Suchsymbol. Mobil ausgeblendet: Telefon und Adresse erscheinen auf dem Smartphone erst im Fuß.

**Hauptmenü** (Logo links, Button „Termin“ → `/termin/` rechts):

1. STARTSEITE → `/`
2. LEISTUNGSSPEKTRUM (Aufklapper, selbst `#`) mit Mega-Menü in zwei Spalten:
   - Spalte „Leistungsspektrum“ → `/services-category/leistungsspektrum/`: VORSORGELEİSTUNGEN, IMPFUNGEN UND REISEMEDIZIN, THERAPEUTISCHE-LEISTUNGEN, DIAGNOSTISCHE LEISTUNGEN, PSYCHOSOMATISCHE MEDIZIN
   - Spalte „Naturheilkundliche Therapien“ → `/services-category/naturheilkundliche-therapien/`: ADERLASS, AKUPUNKTUR (`/services/face-recovery-massage/`), AUFBAUKUREN, BLUTEGELTHERAPIE, EIGENBLUTTHERAPIE, ENZYMTHERAPIE, MESOTHERAPIE, NEURALTHERAPIE NACH HUNEKE, ORTHOMOLEKULARE MEDİZİN, PHYTOTHERAPIE / HOMÖOPATHIE, SCHRÖPFEN (HACAMAT, HIJAMA)
3. UNSERE PRAXIS → `/unsere-praxis/`
4. KONTAKT → `/kontakt/`

**Leistungsseiten:** Seitenleiste mit allen 16 Leistungen; Breadcrumbs „Startseite › Services › …“ im HTML, per CSS ausgeblendet. Kein Termin- oder Telefonhinweis am Seitenende.

**Fuß** (alle Seiten):
- Spalte „Allgemeinmedizinerin Nalan Bagci-Kaikis“: Telefon 0303223612, Adresse (beide als Link auf `#`, kein `tel:`-Link).
- Spalte „Entdecken“: Startseite, Unsere Praxis, Kontakt, Impressum, Datenschutzerklärung. **Unter 1200 px Breite ausgeblendet**, also sind Impressum und Datenschutz auf Smartphone und Tablet über die Navigation **nicht erreichbar** (Fakt, CSS-Klassen `hidden-xs hidden-ms hidden-sm hidden-md`).
- Sprechzeiten mit Uhr-Symbol: „Montag: 9°°- 12°° & 15°°- 17°° Uhr“, Di/Mi/Fr „9°°- 12°° Uhr“, Do „9°°- 12°° & 15°°- 18°° Uhr“ (Gradzeichen statt Minuten).
- Button „Kontakt“ → `/kontakt`.
- Copyright: „Hausarztpraxis-zum-Schloss 2022 © Alle Rechte vorbehalten Allgemeinmediziner Nalan Bağcı-Kaikis“.

**Formulare** (beide mit Google reCAPTCHA v3, das auf jeder Seite ohne Einwilligung lädt und den Konsolenfehler `grecaptcha is not defined` wirft):
- `/termin/`: Name, Telefon, E-Mail, Wunschdatum, vormittags/Nachmittag, Freitext „Beschreibungstext“, Einwilligung, „Terminanfrage Senden“.
- `/kontakt/`: Name, E-Mail, Nachricht in Du-Form („Dein Name“, „Deine E-Mail“).
- Beide Formulare entfallen in allen Entwürfen (Auftrag Abschnitt 6). Termine laufen künftig über Doctolib oder Telefon.

**CTAs der Startseite:** „TERMIN“ → `/termin/`; Telefon-Button ohne `tel:`-Link; Buttons „SPRECHZEITEN“, „NOTFALLNUMMERN“, „VORSORGEUNTERSUCHUNGEN“, „TERMINVERGABE“ ohne Ziel (`#`).

## 5. Inhalte und Textbefunde je Seite

Wortlaut aller Seiten: `alt/texte/<slug>.md` bzw. `ENTWURF/02-website/rohdaten/`. Fehler-, Fremdtext- und HWG-Befunde sind hier gesammelt. Grundlage: eigene Prüfung am 11.10.2026, `ENTWURF/02-website/inhalt-struktur.md` §2–3, `ENTWURF/02-website/recht-datenschutz.md` §5–6.

### Startseite `/`
- Slider: Porträt vor Blumenwiese, „NALAN BAGCI KAIKIS – Hier bieten wir Ihnen ein umfangreiches Spektrum an Diagnostik, Beratung und Therapien.“; zweiter Slide „NATURMEDIZIN – … Gesundheit und Schönheit mit wertvollen, naturheilkundlichen Therapien unterstützen?“ (Kosmetik-Anmutung, nicht übernehmen).
- Kasten „Die Hausarztpraxis zum Schloss“ mit Untertitel „Fachärztin für Allgemeinmedizin, Akupunktur und Naturheilkunde, Reisemedizin“. Diese Formulierung liest sich wie mehrere Facharzttitel; für die Entwürfe Fachärztin und Zusatzqualifikationen sachlich trennen.
- **Haltungssatz** (übernehmen): „Wir verstehen die hausärztliche Medizin als eine auf den einzelnen Menschen und sein Umfeld bezogene, dauerhaft angelegte Arzt-Patienten-Beziehung. Wir schätzen und achten das uns entgegengebrachte Vertrauen …“
- „Neben der Schulmedizin und Vorsorge liegen unsere Behandlungsschwerpunkte in der ALTERNATIVMEDIZIN.“ Begriff „Alternativmedizin“ widerspricht der Rollenhierarchie und wird ersetzt durch „ergänzend / integrativ“.
- Naturheilkunde-Karussell mit abgeschnittenen Teasern („Ein Enzymdefekt“); der Teaser „Orthomolekulare Medizin“ zeigt den Mesotherapie-Text.
- **Verstümmelte H2** „Wir betrachten den ⏎ sondern deren Ursachen.“ Der Absatz darunter ist vollständig: „Wir betrachten den Menschen als Ganzes und behandeln nicht die Symptome der Erkrankungen, sondern deren Ursachen.“ Nur der erste Teil („den Menschen als Ganzes“) wird übernommen; der Gegensatz Symptome/Ursachen klingt nach Wirkversprechen.
- **Veralteter Corona-Block** („STOP !!! Bitte betreten Sie unsere Praxis nicht!“, Risikogebiete, Senats-Hotline) – nicht übernehmen.
- Buttons ohne Ziel; Stichwortlisten „Check-up, Impfungen, Krebsvorsorge Mann, Hautkrebsvorsorge, Früherkennung, Darmkrebs“ und „Labordiagnostik, EKG, Akupunktur, Lungenfunktionsprüfung, Langzeit-Blutdruckmessung“.
- Textlinks zu ärzte-naturheilverfahren.de (Profil **HTTP 404**), jameda, arzt-auskunft, sanego.
- Keine H1, keine Meta-Description.

### Unsere Praxis `/unsere-praxis/`
- Beginnt mit einem Zitat von Edward Bach („Versagen der modernen medizinischen Wissenschaft …“). Es wirkt herabsetzend gegenüber der Schulmedizin, die die Praxis selbst anbietet → **nicht übernehmen**.
- Porträt (freigestellt) und Lebenslauf in Ich-Form, vollständig in Abschnitt 6.3.
- Tippfehler „Human Medizin“, „HumboldtUniversität“, „Charité`“, „Nachdem Erwerb“.
- „… Forschungsprojekt … leitete“: laut Projektsteckbrief der Bundesärztekammer war die Projektleiterin eine andere Person → bis zur Klärung neutral formulieren („in Lehre und Forschung am Institut für Allgemeinmedizin der Charité“).
- Geburtsjahr 1973 und Geburtsort: belegt, für die neue Seite nicht nötig (redaktionelle Entscheidung, keine Übernahme).

### Vorsorgeleistungen `/services/vorsorgeleistungen/`
- Gute, wiederverwendbare Übersicht im Akkordeon: Impfungen, Check-up 35, Hautkrebsscreening, Krebsvorsorge Frau (Information und Terminvermittlung bei Fachkolleginnen/-kollegen), Krebsvorsorge Mann, Darmkrebs-Früherkennung, J1/J2, Jugendarbeitsschutzuntersuchung, hausärztlich-geriatrisches Basisassessment, psychosomatische Grundversorgung.
- Altersgrenzen und Intervalle teils nicht mehr aktuell (z. B. Darmkrebs-Früherkennung) → in den neuen Texten allgemein und korrekt formulieren, Intervalle nur nennen, wo sicher; Prüfung durch die Ärztin vorsehen.
- H1 „VORSORGELEİSTUNGEN“ mit türkischem İ.

### Impfungen und Reisemedizin `/services/impfungen-und-reisemedizin/`
- Reiseimpfberatung „spätestens 8 Wochen vor Reiseantritt“, auch kurzfristig; Malaria-Prophylaxe-Beratung; Liste der Reiseimpfungen; Impfungen für Erwachsene, Kinder, Jugendliche nach STIKO.
- **„ZUGELASSENE GELBFIEBERIMPFSTELLE“**: Die amtliche Liste der Berliner Gelbfieberimpfstellen (Senatsverwaltung, abgerufen 11.10.2026, 48 Einträge) enthält **keinen** Eintrag für die Praxis → **nicht übernehmen**, bis die Ärztin die Zulassung bestätigt (`docs/offene-fragen.md`).

### Therapeutische Leistungen `/services/therapeutische-leistungen/`
- Hausärztliche Behandlung „von Halsschmerzen bis …“, Überweisungen, Medikamentenkoordination, Chronikerprogramme (DMP), Injektionen/Infusionen („separater Liegenraum“), Wundbehandlung und Verbände, kleine chirurgische Eingriffe, Narkose-/OP-Vorbereitung, Vitaminkuren („keine Kassenleistung“), Belehrung nach § 43 IfSG.
- H1 „THERAPEUTISCHE-LEISTUNGEN“ mit Bindestrich.

### Diagnostische Leistungen `/services/diagnostische-leistungen/`
- Anamnese, körperliche Untersuchung, Labor (großes Labor, Werte am Folgetag), DMP (Hypertonie, Asthma, COPD, KHK, Diabetes Typ 1/2), Ruhe- und Belastungs-EKG, Langzeit-Blutdruck, Spirometrie, Sonographie, Duplexsonographie (ohne Text), Speziallabor („nicht alle … von der Krankenkasse übernommen“). Inhaltlich solide.

### Psychosomatische Medizin `/services/psychosomatische-medizin/`
- Bio-psycho-soziales Modell, Beispiele für Beschwerdebilder, Ablauf (Anamnese → Ziel → Behandlungskonzept), Methoden: Akupunktur, **ärztliche Hypnotherapie**, Gespräche. Eine formale Qualifikation für Hypnotherapie ist nicht genannt → nur als Methode erwähnen, offene Frage.
- „Kurse oder auch Einzelberatungen … können Ihnen dabei helfen“: unklar, ob die Praxis Kurse anbietet → nicht als Angebot formulieren.

### Naturheilkundliche Leistungsseiten (11)

Allgemein: keine Angaben zu Dauer, Ablauf in der Praxis oder Kosten (Ausnahme Schröpfen: „bezahlen … die Kassen das Schröpfen nicht“; Vitaminkuren: „keine Kassenleistung“). Mehrere Seiten enthalten Wirk- und Heilaussagen, die nach HWG/Berufsordnung auffällig sind (`ENTWURF/02-website/recht-datenschutz.md` §5.2).

| Seite | Befunde |
|---|---|
| Akupunktur (`/services/face-recovery-massage/`) | Slug aus dem Theme-Demo; „Die Behandlungserfolge sprechen für sich.“ (Erfolgsversprechen); WHO-Verweis ohne Quelle; ein Absatz zum Schröpfen steht fälschlich hier; Tippfehler „damlas“ |
| Mesotherapie | Ästhetische Indikationen und Werbesprache („schnell, preiswert und nahezu schmerzfrei korrigieren“, „heilende Wirkung“) |
| Orthomolekulare Medizin | Zweiter Absatz stammt aus der Mesotherapie-Seite (fachlich falsch); lange Indikationsliste; „Stärkung des Immunsystems“ |
| Phytotherapie / Homöopathie | Passagen wortgleich aus einem TK-Artikel (Urheberrecht); türkische Absätze und Alt-Texte („HOMEOPATİ“, „KAN ALMA“) als Fremdtext-Reste; Link auf phytodoc.de |
| Schröpfen (Hacamat, Hijama) | Gute Methodenbeschreibung (blutig, trocken, Schröpfmassage), Gegenanzeigen, Aufklärung; „Giftstoffe aus dem Körper ‚gesaugt‘“ (Wirkaussage); Michalsen-Zitat mit Fremdkürzel „(S.S.)“ und ohne Fundstelle |
| Eigenbluttherapie | Kurz (146 Wörter); Arndt-Schulz-Regel als Fremdzitat; Gegenanzeigen genannt |
| Blutegeltherapie | Gegenanzeigen ausführlich; „Vielzahl von Erkrankungen“ ohne Liste |
| Neuraltherapie nach Huneke | Kurz; Geschichte (Huneke 1925, „Sekundenphänomen“); Gegenanzeige Gerinnungsstörungen |
| Aufbaukuren | Längste Seite (≈ 1.000 Wörter); „Leberentgiftung“, „Entgiftungskur“, „Stärkung des Immunsystems“, Haut-und-Haare-Kur, lange Vitamin-C-Indikationsliste (u. a. Krebsbegleitung) mit Quelle „www.Pascoe.de“ (Hersteller); Kurschemata mit Anzahl Infusionen; Fließtext-Link auf koenigshof-gesundheitszentrum.de; Tippfehler „Aufkur“, „Revitaöisierend“ |
| Enzymtherapie | Überschrift „SCHLANGENGIFTTHERAPIE“; Herstellertext („zum Wohle von Mensch und Tier“); lange Krankheitsliste inkl. „Karzinomprophylaxe“; **eingeschleuster Spam-Absatz mit Link auf prednisolonkaufen.com** (Vermutung: Pharma-Spam; die alte Installation sollte geprüft werden) |
| Aderlass | Fachlich problematisch („Blutvergiftung“, Übergewicht als Indikation); Menge 50–300 ml; Alt-Text „KAN ALMA“ (türkisch) |

### Kontakt `/kontakt/`
- Wertvolle Regeln zur Terminvergabe (feste Termine; auch bei Akutem vorher anrufen; Kinder und Schwerkranke gelegentlich vorgezogen; Patienten mit Termin haben Vorrang).
- Notfallhinweis 116117/112 mit Links auf KV Berlin (Pfad vermutlich veraltet) und Berliner Feuerwehr.
- Sprechzeiten unter der Überschrift „Sonderöffnungszeiten während der Corona-Pandemie“; „neue Praxisräume … ab April 2021“ veraltet.
- Telefon 030/3223612, Fax 030/3255050 (nur Fax-Symbol), E-Mail; Kontaktformular in Du-Form.

### Termin `/termin/`
- Nur das Anfrageformular, 36 Wörter Text. Entfällt; Inhalt geht in „Termin & Kontakt“ auf.

### Impressum `/impressum/` und Datenschutzerklärung `/datenschutzerklaerung/`
- Impressum: „Angaben gemäß § 5 TMG“ (veraltet, heute DDG), Kammer, Berufsbezeichnung/Staat, berufsrechtliche Regelungen und KV fehlen; Steuernummer unter der Überschrift „Umsatzsteuer-ID“; Link auf die abgeschaltete OS-Plattform; Telefon „+49 0303223612“.
- Datenschutzerklärung: Generatortext (Stand 2022) zur alten Technik: falscher Hoster, Borlabs Cookie und Adobe Fonts beschrieben, aber nicht im Einsatz; reCAPTCHA auf „berechtigtes Interesse“ gestützt; Gesundheitsdaten, Server-Logs, Speicherdauer fehlen; Abschnitte doppelt. Für die neue, statische Website ohne Formular, Cookies und Drittanbieter neu fassen.

---

## 6. Belegte Faktenliste

**Lesehilfe**

**Quellenkürzel**

| Kürzel | Bedeutung |
|---|---|
| `W:/pfad/` | Seite der alten Website `https://www.hausarztpraxis-zum-schloss.de/pfad/`, abgerufen 11.10.2026; Wortlaut in `alt/texte/<slug>.md` |
| `W:Kopf` / `W:Fuß` | Topbar, Menü bzw. Footer, auf allen Seiten gleich (`alt/texte/_kopf-fuss.md`) |
| `W:API` | WordPress-REST-API der alten Website (`/wp-json/`), abgerufen 11.10.2026, gespeichert in `alt/roh/api/` |
| `E:…` | Datei im ENTWURF-Ordner `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf/…` |
| `KBV` | `ENTWURF/intern/00-plausibilitaet/belege/116117-arztsuche-bagci-kaikis-2026-10-01.png` (amtliche Arztsuche 116117, Bundesarztregister) |
| `AA` | arzt-auskunft.de: `E:02-website/rohdaten/verzeichnisse/arzt-auskunft.html` und `ENTWURF/intern/00-plausibilitaet/belege/verzeichnis-arzt-auskunft-2026-10-01.txt` |
| `JA` | jameda: `E:02-website/rohdaten/verzeichnisse/jameda.html` und `ENTWURF/intern/00-plausibilitaet/belege/verzeichnis-jameda-2026-10-01.txt` |
| `SA` | sanego: `E:02-website/rohdaten/verzeichnisse/sanego.html` und `ENTWURF/intern/00-plausibilitaet/belege/verzeichnis-sanego-2026-10-01.txt` |
| `X:…` | externe Quelle (nur als Prüfhinweis, nicht als Inhaltsquelle für die Entwürfe) |

**Status:** `belegt Website` · `belegt Verzeichnis` (inkl. KBV) · `widersprüchlich` · `fehlt`. Zusätzlich gekennzeichnet: **Fakt** (= belegt), **Vermutung**, **Annahme**.

---

### 6.1 Name der Ärztin und Praxisname

#### 6.1.1 Schreibweisen des Namens

| Schreibweise (wörtlich) | Fundstelle | „Dr.“ | Status |
|---|---|---|---|
| „Dr. Nalan BAGCI KAIKIS“ | `<title>` der Startseite „PRAXIS ZUM SCHLOSS – Dr. Nalan BAGCI KAIKIS“ (`W:/`); Untertitel der WordPress-Installation (`W:API`, `alt/roh/api/wp-json-root.json`, Feld `description`) | ja | belegt Website |
| „Dr. Nalan Bagci Kaikis“ | Topbar, alle Seiten, nur Desktop (`W:Kopf`) | ja | belegt Website |
| „NALAN BAGCI KAIKIS“ | Startseite, Slider 1, Überschrift (`W:/`) | nein | belegt Website |
| „Allgemeinmedizinerin Nalan Bagci-Kaikis“ | Unsere Praxis, H3 (`W:/unsere-praxis/`); Footer-Überschrift, alle Seiten (`W:Fuß`) | nein | belegt Website |
| „Allgemeinmedizinerin Nalan Bagci Kaikis“ | Impressum (`W:/impressum/`); Datenschutzerklärung, „verantwortliche Stelle“ (2×) und „Hoster“ (`W:/datenschutzerklaerung/`) | nein | belegt Website |
| „Allgemeinmediziner Nalan Bağcı-Kaikis“ (türkische Zeichen ğ, ı; männliche Berufsform) | Footer-Copyrightzeile „Hausarztpraxis-zum-Schloss 2022 © Alle Rechte vorbehalten Allgemeinmediziner Nalan Bağcı-Kaikis“ (`W:Fuß`) | nein | belegt Website |
| Dateiname „hausarzt-nalan-bagci-kaikis.png“ | Porträt auf Unsere Praxis (`W:/unsere-praxis/`) | – | belegt Website |
| „Frau Nalan Bagci-Kaikis“ | KBV; AA | nein | belegt Verzeichnis |
| „Nalan Bagci-Kaikis“ | JA, SA | nein | belegt Verzeichnis |
| „Dr. Nalan Bagci“ (Unterschrift), Anzeigename „Nalan Bagci Kaikis“ | Anfrage-Mail (`ENTWURF/intern/input/anfrage.md`) | ja | belegt (Mail der Ärztin) |

- **Fakt:** Beruflich geführter Name laut Register und allen Verzeichnissen: **Nalan Bagci-Kaikis** (mit Bindestrich, ohne türkische Sonderzeichen, ohne Titel). Quelle: KBV, AA, JA, SA.
- **Widersprüchlich:** akademischer Grad „Dr.“ – **ja** in `<title>`, WordPress-Untertitel, Topbar und Mail-Unterschrift; **nein** in Impressum, Datenschutzerklärung, Footer, Unsere Praxis, Slider, KBV, AA, JA, SA. (Patientinnen und Patienten schreiben in Jameda-Bewertungen „Frau Dr. …“ – keine Quelle für den Grad.) Bewertung siehe `ENTWURF/intern/00-plausibilitaet/plausibilitaet.md` („nicht verifizierbar … mit der Kundin klären“; Prototyp nutzt Registerschreibweise ohne Titel). Status: **widersprüchlich**.
- Bindestrich: mit (Unsere Praxis, Footer, alle Verzeichnisse) / ohne (Topbar, Slider, Impressum, Datenschutz, `<title>`). Status: **widersprüchlich**.

#### 6.1.2 Praxisname

| Variante (wörtlich) | Fundstelle | Status |
|---|---|---|
| „PRAXIS ZUM SCHLOSS“ | WordPress-Seitenname (alle `<title>`: „… – PRAXIS ZUM SCHLOSS“), Logo-Alt-Text, Impressum, Datenschutzerklärung (`W:/impressum/`, `W:/datenschutzerklaerung/`) | belegt Website |
| „Die Hausarztpraxis zum Schloss“ | Startseite, H3 (`W:/`) | belegt Website |
| „Die Hausarztpraxis zum Schloß“ / „Die Hausarztpraxis zum Schloß bietet Ihnen …“ | Startseite, H6 und Einleitungstext (`W:/`) | belegt Website |
| „Hausarztpraxis-zum-Schloss“ | Footer-Copyright (`W:Fuß`) | belegt Website |
| Domain `hausarztpraxis-zum-schloss.de` | alle Seiten | belegt Website |
| „PRAXIS ZUM SCHLOSS“ | AA | belegt Verzeichnis |
| „Hausarztpraxis Nalan Bagci-Kaikis Fachärztin f. Allgemeinmedizin“ | JA, SA | belegt Verzeichnis |

- **Fakt:** Fast namensgleiche Nachbarpraxis „Praxis **am** Schloss“ (Klausenerplatz 2, ca. 350 m) – Verwechslungsgefahr. Quelle: `E:01-praxis/praxis-recherche.md` §5–6.

### 6.2 Berufsbezeichnung, Facharzt, Zusatzbezeichnungen

| Angabe (wörtlich) | Quelle | Status |
|---|---|---|
| „Fachärztin für Allgemeinmedizin, Akupunktur und Naturheilkunde, Reisemedizin“ (2× auf der Startseite: Untertitel unter „Die Hausarztpraxis zum Schloss“ und H3 im Abschnitt „Die Hausarztpraxis zum Schloß“) | `W:/` | belegt Website (Formulierung problematisch, s. u.) |
| „Allgemeinmedizinerin Nalan Bagci-Kaikis“ + Unterzeile „Naturheilverfahren, Akupunktur und Reisemedizin“ | `W:/unsere-praxis/` | belegt Website |
| „Nachdem Erwerb des Facharztes für Allgemeinmedizin, erweiterte ich meine medizinischen Schwerpunkte, diese sind die traditionell chinesische Medizin, kurz TCM, Akupunkturbehandlungen, Reisemedizin, sowie Naturheilkunde auch in der orthopädischen Anwendung.“ | `W:/unsere-praxis/` | belegt Website |
| „Die Naturheilkundliche Ausbildung erwarb ich im Immanuel Krankenhaus Berlin.“ | `W:/unsere-praxis/` | belegt Website |
| „Auch habe ich mich auf die Betreuung und Diagnostik psychosomatischer Krankheitsbilder spezialisiert.“ | `W:/unsere-praxis/` | belegt Website |
| „Allgemeinmedizinerin“ (Impressum, Footer), „Allgemeinmediziner“ (Footer-Copyright) | `W:/impressum/`, `W:Fuß` | belegt Website |
| „Hausarzt; Allgemeinmedizin“ | KBV | belegt Verzeichnis (amtlich) |
| „Fachärztin für Allgemeinmedizin“; Fachgebiet „Allgemeinmedizin“; Funktion „Hausarzt“; „Teilgebiets-/Zusatzbezeichnungen: Akupunktur (Zusatzbezeichnung), Homöopathie, Naturheilverfahren“ | AA | belegt Verzeichnis |
| „Allgemeinmedizinerin · Akupunkteurin“; „Weiterbildungen und Tätigkeitsschwerpunkte: Arzt für Naturheilverfahren“ | JA | belegt Verzeichnis |
| „Fachgebiete: Fachärztin für Allgemeinmedizin“; „Weiterbildungen: Akupunktur, Naturheilverfahren, Hausärztin“; „Allgemeinmedizinerin, Ärztin“ | SA | belegt Verzeichnis |

Bewertung je Bezeichnung:

- **Fachärztin für Allgemeinmedizin:** Website + AA + SA + KBV (Fachgebiet). **Fakt**, Status belegt Website und Verzeichnis.
- **Akupunktur (Zusatzbezeichnung):** als Zusatzbezeichnung nur in AA ausdrücklich; SA „Weiterbildung“, JA „Akupunkteurin“; Website nennt Akupunktur nur als Schwerpunkt/Leistung, nicht als Zusatzbezeichnung. Status: **belegt Verzeichnis**, nicht bei der Ärztekammer verifiziert.
- **Naturheilverfahren:** AA, SA, JA („Arzt für Naturheilverfahren“); Website: „Naturheilverfahren“ (Unterzeile), „Naturheilkundliche Ausbildung … Immanuel Krankenhaus Berlin“. Status: **belegt Verzeichnis**, Website nennt sie nicht als Zusatzbezeichnung.
- **Homöopathie:** nur AA. Website bietet Homöopathie als Leistung an, nennt sie aber nicht als Qualifikation; SA und JA führen sie nicht. Status: **widersprüchlich** (nur eine Quelle).
- **Reisemedizin:** nur Website (Startseite, Unsere Praxis, Lebenslauf). Laut `E:02-website/recht-datenschutz.md` §5.2 keine Bezeichnung der Weiterbildungsordnung. Status: **belegt Website** (als Schwerpunkt, nicht als Zusatzbezeichnung).
- **Traditionelle chinesische Medizin (TCM):** nur Website (Lebenslauf). Status: belegt Website.
- **Psychosomatik:** Website: „spezialisiert“ (Lebenslauf), Leistung „Psychosomatische Grundversorgung“ (`W:/services/vorsorgeleistungen/`), „ärztliche Hypnotherapie“ (`W:/services/psychosomatische-medizin/`). Eine formale Qualifikation (z. B. Psychosomatische Grundversorgung als Fortbildung) ist nirgends genannt. Status: belegt Website (Eigenangabe).
- **Hinweis:** Die Startseiten-Formel „Fachärztin für Allgemeinmedizin, Akupunktur und Naturheilkunde, Reisemedizin“ liest sich wie mehrere Facharzttitel. Für die Entwürfe sachlich trennen (Einschätzung `E:02-website/recht-datenschutz.md` §5.2).

### 6.3 Lebenslauf (wörtlich, `W:/unsere-praxis/`)

Reihenfolge wie im Original. Jahreszahlen nur, wo sie dort stehen. Alle Zeilen: **belegt Website** (Eigenangabe, nicht extern geprüft).

| # | Station | Wortlaut | Jahr laut Website |
|---|---|---|---|
| 1 | Geburt, Schule | „Ich bin 1973 in Berlin Schöneberg geboren, die Grundschule und Gymnasialzeit habe ich in Berliner Schulen verbracht.“ | 1973 |
| 2 | Erstes Studium | „Nach dem Abitur habe ich für ein Jahr Wirtschaftsingenieurwesen an der TU Berlin studiert. Hier entdeckte ich die Sehnsucht nach einem Studienfach, wo der Mensch selber als Ganzes im Mittelpunkt steht.“ | – (Dauer: ein Jahr) |
| 3 | Wechsel | „So wechselte ich zum Studium der Humanmedizin.“ | – |
| 4 | Medizinstudium | „Ich absolvierte das Studium der Human Medizin vorklinisch an der Freien Universität Berlin und den klinischen Teil an der HumboldtUniversität und der Charité` Berlin.“ | – |
| 5 | Überleitung | „Dem Studium folgten Erfahrungen in unterschiedlichen Bereichen der Medizin.“ | – |
| 6 | Schering | „Als Medical Datamanagerin in der Schering AG Berlin erwarb ich tiefgründige Erfahrungen der Pharmakologie.“ | – |
| 7 | Lehrpraxen, Klinik | „Anschließend arbeitete ich in verschiedenen Lehrpraxen der Charité in Berlin und erwarb stationäre Erfahrungen in der Evangelischen Elisabethklinik.“ | – |
| 8 | Institut für Allgemeinmedizin, Projekt | „Als wissenschaftliche Mitarbeiterin im Institut für Allgemeinmedizin der Charité arbeitete ich eineinhalb Jahre in Lehre und Forschung, wo ich das Forschungsprojekt „Innovative Umsetzungsstrategien zur Implementierung der Leitlinie Chronische Herzinsuffizienz in einem Medizinischen Versorgungszentrum“ leitete.“ | – (Dauer: eineinhalb Jahre) |
| 9 | Lehre | „Zu meinen Aufgaben gehörte es auch Vorlesungen und Seminare für die Lehre zu gestalten.“ | – |
| 10 | Facharzt, Schwerpunkte | „Nachdem Erwerb des Facharztes für Allgemeinmedizin, erweiterte ich meine medizinischen Schwerpunkte, diese sind die traditionell chinesische Medizin, kurz TCM, Akupunkturbehandlungen, Reisemedizin, sowie Naturheilkunde auch in der orthopädischen Anwendung.“ | – |
| 11 | Naturheilkunde-Ausbildung | „Die Naturheilkundliche Ausbildung erwarb ich im Immanuel Krankenhaus Berlin.“ | – |
| 12 | Psychosomatik | „Auch habe ich mich auf die Betreuung und Diagnostik psychosomatischer Krankheitsbilder spezialisiert.“ | – |
| 13 | Meviva | „Ich habe ab 2010 bei Meviva mit renommierten und fachlich sehr kompetenten Ärzten aus den Fächern der Orthopädie und Chirurgie zusammen gearbeitet und dadurch mein Wissen in diesen Fachbereichen vertiefen dürfen.“ | ab 2010 |
| 14 | Eigene Praxis | „Seit Oktober 2019 befinde ich mich in meiner eigenen ganzheitlich orientierten Hausarztpraxis.“ | seit 10/2019 |
| 15 | Standort Schloßstraße | „Wir freuen uns Sie in unseren neuen Praxisräumen in der Schlossstr. 21, 14059 Berlin ab April 2021 begrüssen zu dürfen.“ (`W:/kontakt/`) | ab 04/2021 |

- **Fehlt:** Jahr des Studienabschlusses/der Approbation, Jahr der Facharztanerkennung, Zeitraum Schering, Lehrpraxen, Elisabethklinik, Charité-Institut, Immanuel Krankenhaus; Ende der Meviva-Zeit; früherer Praxisstandort Oktober 2019 bis April 2021 („neue Praxisräume“ setzt einen früheren Standort voraus – **Vermutung**). Was „Meviva“ ist (Praxis, MVZ), steht nirgends.
- **Prüfhinweis zu Station 8 (externe Quelle, `X:` [BÄK-Projektsteckbrief](https://www.bundesaerztekammer.de/fileadmin/user_upload/_old-files/downloads/146_Visitenkarte_2010.pdf), lokal `alt/roh/extern/baek-visitenkarte-146.pdf`):** Das Projekt heißt dort „Innovative Umsetzungsstrategien zur Implementierung der Leitlinie „Chronische Herzinsuffizienz“ in einem Medizinischen Versorgungszentrum **und in Individualpraxen**“, Institut für Allgemeinmedizin, Charité Campus Mitte, Laufzeit 01.09.2006–31.08.2008, **Projektleiterin: Prof. Dr. Vittoria Braun**. Die genannten Veröffentlichungen führen den Namen Bagci nicht als Autorin. Die Website sagt „leitete“. Status: **widersprüchlich** → Rolle mit der Ärztin klären (z. B. „wirkte mit“ / „koordinierte“); bis dahin in den Entwürfen nicht „leitete“ schreiben.

### 6.4 Lehre, Lehrpraxis, Lehrärztin

Alles, was auf der alten Website, in den Verzeichnissen und im ENTWURF-Ordner zu Lehre steht (vollständige Suche nach „Lehr*“, „Studier*“, „Famul*“, „PJ“, „Praktisches Jahr“, „Weiterbild*“, „Ausbild*“, „Dozent*“, „Vorlesung“, „Seminar“):

| Wortlaut | Quelle | Bezug | Status |
|---|---|---|---|
| „Anschließend arbeitete ich in verschiedenen Lehrpraxen der Charité in Berlin …“ | `W:/unsere-praxis/` | **frühere** Tätigkeit **in** Lehrpraxen (nicht als Inhaberin einer Lehrpraxis) | belegt Website |
| „Als wissenschaftliche Mitarbeiterin im Institut für Allgemeinmedizin der Charité arbeitete ich eineinhalb Jahre in Lehre und Forschung …“ | `W:/unsere-praxis/` | frühere Tätigkeit | belegt Website |
| „Zu meinen Aufgaben gehörte es auch Vorlesungen und Seminare für die Lehre zu gestalten.“ | `W:/unsere-praxis/` | frühere Tätigkeit | belegt Website |
| „Lehrpraxen der Charité, Evangelische Elisabethklinik; wissenschaftliche Mitarbeiterin am Institut für Allgemeinmedizin“ / „Lehre und Forschung am Institut für Allgemeinmedizin der Charité“ | `E:redesign/site/index.html` Z. 311, 321 | Übernahme aus der Website (keine neue Quelle) | – |

- **Ausdrücklicher Vermerk:** Dass die **heutige Praxis eine Lehrpraxis** ist (z. B. akademische Lehrpraxis der Charité), dass Frau Bagci-Kaikis **heute Lehrärztin/Lehrbeauftragte** ist, dass sie **Studierende, Famulantinnen/Famulanten, PJ-Studierende oder Ärztinnen und Ärzte in Weiterbildung** betreut oder eine **Weiterbildungsbefugnis** hat, steht **weder auf der alten Website noch in KBV, AA, JA, SA noch irgendwo im ENTWURF-Ordner**. Status: **fehlt**.
- Eine Websuche am 11.10.2026 („Bagci-Kaikis“ Lehrpraxis Charité) ergab ebenfalls keinen Treffer (`X:` Suchprotokoll dieser Sitzung).
- **Folge für die Entwürfe:** Die im Master-Prompt geforderte Rolle „Lehrärztin (Lehrpraxis)“ ist eine Vorgabe des Auftraggebers ohne Beleg. Belegbar ist nur die **frühere Lehr- und Forschungstätigkeit an der Charité** (Zeilen oben). Eine Aussage „Lehrpraxis“ nur als markierter Platzhalter bis zur Bestätigung durch die Ärztin (Name der Universität, seit wann, welche Ausbildungsabschnitte) → `docs/offene-fragen.md`.

### 6.5 Adresse, Telefon, Fax, E-Mail, Web

| Angabe | Wortlaut / Schreibweise | Quelle | Status |
|---|---|---|---|
| Adresse | „Schloßstraße 21, 14059 Berlin“ | Topbar („Anschrift:“), Footer („Adresse:“), Impressum, Datenschutz (`W:Kopf`, `W:Fuß`, `W:/impressum/`) | belegt Website |
| Adresse | „Schlossstr. 21, 14059 Berlin“ | `W:/kontakt/` | belegt Website |
| Adresse | „Schloßstraße 21, 14059 Berlin“ (KBV); „Schloßstraße 21, 14059 Berlin-Charlottenburg“ (AA); „Schloßstr. 21, 14059 Berlin“ (JA, SA) | KBV, AA, JA, SA | belegt Verzeichnis – **konsistent** |
| Ortsteil | Charlottenburg | AA; `ENTWURF/intern/00-plausibilitaet/plausibilitaet.md` | belegt Verzeichnis |
| Telefon | „0303223612“ (Topbar „TEL:“, Footer „Telefon:“, Startseiten-Button) | `W:Kopf`, `W:Fuß`, `W:/` | belegt Website |
| Telefon | „030/3223612“ mit Telefon-Icon (`fa-phone-volume`) | `W:/kontakt/` | belegt Website |
| Telefon | „+49 0303223612“ (formal falsch) | `W:/impressum/` | belegt Website |
| Telefon | „+49 303223612“ (1. Block) und „303223612“ (2. Block, ohne Vorwahlzeichen) | `W:/datenschutzerklaerung/` | belegt Website |
| Telefon | „030 3223612“ (KBV, Telefon-Icon; JA), „030 / 3 22 36 12“ (AA, `tel:+49303223612`), „030/3223612“ (SA) | KBV, AA, JA, SA | belegt Verzeichnis – Nummer **konsistent** |
| Telefon-Links | Kein `tel:`-Link auf der alten Website; Telefon-„Links“ zeigen auf `#` | `W:Kopf`, `W:Fuß`, `W:/` | Fakt |
| **030 3255050** | „030/3255050“ mit **Fax-Icon** (`fas fa-fax`), ohne Beschriftung | `W:/kontakt/` (Quelltext) | belegt Website (nur Icon) |
| 030 3255050 | Drucker-/Fax-Symbol | KBV (Bildausschnitt geprüft) | belegt Verzeichnis |
| 030 3255050 | „030 / 3 25 50 50“ mit Icon `icon-print` (Fax) | AA (Quelltext) | belegt Verzeichnis |
| 030 3255050 | „Fax: 030/3255050“ | SA | belegt Verzeichnis |
| 030 3255050 | als zweite „Telefonnummer“ | JA | **widersprüchlich** |
| Zusammenfassung 3255050 | Website, KBV, AA und SA kennzeichnen sie als **Fax**; nur Jameda als Telefon. (Die Voranalyse `E:01-praxis/praxis-recherche.md` §3 führte Website und AA als „Telefon“ – das ist nach Quelltext/Bild nicht zutreffend.) | | **überwiegend belegt als Fax**, Jameda widersprüchlich |
| E-Mail | „info@hausarztpraxis-zum-schloss.de“ | `W:/kontakt/`, `W:/impressum/`, `W:/datenschutzerklaerung/`, KBV | belegt Website und Verzeichnis |
| Website | `https://www.hausarztpraxis-zum-schloss.de` | AA, KBV (E-Mail-Domain) | belegt |
| Online-Termin | Alte Website: nur Anfrageformular `/termin/` („Terminanfrage Senden“). AA: „Terminvergabe: online“, „Termin buchen … über Praxis-Website“. JA: „bietet an diesem Standort über Jameda keine Online-Terminbuchung an“. | `W:/termin/`, AA, JA | belegt |
| Doctolib | Buchungslink `https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/` nur aus `master-prompt.md` (Vorgabe des Auftraggebers). Auf der alten Website und in den Verzeichnissen nicht vorhanden; ENTWURF fand am 01.10.2026 kein Profil (`E:01-praxis/praxis-recherche.md` §2). | Master-Prompt | fehlt auf alter Website (Vorgabe) |

### 6.6 Sprechzeiten (alle Versionen)

| Tag | Website Kontaktseite (`W:/kontakt/`) | Website Footer (`W:Fuß`) | arzt-auskunft (AA) | jameda (JA) |
|---|---|---|---|---|
| Überschrift | „Praxis – Sonderöffnungszeiten während der Corona-Pandemie:“ | (Uhr-Icon) | „Sprechzeiten … mit Termin“ | „Sprechzeiten“ |
| Mo | 9:00 – 12:00 & 15:00 – 17:00 Uhr | 9°°- 12°° & 15°°- 17°° Uhr | 09:00 – 12:00, 15:00 – 17:00 | 09:00 – 13:00, 15:00 – 17:00 |
| Di | „9.00 – 12:00 Uhr“ | 9°°- 12°° Uhr | 09:00 – 12:00 | 09:00 – 13:00 |
| Mi | 9:00 – 12:00 Uhr | 9°°- 12°° Uhr | 09:00 – 12:00 | 09:00 – 13:00 |
| Do | 9:00 – 12:00 & 15:00 – 18:00 Uhr | 9°°- 12°° & 15°°- 18°° Uhr | 09:00 – 12:00, 15:00 – 18:00 | 09:00 – 13:00, 15:00 – 18:00 |
| Fr | 9:00 – 12:00 Uhr | 9°°- 12°° Uhr | **geschlossen** | 09:00 – 13:00 |
| Sa/So | – | – | geschlossen | – |
| Akutsprechstunde | – | – | „Akut Sprechzeiten“: Mo 09:00 – 11:00, Do 09:00 – 12:00 (sonst geschlossen) | – |

- Startseite: nur Schaltfläche „SPRECHZEITEN“ ohne Ziel (`#`), keine Zeiten im Hauptinhalt (`W:/`). KBV-Bild zeigt keine Zeiten. SA: keine.
- Status: Website-intern **konsistent** (Kontakt = Footer), aber unter einer veralteten Corona-Überschrift; über alle Quellen **widersprüchlich** (Freitag offen/geschlossen; vormittags bis 12 oder 13 Uhr; Akutsprechstunde nur AA).
- Hinweise zur Terminvergabe (wörtlich, `W:/kontakt/`, belegt Website):
  - „Unser Interesse ist, die Wartezeiten so kurz wie möglich zu halten. Um dies zu erreichen, vergeben wir feste Termine.“
  - „Bitte haben Sie Verständnis, dass akute Erkrankungen gesondert behandelt werden müssen. Sollte es zu einer Zeitverschiebung kommen, bitten wir dies zu entschuldigen. Bitte vereinbaren Sie einen Termin – auch wenn es akut ist. Teilen Sie der Helferin am Telefon Ihr Problem mit, damit wir besser disponieren können.“
  - „Bitte haben Sie Verständnis, wenn Kinder oder schwerkranke Patienten – auch ohne Termin – gelegentlich „vorgezogen“ werden.“
  - „Bitte beachten Sie: Patienten mit Termin haben Vorrang!.“
  - Startseite (Corona-Block, veraltet): „Melden Sie sich unbedingt telefonisch bei uns.“

### 6.7 Sprachen, Zugang, Versicherte, Anfahrt

| Thema | Angabe | Quelle | Status |
|---|---|---|---|
| Sprachen | „Englisch, Türkisch“ | AA | belegt Verzeichnis |
| Sprachen | „Spricht: Deutsch.“ | SA | **widersprüchlich** zu AA |
| Sprachen | Website: **keine Angabe**. (Auf `W:/services/phytotherapie-homoeopathie/` stehen Absätze auf Türkisch, Alt-Texte „HOMEOPATİ“, „KAN ALMA“ – Fremdtext-Reste, keine Sprachangabe.) | `W:/…` | fehlt |
| Barrierefreiheit | „ebenerdig oder Aufzug“ | AA | belegt Verzeichnis (nicht geprüft) |
| Barrierefreiheit | Website: keine Angabe | – | fehlt |
| Versicherte | „Abrechnungsart: Kasse (sowie Privat und Selbstzahler)“ | AA | belegt Verzeichnis |
| Versicherte | „Akzeptierte Versicherungen: Gesetzlich versichert, Privat versichert“ | JA | belegt Verzeichnis |
| Versicherte | Eintrag im Bundesarztregister als Hausärztin | KBV | belegt Verzeichnis |
| Versicherte | Website: Kassenleistungen implizit (Check-up, DMP, „von den Krankenkassen übernommen“, „keine Kassenleistung“); keine ausdrückliche Aussage zu Privatpatienten | diverse `W:/services/…` | belegt Website (implizit) |
| ÖPNV | „mit Bus und Bahn erreichbar“ (Rubrik „Services“) | AA | belegt Verzeichnis (unkonkret) |
| ÖPNV, Parken, Anfahrt | Website: keine Angabe; keine Karte, kein Haltestellenname | – | fehlt |

### 6.8 Leistungen (Zusammenfassung je Seite)

Zusammenfassung des Inhalts der alten Seiten (sachlich, ohne Bewertung der Wirksamkeit). Wortlaut in `alt/texte/<slug>.md`. Textprobleme siehe Abschnitt 5 dieses Dokuments.

#### 6.8.1 Hausärztliche Leistungen (Kategorie „Leistungsspektrum“)

| Leistung / Seite | Was die alte Seite sagt | Kosten laut Seite | Status |
|---|---|---|---|
| **Vorsorgeleistungen** `W:/services/vorsorgeleistungen/` | Prävention als „wohl wesentlichster Bereich“. Akkordeon: **Impfungen** (Beratung nach STIKO, Grund-/Auffrischimpfungen, Impflücken schließen, Impfausweise ausstellen; „bringen Sie bitte Ihren Impfausweis … mit“); **Check-up 35** (Herz-Kreislauf, Zucker, Niere; ab 35; einmalig 18–35); **Hautkrebsscreening** (ab 35); **Krebsvorsorge Frau** (Information zu Vorsorgeprogrammen, z. B. Mammographie-Screening, und **Terminvermittlung** bei Fachkolleginnen/-kollegen); **Krebsvorsorge Mann** (Prostata, Mastdarm, ab 45 jährlich; ab 50 Test auf Blut im Stuhl); **Darmkrebs** (ab 50 Beratung + jährlicher Stuhltest; ab 55 Beratung zur Vorsorge-Darmspiegelung); **J1–2** (13.–18. Lebensjahr); **Jugendschutzuntersuchung** (bis 18, vor/während Ausbildung, Nachuntersuchung nach einem Jahr); **Hausärztlich-geriatrisches Basisassessment** (i. A. ab 70); **Psychosomatische Grundversorgung**. Startseite-Liste: „Check-up, Impfungen, Krebsvorsorge Mann, Hautkrebsvorsorge, Früherkennung, Darmkrebs“. | „deren Kosten jeweils ab einem bestimmter Lebensalter in gewissen Intervallen von den Krankenkassen übernommen werden“ | belegt Website (Altersgrenzen teils veraltet, s. Befunde) |
| **Impfungen und Reisemedizin** `W:/services/impfungen-und-reisemedizin/` | Überschrift „REISEIMPFUNGEN – REISEMEDIZIN – ZUGELASSENE GELBFIEBERIMPFSTELLE“. Reiseimpfberatung „spätestens 8 Wochen vor Reiseantritt“, auch kurzfristig möglich, Termin vereinbaren; Malaria-Chemoprophylaxe-Beratung. Reiseimpfungen: FSME, Gelbfieber, Hepatitis A, Hepatitis B, Influenza, Japanische Enzephalitis, Polio, Meningokokken, Tollwut, Typhus. Impfungen für Erwachsene (Prüfung „spätestens alle 10 Jahre“), Kinder und Jugendliche (12–17) mit Listen. | Erwachsene: „von den gesetzlichen Krankenkassen im Allgemeinen übernommen“; Kinder: „übernommen“; Jugendliche: STIKO-empfohlene Auffrischungen „übernimmt in der Regel die Krankenkasse“. Reiseimpfungen: keine Angabe. | belegt Website |
| ↳ **Gelbfieberimpfstelle** | Website: „ZUGELASSENE GELBFIEBERIMPFSTELLE“. Amtliche Liste der Gelbfieberimpfstellen in Berlin (Senatsverwaltung, `X:` [berlin.de, JSON-Abruf 11.10.2026](https://www.berlin.de/sen/gesundheit/gesundheitswesen/infektionsschutz/impfen/gelbfieberimpfstellen/), lokal `alt/roh/extern/gelbfieber-all.json`, 48 Einträge): **kein Eintrag** für Bagci-Kaikis oder Schloßstraße 21, 14059. | – | **widersprüchlich** → nicht übernehmen, bis die Ärztin die Erlaubnis bestätigt |
| **Therapeutische Leistungen** `W:/services/therapeutische-leistungen/` | Begleitung „von Halsschmerzen bis …“ internistische/psychosomatische Erkrankungen; Überweisung an Fachkolleg:innen; Medikamentenkoordination; **Chronikerprogramme (DMP)**. Liste: Injektionen/Infusionen (i. v., i. m., s. c.; „separater Liegenraum“); Wundbehandlung (Pflaster-, Tape-, Schienen-, Kompressionsverbände bei offenen Beinen/Lymphödemen); kleine chirurgische Eingriffe + ggf. Histologie (eingewachsener Zehennagel, Abszesseröffnung); Überweisungen/Krankenhauseinweisungen; Narkose- und OP-Vorbereitung; Vitaminkuren bei Leistungsknick/chronischem Müdigkeitssyndrom; Belehrung nach § 43 IfSG. | Vitaminkuren: „(keine Kassenleistung)“ | belegt Website |
| **Diagnostische Leistungen** `W:/services/diagnostische-leistungen/` | Zusammenarbeit „mit einem großen medizinischen Labor“, Werte „schon am Folgetag“. Akkordeon: Anamnese; körperliche Untersuchung; Laboruntersuchungen (Blut, Urin, Mikrobiologie); **DMP**: Arterielle Hypertonie, Asthma, COPD, KHK, Diabetes Typ 1, Typ 2; Ruhe-EKG; **Belastungs-EKG** (Ergometer); Langzeit-Blutdruckmessung (24 h); Spirometrie; **Sonographie** (Schilddrüse, Gesichts-/Halsweichteile inkl. Speicheldrüsen und Lymphknoten, Bauchorgane, Urogenitalorgane, „Brustorgane“); **Duplexsonographie** der Bauch- und Nierenarterien (ohne Text); spezielle Labore (Tumormarker, Herz-Kreislauf-Marker, Thrombosescreening, Stuhl, Immunstatus). Startseite-Liste: „Labordiagnostik, EKG, Akupunktur, Lungenfunktionsprüfung, Langzeit-Blutdruckmessung“. | Spezielle Labore: „nicht alle diese Leistungen werden von der Krankenkasse übernommen“; DMP: „zusätzliche Leistungen ihrer Krankenkasse“ | belegt Website |
| **Psychosomatische Medizin** `W:/services/psychosomatische-medizin/` | Bio-psycho-soziales Modell, Salutogenese, Resilienz. Beispiele: Angst und Depression, Schlafstörungen, Erschöpfung, Schmerzen Bewegungsapparat, Migräne, Magen-Darm-Störungen, Herzerkrankungen, Herzbeschwerden ohne Herzerkrankung, Hauterkrankungen, Tumorerkrankungen, Stoffwechselerkrankungen. Ablauf: „Nach ausführlicher Anamnese und Formulierung Ihres Ziels wird ein individuelles Behandlungskonzept erstellt“; Methoden: Akupunktur, **ärztliche Hypnotherapie**, beratende Gespräche „bis hin zu einer intensiven Gesprächstherapie“; „Kurse oder auch Einzelberatungen“ (Ernährung, Stress, Rauchentwöhnung) „können Ihnen dabei helfen“ – ob die Praxis Kurse selbst anbietet, bleibt offen (**Vermutung**: nein). | keine Angabe | belegt Website |

#### 6.8.2 Naturheilkundliche Therapien (Kategorie „Naturheilkundliche Therapien“, 11 Seiten)

Für **keine** dieser Leistungen nennt die alte Website Preise, Behandlungsdauer pro Sitzung oder einen konkreten Praxisablauf (Terminart, Vorgespräch). Kosten nur bei Schröpfen (Kasse zahlt nicht) und über „Vitaminkuren … keine Kassenleistung“ (Therapeutische Leistungen). Status Kosten/Dauer allgemein: **fehlt**.

| Leistung / Seite | Kurzbeschreibung laut Seite | Indikationen wie dort genannt | Ablauf, Häufigkeit, Dauer | Gegenanzeigen / Besonderheiten | Status |
|---|---|---|---|---|---|
| **Akupunktur** `W:/services/face-recovery-massage/` (Slug aus dem Theme-Demo „Face Recovery Massage“) | Teil der TCM; Punkte entlang der Meridiane „mittels Nadeln oder Wärme stimuliert“; „sterilen hauchdünnen Nadeln, Laserstrahl oder Moxakegeln“ | „Verschiedenste Schmerzsymptome“; „Vielzahl von Krankheitsbildern“ (WHO-Verweis) | keine Angabe | keine eigenen; ein Absatz zum **Schröpfen** (Gerinnungsstörungen, Hämatome) steht fälschlich auf dieser Seite | belegt Website (fehlerhaft) |
| **Mesotherapie** `W:/services/mesotherapie/` | Mikroinjektionen individueller Wirkstoffmischungen (Vitamine, Aminosäuren, Pflanzenextrakte, Hyaluron, Antioxidantien, homöopathische Mittel) in die obersten Hautschichten; Entwicklung durch Michel Pistor, 1950er | ästhetisch: „Fältchen, Haarausfall, kleine Fettpölsterchen oder Cellulite“; außerdem „akuten und chronischen Erkrankungen“, Prävention | „Einige wenige Sitzungen genügen … oft“ | „in der Regel sehr gut verträglich“; keine Gegenanzeigen genannt | belegt Website (HWG-kritisch) |
| **Orthomolekulare Medizin** `W:/services/orthomolekulare-medizin/` | „Medizin der richtigen Moleküle“, Linus Pauling 1968; Nährstoffe: Vitamine, Mineralstoffe/Spurenelemente, essenzielle Fettsäuren, Aminosäuren, Enzyme | erhöhter Bedarf (z. B. Schwangerschaft), Nährstoffdefizit, Herz-Kreislauf, Infektionen, Arteriosklerose, Rheuma, Stoffwechsel, Haut, Verdauung, „Stärkung des Immunsystems“ | keine (der Ablauf-Absatz ist der Mesotherapie-Text) | keine | belegt Website (fehlerhaft) |
| **Phytotherapie / Homöopathie** `W:/services/phytotherapie-homoeopathie/` | Homöopathie: Hahnemann, Ähnlichkeitsprinzip, Arzneimittelprüfung, Potenzierung, Globuli. Phytotherapie: Heilpflanzen, Beispiele Sonnenhut, Arnika, Ringelblume, Kümmel | Erkältung, Verstauchung/Prellung, Wunden, Blähungen/Krämpfe; Fließschnupfen (Allium cepa) | keine | Phytotherapie: Packungsbeilage beachten, absetzen bei Übelkeit, Erbrechen, Durchfall, Hautirritationen; „Besondere Vorsicht … bei Säuglingen, Kleinkindern und Schwangeren“ | belegt Website (Fremdtexte, türkische Absätze) |
| **Schröpfen (Hacamat, Hijama)** `W:/services/schroepfen-hacamat-hijama/` | „(BLUTIGES) SCHRÖPFEN (HACAMAT (TR.), HIJAMA (ARAB.)“; drei Methoden: blutiges Schröpfen (Haut leicht angeritzt), trockenes Schröpfen (statischer Unterdruck), Schröpfmassage (mit Öl gezogen) | „Vielzahl von Erkrankungen“; Studienzitat Michalsen: nächtlicher Schulterschmerz, Handgelenkarthrose, Karpaltunnelsyndrom | Anwendung „vorrangig … in Rücken-Gliedmaßen- und Schulter-Bereichen“; Aufklärungsgespräch vorab | nicht bei Gerinnungsstörungen; „häufig vorübergehend (therapeutisch beabsichtigte) Hämatome“ | belegt Website |
| ↳ Kosten Schröpfen | „(und dennoch bezahlen trotz der Wirksamkeitsnachweise die Kassen das Schröpfen nicht!)“ → Selbstzahlerleistung | | | | belegt Website |
| **Eigenbluttherapie** `W:/services/eigenbluttherapie/` | entnommenes Eigenblut „unverändert … re-injeziert“; „unspezifische Reiztherapie (Umstimmungstherapie)“; Arndt-Schulz-Regel | keine konkreten | keine | „nicht oder nur sehr eingeschränkt bei gleichzeitiger Einnahme gerinnungshemmender Medikamente wie Marcumar oder bei schweren, auszehrenden Grunderkrankungen“; „in der Regel gut vertragen“ | belegt Website |
| **Blutegeltherapie** `W:/services/blutegeltherapie/` | Ausleitungsverfahren; Speichelinhaltsstoffe Hirudin, Calin, Eglin | „Vielzahl von Erkrankungen“ (keine Liste) | keine | nicht bei blutverdünnenden Medikamenten (Marcumar, ASS), arteriellen Verschlusskrankheiten, Blutungsneigung, Diabetes mellitus, Hauterkrankungen im Behandlungsgebiet; Beratung im Vorfeld | belegt Website |
| **Neuraltherapie nach Huneke** `W:/services/neuraltherapie-nach-huneke/` | Injektion eines örtlichen Betäubungsmittels; Ferdinand und Walter Huneke, 1925; „Sekundenphänomen“ | „Vielzahl von Erkrankungen“ | keine | nicht bei Gerinnungsstörungen; Beratung | belegt Website |
| **Aufbaukuren** `W:/services/aufbaukuren/` | Vitamin-/Mineral-Infusionen und -Injektionen; Vitamin-C-Hochdosis (Zitat mit Quelle „www.Pascoe.de“) | vor/nach OP und schweren Erkrankungen; Infektneigung; Erschöpfung; Konzentrationsstörungen; Eisenmangel; lange Vitamin-C-Indikationsliste (u. a. Krebsbegleitung, Allergien, Rheuma, Angina pectoris, Alkohol-/Nikotinentzug) | **Vitamin-B-Komplex-Kur: 6 i. m. Injektionen** (B6, B12, Folsäure); Immunstimulierung, Immunaufbau, Haut und Haare, Erschöpfung: **je 6–10 Infusionen in 2 Wochen**; „Leberentgiftung“: **10 × über 3–4 Wochen**; „Entgiftungskur“: **6 Infusionen über 3 Wochen** (Alpha-Liponsäure, Zink, Magnesium, Vitamin C, B12, B1, B6, Mariendistel); Konzentration: **6 Infusionen über 3 Wochen**; Eiseninfusionen (ohne Zahl) | „Die Vitamin C Hochdosis Infusionstherapie gehört unbedingt in die Hand des darin Erfahrenen!“; keine Gegenanzeigen genannt; Kosten: über „Vitaminkuren … keine Kassenleistung“ (`W:/services/therapeutische-leistungen/`) | belegt Website (HWG-kritisch) |
| **Enzymtherapie** `W:/services/enzymtherapie/` | Überschrift „SCHLANGENGIFTTHERAPIE“; Herstellertext; „Wirkverstärkung durch Anstoßen körpereigener Aktivität“ | Allergien, Neurodermitis, Psoriasis, Arthrose, Arthritis, klimakterische Beschwerden, unregelmäßige Menstruation, Zysten, Migräne, Kopfschmerzen, Diabetes mellitus, Fibromyalgie, Ischialgie, „Karzinomprophylaxe“, Verstopfung, Osteoporose, Varikosis | keine | **Spam-Absatz mit Link zu „prednisolonkaufen.com“** | belegt Website (inhaltlich unbrauchbar) |
| **Aderlass** `W:/services/aderlass/` | Venenblut „mit einer größeren Kanüle, in der Regel zwischen 50 ml bis 300 ml“; Menge und Ort nach Alter, Krankheit, Geschlecht, Konstitution | Bluthochdruck/„Hypertoniker“, Eisenspeicherkrankheit, Polyzythämie, „Blutvergiftung“, Übergewicht | Menge s. links; keine Häufigkeit | keine Gegenanzeigen genannt | belegt Website (fachliche Fehler) |

- **Fakt:** Beide Kategorieseiten (`W:/services-category/leistungsspektrum/` und `W:/services-category/naturheilkundliche-therapien/`) zeigen jeweils **alle 16 Leistungen** in identischer Liste (nur Titel, Datum, Aufrufzähler „0“, teils Bild), obwohl im Quelltext 5 Leistungen der Kategorie „Leistungsspektrum“ und 11 der Kategorie „Naturheilkundliche Therapien“ zugeordnet sind. Veröffentlichungsdaten laut Liste: 23.11.2018 (Akupunktur, Mesotherapie, Orthomolekular, Phytotherapie/Homöopathie, Schröpfen – Theme-Demo-Einträge umgewidmet), 20.04.2022 (übrige Naturheilverfahren, Vorsorge, Impfungen), 21.04.2022 (Therapeutische, Diagnostische, Psychosomatik).
- **Fakt:** Menüpunkt „LEISTUNGSSPEKTRUM“ verlinkt auf `#`; die Seite `/leistungsspektrum/` ist leer („Anscheinend können wir nicht finden, wonach Sie suchen.“).

### 6.9 Team, Ausstattung

| Thema | Angabe (wörtlich bzw. zusammengefasst) | Quelle | Status |
|---|---|---|---|
| Team | „Teilen Sie der **Helferin** am Telefon Ihr Problem mit“; „**Ihr Praxisteam**“ | `W:/kontakt/` | belegt Website |
| Team | „Bleiben Sie gesund! **Ihr Praxisteam**“ (Corona-Block) | `W:/` | belegt Website |
| Team | Keine Namen, keine Teamseite, keine Anzahl | – | fehlt |
| Praxisform | Einzelpraxis (unter der Adresse nur sie im Register) | `E:01-praxis/praxis-recherche.md` §1 (KBV-Umkreissuche) | belegt Verzeichnis |
| Ich-/Wir-Form | meist „wir“; „Ich“ in Lebenslauf, Aufbaukuren („empfehle ich“), Blutegel („Sprechen Sie mich deshalb an – ich berate Sie“) | diverse | Fakt |
| Räume | „separater Liegenraum“ (für Injektionen/Infusionen) | `W:/services/therapeutische-leistungen/` | belegt Website |
| Geräte/Diagnostik | Ruhe-EKG; Belastungs-EKG („unter Ergometer-Belastung“); Langzeit-Blutdruckmessung (24 h); Spirometrie/Lungenfunktion; Sonographie (Schilddrüse, Hals, Bauch, Urogenital, „Brustorgane“); Duplexsonographie Bauch- und Nierenarterien | `W:/services/diagnostische-leistungen/` | belegt Website |
| Labor | „Wir arbeiten mit einem großen medizinischen Labor zusammen, damit uns weitere Laborwerte schon am Folgetag zur Verfügung stehen.“ | `W:/services/diagnostische-leistungen/` | belegt Website |
| Akupunktur-Mittel | „Nadeln oder Wärme“; „sterilen hauchdünnen Nadeln, Laserstrahl oder Moxakegeln“ | `W:/services/face-recovery-massage/` | belegt Website (allgemeine Beschreibung; ob Laser in der Praxis vorhanden ist: **Vermutung**, offen) |
| Fotos von Räumen/Team | keine | `E:02-website/inhalt-struktur.md` §4 | fehlt |

### 6.10 Notfallhinweise

| Wortlaut | Quelle | Status |
|---|---|---|
| „In dringenden Notfällen rufen Sie den kassenärztlichen Bereitschaftsdienst **116117** oder die Feuerwehr **112** Vielen Dank für Ihr Verständnis, Ihr Praxisteam“ (Links: „Bereitschaftsdienst“ → `https://www.kvberlin.de/20praxis/70themen/aebd/index.html` [11.10.2026: HTTP 247, Bot-Sperre der KV; Pfad vermutlich veraltet], „Feuerwehr“ → `https://www.berliner-feuerwehr.de/startseite/` [→ Startseite, HTTP 200]) | `W:/kontakt/` | belegt Website |
| Corona-Block: Hotline der Berliner Senatsverwaltung „(030) 9028 28 28“, Brandenburg „(0331) 868 37 77“, „bundesweite Notruf-Nr. 116 117“, „Corona-Abstrich-Stellen … www.kvberlin.de“ | `W:/` | belegt Website, **veraltet** (nicht übernehmen) |
| Schaltfläche „NOTFALLNUMMERN“ ohne Ziel (`#`) | `W:/` | Fakt |
| „Kontaktieren Sie bei Notfällen bitte 116117 Kassenärztlicher Notdienst“ | AA | belegt Verzeichnis |

### 6.11 Impressum (wörtlich, `W:/impressum/`) und Datenschutzerklärung

#### 6.11.1 Impressum – vollständiger Wortlaut

> **Impressum**
>
> **Angaben gemäß § 5 TMG**
>
> PRAXIS ZUM SCHLOSS
> Allgemeinmedizinerin Nalan Bagci Kaikis
> Schloßstraße 21, 14059 Berlin
>
> **Kontakt**
>
> Telefon: +49 0303223612
> E-Mail: info@hausarztpraxis-zum-schloss.de
>
> **Umsatzsteuer-ID**
>
> Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
> Steuernummer: ZN 11372101809
>
> **EU-Streitschlichtung**
>
> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
>
> **Verbraucherstreitbeilegung/Universalschlichtungsstelle**
>
> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

- **Fehlt** im Impressum: zuständige Ärztekammer, gesetzliche Berufsbezeichnung und Staat der Verleihung, berufsrechtliche Regelungen, KV/Aufsicht, Umsatzsteuer-ID (es steht eine Steuernummer unter der Überschrift „Umsatzsteuer-ID“). Quelle: `E:02-website/recht-datenschutz.md` §1. Für die Entwürfe: Steuernummer **nicht** übernehmen (Empfehlung ENTWURF), Kammer-/Berufsrechtsangaben als Platzhalter.
- Link zur OS-Plattform: leitet am 11.10.2026 auf `https://consumer-redress.ec.europa.eu/site-relocation_en` um (Plattform eingestellt, `E:02-website/recht-datenschutz.md` §1).
- **Fakt:** Auf Mobilgeräten (375 px) sind Impressum und Datenschutzerklärung über die Navigation **nicht erreichbar**: Der einzige Link steht im Footer-Menü „Entdecken“, das unter 1200 px Breite ausgeblendet ist (`hidden-xs hidden-ms hidden-sm hidden-md`); das Hauptmenü enthält beide Seiten nicht. Quelle: `alt/texte/_kopf-fuss.md`, `alt/roh/extrakt/startseite.375.json`.

#### 6.11.2 Datenschutzerklärung – verantwortliche Stelle und Kernpunkte (`W:/datenschutzerklaerung/`)

- Verantwortliche Stelle (wörtlich, Block 1): „PRAXIS ZUM SCHLOSS / Allgemeinmedizinerin Nalan Bagci Kaikis / Schloßstraße 21, 14059 Berlin / Telefon: +49 303223612 / E-Mail: info@hausarztpraxis-zum-schloss.de“. Block 2 (Abschnitt doppelt vorhanden) identisch, aber „Telefon: 303223612“.
- Hosting: „Wir setzen folgenden Hoster ein: PRAXIS ZUM SCHLOSS / Allgemeinmedizinerin Nalan Bagci Kaikis / Schloßstraße 21, 14059 Berlin“ + AVV „mit dem oben genannten Anbieter“ (tatsächlicher Hoster laut DNS: Alfahosting/dogado, `E:02-website/recht-datenschutz.md` §2).
- Behandelte Themen: Datenschutz auf einen Blick; Hosting; Auftragsverarbeitung (2×); Allgemeine Hinweise und Pflichtinformationen (2×); Datenweitergabe USA; Widerruf; Widerspruchsrecht Art. 21; Beschwerderecht (ohne Nennung der Berliner Aufsichtsbehörde); Datenübertragbarkeit; SSL/TLS; Auskunft/Löschung; Einschränkung; Werbe-E-Mails; Cookies; **Borlabs Cookie** (nicht im Einsatz); Kontaktformular; „Anfrage per E-Mail, Telefon oder Telefax“; Google Web Fonts lokal; **Adobe Fonts** (nicht nachweisbar); **Google reCAPTCHA** (lädt auf jeder Seite); „eCommerce und Zahlungsanbieter“ (kein Shop).
- Nicht behandelt: Gesundheitsdaten (Art. 9 DSGVO), Server-Logfiles, Speicherdauer, Datenschutzbeauftragte/r, Datum/Stand. Quelle: `E:02-website/recht-datenschutz.md` §2.
- WordPress: Impressum und Datenschutzerklärung angelegt und zuletzt geändert am 03.06.2022 (`W:API`).

### 6.12 Mitgliedschaften, Logos, Portale

| Element | Ziel | Linkstatus 11.10.2026 | Status |
|---|---|---|---|
| Textlink „ärzte-naturheilverfahren.de“ (Startseite, Leiste am Seitenende) | `https://xn--rzte-naturheilverfahren-u7b.de/nalan-bagci-kaikis/` | **HTTP 404** (Domain-Startseite 200) | belegt Website; Profil nicht vorhanden |
| „jameda“ | `https://www.jameda.de/berlin/aerzte/innere-allgemeinmediziner/nalan-bagci-kaikis/uebersicht/81175340_1/` | 200 nach Weiterleitung auf `/profil/nalan-bagci-kaikis`; Profil **nicht beansprucht**, 24 Bewertungen (`E:01-praxis/praxis-recherche.md` §2) | belegt Website |
| „arzt-auskunft“ | `https://www.arzt-auskunft.de/arzt/allgemeinmedizin/berlin/nalan-bagci-kaikis-3795011` | 200 nach Weiterleitung auf `…/berlin-charlottenburg/…` | belegt Website |
| „sanego“ | `https://www.sanego.de/Arzt/Berlin/2701-Berlin/Allgemeinmedizin/329109-Nalan-Bagci-Kaikis/` | 200; nicht beansprucht, 1 Bewertung (2021) | belegt Website |
| Mitgliedschaften (Verbände, Fachgesellschaften, Hausärzteverband, ZAEN o. Ä.) | – | – | **fehlt** (nirgends genannt) |
| Siegel, Zertifikate, Auszeichnungen | – | – | **fehlt** |
| Bewertungen | Jameda Ø 4/5 (24), Sanego 10/10 (1) | `ENTWURF/intern/00-plausibilitaet/plausibilitaet.md` | Fakt, aber laut Master-Prompt §8 **nicht** als Inhalt verwenden |

Hinweis: Die „Logo-Leiste“ der Startseite besteht aus Textlinks mit Pfeil-Icon, nicht aus Logos (Quelltext `W:/`).

### 6.13 Leitsätze, Zitate, Haltung (wörtlich)

| Wortlaut | Quelle | Anmerkung |
|---|---|---|
| „Wir betrachten den Menschen als Ganzes und behandeln nicht die Symptome der Erkrankungen, sondern deren Ursachen.“ | `W:/` (Absatz) | Die H2 darüber ist verstümmelt: „Wir betrachten den ⏎ sondern deren Ursachen.“ |
| „Die Hausarztpraxis zum Schloß bietet Ihnen ein breites allgemeinmedizinisches Diagnostik- und Therapiespektrum. Wir verstehen die hausärztliche Medizin als eine auf den einzelnen Menschen und sein Umfeld bezogene, dauerhaft angelegte Arzt-Patienten-Beziehung. Wir schätzen und achten das uns entgegengebrachte Vertrauen und möchten Ihnen als Hausarztpraxis zur Seite stehen.“ | `W:/` | Haltungssatz (Hausarztverständnis) |
| „Neben der Schulmedizin und Vorsorge liegen unsere Behandlungsschwerpunkte in der ALTERNATIVMEDIZIN. Mit diesem ganzheitlich medizinischen Ansatz entwickeln wir für jeden Patienten ein individuelles Therapiekonzept.“ | `W:/` | |
| „Hier bieten wir Ihnen ein umfangreiches Spektrum an Diagnostik, Beratung und Therapien.“ | `W:/` Slider 1 | |
| „Suchen Sie Lösungen für Ihre gesundheitlichen Probleme? Oder wollen Sie Ihre Gesundheit und Schönheit mit wertvollen, naturheilkundlichen Therapien unterstützen?“ | `W:/` Slider 2 „NATURMEDIZIN“ | Kosmetik-Anmutung |
| „Der Hauptgrund für das Versagen der modernen medizinischen Wissenschaft liegt darin, dass sie sich mit den Wirkungen und nicht mit den Ursachen beschäftigt“ – **Dr. Edward Bach** | `W:/unsere-praxis/` (Zitat vor dem Lebenslauf) | herabsetzend gegenüber Schulmedizin (`E:02-website/recht-datenschutz.md` §5.2) |
| „Seit Oktober 2019 befinde ich mich in meiner eigenen ganzheitlich orientierten Hausarztpraxis.“ | `W:/unsere-praxis/` | |
| „Die Prävention von Gesundheitsstörungen liegt uns sehr am Herzen.“ | `W:/services/vorsorgeleistungen/` | |
| „Unser Ziel ist es, Sie nicht erst dann zu behandeln, wenn Sie bereits erkrankt sind, sondern einer Erkrankung gezielt vorzubeugen.“ | `W:/services/vorsorgeleistungen/` | |
| „Körper und Seele sind untrennbar miteinander verbunden.“ | `W:/services/psychosomatische-medizin/` | |
| „In der Psychosomatik steht der Mensch als ganzheitliches Individuum im Vordergrund.“ | `W:/services/psychosomatische-medizin/` | |
| „Wir begleiten Sie auf dem Weg in ein gesünderes Leben.“ | `W:/services/psychosomatische-medizin/` | |
| „Unser Interesse ist, die Wartezeiten so kurz wie möglich zu halten.“ | `W:/kontakt/` | |
| „Eine gute Eigen-Fürsorge ist der beste Schutz gegen Krankheit.“ | `W:/` (Corona-Block) | veraltet |
| Arndt-Schulz-Regel „Kleine Reize fachen die Lebenstätigkeit an, …“ | `W:/services/eigenbluttherapie/` | Fremdzitat |
| Michalsen-Zitat mit Einschub „(des Schröpfens, S.S.)“ | `W:/services/schroepfen-hacamat-hijama/` | Fremdzitat, Fremdkürzel |

### 6.14 Weitere belegte Rahmendaten

| Angabe | Quelle | Status |
|---|---|---|
| Website-Copyright „2022“ | `W:Fuß` | belegt Website |
| Echte Seiten in WordPress angelegt 04–06/2022 (Startseite zuletzt geändert 16.06.2022; Kontakt 15.01.2025) | `W:API` (`alt/roh/api/pages.json`) | Fakt |
| Keine Blogbeiträge, keine PDFs, keine Rezeptbestellung, keine Hausbesuchs- oder Videosprechstunden-Angabe | `W:API`, alle Seiten | fehlt |
| Bilder: Porträt `wp-content/uploads/2022/04/hausarzt-nalan-bagci-kaikis.png` (Unsere Praxis), Logo `wp-content/uploads/2017/07/massage_logo_01.png` (Alt „PRAXIS ZUM SCHLOSS“) | `W:/unsere-praxis/`, `W:Kopf` | belegt Website |

### 6.15 Widersprüche und offene Punkte (Übersicht)

1. **„Dr.“**: Website-Titel/Topbar/Mail ja – Impressum, Register, alle Verzeichnisse nein.
2. **Namensschreibweise**: Bagci-Kaikis / Bagci Kaikis / Bağcı-Kaikis / BAGCI KAIKIS.
3. **030 3255050**: Fax laut Website-Icon, KBV, AA, SA – Telefon laut Jameda.
4. **Sprechzeiten**: Website (Fr 9–12, unter Corona-Überschrift) vs. AA (Fr geschlossen, Akutsprechstunde Mo 9–11/Do 9–12) vs. Jameda (vormittags bis 13 Uhr).
5. **Sprachen**: AA Englisch/Türkisch vs. SA nur Deutsch; Website ohne Angabe.
6. **Zusatzbezeichnungen**: Homöopathie nur bei AA; Website stellt Akupunktur/Naturheilkunde/Reisemedizin wie Facharzttitel dar.
7. **Gelbfieberimpfstelle**: Website „zugelassen“ – amtliche Berliner Liste ohne Eintrag.
8. **Forschungsprojekt Herzinsuffizienz**: Website „leitete“ – BÄK-Steckbrief nennt Prof. Dr. Vittoria Braun als Projektleiterin.
9. **Lehrpraxis/Lehrärztin heute**: nirgends belegt (nur frühere Lehre an der Charité).
10. **Telefon international**: „+49 0303223612“ (Impressum) / „+49 303223612“ / „303223612“ (Datenschutz) – korrekt wäre +49 30 3223612.
11. **Adresse**: „Schloßstraße“ / „Schlossstr.“ / „Schloßstr.“ (Nummer und PLZ überall gleich).

---

## 7. Bilder und Medien

Quelle: Download aller Bildverweise der echten Seiten am 11.10.2026, Sichtprüfung jedes Bildes, XMP-Metadaten. Erzeugte Dateien: `shared/assets/` (Übersicht in `shared/assets/README.md`).

### 7.1 Ergebnis in Kürze

- **Verwendbar: 3 Motive.**
  - Wortmarke „PRAXIS ZUM SCHLOSS“
  - Bildmarke (Schloss Charlottenburg im Kreis)
  - Porträt der Ärztin (freigestellt)
- **Nicht verwendbar:** alle übrigen 40 Bilddateien.
  - 34 Stock- bzw. Theme-Motive, darunter 18 mit erkennbaren Personen oder Körperteilen und mehrere mit Kosmetik-/Spa-Anmutung.
  - 5 redundante Icon-Fassungen.
  - 1 Datei fehlt auf dem Server (404).
- **Lizenzlage der Stockfotos:** unbekannt. Die Metadaten zeigen typische Agentur-Bildtitel; drei Dateien nennen Urheber oder Agenturen (Fakt, XMP). Die Analyse im ENTWURF empfiehlt ebenfalls, diese Bilder zu ersetzen (`02-website/inhalt-struktur.md` §4, `03-empfehlung/erhalten-optimieren-neu.md`).
- **Porträt mit Originalhintergrund: nicht vorhanden.** Die Website enthält das Porträt nur freigestellt (PNG mit Alpha) und als Montage vor Blumen-Stockbild (`SLIDE_1-1.jpg`).

### 7.2 Inventar (Original-URL → Entscheidung)

Abkürzungen: „alle Seiten“ = seitenweit auf allen 28 abgerufenen Seiten. „Kategorie-Archive“ = `/services-category/leistungsspektrum/` und `/services-category/naturheilkundliche-therapien/`. Größe = Dateigröße des Originals. Datum = HTTP-`Last-Modified` (Fakt, `_abruf.tsv`). Bildtitel und Urheber stammen aus XMP `dc:title` / `dc:creator` / `dc:rights` (Fakt, ausgelesen mit sharp).

#### 7.2.1 Marke und Icons

| Nr. | Original-URL | Motiv | Maße / Größe | verwendet auf | Entscheidung | Begründung | erzeugte Dateien |
|---|---|---|---|---|---|---|---|
| 1 | `/wp-content/uploads/2017/07/massage_logo_01.png` | Wortmarke: Bildmarke (Schloss im Kreis, Türkis `#00A09B`) + „PRAXIS ZUM“ (Marineblau `#2C3662`) + „SCHLOSS“ (Türkis, fett). Transparenter Grund; deckende Pixel exakt nur diese zwei Farben (Fakt, Pixelanalyse) | 400 × 101, 17 KB, PNG RGBA; 19.04.2022 | alle Seiten (Kopfzeile, `alt="PRAXIS ZUM SCHLOSS"`) | **verwendbar** | Logo der Praxis. Dateiname stammt aus dem Spa-Demo des Themes, der Inhalt ist praxisspezifisch (XMP: Photoshop, erstellt 19.04.2022). Gestalter und Rechte unbekannt, siehe §6 | `logo/logo-praxis-zum-schloss.png` (400 × 101, 14,2 KB, verlustfrei, pixelgleich geprüft); `logo/logo-praxis-zum-schloss.svg` (viewBox 400 × 101, 43,9 KB, Nachzeichnung, siehe §5); `logo/logo-praxis-zum-schloss-negativ.svg` (400 × 101, 43,9 KB); `logo/og-praxis-zum-schloss.jpg` (1200 × 630, 32,4 KB) |
| 2 | `/wp-content/uploads/2017/07/icon.png` | Bildmarke allein: Schloss Charlottenburg in Strichzeichnung im Kreis, Türkis `#00A19B`, transparent; Kreis 1771 px, Rand 122 px | 2016 × 2016, 164 KB, PNG RGBA; 16.04.2022 | nicht direkt eingebunden; Ausgangsdatei des WordPress-Site-Icons (Nr. 3) | **verwendbar** (Quelle für alle Icons) | Höchste verfügbare Auflösung der Bildmarke (XMP: Photoshop, erstellt 16.04.2022) | `logo/emblem-schloss.svg` (512 × 512 nominal, 28,9 KB); `logo/emblem-schloss-512.png` (512 × 512, 42,8 KB); `logo/favicon.svg` (256er viewBox, 9,8 KB); `logo/favicon-32.png` (32 × 32, 1,6 KB); `logo/favicon-48.png` (48 × 48, 2,3 KB); `logo/apple-touch-icon.png` (180 × 180, 7,2 KB); `logo/icon-192.png` (192 × 192, 7,4 KB); `logo/icon-512.png` (512 × 512, 20,7 KB) |
| 3 | `/wp-content/uploads/2017/07/cropped-icon.png` (Varianten `-32x32`, `-180x180`, `-192x192`, `-270x270`) | WordPress-Site-Icon = Bildmarke, Zuschnitt von Nr. 2 | 512 × 512, 69 KB; 16.04.2022 | alle Seiten: `link rel=icon` (32, 192), `apple-touch-icon` (180), `msapplication-TileImage` (270) | nicht verwendbar | Redundant: geringere Auflösung als Nr. 2. Alle Icons werden aus Nr. 2 neu erzeugt | – |
| 4 | `/favicon.ico` | Bildmarke 32 px (der Server liefert eine PNG-Datei unter `.ico`) | 32 × 32, 1,3 KB; 16.04.2022 | Standardabruf der Browser | nicht verwendbar | Redundant; sehr blasse Linien bei 32 px (Sichtprüfung) | – |
| 5 | `/wp-content/uploads/2017/07/Theme-Icon.png` | Bildmarke in 40 px | 40 × 40, 3 KB; 19.04.2022 | alle Seiten: CSS-Hintergrund `.theme-icon-main`, Widget-Überschriften | nicht verwendbar | Redundant und zu klein | – |

#### 7.2.2 Porträt

| Nr. | Original-URL | Motiv | Maße / Größe | verwendet auf | Entscheidung | Begründung | erzeugte Dateien |
|---|---|---|---|---|---|---|---|
| 6 | `/wp-content/uploads/2022/04/hausarzt-nalan-bagci-kaikis.png` | Porträt Nalan Bagci-Kaikis: Halbfigur, frontal, lächelnd, weiße Bluse, Hände gefaltet. Freigestellt (transparenter Grund), unten angeschnitten | 1000 × 1499, 1675 KB, PNG RGBA; 20.04.2022 | `/unsere-praxis/` (`alt=""`); dieselbe Aufnahme montiert in Slide 1 der Startseite (Nr. 7) | **verwendbar** | Einziges Foto der Ärztin; professionell und freundlich. **Bereinigt:** Die Freistellung enthielt schwache Restlinien (Alpha 10–90) über dem Kopf (x 495–496, y 0–63) und am linken/rechten Rand (y 613–615, y 703–704). Behalten wurde nur die zusammenhängende Figur mit 4 px Saum; 2448 Restpixel sind jetzt transparent. Haarkante der Freistellung eher hart, wirkt auf dunklem Grund etwas ausgefranst; hellen, ruhigen Grund bevorzugen. Fotograf und Rechte unbekannt (XMP ohne Urheber), siehe §6 | `bilder/nalan-bagci-kaikis-portrait-480.avif` (480 × 720, 17,2 KB) / `.webp` (23,0 KB); `-720.avif` (720 × 1079, 32,6 KB) / `.webp` (45,5 KB); `-960.avif` (960 × 1439, 51,2 KB) / `.webp` (72,1 KB); `-kopf-240.avif` (240 × 240, 5,6 KB) / `.webp` (7,6 KB); `-kopf-480.avif` (480 × 480, 15,1 KB) / `.webp` (19,4 KB). **Keine 1440er Fassung:** Das Original ist 1000 px breit und wird nicht hochskaliert |

#### 7.2.3 Startseite und seitenweite Hintergründe

| Nr. | Original-URL | Motiv | Maße / Größe | verwendet auf | Entscheidung | Begründung | erzeugte Dateien |
|---|---|---|---|---|---|---|---|
| 7 | `/wp-content/uploads/2018/11/SLIDE_1-1.jpg` | Montage: Porträt (Nr. 6) vor Blumenwiese mit Bokeh (Kamille, Phlox, gelbe Margeriten) | 1920 × 800, 206 KB; 21.04.2022 | Startseite (Slider, Slide 1); `/?sliders=massage-1`, `/sliders-category/leistungsspektrum/` | nicht verwendbar | Blumen-Stockhintergrund mit Wellness-Anmutung, widerspricht ärztlich-nüchterner Linie; Porträt liegt separat und in besserer Form vor (Nr. 6) | – |
| 8 | `/wp-content/uploads/2018/11/SLIDE_02-1.jpg` | Kamille und Wiesenblumen vor grünem Bokeh | 1920 × 800, 828 KB; 19.04.2022 | Startseite (Slider, Slide 2); `/?sliders=massage-2`, `/sliders-category/leistungsspektrum/` | nicht verwendbar | Stockmotiv (Vermutung: keine Urheberangabe, typische Agenturmotivik), Naturheil-/Wellness-Klischee, Lizenz unbekannt | – |
| 9 | `/wp-content/uploads/2018/11/inner_header_01.jpg` | 3D-Moleküle auf dunklem Marineblau | 1920 × 668, 42 KB; 16.04.2022 | alle Seiten: CSS-Hintergrund `.page-header` (Seitenkopf der Unterseiten) | nicht verwendbar | **Vermutung:** Theme-Demo-Bild (Dateiname nach Demo-Schema, Ordner 2018/11 wie die übrigen Demo-Inhalte, JPEG-Kommentar „gd-jpeg“ = serverseitig erzeugt, keine Urheberdaten). Lizenz für Live-Einsatz unklar (ENTWURF `02-website/recht-datenschutz.md`) | – |
| 10 | `/wp-content/uploads/2018/11/PHYTOTHERAPIE-1.jpg` | Kräuterbündel an Holzwand, schwarzer Mörser, Tinkturfläschchen, Holunderbeeren | 1600 × 1067, 190 KB; 20.04.2022 | alle Seiten: CSS-Hintergrund Footer (`#ltx-widgets-footer::before`); im Text von `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Stockfoto (Fakt, XMP-Titel: „bunches of healing herbs on wooden wall, mortar, bo[ttles] …“); rustikale Kräuterapotheken-Optik wirkt heilpraktisch, nicht ärztlich; Lizenz unbekannt | – |
| 11 | `/wp-content/uploads/2018/11/leaves_bg_10.png` | Sehr blasses Muster aus tropischen Blättern (Monstera, Hibiskus) | 1200 × 1200, 954 KB, PNG RGBA | Startseite: CSS-Hintergrund `.vc_custom_1543018025860` | nicht verwendbar | Vermutung: Theme-Demo-Muster des Spa-Demos; Spa-Anmutung, Lizenz unklar | – |
| 12 | `/wp-content/uploads/2018/11/testimonials_25_percent.jpg` | – | **HTTP 404** | `/unsere-praxis/`: CSS-Hintergrund `.vc_custom_1650486778401` (toter Verweis) | entfällt | Datei existiert nicht auf dem Server (Fakt) | – |
| 13 | `/wp-content/uploads/2022/04/akapuntur2-2.jpg` | Akupunktur im Gesicht einer Frau (rote Nadelgriffe), Hände des Behandlers | 400 × 266, 79 KB; 20.04.2022 | Startseite, Kasten „Die Hausarztpraxis zum Schloss“ (Kreis 266 × 266, `alt="akapuntur2"`) | nicht verwendbar | Stockfoto mit Person; Gesichtsbehandlung mit Kosmetik-Anmutung; zu geringe Auflösung | – |
| 14 | `/wp-content/uploads/2022/04/akapuntur-6.jpg` | Schwarzer Stein mit Akupunkturnadeln, Teelichter, Orchidee, Bambusmatte | 140 × 140, 42 KB; 20.04.2022 | Startseite, kleiner Kreis neben Nr. 13 | nicht verwendbar | Spa-/Zen-Motiv (Kerzen, Stein, Orchidee); zu klein | – |
| 15 | `/wp-content/uploads/2022/04/Schroepfmassage.jpg` (bytegleich mit `/wp-content/uploads/2018/11/Schroepfmassage.jpg`) | Glas-Schröpfköpfe, brennende Teelichter, Räucherstäbchen mit Rauch; unscharf eine liegende Person | 1317 × 900, 146 KB; 20.04.2022 | Startseite (Abschnitt „Wir betrachten den …“); `/services/schroepfen-hacamat-hijama/` (Datei 2018/11) | nicht verwendbar | Explizit Esoterik-/Spa-Anmutung (Kerzen, Räucherstäbchen); Stockfoto (Fakt, XMP-Titel „Medical glass cups in the massage room …“); Person im Bild | – |

#### 7.2.4 Leistungs-Kacheln (quadratische Beitragsbilder, 1400 × 1400)

Gemeinsam (Fakt, XMP): alle elf aus derselben Photoshop-Vorlage (gleiche `OriginalDocumentID C75E8A50…`, gespeichert am 20.04.2022). Sie werden jeweils auf der eigenen Leistungsseite, in beiden Kategorie-Archiven und im Naturheilkunde-Karussell der Startseite verwendet.

| Nr. | Original-URL | Motiv | Maße / Größe | verwendet auf | Entscheidung | Begründung | erzeugte Dateien |
|---|---|---|---|---|---|---|---|
| 16 | `/wp-content/uploads/2018/11/AKUPUNKTUR.jpg` | Mann bäuchlings auf Liege mit Nadeln im Rücken, Behandlerin im Polo-Shirt | 1400 × 1400, 163 KB | `/services/face-recovery-massage/` (Seite „AKUPUNKTUR“), Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person, Massage-/Spa-Setting, Lizenz unbekannt | – |
| 17 | `/wp-content/uploads/2018/11/MESOTHERAPIE.jpg` | Junge Frau im Bademantel, Injektion ins Gesicht (Hände mit Handschuhen) | 1400 × 1400, 181 KB | `/services/mesotherapie/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person; ästhetisch-kosmetische Gesichtsbehandlung | – |
| 18 | `/wp-content/uploads/2018/11/ORTHOMOLEKULARE-MEDIZIN.jpg` | Grafik: gelbe Kapsel mit eingebranntem Wort „ORTHOMOLEKULARE“, Fisch, Milch, Eier, Vitamin-D-Strukturformel, Orange | 1400 × 1400, 155 KB | `/services/orthomolekulare-medizin/`, Kategorie-Archive, Startseite | nicht verwendbar | Werbegrafik mit eingebranntem Text, grelle Farbigkeit, Stock-Vektor (Vermutung); nicht hochwertig | – |
| 19 | `/wp-content/uploads/2018/11/PHYTOTHERAPIE-HOMOeOPATHIE.jpg` | Collage: Lebensmittel, Kräuter, Mörser, Lavendel, Stethoskop auf dunklem Holz | 1400 × 1400, 228 KB | `/services/phytotherapie-homoeopathie/`, Kategorie-Archive, Startseite | nicht verwendbar | Stock-Collage; unruhig; Thema nur lose getroffen | – |
| 20 | `/wp-content/uploads/2018/11/SCHROePFEN-HACAMAT-HIJAMA.jpg` | Rücken mit Kunststoff-Schröpfköpfen, Hände des Behandlers | 1400 × 1400, 159 KB | `/services/schroepfen-hacamat-hijama/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person (nackter Rücken, Hände), Lizenz unbekannt | – |
| 21 | `/wp-content/uploads/2022/04/ADERLASS.jpg` | 3D-Rendering: Wolke roter Blutkörperchen | 1400 × 1400, 217 KB | `/services/aderlass/`, Kategorie-Archive, Startseite | nicht verwendbar | Generisches Stock-Rendering (Vermutung); im ENTWURF als unpassend bewertet („Blutkörperchen-Grafik“) | – |
| 22 | `/wp-content/uploads/2022/04/AUFBAUKUREN.jpg` | Kosmetische Gesichtsbehandlung mit Gerät (Frau mit Stirnband, Handschuhe) | 1400 × 1400, 149 KB | `/services/aufbaukuren/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person; Kosmetik-Anmutung (im ENTWURF ausdrücklich bemängelt) | – |
| 23 | `/wp-content/uploads/2022/04/BLUTEGELTHERAPIE.jpg` | Blutegel auf Bauch, Hand im blauen Handschuh hält Egel | 1400 × 1400, 169 KB | `/services/blutegeltherapie/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person (Körper, Hand); drastisch; Lizenz unbekannt | – |
| 24 | `/wp-content/uploads/2022/04/EIGENBLUTTHERAPIE-1.jpg` | 3D-Rendering: rote Blutkörperchen in Gefäß, Leuchteffekt | 1400 × 1400, 157 KB | `/services/eigenbluttherapie/`, Kategorie-Archive, Startseite | nicht verwendbar | wie Nr. 21 | – |
| 25 | `/wp-content/uploads/2022/04/ENZYMTHERAPIE.jpg` | Pipette tropft Serum auf das Gesicht einer geschminkten Frau | 1400 × 1400, 168 KB | `/services/enzymtherapie/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person; Kosmetik-Gesichtsbehandlung (im ENTWURF ausdrücklich bemängelt) | – |
| 26 | `/wp-content/uploads/2022/04/NEURALTHERAPIE-NACH-HUNEKE.jpg` | Frau im Sport-BH von hinten, Injektion in den Oberarm | 1400 × 1400, 170 KB | `/services/neuraltherapie-nach-huneke/`, Kategorie-Archive, Startseite | nicht verwendbar | Stockfoto mit Person; Lizenz unbekannt | – |

#### 7.2.5 Bilder im Fließtext der Leistungsseiten

| Nr. | Original-URL | Motiv | Maße / Größe | verwendet auf | Entscheidung | Begründung | erzeugte Dateien |
|---|---|---|---|---|---|---|---|
| 27 | `/wp-content/uploads/2018/11/Akupunktur2.jpg` | Junger Mann auf Liege, Nadeln an Schulter und Nacken | 1600 × 1067, 151 KB | `/services/face-recovery-massage/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP: Titel „Handsome man at acupuncture treatment“, Rechte „africa-studio.com (Olga Yastremska and Leonid Yastr…)“) | – |
| 28 | `/wp-content/uploads/2018/11/Akupunktur3.jpg` | Akupunkturmodell (Puppe mit Meridianen) mit Nadeln, altes chinesisches Buch, Mörser, dunkles Holz | 1600 × 1067, 164 KB | `/services/face-recovery-massage/` | nicht verwendbar | Keine echte Person, technisch gut. Aber Stockfoto mit unbekannter Lizenz (Fakt, XMP-Titel „Acupuncture models and medical books are on the tab[le]“), und die rustikale TCM-Inszenierung passt nicht zur ärztlich-nüchternen Linie. **Einziger Grenzfall:** als Reserve für die Akupunktur-Seite denkbar, falls die Praxis eine Lizenz nachweist und es wünscht | – |
| 29 | `/wp-content/uploads/2018/11/Akupunktur4.jpg` | Schwarzer Stein mit Nadeln, Schwimmkerzen, Grashalm, Münzen | 1600 × 1067, 144 KB | `/services/face-recovery-massage/` | nicht verwendbar | Spa-/Zen-Motiv (Kerzen, Stein); Stockfoto (Fakt, XMP-Titel „Black spa stone with set of acupuncture needles …“, Rechte „Olga Yastremska“) | – |
| 30 | `/wp-content/uploads/2018/11/HOMOeOPATHIE-2.jpg` | Lebensmittel-Flatlay (Gemüse, Nüsse, Obst) | 1600 × 1067, 233 KB | `/services/phytotherapie-homoeopathie/` (`alt="HOMEOPATİ"`) | nicht verwendbar | Thematisch unpassend; Stockfoto (Fakt, XMP-Titel „Ingredients for the healthy foods selection …“) | – |
| 31 | `/wp-content/uploads/2018/11/HOMOeOPATHIE-3.jpg` | Herzförmiges Gemüsebrett mit Dips | 1280 × 1600, 182 KB | `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Thematisch unpassend; Stockfoto (Fakt, XMP-Titel „Colorful vegan Charcuterie board …“) | – |
| 32 | `/wp-content/uploads/2018/11/HOMOeOPATHIE-5.jpg` | Kapseln, Tabletten, Holzmörser, Blätter | 1600 × 1067, 143 KB | `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Nahrungsergänzungs-Stockmotiv (Fakt, XMP-Titel „Alternative medicine herbal organic capsule …“) | – |
| 33 | `/wp-content/uploads/2018/11/HOMOeOPATHIE-6.jpg` | Person im Laborkittel mit Mörser, Laborglas mit Pflanzen | 1600 × 1067, 159 KB | `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP: Urheber „KREANGKRAI INDARODOM“, Titel „Alternative herbal medicine, Mortar …“) | – |
| 34 | `/wp-content/uploads/2018/11/PHYTOTHERAPIE-5.jpg` | Vintage-Stillleben: Tinkturflaschen, Globuli, alte Bücher, Trockenkräuter | 1600 × 1067, 167 KB | `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Apotheker-Nostalgie mit heilpraktischer Anmutung; Stockfoto (Fakt, XMP-Titel „Tincture bottles, vial of homeopathy globules …“) | – |
| 35 | `/wp-content/uploads/2018/11/PHYTOTHERAPIE-7.png` | Freigestellte Collage: Stethoskop, Kräuter, Lavendel, Globuli, Fläschchen | 1600 × 715, 1887 KB, PNG RGBA | `/services/phytotherapie-homoeopathie/` | nicht verwendbar | Collage aus Stockelementen (Vermutung); unruhig; Datei 1,9 MB | – |
| 36 | `/wp-content/uploads/2018/11/Hacamat2.jpg` | Schröpfköpfe mit Blut auf Rücken (blutiges Schröpfen) | 1600 × 1068, 148 KB | `/services/schroepfen-hacamat-hijama/` (`alt="Blutiges Schröpfen"`) | nicht verwendbar | Drastisch (Blut); Person; Herkunft unklar (Nikon D800, keine Urheberangabe) | – |
| 37 | `/wp-content/uploads/2018/11/Hijama1.jpg` | Rücken mit Schröpfköpfen, Hände | 1600 × 1067, 166 KB | `/services/schroepfen-hacamat-hijama/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP-Titel „Vacuum medical cups on back.“) | – |
| 38 | `/wp-content/uploads/2018/11/MESOTHERAPIE-1.jpg` | Junger Mann, Spritze an der Wange (Studioporträt) | 1600 × 1067, 141 KB | `/services/mesotherapie/` | nicht verwendbar | Stockfoto mit Person, Ästhetik-Behandlung (Fakt, XMP-Titel „Close-up portrait of young man …“) | – |
| 39 | `/wp-content/uploads/2018/11/MESOTHERAPIE-2.jpg` | Mann, Injektion in die Kopfhaut | 1600 × 1067, 151 KB | `/services/mesotherapie/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP-Titel „Close up makes mesotherapy injections …“) | – |
| 40 | `/wp-content/uploads/2018/11/MESOTHERAPIE-3.jpg` | Frau, Injektion an der Schläfe | 1600 × 1067, 160 KB | `/services/mesotherapie/` | nicht verwendbar | Stockfoto mit Person, Kosmetik (Fakt, XMP-Titel „… having a beaty injecti[on]“) | – |
| 41 | `/wp-content/uploads/2018/11/MESOTHERAPIE-4.jpg` | Frau mittleren Alters, Injektion ins Gesicht | 1600 × 1067, 150 KB | `/services/mesotherapie/` | nicht verwendbar | Stockfoto mit Person, Kosmetik (Fakt, XMP: Urheber „blackday“, Titel „Middle aged woman receiving facial injection …“) | – |
| 42 | `/wp-content/uploads/2022/04/ADERLASS-1.jpg` | Blutentnahme am Arm mit Stauschlauch | 1600 × 1066, 652 KB | `/services/aderlass/` (`alt="KAN ALMA"`) | nicht verwendbar | Stockfoto mit Personen (Arm, Hände); keine Urheberangabe | – |
| 43 | `/wp-content/uploads/2022/04/BLUTEGELTHERAPIE-1.jpg` | Blutegel wird mit Klemme auf Bauch gesetzt | 1600 × 1067, 157 KB | `/services/blutegeltherapie/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP-Titel „Doctor in the clinic puts medicinal leeches …“) | – |
| 44 | `/wp-content/uploads/2022/04/BLUTEGELTHERAPIE-2.jpg` | Blutegel auf Haut, Nahaufnahme | 1600 × 1067, 155 KB | `/services/blutegeltherapie/` | nicht verwendbar | Stockfoto mit Person, drastisch (Fakt, XMP-Titel „Traditional alternative medicine - doctor doing pro[cedure] …“) | – |
| 45 | `/wp-content/uploads/2022/04/NEURALTHERAPIE-NACH-HUNEKE-1.jpg` | Frau von hinten, Injektion in den Nacken | 1600 × 1067, 144 KB | `/services/neuraltherapie-nach-huneke/` | nicht verwendbar | Stockfoto mit Person (Fakt, XMP: Urheber „Lifestock“, Titel „Surgeon making injection into female body. Neural t[herapy]“) | – |

Zählung: 45 Einträge. Davon sind 43 Dateien abrufbar (Nr. 12 fehlt mit 404, Nr. 15 deckt zwei bytegleiche Dateien ab), dazu `/favicon.ico` und die `cropped-icon`-Varianten.

### 7.3 Erzeugte Dateien im Repo (`shared/assets/`)

Alle Dateien wurden mit sharp 0.35 und potrace 2.1.8 erzeugt (Skripte in `werkzeuge/` im Scratchpad: `logo-vektorisieren.mjs`, `assets-erzeugen.mjs`). Metadaten (EXIF, XMP, ICC) sind entfernt (geprüft).

| Datei | Pixel | Größe | Herkunft / Verarbeitung |
|---|---|---|---|
| `logo/logo-praxis-zum-schloss.png` | 400 × 101 | 14,2 KB | Nr. 1, verlustfrei neu komprimiert (pixelgleich geprüft) |
| `logo/logo-praxis-zum-schloss.svg` | viewBox 400 × 101 | 43,9 KB | Nachzeichnung von Nr. 1: Schrift aus Nr. 1, Bildmarke aus Nr. 2 (siehe §5) |
| `logo/logo-praxis-zum-schloss-negativ.svg` | viewBox 400 × 101 | 43,9 KB | wie oben, für dunkle Flächen: Marineblau → Weiß, Türkis → Website-Türkis `#47CCC8` (Farbe belegt in ENTWURF `redesign/README.md`). Kontrast auf `#2C3662`: Weiß 11,6 : 1, `#47CCC8` 5,9 : 1. **Abgeleitete Farbvariante, nicht von der Praxis freigegeben** |
| `logo/emblem-schloss.svg` | viewBox 1787 × 1787 (width/height 512) | 28,9 KB | Nachzeichnung von Nr. 2 (potrace, gefüllt, Türkis `#00A09B`) |
| `logo/emblem-schloss-512.png` | 512 × 512 | 42,8 KB | Nr. 2, auf den Kreis zugeschnitten (1 % Rand), Lanczos, Palette-PNG (max. Abweichung 7/255) |
| `logo/emblem-linien.svg` | viewBox 1008 × 1008 | 23,9 KB | unverändert aus ENTWURF `redesign/site/assets/img/` (Strich `#00A09B`) |
| `logo/emblem-linien-hell.svg` | viewBox 1008 × 1008 | 23,9 KB | unverändert aus ENTWURF (Strich `#47CCC8`) |
| `logo/favicon.svg` | viewBox 256 × 256 | 9,8 KB | Bildmarke auf weißer Kreisfläche, Linien für kleine Größen verstärkt, neu nachgezeichnet |
| `logo/favicon-32.png` | 32 × 32 | 1,6 KB | Bildmarke auf weißer Kreisfläche, Ecken transparent, Linien verstärkt |
| `logo/favicon-48.png` | 48 × 48 | 2,3 KB | dto. |
| `logo/apple-touch-icon.png` | 180 × 180 | 7,2 KB | Bildmarke (80 % Kantenlänge) auf weißer Fläche, opak |
| `logo/icon-192.png` | 192 × 192 | 7,4 KB | Bildmarke (76 %) auf Weiß, opak, innerhalb der „maskable“-Schutzzone |
| `logo/icon-512.png` | 512 × 512 | 20,7 KB | dto. |
| `logo/og-praxis-zum-schloss.jpg` | 1200 × 630 | 32,4 KB | Vorschaubild für `og:image`: Wortmarke (SVG) mittig auf Weiß (zusätzlich erzeugt) |
| `bilder/nalan-bagci-kaikis-portrait-480.avif` / `.webp` | 480 × 720 | 17,2 / 23,0 KB | Nr. 6, bereinigt, AVIF q55 / WebP q78 (Alpha q90) |
| `bilder/nalan-bagci-kaikis-portrait-720.avif` / `.webp` | 720 × 1079 | 32,6 / 45,5 KB | dto. |
| `bilder/nalan-bagci-kaikis-portrait-960.avif` / `.webp` | 960 × 1439 | 51,2 / 72,1 KB | dto. |
| `bilder/nalan-bagci-kaikis-portrait-kopf-240.avif` / `.webp` | 240 × 240 | 5,6 / 7,6 KB | quadratischer Ausschnitt x 250–770, y 30–550 des Originals (Haaransatz bis Kragen) |
| `bilder/nalan-bagci-kaikis-portrait-kopf-480.avif` / `.webp` | 480 × 480 | 15,1 / 19,4 KB | dto. |

Gesamtgröße `shared/assets/`: ca. 0,6 MB (ohne README).

### 7.4 SVG-Fassung der Wortmarke: Prüfung und Entscheidung

- **Verfahren:** Je Logofarbe wurde eine Maske aus Deckkraft und Farbzugehörigkeit erstellt. Diese Masken wurden 10-fach hochskaliert (Lanczos), leicht geglättet (σ = 0,6 Quellpixel), mit potrace nachgezeichnet (`optTolerance 0.4`, `alphaMax 1.0`) und als eine Ebene je Farbe gespeichert. Die nur 101 px große Bildmarke in der Wortmarke wurde nicht aus dem Logo nachgezeichnet. Stattdessen wurde die Nachzeichnung des 2016-px-Originals (Nr. 2) passgenau eingesetzt; die Zeichnung ist identisch, im Überlagerungsbild ohne Versatz.
- **Gerendert und angesehen in 1×, 3×, 8× sowie in Chromium und WebKit:**
  - Abweichung gegenüber dem Original-PNG in 1×: im Mittel 1,3/255 je Farbkanal; 0,06 % der Kanäle über 64/255, nur an Kantenpixeln.
  - Bis 3× (≈ 1200 px Breite) sauber.
  - Bei 8× sieht man, dass die Vorlage gering aufgelöst war: leicht gerundete Ecken, minimal unruhige Senkrechten.
  - Firefox ließ sich in der Sandbox nicht starten; nicht geprüft.
- **Entscheidung: behalten.** Die SVG entspricht dem Original in den üblichen Darstellungsgrößen (Kopfzeile, Fußzeile, Vorschaubild) sauber.
- **Einschränkung:** Es ist eine Nachzeichnung, keine Reinzeichnung. Für Druck oder sehr große Formate die Original-Vektordatei beim Gestalter bzw. bei der Praxis anfragen.
- **Verworfene Varianten** (Glättung/Toleranz 0,35/0,25/0,9, 0,8/0,5/1,1 und 0,6/0,3/0,75): Sie waren entweder facettiert oder hatten zu runde Ecken. Prüfbilder: `alt/bilder/vektor/`.

### 7.5 Hinweise zu Nutzungsrechten

- **Porträt (Nr. 6):** Fotograf und Nutzungsrechte sind **unbekannt**. Das XMP enthält keinen Urheber, nur `CreatorTool "Ver.1.02"` und `Software "Adobe ImageReady"` (Fakt).
  - Vor Livegang klären: Nutzungsrecht des Fotografen für Web und ggf. Social Media, Recht zur Bearbeitung (Freistellung, Zuschnitte) und Einwilligung der Ärztin in die erneute Veröffentlichung.
  - Gewünscht wären außerdem ein Porträt mit Originalhintergrund bzw. im Querformat sowie Fotograf und Jahr für eine Bildquellenangabe.
- **Logo und Bildmarke (Nr. 1, 2):** Gestalter und Rechte sind unbekannt. Die Dateien wurden am 16./19.04.2022 mit Photoshop erstellt (Fakt, XMP); der Dateiname `massage_logo_01.png` stammt aus dem Theme-Demo.
  - Klären: Wer hat das Logo gestaltet, liegt eine Vektor-Originaldatei vor, darf das Logo nachgezeichnet und farblich abgewandelt werden (SVG, Negativ-Fassung, Icons)?
  - Die Bildmarke zeigt Schloss Charlottenburg als eigene Strichzeichnung.
- **Stockfotos (Nr. 7, 8, 10, 13–45):** Lizenzen sind unbekannt.
  - Drei Dateien nennen in XMP Urheber oder Agenturen: africa-studio.com / Olga Yastremska (Nr. 27, 29), KREANGKRAI INDARODOM (Nr. 33), blackday (Nr. 41), Lifestock (Nr. 45). Weitere tragen typische Agentur-Bildtitel (Fakt).
  - Nicht übernommen. Falls einzelne Motive (z. B. Nr. 28) doch gewünscht sind, nur mit Lizenznachweis der Praxis.
- **Theme-Demo-Bilder (Nr. 9, 11; Vermutung):** Die Lizenz deckt üblicherweise nur die Demo, nicht den Einsatz auf der Live-Website (ENTWURF `02-website/recht-datenschutz.md`). Nicht übernommen.
- Dies ist keine Rechtsberatung; die Punkte gehören in `docs/offene-fragen.md`.

### 7.6 Fehlende Motive (Platzhalter-Bedarf)

Auf der alten Website gibt es **keine** eigenen Fotos der Praxis außer dem Porträt (Fakt: Inventar oben; ebenso ENTWURF `02-website/inhalt-struktur.md` §4). Für die Entwürfe sind gestaltete Platzhalter nötig, deutlich als solche erkennbar:

| Motiv | Wofür | Hinweis |
|---|---|---|
| Praxisräume: Empfang/Anmeldung | Startseite, „Unsere Praxis“ | eigenes Foto, menschenleer oder mit Einwilligung |
| Wartebereich | „Unsere Praxis“, Erstbesuch | dto. |
| Sprech- bzw. Behandlungszimmer | „Unsere Praxis“, Leistungen | dto. |
| Gebäude, Eingang Schloßstraße 21, Praxisschild | Kontakt/Anfahrt | hilft bei der Orientierung; Zugang (Aufzug/ebenerdig) ist laut ENTWURF noch zu bestätigen |
| Team (Medizinische Fachangestellte, „Praxisteam“) | „Unsere Praxis“ | nur mit Namen und Einwilligung; auf der alten Website nur erwähnt, nicht gezeigt |
| Ärztin im Gespräch bzw. bei der Untersuchung | Startseite, „Unsere Praxis“, Hausärztliche Versorgung | ergänzt das Studio-Porträt |
| Porträt im Querformat oder mit Hintergrund | Hero-Flächen | Fehlt; vorhanden ist nur die Freistellung im Hochformat |
| Lehrpraxis (Ausbildungs- bzw. Lehrsituation) | Rolle „Lehrärztin“ | Motiv und Faktenlage mit der Praxis klären |
| Diagnostik: Labor, EKG, Lungenfunktion, Langzeit-Blutdruck | Diagnostische Leistungen, Vorsorge | eigenes Foto, ohne Patientinnen und Patienten |
| Impfung und Reiseberatung | Impfungen und Reisemedizin | dto. |
| Akupunktur (Nadeln, Behandlungssituation) | Landing Page Akupunktur | nur echte Praxisfotos; sonst Platzhalter oder Illustration |
| Schröpfen, Blutegel, Eigenblut/Infusion, Neuraltherapie, Aderlass, Aufbaukuren, Phytotherapie, Orthomolekulare Medizin, Enzymtherapie, Mesotherapie, Psychosomatik | Landing Pages Naturheilkunde | nüchterne Detail- oder Instrumentenfotos aus der eigenen Praxis; keine Spa-, Kerzen- oder Kosmetikmotive |
| Lokalbezug Charlottenburg (z. B. Schloßstraße) | Startseite, Anfahrt | nur eigene Aufnahme; die Bildmarke kann den Bezug grafisch tragen |
| Reinzeichnung des Logos (Vektor-Original) | alle Entwürfe, Druck | beim Gestalter bzw. bei der Praxis anfragen |

**Empfehlung:** ein kleines Fotoshooting (Praxis, Eingang, Team, Behandlungssituationen). So empfiehlt es auch der ENTWURF in `03-empfehlung/erhalten-optimieren-neu.md`.

---

## 8. Stärken, Schwächen, Chancen

**Stärken**
1. **Substanz:** belastbare hausärztliche Texte (Vorsorge, Impfungen/Reisemedizin, Diagnostik, Therapie) und ein konkreter Lebenslauf mit Charité-Bezug (Studium, Lehrpraxen, Institut für Allgemeinmedizin in Lehre und Forschung).
2. **Eine Seite je Leistung** (16) – gute Grundlage für Suchanfragen wie „Akupunktur Charlottenburg“ oder „Schröpfen Berlin“.
3. **Wiedererkennbare Marke:** Wortmarke und Bildmarke mit Schloss Charlottenburg, zwei klare Logofarben; professionelles Porträt.
4. **Klarer lokaler Bezug:** Schloßstraße 21, Berlin-Charlottenburg; Name „Praxis zum Schloss“.
5. **Ehrliche Praxisregeln** zur Terminvergabe und ein Notfallhinweis (116117/112).
6. **Gegenanzeigen** sind bei mehreren Verfahren genannt (Schröpfen, Blutegel, Eigenblut, Neuraltherapie) – das passt zu einer ärztlich-nüchternen Darstellung.
7. Flache Navigation (zwei Ebenen); keine Tracker, keine Google-Fonts-Abrufe.

**Schwächen**
1. **111 öffentliche Vorlagenseiten** unter dem Praxisnamen (u. a. „Gratis-Botox“, fiktive Ärzte, Lorem-ipsum-Patientenstimmen, Kaffee-FAQ, Shop).
2. **Wirk- und Heilaussagen** auf Naturheilkunde-Seiten (Entgiftung, Immunstärkung, „Behandlungserfolge sprechen für sich“, ästhetische Werbung bei Mesotherapie), Begriff „Alternativmedizin“.
3. **Falsche und fremde Inhalte:** Mesotherapie-Absatz auf der Orthomolekular-Seite, Schröpfen-Absatz auf der Akupunktur-Seite, TK-Artikel auf der Phytotherapie-Seite, Herstellertexte, eingeschleuster Spam-Link (Enzymtherapie), türkische Textreste.
4. **Nicht belegbare Angaben:** „zugelassene Gelbfieberimpfstelle“ (nicht in der amtlichen Liste), Projektleitung (laut Bundesärztekammer andere Person), „Dr.“ (nicht im Register/Impressum).
5. **Veraltetes:** Corona-Block, „Sonderöffnungszeiten während der Corona-Pandemie“, „neue Praxisräume ab April 2021“, „© 2022“, veraltetes Impressum und eine Datenschutzerklärung, die die tatsächliche Technik nicht beschreibt.
6. **Widersprüchliche Stammdaten** im Netz: drei Sprechzeiten-Versionen, fünf Namensschreibweisen, zweite Nummer Fax oder Telefon.
7. **Mobil schwach:** Telefon, Adresse, Impressum und Datenschutz auf dem Smartphone kaum oder gar nicht erreichbar; keine `tel:`-Links; LCP 11,6 s.
8. **Bildsprache:** ausschließlich Stockfotos mit Spa-/Kosmetik-Anmutung und unklarer Lizenz; keine Fotos der Praxis.
9. **Fehlende Informationen:** Sprachen, Zugang/Barrierefreiheit, Anfahrt (ÖPNV, Parken), Kosten der Selbstzahlerleistungen, Ablauf eines Termins, Team.
10. **Technik:** Kein SEO-Grundgerüst (keine H1 auf der Startseite, keine Descriptions, keine strukturierten Daten). Dazu ein veraltetes Theme-Framework mit Sicherheitslücke und reCAPTCHA ohne Einwilligung.

**Chancen**
1. **Fachärztliche Positionierung zuerst:** Fachärztin für Allgemeinmedizin mit Charité-Hintergrund in Lehre und Forschung. Naturheilkunde ist ein ärztlich verantwortetes Alleinstellungsmerkmal im Kiez, denn keine Nachbarpraxis bietet ein vergleichbares Spektrum.
2. **Online-Termin über Doctolib** schließt eine Lücke zum Wettbewerb (2 von 5 Nachbarpraxen buchen online).
3. **Lokales SEO mit wenig Konkurrenz:** Keine Nachbarpraxis nutzt `Physician`-Daten, mehrere haben keine Description. Landing Pages je Verfahren mit Ortsbezug und FAQ.
4. **Mehrsprachigkeit:** Englisch und Türkisch (laut arzt-auskunft gesprochen) als sichtbares Merkmal; die Begriffe „Hacamat/Hijama“ sprechen türkisch- und arabischsprachige Patientinnen und Patienten bereits an.
5. **Abgrenzung zur fast namensgleichen „Praxis am Schloss“** durch konsequente Nennung von Ärztin, Adresse und Schwerpunkt.
6. **Vertrauen durch Klarheit:** sachliche Texte mit Ablauf, Kostenhinweis und Gegenanzeigen statt Werbeaussagen. Das ist rechtlich sicherer und wirkt seriöser.
7. **Wartungsarme statische Website** (schnell, sicher, ohne Cookie-Banner).

---

## 9. Ausgeschlossene Vorlagenseiten und Zweifelsfälle

### 9.1 Vorlagenseiten (111) – in keinem Entwurf übernommen

Keine dieser Seiten wird in einen Entwurf übernommen. Empfehlung an die Praxis für alle: auf der alten Website löschen oder auf `noindex` setzen und aus der Sitemap entfernen. Alle haben den Seitentitel-Zusatz „– PRAXIS ZUM SCHLOSS“ und kein `noindex` (**Fakt**, Meta-Robots „max-image-preview:large“ in jeder Datei).

| # | URL | Quelle | sichtbarer Inhalt (Titel/H1 · Textanfang) | Begründung |
|---|---|---|---|---|
| 1 | `/leistungsspektrum/` | sitemap | LEISTUNGSSPEKTRUM · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | WordPress-Seite mit Blog-Vorlage (page-templates/blog.php), im Demo-Menü als „Masonry 2-Columns“ verlinkt und nur 2022 in „LEISTUNGSSPEKTRUM“ umbenannt; zeigt ausschließlich „Anscheinend können wir nicht finden, wonach Sie suchen“ – der echte Menüpunkt LEISTUNGSSPEKTRUM zeigt auf „#“, nicht hierher. |
| 2 | `/testimonials/` | sitemap | Testimonials · Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tell … | 14 erfundene englische Lorem-ipsum-„Patientenstimmen“ (z. B. „Anastasia Stone – Business Analyst“). |
| 3 | `/elements/shortcodes/` | sitemap | Shortcodes · Video Background Skills Salad with fruits 75% Chicken wings with sauce 55% Carbonara paste … | Element-Showcase des Themes („Video Background“, „Skills: Salad with fruits 75 %, Chicken wings with sauce 55 %“). |
| 4 | `/classic-blog-with-right-sidebar/` | sitemap | Classic Blog with Right Sidebar · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Demo-Blogvorlage „Classic Blog with Right Sidebar“ (englischer Titel), zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“. |
| 5 | `/blog-three-columns/` | sitemap | Blog Three Columns · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Demo-Blogvorlage „Blog Three Columns“ (englischer Titel), zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“. |
| 6 | `/gallery-2-columns/` | sitemap | Gallery 2-columns · Massage Urology Neurosurgery Surgery Cardiology MRI scanning Computer diagnostiс Health In … | Demo-Galerieübersicht mit fremden Fachgebieten (Massage, Urology, Neurosurgery, Surgery, Cardiology, MRI scanning, Computer diagnostiс, Health Insurance, Medical Centers). |
| 7 | `/gallery-3-columns/` | sitemap | Gallery 3-columns · Massage Urology Neurosurgery Surgery Cardiology MRI scanning Computer diagnostiс Health In … | Demo-Galerieübersicht mit fremden Fachgebieten (Massage, Urology, Neurosurgery, Surgery, Cardiology, MRI scanning, Computer diagnostiс, Health Insurance, Medical Centers). |
| 8 | `/gallery-4-columns/` | sitemap | Gallery 4-columns · Massage Urology Neurosurgery Surgery Cardiology MRI scanning Computer diagnostiс Health In … | Demo-Galerieübersicht mit fremden Fachgebieten (Massage, Urology, Neurosurgery, Surgery, Cardiology, MRI scanning, Computer diagnostiс, Health Insurance, Medical Centers). |
| 9 | `/elements/accordions/` | sitemap | Accordions · How to download this theme? Praesent vel turpis gravida, ultricies lorem eget, ultricies l … | Akkordeon-Muster „How to download this theme?“ mit Lorem ipsum. |
| 10 | `/elements/alert/` | sitemap | Alert · Success Fusce eu justo a sapien tincidunt aliquet. Sed pellentesque pellentesque quam, ac  … | Hinweisbox-Muster „Success / Error / Important“ mit Lorem ipsum. |
| 11 | `/elements/buttons/` | sitemap | Buttons · Button Med Button Big Button Button Med Button Big Button Button Med Button Big Button But … | Button-Muster „Button / Med Button / Big Button“. |
| 12 | `/elements/list/` | sitemap | List · Lorem ipsum dolor Mauris placerat sit Proin facilisis quam Nunc tristique Donec varius Sus … | Listen-Muster „Lorem ipsum dolor / Mauris placerat sit …“. |
| 13 | `/elements/tabs/` | sitemap | Tabs · Tab 1 Tab 2 Tab 3 Tab 1 Ut ac ante sit amet sem blandit condimentum et sit amet lectus. Se … | Tab-Muster „Tab 1 / Tab 2 / Tab 3“ mit Lorem ipsum. |
| 14 | `/elements/text/` | sitemap | Text · Bold text uspendisse lobortis aliquam lacus, vitae lacinia purus viverra vitae. Nulla faci … | Typografie-Muster „Bold text uspendisse lobortis …“ (Lorem ipsum). |
| 15 | `/elements/separators/` | sitemap | Separators · Left Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium, erat volutpa … | Trennlinien-Muster „Left / Center / Right“ mit Lorem ipsum. |
| 16 | `/elements/text_columns/` | sitemap | Text Columns · Full width text (4 columns) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauri … | Spalten-Muster „Full width text (4 columns)“ mit Lorem ipsum. |
| 17 | `/elements/headers/` | sitemap | Headers \| Heading 1 · Heading 1 Bold text uspendisse lobortis aliquam lacus, vitae lacinia purus viverra vitae.  … | Überschriften-Muster „Heading 1 … Heading 6“ mit Lorem ipsum. |
| 18 | `/elements/table/` | sitemap | Table · Header 1 Table header 2 Table header 3 Table header 4 Today’s event Couch: Alexander Morga … | Tabellen-Muster mit Kursplan („Couch: Alexander Morgan 12:00 – 18:00“). |
| 19 | `/elements/text-sliders/` | sitemap | Text Sliders · Centered Slider [like_sc_sliders type=“slider-swiper“ slides=“%5B%7B%22image%22%3A%222178% … | Slider-Muster mit nicht aufgelösten Shortcodes („[like_sc_sliders type=…]“) und Lorem ipsum. |
| 20 | `/shop/` | sitemap | Shop · (kein Text) | Leere Shop-Seite „Shop“ ohne Inhalt; WooCommerce ist nicht aktiv (kein Post-Typ „product“ in der REST-API, /product/ = 404). |
| 21 | `/cart/` | sitemap | Cart · [woocommerce_cart] | Warenkorb-Seite, zeigt nur den nicht aufgelösten Shortcode „[woocommerce_cart]“. |
| 22 | `/checkout/` | sitemap | Checkout · [woocommerce_checkout] | Kassen-Seite, zeigt nur den nicht aufgelösten Shortcode „[woocommerce_checkout]“. |
| 23 | `/mein-konto/` | sitemap | Mein Konto · [woocommerce_my_account] | Konto-Seite, zeigt nur den nicht aufgelösten Shortcode „[woocommerce_my_account]“. |
| 24 | `/elements/icons-page/` | sitemap | Icons · Quick help Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium, erat v … | Icon-Muster „Quick help / Fast searching“ mit Lorem ipsum. |
| 25 | `/elements/forms/` | sitemap | Forms · Contact Us Fehler: Kontaktformular wurde nicht gefunden. Contact Us Fehler: Kontaktformula … | Formular-Muster „Contact Us – Fehler: Kontaktformular wurde nicht gefunden“. |
| 26 | `/team/` | sitemap | Team · John Richards Cardiology Morbi congue ex ut libero porta accumsan. Nunc convallis ullamcor … | Fiktive Ärzte mit Fachgebieten der Demo (John Richards – Cardiology, Kelley Miles – Surgery, Sherman Warner – Urology …) und Lorem ipsum. |
| 27 | `/404-layout/` | sitemap | 404 Page Not Found \| 404 · 404 Oops! Page Not Found The page you are looking for was moved, removed, renamed or might … | Englische Demo-Fehlerseite „404 Oops! Page Not Found“, als normale Seite mit HTTP 200 erreichbar. |
| 28 | `/faq/` | sitemap | Frequently Asked Questions · Is it possible to pay for an order with Visa and MasterCard payment cards? Pellentesque bl … | Englische Shop- und Kaffee-FAQ („Is it possible to pay for an order with Visa and MasterCard?“) mit Lorem ipsum, 1.716 Wörter. |
| 29 | `/elements/` | sitemap | Elements · (kein Text) | Leere Elternseite „Elements“ der Element-Showcases (0 Wörter Inhalt). |
| 30 | `/classic-blog-without-sidebar/` | sitemap | Classic Blog without Sidebar · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Demo-Blogvorlage „Classic Blog without Sidebar“ (englischer Titel), zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“. |
| 31 | `/blog-3-columns-with-right-sidebar/` | sitemap | Blog 3-Columns with Right Sidebar · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Demo-Blogvorlage „Blog 3-Columns with Right Sidebar“ (englischer Titel), zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“. |
| 32 | `/homepage-diagnostic/` | sitemap | Homepage Diagnostic – PRAXIS ZUM SCHLOSS · World leader in diagnostics Etiam condimentum aliquam odio, ut consectetur enim. Nullam me … | Demo-Startseite „World leader in diagnostics“ mit Lorem ipsum und fremden Fachgebieten (Gastroenterology, Cardiology, MRI testing …). |
| 33 | `/blog-2-columns-with-right-sidebar-2/` | sitemap | Blog 3-Columns with Right Sidebar · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Demo-Blogvorlage „Blog 3-Columns with Right Sidebar“ (englischer Titel), zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“. |
| 34 | `/multipage/` | sitemap | Multipage – PRAXIS ZUM SCHLOSS · Medical Diagnostic, Plastic Surgery Clinic and Medical Masage WordPress Theme Amazing desi … | Verkaufsseite des Themes („Medical Diagnostic, Plastic Surgery Clinic and Medical Masage WordPress Theme“, „Easy Demo import with a 1 mouse click“). |
| 35 | `/homepage-plastic/` | sitemap | Homepage Plastic – PRAXIS ZUM SCHLOSS · We are the leading plastic surgery center in the World 01 PSYCHOSOMATISCHE MEDIZIN 02 DIAG … | Demo-Startseite einer Schönheitsklinik („We are the leading plastic surgery center in the World“, „Get a free trial bottox injection free“). |
| 36 | `/homepage-medical-blog/` | sitemap | Homepage Medical Blog – PRAXIS ZUM SCHLOSS · Want to be informed first? Subscribe our newsletter [mc4wp_form id="806"] | Demo-Startseite „Medical Blog“ mit Newsletter-Platzhalter „[mc4wp_form id="806"]“ und Demo-Menü (Diagnostic, Plastic Surgery, Shop …) in der Kopfleiste. |
| 37 | `/?testimonials=steven-rashford` | sitemap | Steven Rashford · by admin Mai 22, 2017 0 Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integ … | Einzelne erfundene englische „Patientenstimme“ „Steven Rashford“ mit Lorem ipsum. |
| 38 | `/?testimonials=patrick-james` | sitemap | Patrick James · by admin Mai 22, 2017 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fa … | Einzelne erfundene englische „Patientenstimme“ „Patrick James“ mit Lorem ipsum. |
| 39 | `/?testimonials=patrick-james-2` | sitemap | Patrick James · by admin Mai 22, 2017 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fa … | Einzelne erfundene englische „Patientenstimme“ „Patrick James“ mit Lorem ipsum. |
| 40 | `/?testimonials=anastasia-stone-2` | sitemap | Anastasia Stone · by admin Mai 22, 2017 0 Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat … | Einzelne erfundene englische „Patientenstimme“ „Anastasia Stone“ mit Lorem ipsum. |
| 41 | `/?testimonials=steven-rashford-2` | sitemap | Steven Rashford · by admin Mai 22, 2017 0 Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integ … | Einzelne erfundene englische „Patientenstimme“ „Steven Rashford“ mit Lorem ipsum. |
| 42 | `/?testimonials=patrick-james-3` | sitemap | Patrick James · by admin Mai 22, 2017 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fa … | Einzelne erfundene englische „Patientenstimme“ „Patrick James“ mit Lorem ipsum. |
| 43 | `/?testimonials=steven-rashford-3` | sitemap | Steven Rashford · by admin Mai 22, 2017 0 Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integ … | Einzelne erfundene englische „Patientenstimme“ „Steven Rashford“ mit Lorem ipsum. |
| 44 | `/?testimonials=anastasia-stone-3` | sitemap | Anastasia Stone · by admin Mai 22, 2017 0 Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat … | Einzelne erfundene englische „Patientenstimme“ „Anastasia Stone“ mit Lorem ipsum. |
| 45 | `/?testimonials=patrick-james-4` | sitemap | Patrick James · by admin Mai 22, 2017 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fa … | Einzelne erfundene englische „Patientenstimme“ „Patrick James“ mit Lorem ipsum. |
| 46 | `/?testimonials=anastasia-stone-4` | sitemap | Anastasia Stone · by admin Mai 22, 2017 0 Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat … | Einzelne erfundene englische „Patientenstimme“ „Anastasia Stone“ mit Lorem ipsum. |
| 47 | `/?testimonials=steven-rashford-4` | sitemap | Steven Rashford · by admin Mai 22, 2017 0 Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integ … | Einzelne erfundene englische „Patientenstimme“ „Steven Rashford“ mit Lorem ipsum. |
| 48 | `/?testimonials=patrick-james-5` | sitemap | Patricia James · by admin Mai 22, 2017 0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fa … | Einzelne erfundene englische „Patientenstimme“ „Patricia James“ mit Lorem ipsum. |
| 49 | `/?testimonials=steven-rashford-5` | sitemap | Steven Rashford · by admin Mai 21, 2017 0 Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integ … | Einzelne erfundene englische „Patientenstimme“ „Steven Rashford“ mit Lorem ipsum. |
| 50 | `/?testimonials=anastasia-stone-5` | sitemap | Anastasia Stone · by admin Mai 22, 2017 0 Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat … | Einzelne erfundene englische „Patientenstimme“ „Anastasia Stone“ mit Lorem ipsum. |
| 51 | `/?sections=subscribe` | sitemap | Subscribe · by admin Juli 26, 2017 0 [mc4wp_form id=“806″] | Demo-Newsletter-Baustein von 2017, zeigt nur den nicht aufgelösten Shortcode „[mc4wp_form id=“806″]“; der Footer-Platz „subscribe-block“ ist auf allen Seiten leer. |
| 52 | `/?sections=footer-logos` | sitemap | Footer logos · by admin November 27, 2018 0 | Demo-Partnerlogo-Leiste mit 6 leeren Bildern (src leer, alt „.“), nur auf Demo-Startseiten eingebunden; die echte Verzeichnis-Leiste der Startseite stammt nicht aus diesem Baustein. |
| 53 | `/?sections=top-bar-2` | sitemap | Top Bar with Menu · by admin November 27, 2018 0 Home Diagnostic Plastic Surgery Massage Medical Blog About us … | Demo-Kopfleiste „Top Bar with Menu“ mit Theme-Menü (Diagnostic, Plastic Surgery, Shop, Cart, Checkout …), nur auf /homepage-medical-blog/ eingebunden. |
| 54 | `/gallery/medical-centers/` | sitemap | Medical Centers · (kein Text) | Demo-Galerieeintrag „Medical Centers“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 55 | `/gallery/health-insurance/` | sitemap | Health Insurance · (kein Text) | Demo-Galerieeintrag „Health Insurance“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 56 | `/gallery/computer-diagnosti%d1%81/` | sitemap | Computer diagnostiс · (kein Text) | Demo-Galerieeintrag „Computer diagnostiс“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 57 | `/gallery/mri-scanning/` | sitemap | MRI scanning · (kein Text) | Demo-Galerieeintrag „MRI scanning“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 58 | `/gallery/cardiology/` | sitemap | Cardiology · (kein Text) | Demo-Galerieeintrag „Cardiology“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 59 | `/gallery/surgery/` | sitemap | Surgery · (kein Text) | Demo-Galerieeintrag „Surgery“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 60 | `/gallery/neurosurgery/` | sitemap | Neurosurgery · (kein Text) | Demo-Galerieeintrag „Neurosurgery“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 61 | `/gallery/urology/` | sitemap | Urology · (kein Text) | Demo-Galerieeintrag „Urology“ (fremdes Fachgebiet) ohne Text, nur Demo-Bilder (blog_XX.jpg bzw. surgary_serv_XX.jpg). |
| 62 | `/gallery/massage/` | sitemap | Massage · (kein Text) | Demo-Galerieeintrag „Massage“ (Demo-Slug, Stand 2018) ohne Text; die 9 verlinkten Bilder /wp-content/uploads/2017/12/01–09.jpg liefern HTTP 404 (Stichprobe 01 und 05), die Seite rendert leer – kein Bezug zur Praxis. |
| 63 | `/team/antony-taylor/` | sitemap | Antony Taylor · Antony Taylor Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99 … | Fiktives Arztprofil „Antony Taylor“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 64 | `/team/denis-green/` | sitemap | Denis Green · Denis Green Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99 j … | Fiktives Arztprofil „Denis Green“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 65 | `/team/sherman-warner/` | sitemap | Sherman Warner · Sherman Warner Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-9 … | Fiktives Arztprofil „Sherman Warner“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 66 | `/team/kelley-miles/` | sitemap | Kelley Miles · Kelley Miles Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99  … | Fiktives Arztprofil „Kelley Miles“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 67 | `/team/john-richards/` | sitemap | John Richards · John Richards Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99 … | Fiktives Arztprofil „John Richards“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 68 | `/team/michael-hardy/` | sitemap | Philip Bailey · Sherman Warner Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-9 … | Fiktives Arztprofil „Philip Bailey“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 69 | `/team/grace-flynn/` | sitemap | Grace Flynn · Denis Green Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99 j … | Fiktives Arztprofil „Grace Flynn“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 70 | `/team/brian-marsh/` | sitemap | Brian Marsh · Antony Taylor Engineer Age: 28 Experience: 4 years Specialization: Engineer 803-33-5644-99 … | Fiktives Arztprofil „Brian Marsh“ mit Demo-Daten („Engineer, Age: 28“, E-Mail johnrichards@your-company.com). |
| 71 | `/?faq=how-to-choose-the-right-coffee` | sitemap | How to choose the right coffee · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „How to choose the right coffee“ mit Lorem-ipsum-Antwort. |
| 72 | `/?faq=can-i-return-the-product-after-purchase` | sitemap | Can I return the product after purchase? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Can I return the product after purchase?“ mit Lorem-ipsum-Antwort. |
| 73 | `/?faq=what-payment-methods-exist-in-your-company` | sitemap | What payment methods exist in your company? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „What payment methods exist in your company?“ mit Lorem-ipsum-Antwort. |
| 74 | `/?faq=is-it-possible-to-pay-by-credit-card` | sitemap | Is it possible to pay by credit card? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Is it possible to pay by credit card?“ mit Lorem-ipsum-Antwort. |
| 75 | `/?faq=is-it-possible-to-pay-for-an-order-with-visa-and-mastercard-payment-cards` | sitemap | Is it possible to pay for an order with Visa and MasterCard  · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Is it possible to pay for an order with Visa and MasterCard payment cards?“ mit Lorem-ipsum-Antwort. |
| 76 | `/?faq=where-and-how-can-i-exchange-or-refund` | sitemap | Where and how can I exchange or refund? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Where and how can I exchange or refund?“ mit Lorem-ipsum-Antwort. |
| 77 | `/?faq=what-if-the-prepaid-goods-are-not-delivered` | sitemap | What if the prepaid goods are not delivered? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „What if the prepaid goods are not delivered?“ mit Lorem-ipsum-Antwort. |
| 78 | `/?faq=what-is-the-validity-period-of-the-gift-certificate` | sitemap | What is the validity period of the gift certificate? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „What is the validity period of the gift certificate?“ mit Lorem-ipsum-Antwort. |
| 79 | `/?faq=how-do-i-use-a-promotional-code` | sitemap | How do I use a promotional code? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „How do I use a promotional code?“ mit Lorem-ipsum-Antwort. |
| 80 | `/?faq=can-i-return-the-product-after-purchase-copy` | sitemap | Can I return the product after purchase? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Can I return the product after purchase?“ mit Lorem-ipsum-Antwort. |
| 81 | `/?faq=what-payment-methods-exist-in-your-company-2` | sitemap | What payment methods exist in your company? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „What payment methods exist in your company?“ mit Lorem-ipsum-Antwort. |
| 82 | `/?faq=is-it-possible-to-pay-by-credit-card-2` | sitemap | Is it possible to pay by credit card? · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Is it possible to pay by credit card?“ mit Lorem-ipsum-Antwort. |
| 83 | `/?faq=is-it-possible-to-pay-for-an-order-with-visa-and-mastercard-payment-cards-2` | sitemap | Is it possible to pay for an order with Visa and MasterCard  · by admin September 16, 2017 0 Pellentesque blandit arcu eu orci venenatis aliquet. Morbi i … | Englische Shop-FAQ „Is it possible to pay for an order with Visa and MasterCard payment cards?“ mit Lorem-ipsum-Antwort. |
| 84 | `/sliders-category/leistungsspektrum/` | sitemap | Leistungsspektrum · Massage 1 November 23, 2018 0 Massage 2 November 23, 2018 0 | Slider-Archiv „Leistungsspektrum“, zeigt nur die internen Einträge „Massage 1“ und „Massage 2“ mit Datum und Zähler, ohne eigenen Text. |
| 85 | `/team-category/cardiology/` | sitemap | Cardiology · John Richards September 17, 2017 0 Denis Green September 17, 2017 0 Antony Taylor Septembe … | Archiv fiktiver Ärzte der Demo-Kategorie „Cardiology“ (z. B. John Richards). |
| 86 | `/team-category/surgery/` | sitemap | Surgery · Kelley Miles September 17, 2017 0 Denis Green September 17, 2017 0 Antony Taylor September … | Archiv fiktiver Ärzte der Demo-Kategorie „Surgery“ (z. B. Kelley Miles). |
| 87 | `/team-category/neurosurgery/` | sitemap | Neurosurgery · Philip Bailey Oktober 2, 2016 0 Grace Flynn Oktober 2, 2016 0 Brian Marsh Oktober 2, 2016  … | Archiv fiktiver Ärzte der Demo-Kategorie „Neurosurgery“ (z. B. Philip Bailey). |
| 88 | `/team-category/urology/` | sitemap | Urology · Sherman Warner September 17, 2017 0 Denis Green September 17, 2017 0 Antony Taylor Septemb … | Archiv fiktiver Ärzte der Demo-Kategorie „Urology“ (z. B. Sherman Warner). |
| 89 | `/faq-category/coffee-making/` | sitemap | Coffee Making · Is it possible to pay for an order with Visa and MasterCard payment cards? September 16, 2 … | Archiv der Demo-FAQ-Kategorie „Coffee Making“ mit englischen Shop-Fragen. |
| 90 | `/faq-category/common/` | sitemap | Common · Is it possible to pay for an order with Visa and MasterCard payment cards? September 16, 2 … | Archiv der Demo-FAQ-Kategorie „Common“ mit englischen Shop-Fragen. |
| 91 | `/faq-category/delivery/` | sitemap | Delivery · Is it possible to pay for an order with Visa and MasterCard payment cards? September 16, 2 … | Archiv der Demo-FAQ-Kategorie „Delivery“ mit englischen Shop-Fragen. |
| 92 | `/faq-category/payment/` | sitemap | Payment · Is it possible to pay for an order with Visa and MasterCard payment cards? September 16, 2 … | Archiv der Demo-FAQ-Kategorie „Payment“ mit englischen Shop-Fragen. |
| 93 | `/blog/` (301→200 → `/blog-2-columns-with-right-sidebar-2/`) | link | Blog 3-Columns with Right Sidebar · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Von /homepage-diagnostic/ und /homepage-plastic/ („More articles“) verlinkt, leitet per 301 auf die leere Demo-Blogvorlage /blog-2-columns-with-right-sidebar-2/ weiter. |
| 94 | `/?post_type=testimonials` | link | All Testimonials · Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tell … | Archiv „All Testimonials“ mit den erfundenen englischen Lorem-ipsum-Patientenstimmen (Breadcrumb-Ziel der Einzelstimmen). |
| 95 | `/?post_type=sliders` | link | All Sliders · Massage 1 November 23, 2018 0 Massage 2 November 23, 2018 0 | Archiv „All Sliders“, zeigt nur „Massage 1“ und „Massage 2“ mit Datum, ohne Text. |
| 96 | `/?post_type=faq` | link | All Faq · Is it possible to pay for an order with Visa and MasterCard payment cards? Pellentesque bl … | Archiv „All Faq“ mit englischen Shop-FAQ und Lorem ipsum (1.716 Wörter). |
| 97 | `/gallery/` | link | All Gallery · Massage Urology Neurosurgery Surgery Cardiology MRI scanning Computer diagnostiс Health In … | Archiv „All Gallery“ mit den 9 Demo-Galerien fremder Fachgebiete. |
| 98 | `/testimonials/page/2/` | link | Testimonials · Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh … | Seite 2 der Demo-Patientenstimmen mit Lorem ipsum. |
| 99 | `/faq/page/2/` | link | Frequently Asked Questions · How to choose the right coffee Pellentesque blandit arcu eu orci venenatis aliquet. Morbi  … | Seite 2 der Demo-FAQ („How to choose the right coffee“). |
| 100 | `/faq-category/coffee-making/page/2/` | link | Coffee Making · How to choose the right coffee September 16, 2017 0 Posts navigation 1 2 | Seite 2 des Demo-FAQ-Archivs „Coffee Making“ („How to choose the right coffee“). |
| 101 | `/faq-category/common/page/2/` | link | Common · How to choose the right coffee September 16, 2017 0 Posts navigation 1 2 | Seite 2 des Demo-FAQ-Archivs „Common“ („How to choose the right coffee“). |
| 102 | `/faq-category/delivery/page/2/` | link | Delivery · How to choose the right coffee September 16, 2017 0 Posts navigation 1 2 | Seite 2 des Demo-FAQ-Archivs „Delivery“ („How to choose the right coffee“). |
| 103 | `/faq-category/payment/page/2/` | link | Payment · How to choose the right coffee September 16, 2017 0 Posts navigation 1 2 | Seite 2 des Demo-FAQ-Archivs „Payment“ („How to choose the right coffee“). |
| 104 | `/page/2/?post_type=testimonials` | link | All Testimonials · Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh … | Seite 2 des Patientenstimmen-Archivs mit Lorem ipsum („Steven Rashford – Writer“). |
| 105 | `/page/2/?post_type=faq` | link | All Faq · How to choose the right coffee Pellentesque blandit arcu eu orci venenatis aliquet. Morbi  … | Seite 2 des FAQ-Archivs („How to choose the right coffee“, Lorem ipsum). |
| 106 | `/category/leistungsspektrum/` | pfad | LEISTUNGSSPEKTRUM · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Beitragskategorie „LEISTUNGSSPEKTRUM“ (0 Beiträge laut REST-API), zeigt nur „Anscheinend können wir nicht finden …“. |
| 107 | `/category/uncategorized/` | pfad | Uncategorized · Anscheinend können wir nicht finden, wonach Sie suchen. Vielleicht hilft die Suche. | Leere Standardkategorie „Uncategorized“ (0 Beiträge laut REST-API), zeigt nur „Anscheinend können wir nicht finden …“. |
| 108 | `/feed/` | pfad |  · (kein Text) | WordPress-Standardfeed ohne einen einzigen Eintrag (es gibt keine Beiträge), Beschreibung „Dr. Nalan BAGCI KAIKIS“. |
| 109 | `/comments/feed/` | pfad |  · (kein Text) | Kommentar-Feed mit 5 Lorem-ipsum-Demo-Kommentaren von 2018 zu Demo-Produkten („Asthma inhaler“, „Feather Pillow“, „THC“, „Medical Scissors“, „First aid kit“). |
| 110 | `/?post_type=sections` | pfad | All Blog Posts · Top Bar with Menu November 27, 2018 0 Footer logos November 27, 2018 0 Top Bar November 3, … | Theme-Fallback „All Blog Posts“, listet die internen Bausteine „Top Bar with Menu“, „Footer logos“, „Top Bar“, „Subscribe“. |
| 111 | `/?post_type=team` | pfad | All Blog Posts · John Richards September 17, 2017 0 Kelley Miles September 17, 2017 0 Sherman Warner Septem … | Theme-Fallback „All Blog Posts“, listet die 8 fiktiven Demo-Ärzte (John Richards, Kelley Miles …). |

### 9.2 Zweifelsfälle (8) – nicht als eigene Seite übernommen

Keiner dieser Fälle wird als eigene Seite übernommen (Regel aus Abschnitt 4 des Master-Prompts). Die echten Inhalte darin sind über echte Seiten bereits erfasst.

| URL | Quelle | Befund | Empfehlung |
|---|---|---|---|
| `/services-category/leistungsspektrum/` | sitemap | Kategorie-Archiv ohne eigenen Text, das als Ziel der Mega-Menü-Spalte „Leistungsspektrum“ dient, aber alle 16 Leistungen (nicht nur die 5 der Kategorie) mit Blog-Datum und Aufrufzähler „0“ auflistet. | Nicht als eigene Inhaltsseite übernehmen; Funktion geht im Leistungen-Hub auf (Gruppe hausärztliche Leistungen). Gruppierung aus dem Menü (5 Leistungen) übernehmen und alte URL im Alt→Neu-Mapping auf den Hub abbilden. |
| `/services-category/naturheilkundliche-therapien/` | sitemap | Kategorie-Archiv ohne eigenen Text (Ziel der Menüspalte und der Startseiten-Kachel „NATURHEILKUNDLICHE THERAPIEN“), listet aber identisch alle 16 Leistungen inklusive Vorsorge und Diagnostik. | Nicht als eigene Inhaltsseite übernehmen; als Naturheilkunde-Bereich des Leistungen-Hubs (11 Verfahren laut Menü) neu aufbauen und im Alt→Neu-Mapping dorthin abbilden. |
| `/services/` | link | Archiv mit englischer Überschrift „All Service“, das alle 16 echten Leistungen auflistet, aber nur über unsichtbare Breadcrumbs („Services“) der Leistungsseiten und Demo-Menüs verlinkt ist. | Nicht übernehmen (Duplikat der Kategorie-Archive); im Alt→Neu-Mapping auf den Leistungen-Hub abbilden. |
| `/?post_type=services` | pfad | Gleiche Liste wie /services/ (H1 „All Service“, alle 16 Leistungen), nur als Query-URL erreichbar. | Nicht übernehmen (Duplikat von /services/). |
| `/?sliders=massage-1` | sitemap | Theme-Baustein mit Demo-Slug „massage-1“, enthält aber echten Startseiten-Inhalt (Porträt der Ärztin SLIDE_1-1.jpg, „NALAN BAGCI KAIKIS – Hier bieten wir Ihnen ein umfangreiches Spektrum an Diagnostik, Beratung und Therapien.“), als Einzelseite mit „by admin“ und Teilen-Buttons. | Nicht als Seite übernehmen; Text und Porträt sind über die Startseite erfasst (Bild SLIDE_1-1.jpg als Asset prüfen). |
| `/?sliders=massage-2` | sitemap | Theme-Baustein mit Demo-Slug „massage-2“, enthält aber den echten zweiten Startseiten-Slide (Bild SLIDE_02-1.jpg, „NATURMEDIZIN – Suchen Sie Lösungen für Ihre gesundheitlichen Probleme? …“). | Nicht als Seite übernehmen; Inhalt über die Startseite erfasst (Text enthält „Gesundheit und Schönheit“ – für Neufassung prüfen). |
| `/?sections=top-bar` | sitemap | Fragment mit echter Kopfleiste („TEL: 0303223612“, „Anschrift: Schloßstraße 21, 14059 Berlin“, „Dr. Nalan Bagci Kaikis“), das als Topbar in fast alle Seiten eingebunden ist; als Einzelseite nur mit Blog-Metadaten. | Nicht als Seite übernehmen; Inhalt ist in navigation.md (Kopfleiste) erfasst. Doktortitel „Dr.“ steht nur hier/im Seitentitel, nicht im Impressum → offene Frage. |
| `/homepage-massage/` (301→200) | link | Nur über /multipage/ verlinkter alter Slug der Demo-Startseite „Homepage Massage“, der per 301 auf die echte Startseite / weiterleitet (Duplikat ohne eigenen Inhalt). | Nicht übernehmen; ggf. beim Livegang mit auf die neue Startseite umleiten. |

#### 9.3 Grenzfälle im Detail

- **`/leistungsspektrum/` (Seite) und `/services-category/leistungsspektrum/` (Kategorie-Archiv):** Der Hauptmenüpunkt LEISTUNGSSPEKTRUM ist ein reiner Aufklapper (`href="#"`). Die WordPress-Seite `/leistungsspektrum/` (ID 21, Vorlage `page-templates/blog.php`) ist nirgends in der echten Navigation verlinkt, nur im Demo-Menü des Bausteins `/?sections=top-bar-2` als „Masonry 2-Columns“. Sie zeigt nur „Anscheinend können wir nicht finden, wonach Sie suchen“ → **vorlage**. Die eigentliche Übersicht, die Besucherinnen und Besucher sehen (Screenshot `ENTWURF/02-website/screenshots/leistungsspektrum-laptop-1366px.png`), ist das Archiv `/services-category/leistungsspektrum/` → **zweifel** (siehe Tabelle).
- **Kategorie-Archive:** Beide Archive zeigen dieselben 16 Leistungen in derselben Reihenfolge (nach Datum), unabhängig von der Kategorie. Jede Karte hat Datum und Aufrufzähler („0“), es gibt keinen eigenen Text. Echte Information darin: nur die Zuordnung der Spaltenüberschriften im Menü (**Fakt**, `alt/html/services-category_*.html`).
- **`/multipage/`:** Verkaufsseite des Themes mit Links auf die Demo-Startseiten → **vorlage**. Über sie wurde `/homepage-massage/` gefunden (301 auf `/`).
- **`/sliders-category/leistungsspektrum/`, `/?sliders=massage-1`, `/?sliders=massage-2`:** **Fakt:** Der Startseiten-Slider (`like_sc_zoom_slider`) lädt genau die Bilder `SLIDE_1-1.jpg` und `SLIDE_02-1.jpg` und zeigt genau die Texte der beiden Slider-Einträge (Quelle: `data-zs-src` in `alt/html/startseite.html`, `alt/html/sliders_massage-*.html`). Die beiden Einträge sind also die Datenquelle des echten Sliders → **zweifel**, aber nicht als Seite übernehmen. Das Archiv listet nur die Titel „Massage 1/2“ → **vorlage**.
- **`/?sections=…`:** `top-bar` ist die echte Kopfleiste fast aller Seiten → **zweifel** (Inhalt in `navigation.md`). `top-bar-2` (Demo-Menü, nur auf `/homepage-medical-blog/`), `footer-logos` (6 leere Partnerlogos, nur auf Demo-Startseiten) und `subscribe` (nicht aufgelöster Newsletter-Shortcode; der Footer-Platz `subscribe-block` ist auf allen Seiten leer) → **vorlage** (Quelle: Vergleich der Kopfleisten in `alt/auswertung.json`, `grep ltx-partners`).
- **`/gallery/massage/`:** Demo-Galerie ohne Text. Die 9 verlinkten Bilder liefern 404 (Stichprobe 2 von 9), die Seite rendert leer (`alt/render/gallery_massage-ausschnitt.png`) → **vorlage**.
- **`/team-category/…`:** 4 Archive der fiktiven Demo-Ärzte (Cardiology, Surgery, Neurosurgery, Urology) → **vorlage**. Es gibt auf der alten Website keine echte Team-Seite.

---

## 10. Abgleich mit dem 01.10.2026, JavaScript-Stichprobe, Weiterleitungen

### 10.1 Abgleich mit dem Stand vom 01.10.2026

**Ergebnis: Seit dem 01.10.2026 hat sich nichts geändert (Fakt).**

| Gegenstand | 01.10.2026 (ENTWURF/02-website/rohdaten/) | 11.10.2026 | Ergebnis |
|---|---|---|---|
| `robots.txt` | `robots.txt.txt` | `alt/sitemaps/robots.txt.txt` | byte-identisch |
| Sitemap-Index `/wp-sitemap.xml` | `wp-sitemap.xml.txt` | `alt/sitemaps/wp-sitemap.xml.txt` | byte-identisch (12 Teil-Sitemaps) |
| 12 Teil-Sitemaps | `sitemap-wp-sitemap-*.xml` | `alt/sitemaps/wp-sitemap-*.txt` | alle byte-identisch, 119 URLs, keine hinzugekommen oder entfallen |
| Startseite | `startseite.html` | `alt/html/startseite.html` | byte-identisch |
| `/unsere-praxis/` | `seite-unsere-praxis.html` | `alt/html/unsere-praxis.html` | byte-identisch |
| `/services/vorsorgeleistungen/` | `leistungen/services_vorsorgeleistungen.html` | `alt/html/services_vorsorgeleistungen.html` | byte-identisch |
| `/services/impfungen-und-reisemedizin/` | `leistungen/services_impfungen-und-reisemedizin.html` | `alt/html/services_impfungen-und-reisemedizin.html` | byte-identisch |
| `/services/therapeutische-leistungen/` | `leistungen/services_therapeutische-leistungen.html` | `alt/html/services_therapeutische-leistungen.html` | byte-identisch |
| `/services/diagnostische-leistungen/` | `leistungen/services_diagnostische-leistungen.html` | `alt/html/services_diagnostische-leistungen.html` | byte-identisch |
| `/services/psychosomatische-medizin/` | `leistungen/services_psychosomatische-medizin.html` | `alt/html/services_psychosomatische-medizin.html` | byte-identisch |
| `/services/aderlass/` | `leistungen/services_aderlass.html` | `alt/html/services_aderlass.html` | byte-identisch |
| `/services/face-recovery-massage/` | `leistungen/services_face-recovery-massage.html` | `alt/html/services_face-recovery-massage.html` | byte-identisch |
| `/services/aufbaukuren/` | `leistungen/services_aufbaukuren.html` | `alt/html/services_aufbaukuren.html` | byte-identisch |
| `/services/blutegeltherapie/` | `leistungen/services_blutegeltherapie.html` | `alt/html/services_blutegeltherapie.html` | byte-identisch |
| `/services/eigenbluttherapie/` | `leistungen/services_eigenbluttherapie.html` | `alt/html/services_eigenbluttherapie.html` | byte-identisch |
| `/services/enzymtherapie/` | `leistungen/services_enzymtherapie.html` | `alt/html/services_enzymtherapie.html` | byte-identisch |
| `/services/mesotherapie/` | `leistungen/services_mesotherapie.html` | `alt/html/services_mesotherapie.html` | byte-identisch |
| `/services/neuraltherapie-nach-huneke/` | `leistungen/services_neuraltherapie-nach-huneke.html` | `alt/html/services_neuraltherapie-nach-huneke.html` | byte-identisch |
| `/services/orthomolekulare-medizin/` | `leistungen/services_orthomolekulare-medizin.html` | `alt/html/services_orthomolekulare-medizin.html` | byte-identisch |
| `/services/phytotherapie-homoeopathie/` | `leistungen/services_phytotherapie-homoeopathie.html` | `alt/html/services_phytotherapie-homoeopathie.html` | byte-identisch |
| `/services/schroepfen-hacamat-hijama/` | `leistungen/services_schroepfen-hacamat-hijama.html` | `alt/html/services_schroepfen-hacamat-hijama.html` | byte-identisch |
| `/kontakt/` | `seite-kontakt.html` | `alt/html/kontakt.html` | byte-identisch |
| `/termin/` | `seite-termin.html` | `alt/html/termin.html` | byte-identisch |
| `/impressum/` | `seite-impressum.html` | `alt/html/impressum.html` | byte-identisch |
| `/datenschutzerklaerung/` | `seite-datenschutzerklaerung.html` | `alt/html/datenschutzerklaerung.html` | byte-identisch |
| 2 Kategorie-Archive | `leistungen/services-category_*.html` | `alt/html/services-category_*.html` | byte-identisch |
| 11 Demo-Stichproben | `demo/*.html` | `alt/html/…` | 9 byte-identisch; `/?faq=how-to-choose-the-right-coffee` und `/?testimonials=steven-rashford` unterscheiden sich nur in zufällig erzeugten Element-IDs (`like_sc_block_icon_…`), Text identisch |

- **Fakt:** Die `Last-Modified`-Header der zwischengespeicherten Seiten stammen vom 15.01.–30.01.2025. Die jüngste Änderung an einer WordPress-Seite laut REST-API ist `/kontakt/` am 15.01.2025 (Quelle: `alt/abruf-seiten.json`, `alt/html/wp-json_wp_v2_pages_*.json`).
- **Vermutung:** Die Website wird seit Januar 2025 nicht mehr inhaltlich gepflegt. Die Leistungsseiten wurden zuletzt im April 2022 geändert (`lastmod` in `wp-sitemap-posts-services-1.xml`).
- Folge für die weitere Arbeit: Die Analyse in `ENTWURF/02-website/inhalt-struktur.md` und `ENTWURF/02-website/rohdaten/leistungen/_texte-bereinigt.txt` ist inhaltlich weiter gültig.

### 10.2 JavaScript-Stichprobe (Playwright/Chromium)

**Methode:** 20 URLs (10 echt, 2 zweifel, 8 vorlage) in Chromium (Playwright 1.63) bei 1366 × 900 px geladen, auf `networkidle` gewartet, langsam bis ans Seitenende gescrollt, dann `document.body.innerText` mit dem Text aus dem per Fetch geholten HTML verglichen (zeilenweise). Screenshots und Texte: `alt/render/` (`*-voll.png` = ganze Seite bei echten Seiten), Daten: `alt/render/_vergleich.json`.

| URL | Klasse | Anfragen | Zeilen gerendert / im HTML | nur per JS sichtbar | im HTML, aber nicht sichtbar | Konsole |
|---|---|---|---|---|---|---|
| `/` | echt | 78 | 89 / 94 | – | 4 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/unsere-praxis/` | echt | 52 | 39 / 57 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/kontakt/` | echt | 51 | 41 / 60 | – | 19 (Einträge des Mega-Menüs, Absende-Button (input)) | ReferenceError: grecaptcha is not defined |
| `/termin/` | echt | 51 | 26 / 45 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/impressum/` | echt | 50 | 36 / 54 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/datenschutzerklaerung/` | echt | 50 | 119 / 137 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/services/vorsorgeleistungen/` | echt | 54 | 55 / 65 | – | 9 (zugeklappte Akkordeon-Inhalte, unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/services/diagnostische-leistungen/` | echt | 54 | 56 / 76 | – | 20 (zugeklappte Akkordeon-Inhalte, unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/services/face-recovery-massage/` | echt | 57 | 47 / 48 | – | 1 (unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/services/enzymtherapie/` | echt | 53 | 67 / 68 | – | 1 (unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/services-category/leistungsspektrum/` | zweifel | 73 | 44 / 45 | – | 1 (unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/?sliders=massage-1` | zweifel | 77 | 46 / 47 | – | 1 (unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/homepage-plastic/` | vorlage | 63 | 91 / 104 | – | 14 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined; Failed to load resource: the server responded with a status  |
| `/team/` | vorlage | 51 | 37 / 55 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/faq/` | vorlage | 51 | 33 / 50 | „1 2“ (Seitennummerierung) | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/shop/` | vorlage | 50 | 24 / 42 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/multipage/` | vorlage | 49 | 36 / 36 | – | 0  | ReferenceError: grecaptcha is not defined; Failed to load resource: the server responded with a status ; Failed to load resource: the server responded with a status  |
| `/leistungsspektrum/` | vorlage | 50 | 24 / 42 | – | 18 (Einträge des Mega-Menüs) | ReferenceError: grecaptcha is not defined |
| `/gallery/massage/` | vorlage | 50 | 24 / 43 | – | 19 (Einträge des Mega-Menüs, unsichtbare Breadcrumbs) | ReferenceError: grecaptcha is not defined |
| `/?sections=footer-logos` | vorlage | 76 | 44 / 44 | – | 0  | ReferenceError: grecaptcha is not defined |

**Befund**
- **Fakt:** Auf keiner der 20 Seiten erscheint Text erst durch JavaScript. Einzige Ausnahme ist die Seitennummerierung „1 2“ auf `/faq/` (Demo). Das statische HTML enthält alle Inhalte, also reicht der Fetch-Abruf für die Inhaltsanalyse.
- **Fakt:** Umgekehrt stehen Inhalte im HTML, die beim Laden unsichtbar sind: die Einträge des Mega-Menüs (erst beim Aufklappen), die zugeklappten Akkordeons auf `/services/vorsorgeleistungen/` und `/services/diagnostische-leistungen/` (je ein Punkt offen) und die Breadcrumbs (z. B. „Startseite › Services › Naturheilkundliche Therapien“), die per CSS ausgeblendet sind. Die Breadcrumbs sind der einzige Link von echten Seiten auf `/services/`.
- **Fakt:** Das Leistungs-Karussell der Startseite (Swiper) verdoppelt seine Karten per JavaScript (Endlosschleife), es kommt aber kein neuer Inhalt hinzu.
- **Fakt:** Jede geprüfte Seite lädt Google reCAPTCHA v3 von `www.google.com` (`/recaptcha/api.js?render=6LdNZzcg…`) und wirft den Konsolenfehler „ReferenceError: grecaptcha is not defined“. Es wurden kein Cookie-Banner, keine fixierten Overlays und keine iframes gefunden (Prüfung über `position: fixed` und `iframe` im gerenderten DOM).

### 10.3 Weiterleitungen und geprüfte Pfade ohne eigene Seite

| URL | Herkunft | Ergebnis |
|---|---|---|
| `/sitemap.xml` | Pfad | 301 → `/wp-sitemap.xml` |
| `/sitemap_index.xml` | Pfad | 404 |
| `/kontakt` (ohne Schrägstrich) | Link im Footer-Button „Kontakt“ auf allen Seiten | 301 → `/kontakt/` |
| `/unsere-praxis` (ohne Schrägstrich) | Link im Namen der Copyright-Zeile auf allen Seiten | 301 → `/unsere-praxis/` |
| `https://hausarztpraxis-zum-schloss.de/kontakt/` | Fließtext-Link auf `/services/eigenbluttherapie/` | 301 → `https://www.…/kontakt/` |
| `https://hausarztpraxis-zum-schloss.de/`, `http://www.hausarztpraxis-zum-schloss.de/` | Pfad | 301 → `https://www.hausarztpraxis-zum-schloss.de/` |
| `/404-page` | Link in den Demo-Menüs (`/?sections=top-bar-2`, `/homepage-medical-blog/`) | 404 (defekter Demo-Link) |
| `/?p=1`, `/?p=2`, `/?page_id=2` | Pfad (WordPress-Standardinhalte) | 404, Standardbeitrag und -seite sind gelöscht |
| `/?author=1` | Pfad | 404 (Fehlerseite gibt dabei rohen Shortcode-Text aus) |
| `/?p=5542`, `/?post_type=product&p=5542`, `/product/` | Demo-Produkte aus dem Kommentar-Feed | 404, WooCommerce-Produkte sind nicht erreichbar |
| `/services-category/` | Pfad | 404 |
| `/wp-sitemap-taxonomies-category-1.xml` | Pfad | 404 |
| `/wp-sitemap-users-1.xml` | Pfad | 200, liefert aber das leere Blog-Archiv „All Blog Posts“ (Soft-404, keine Benutzer-Sitemap) |
| `/?s=praxis` | Suchfeld in der Kopfleiste | 200, Suchergebnisseite (dynamisch, keine eigene Seite). Listet echte Seiten mit Blog-Datum |
| `/wp-content/uploads/` | Pfad | 403 (Verzeichnisliste gesperrt, Web Application Firewall des Hosters) |
| `/wp-json/wp/v2/types` | Pfad | 200, kein REST-Typ „product“, `services`, `team`, `sliders` usw. nicht über REST freigegeben |

**Bilder und Dateien:** Echte Seiten verlinken keine Dateien. Auf Demo-Seiten sind Bilddateien verlinkt (Galerien `blog_XX.jpg`, `surgary_serv_XX.jpg`, `2017/12/01–09.jpg`). Die Stichprobe `2017/12/01.jpg` und `05.jpg` lieferte 404. Weitere Bilder wurden nicht abgerufen, weil sie zur Bildübernahme in einem anderen Teilschritt gehören.

**Externe Links auf echten Seiten (Fakt, Quelle: `alt/auswertung.json`)**
- Startseite: ärzte-naturheilverfahren.de (Profil), jameda, arzt-auskunft, sanego
- `/kontakt/`: kvberlin.de (Bereitschaftsdienst), berliner-feuerwehr.de
- `/impressum/`: ec.europa.eu/consumers/odr/
- `/datenschutzerklaerung/`: borlabs.io, Google, Adobe
- `/services/aufbaukuren/`: koenigshof-gesundheitszentrum.de
- `/services/phytotherapie-homoeopathie/`: phytodoc.de
- `/services/enzymtherapie/`: **prednisolonkaufen.com** (siehe oben)

---

## 11. Folgerungen für die Entwürfe

1. **Übernommen (überarbeitet):** alle 22 echten Seiten mit Inhalt, in Entwurf 1 vollständig. Die Kategorie-Archive gehen im Leistungen-Hub und im Naturheilkunde-Bereich auf. `/kontakt/` und `/termin/` werden zur Seite „Termin & Kontakt“ ohne Formular.
2. **Nicht übernommen:** alle 111 Vorlagenseiten und die 8 Zweifelsfälle als eigene Seiten (Abschnitt 9). Ebenso: Corona-Inhalte, Bach-Zitat, Spam-Absatz, Fremdtexte (TK-Artikel, Herstellertexte, Fremdzitate), türkische Textreste, Stockfotos, Formulare, reCAPTCHA.
3. **Rollenhierarchie:** Fachärztin für Allgemeinmedizin (belegt) → Lehre (**belegt nur als frühere Tätigkeit an der Charité**; „Lehrärztin/Lehrpraxis“ stammt aus dem Auftrag und muss bestätigt werden) → Naturheilkunde als ärztlich verantwortete Ergänzung. Begriff „Alternativmedizin“ entfällt.
4. **Qualifikationen exakt und getrennt:** „Fachärztin für Allgemeinmedizin“; Zusatzbezeichnungen „Akupunktur“ und „Naturheilverfahren“ (Verzeichnisangaben, Kammer-Bestätigung offen); Homöopathie nur als Leistung, nicht als Qualifikation, bis geklärt; Reisemedizin als Tätigkeitsschwerpunkt bzw. Leistung, nicht als Bezeichnung.
5. **Name:** „Nalan Bagci-Kaikis“ (Registerschreibweise) ohne „Dr.“ bis zur Klärung; Praxisname „Praxis zum Schloss“.
6. **Kontakt:** Telefon 030 322 36 12 (`tel:+49303223612`), Fax 030 325 50 50 (als Fax; Jameda widerspricht), E-Mail info@hausarztpraxis-zum-schloss.de.
7. **Sprechzeiten:** Fassung der Website (Mo 9–12 + 15–17, Di 9–12, Mi 9–12, Do 9–12 + 15–18, Fr 9–12) als Arbeitsstand, mit Hinweis „vor Livegang bestätigen“ (drei widersprüchliche Versionen). Keine Corona-Überschrift.
8. **Sprachen** Deutsch, Englisch, Türkisch und **Zugang** „ebenerdig oder mit Aufzug“ nur aus arzt-auskunft belegt → verwenden, aber als zu bestätigen markieren. **ÖPNV/Parken** fehlen → Platzhalter.
9. **Kosten:** nur belegt bei Schröpfen (keine Kassenleistung) und Vitaminkuren (keine Kassenleistung), bei Vorsorge/Impfungen/DMP/Labor allgemein (Kasse übernimmt im Rahmen der Regeln bzw. teilweise). Für alle übrigen Verfahren Platzhalter + offene Frage. Keine Preise.
10. **Nicht verwenden, bis bestätigt:** Gelbfieberimpfstelle, „leitete das Forschungsprojekt“, ärztliche Hypnotherapie als Qualifikation, Laserakupunktur als vorhandene Ausstattung, Kursangebote.
11. **Bilder:** nur Wortmarke, Bildmarke und Porträt. Für Praxisräume, Team, Eingang und Behandlungssituationen gestaltete, klar erkennbare Platzhalter. Ein Fotoshooting wird empfohlen.
12. **Pflichtseiten** neu fassen (Impressum nach § 5 DDG mit Kammer/Berufsrecht-Angaben als zu prüfende Ergänzung, ohne Steuernummer; Datenschutzerklärung für eine statische Website ohne Cookies, Formulare und Drittanbieter, mit Hinweis auf die Weiterleitung zu Doctolib). Beide als „vor Livegang rechtlich prüfen lassen“ markieren.
13. **Hinweis an die Praxis unabhängig vom Relaunch:** Vorlagenseiten löschen bzw. auf `noindex` setzen, Spam-Link auf der Enzymtherapie-Seite entfernen und die WordPress-Installation prüfen lassen.
