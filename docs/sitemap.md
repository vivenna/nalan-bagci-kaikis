# Sitemap der drei Entwürfe

Stand: 11.10.2026 · Grundlage: `docs/analyse-alte-website.md` (22 echte Seiten, Abschnitt 3; ausgeschlossene Seiten, Abschnitt 9) und `master-prompt.md` Abschnitt 4.

## 1. URL-Schema und Regeln (alle Entwürfe)

- **Dateien statt Ordner-URLs:** Seiten liegen als `<slug>.html` in der Wurzel des Entwurfs, Leistungen im Unterordner `leistungen/` (Hub = `leistungen/index.html`, je Leistung `leistungen/<slug>.html`). Links sind immer relativ und nennen die Datei ausdrücklich (`../index.html`, `leistungen/index.html`), nie einen Ordner. So funktionieren die Seiten per Doppelklick (`file://`), mit `python3 -m http.server` und unter `https://<name>.github.io/<repo>/`.
- **Slugs:** deutsch, sprechend, nur Kleinbuchstaben, Ziffern und Bindestriche, Umlaute als `ae/oe/ue/ss`. **Gleiche Seiten haben in allen Entwürfen denselben Slug.** Neue Seiten, die es nur in einem Entwurf gibt, bekommen einen eigenen Slug.
- **Texte:** je Seite eine Datei `shared/inhalte/de/<slug>.md` (Hub: `leistungen.md`). Zusätzliche Bündelungstexte eines Entwurfs liegen in dessen Ordner unter `inhalte/`.
- **Seitentypen:** *Startseite* · *Informationsseite* · *Hub* (Übersicht mit Verweisen) · *Landing Page* (Leistung, Abschnitt 5 des Auftrags) · *Termin & Kontakt* · *Rechtliches*.
- **Für den Livegang** (nicht in den Entwürfen): saubere Verzeichnis-URLs ohne `.html` (z. B. `/leistungen/akupunktur/`), 301-Weiterleitungen von allen alten URLs (Mapping in Abschnitt 5), `sitemap.xml`, `robots.txt`, Canonical, `hreflang`.

## 2. Entwurf 1 „Fundament“ – vollständige Referenz (23 Seiten)

Jede echte Seite der alten Website hat eine Entsprechung, jede der 16 Leistungen eine eigene Unterseite. Gruppierung der Leistungen wie im alten Menü (hausärztlich 5 / Naturheilkunde 11), auf dem Hub in drei Gruppen.

```
entwurf-1-fundament/
├── index.html                              Startseite                                   Startseite        Menü: Logo
├── unsere-praxis.html                      Ihre Ärztin und die Praxis                   Informationsseite Menü
├── leistungen/
│   ├── index.html                          Leistungen (Hub, 3 Gruppen)                  Hub               Menü (mit Untermenü)
│   │   Gruppe „Hausärztliche Versorgung“
│   ├── behandlung.html                     Hausärztliche Behandlung                     Landing Page      Untermenü
│   ├── diagnostik.html                     Diagnostik                                   Landing Page      Untermenü
│   ├── psychosomatik.html                  Psychosomatik in der Hausarztpraxis          Landing Page      Untermenü
│   │   Gruppe „Vorsorge und Impfungen“
│   ├── vorsorge.html                       Vorsorge und Check-up                        Landing Page      Untermenü
│   ├── impfungen-reisemedizin.html         Impfungen und Reisemedizin                   Landing Page      Untermenü
│   │   Gruppe „Naturheilkunde und komplementäre Medizin“
│   ├── naturheilkunde.html                 Naturheilkunde – ärztlich ergänzt (Bereich)  Hub               Untermenü
│   ├── akupunktur.html                     Akupunktur                                   Landing Page      Untermenü
│   ├── neuraltherapie.html                 Neuraltherapie nach Huneke                   Landing Page      Untermenü
│   ├── schroepfen.html                     Schröpfen (Hacamat, Hijama)                  Landing Page      Untermenü
│   ├── aufbaukuren.html                    Infusionen und Aufbaukuren                   Landing Page      Untermenü
│   ├── phytotherapie-homoeopathie.html     Phytotherapie und Homöopathie                Landing Page      Untermenü
│   ├── eigenbluttherapie.html              Eigenbluttherapie                            Landing Page      Untermenü
│   ├── blutegeltherapie.html               Blutegeltherapie                             Landing Page      Untermenü
│   ├── aderlass.html                       Aderlass                                     Landing Page      Untermenü
│   ├── mesotherapie.html                   Mesotherapie                                 Landing Page      Untermenü
│   ├── enzymtherapie.html                  Enzymtherapie                                Landing Page      Untermenü
│   └── orthomolekulare-medizin.html        Orthomolekulare Medizin                      Landing Page      Untermenü
├── termin-kontakt.html                     Termin & Kontakt                             Termin & Kontakt  Menü
├── impressum.html                          Impressum                                    Rechtliches       Fuß
└── datenschutz.html                        Datenschutz                                  Rechtliches       Fuß
```

- **Hauptmenü:** Ihre Ärztin · Leistungen (Untermenü mit den drei Gruppen) · Naturheilkunde · Termin & Kontakt · Sprachmenü · „Termin online buchen“ (Doctolib).
- **Fuß:** Praxisname, Ärztin und Berufsbezeichnung, Adresse, Telefon, Sprechzeiten; Links Ihre Ärztin, Leistungen, Naturheilkunde, Termin & Kontakt, Impressum, Datenschutz.
- **Auf jeder Seite:** Termin-CTA im Kopf; auf Unterseiten sichtbare Brotkrumen.

## 3. Entwurf 2 „Eigenständig“ – freiere Gesamtstruktur (17 Seiten)

Die Website ist um **drei Wege** aufgebaut: *Hausärztliche Versorgung* (nach Anliegen), *Naturheilkunde – ärztlich ergänzt* und *Die Praxis kennenlernen*. Praxis, Ärztin, Lehre und Haltung werden auf einer Seite erzählt. Leistungen sind nach Anliegen statt nach Fachbereich geordnet, und Termin & Kontakt heißt „Besuch planen“.

```
entwurf-2-eigenstaendig/
├── index.html                              Einstieg mit drei Wegen                      Startseite        Register 00
├── unsere-praxis.html                      Die Praxis (Ärztin, Lehre, Haltung, Räume)   Informationsseite Register 01
├── leistungen/
│   ├── index.html                          Anliegen (Hub nach Anliegen, mit Inhalten)   Hub               Register 02
│   ├── vorsorge.html                       Vorsorge und Check-up                        Landing Page      Register 02.1
│   ├── impfungen-reisemedizin.html         Impfungen und Reisemedizin                   Landing Page      Register 02.2
│   ├── naturheilkunde.html                 Naturheilkunde – ärztlich ergänzt            Hub               Register 03
│   ├── akupunktur.html                     Akupunktur                                   Landing Page      Register 03.x
│   ├── neuraltherapie.html                 Neuraltherapie nach Huneke                   Landing Page      Register 03.x
│   ├── schroepfen.html                     Schröpfen (Hacamat, Hijama)                  Landing Page      Register 03.x
│   ├── aufbaukuren.html                    Infusionen und Aufbaukuren                   Landing Page      Register 03.x
│   ├── phytotherapie-homoeopathie.html     Phytotherapie und Homöopathie                Landing Page      Register 03.x
│   ├── eigenbluttherapie.html              Eigenbluttherapie                            Landing Page      Register 03.x
│   ├── blutegeltherapie.html               Blutegeltherapie                             Landing Page      Register 03.x
│   └── aderlass.html                       Aderlass                                     Landing Page      Register 03.x
├── termin-kontakt.html                     Besuch planen (Termin, Zeiten, Anfahrt)      Termin & Kontakt  Register 04
├── impressum.html                          Impressum                                    Rechtliches       Fuß
└── datenschutz.html                        Datenschutz                                  Rechtliches       Fuß
```

- **Navigation „Register“:** nummeriertes Seitenregister: 01 Die Praxis · 02 Anliegen · 03 Naturheilkunde · 04 Besuch planen. Auf dem Desktop steht es als feste Spalte am linken Rand, mobil öffnet es sich als Bogen von unten. Darunter Sprachwahl und „Termin online buchen“.
- **„Anliegen“ (`leistungen/index.html`)** ordnet die hausärztlichen Leistungen nach dem, was Patientinnen und Patienten wollen: *Vorsorgen* (→ Vorsorge), *Reisen und impfen* (→ Impfungen), *Abklären* (Diagnostik – vollständiger Inhalt als Abschnitt), *Behandeln und begleiten* (Behandlung und Psychosomatik – vollständige Abschnitte), *Ergänzend behandeln* (→ Naturheilkunde).
- **Fuß:** reduziert auf Adresse, Telefon, Sprechzeiten heute, Impressum, Datenschutz und das Register der Naturheilkunde-Seiten.

**Abweichungen gegenüber Entwurf 1 und Begründung:**

| Bereich | Entwurf 2 | Begründung |
|---|---|---|
| Startseite | Einstieg in drei Wege statt einer langen Seite | Besucher finden in einem Schritt ihren Weg. Die Rollenhierarchie wird als Reihenfolge der Wege sichtbar (Fachärztin zuerst). |
| Praxis/Ärztin/Lehre | eine erzählte Seite in Kapiteln | Fachärztin → Lehre → Naturheilkunde-Ausbildung als zusammenhängende Geschichte; Lehre bekommt ein eigenes Kapitel |
| Diagnostik, Behandlung, Psychosomatik | keine eigenen Seiten; vollständig als Abschnitte auf „Anliegen“ | keine eigenständige Suchintention; Inhalte bleiben vollständig und per Anker verlinkbar |
| Leistungen-Hub | nach Anliegen statt nach Fachbereich | patientennahe Sprache |
| Mesotherapie, Enzymtherapie, Orthomolekulare Medizin | wie Entwurf 3: nur „Weitere Verfahren“ auf dem Naturheilkunde-Hub | siehe Entwurf 3 |
| Termin & Kontakt | gleicher Slug, Titel „Besuch planen“ | Termin, Zeiten und Anfahrt als ein Vorgang |
| Navigation | Register statt Kopfmenü | eigenständiges Navigationskonzept (Auftrag Abschnitt 3) |

Pflichtinhalte sind vollständig vorhanden: Rollenhierarchie, Kontakt, Sprechzeiten, Anfahrt, Qualifikationen, Leistungsübersicht, Impressum, Datenschutz, Termin-Weiterleitung, Sprachmenü und das Kern-Set der Naturheilkunde-Landing-Pages (`landing-page-konzept.md`).

## 4. Entwurf 3 „Verwandt“ – Leistungen gestrafft (18 Seiten)

Struktur wie die alte Website (Startseite, Praxis, Leistungen, Kontakt, Rechtliches). Die Leistungen werden umgebaut: wenige wichtige Leistungen stehen prominent (Mega-Menü, Startseite, Hub), die übrigen sind gebündelt oder als Landing Page ohne Menüplatz erreichbar.

```
entwurf-3-verwandt/
├── index.html                              Startseite                                   Startseite        Menü: Logo
├── unsere-praxis.html                      Praxis und Ärztin                            Informationsseite Menü
├── leistungen/
│   ├── index.html                          Leistungen (Hub: zwei Säulen)                Hub               Mega-Menü
│   ├── vorsorge.html                       Vorsorge und Check-up                        Landing Page      Mega-Menü
│   ├── impfungen-reisemedizin.html         Impfungen und Reisemedizin                   Landing Page      Mega-Menü
│   ├── hausaerztliche-versorgung.html      Diagnostik, Behandlung, Psychosomatik (NEU)  Themenseite       Mega-Menü
│   ├── naturheilkunde.html                 Naturheilkunde (Hub + „Weitere Verfahren“)   Hub               Mega-Menü
│   ├── akupunktur.html                     Akupunktur                                   Landing Page      Mega-Menü
│   ├── neuraltherapie.html                 Neuraltherapie nach Huneke                   Landing Page      Mega-Menü
│   ├── schroepfen.html                     Schröpfen (Hacamat, Hijama)                  Landing Page      Mega-Menü
│   ├── aufbaukuren.html                    Infusionen und Aufbaukuren                   Landing Page      Mega-Menü
│   ├── phytotherapie-homoeopathie.html     Phytotherapie und Homöopathie                Landing Page      nur Hub/Links
│   ├── eigenbluttherapie.html              Eigenbluttherapie                            Landing Page      nur Hub/Links
│   ├── blutegeltherapie.html               Blutegeltherapie                             Landing Page      nur Hub/Links
│   └── aderlass.html                       Aderlass                                     Landing Page      nur Hub/Links
├── termin-kontakt.html                     Termin & Kontakt                             Termin & Kontakt  Menü
├── impressum.html                          Impressum                                    Rechtliches       Fuß
└── datenschutz.html                        Datenschutz                                  Rechtliches       Fuß
```

- **Hauptmenü:** Praxis · Leistungen (Mega-Menü mit zwei Spalten: *Hausärztliche Versorgung* – Vorsorge, Impfungen & Reisemedizin, Diagnostik & Behandlung; *Naturheilkunde, ärztlich ergänzt* – Akupunktur, Neuraltherapie, Schröpfen, Infusionen & Aufbaukuren, „Alle Verfahren“) · Termin & Kontakt · Sprachmenü · „Termin online buchen“.
- **Fuß:** wie Entwurf 1, dazu alle Naturheilkunde-Landing-Pages als Linkliste (interne Verlinkung für Suchmaschinen).

**Entscheidungen je Leistung (Kriterien: Relevanz für Patientinnen und Patienten, Besonderheit der Praxis, Suchnachfrage – qualitative Einschätzung, siehe `landing-page-konzept.md`):**

| Leistung | Entscheidung | Begründung |
|---|---|---|
| Vorsorge und Check-up | prominent, eigene Landing Page | häufigster planbarer Anlass beim Hausarzt; hohe lokale Suchnachfrage („Check-up 35“) |
| Impfungen und Reisemedizin | prominent, eigene Landing Page | Reiseberatung wird gezielt gesucht; inhaltlich umfangreich |
| Diagnostik | gebündelt in `hausaerztliche-versorgung.html` | Patienten suchen selten einzeln nach „EKG beim Hausarzt“; als Abschnitt vollständig erhalten |
| Hausärztliche Behandlung | gebündelt in `hausaerztliche-versorgung.html` | Kern der Praxis, aber keine eigene Suchintention; zusammen mit Diagnostik ergibt sich eine starke Themenseite |
| Psychosomatik | gebündelt in `hausaerztliche-versorgung.html` | Teil der hausärztlichen Grundversorgung; als eigener Abschnitt mit Sprunganker |
| Akupunktur | prominent, eigene Landing Page (übersetzt EN/TR) | bekannteste Leistung der Naturheilkunde, Zusatzbezeichnung, hohe Suchnachfrage |
| Neuraltherapie | prominent, eigene Landing Page | ärztliches Injektionsverfahren, passt zur Rollenhierarchie; gezielte Suche |
| Schröpfen (Hacamat, Hijama) | prominent, eigene Landing Page | Besonderheit der Praxis; Suchbegriffe „Hijama/Hacamat“ sprechen eine eigene Zielgruppe an |
| Infusionen und Aufbaukuren | prominent, eigene Landing Page | häufig nachgefragt; Text wird HWG-konform neu gefasst (ohne „Entgiftung“) |
| Phytotherapie und Homöopathie | Landing Page ohne Menüplatz | geringere Suchnachfrage; über Hub und interne Links erreichbar |
| Eigenbluttherapie | Landing Page ohne Menüplatz | eigene Suchintention, aber Nischenverfahren |
| Blutegeltherapie | Landing Page ohne Menüplatz | eigene Suchintention, Nischenverfahren |
| Aderlass | Landing Page ohne Menüplatz | auch schulmedizinisch relevant; Nische |
| Mesotherapie | nur auf dem Naturheilkunde-Hub unter „Weitere Verfahren“ (Akkordeon, 2–3 Sätze), keine eigene Seite | alter Text überwiegend ästhetisch-kosmetisch und werblich; widerspricht der ärztlich-nüchternen Positionierung; Angebot in der Praxis unklar (`offene-fragen.md`) |
| Enzymtherapie | nur unter „Weitere Verfahren“ | alter Text ist Herstellertext mit Spam-Absatz; Datenlage schwach; geringe Suchnachfrage nach Praxisanbietern |
| Orthomolekulare Medizin | nur unter „Weitere Verfahren“ | alter Text fachlich fehlerhaft; Indikationsliste nicht haltbar; als kurzer, sachlicher Hinweis erhalten |

## 5. Alt → Neu-Mapping

Alle 22 echten Seiten und die Zweifelsfälle, die echte Inhalte enthalten. Pfade relativ zum jeweiligen Entwurfsordner.

| Alte URL | Entwurf 1 | Entwurf 2 | Entwurf 3 |
|---|---|---|---|
| `/` | `index.html` | `index.html` | `index.html` |
| `/unsere-praxis/` | `unsere-praxis.html` | `unsere-praxis.html` | `unsere-praxis.html` |
| `/services-category/leistungsspektrum/` (Zweifel) | `leistungen/index.html` | `leistungen/index.html` | `leistungen/index.html` |
| `/services-category/naturheilkundliche-therapien/` (Zweifel) | `leistungen/naturheilkunde.html` | `leistungen/naturheilkunde.html` | `leistungen/naturheilkunde.html` |
| `/services/` und `/?post_type=services` (Zweifel) | `leistungen/index.html` | `leistungen/index.html` | `leistungen/index.html` |
| `/services/vorsorgeleistungen/` | `leistungen/vorsorge.html` | `leistungen/vorsorge.html` | `leistungen/vorsorge.html` |
| `/services/impfungen-und-reisemedizin/` | `leistungen/impfungen-reisemedizin.html` | `leistungen/impfungen-reisemedizin.html` | `leistungen/impfungen-reisemedizin.html` |
| `/services/therapeutische-leistungen/` | `leistungen/behandlung.html` | `leistungen/index.html#behandeln` | `leistungen/hausaerztliche-versorgung.html#behandlung` |
| `/services/diagnostische-leistungen/` | `leistungen/diagnostik.html` | `leistungen/index.html#abklaeren` | `leistungen/hausaerztliche-versorgung.html#diagnostik` |
| `/services/psychosomatische-medizin/` | `leistungen/psychosomatik.html` | `leistungen/index.html#psychosomatik` | `leistungen/hausaerztliche-versorgung.html#psychosomatik` |
| `/services/face-recovery-massage/` (Akupunktur) | `leistungen/akupunktur.html` | `leistungen/akupunktur.html` | `leistungen/akupunktur.html` |
| `/services/neuraltherapie-nach-huneke/` | `leistungen/neuraltherapie.html` | `leistungen/neuraltherapie.html` | `leistungen/neuraltherapie.html` |
| `/services/schroepfen-hacamat-hijama/` | `leistungen/schroepfen.html` | `leistungen/schroepfen.html` | `leistungen/schroepfen.html` |
| `/services/aufbaukuren/` | `leistungen/aufbaukuren.html` | `leistungen/aufbaukuren.html` | `leistungen/aufbaukuren.html` |
| `/services/phytotherapie-homoeopathie/` | `leistungen/phytotherapie-homoeopathie.html` | `leistungen/phytotherapie-homoeopathie.html` | `leistungen/phytotherapie-homoeopathie.html` |
| `/services/eigenbluttherapie/` | `leistungen/eigenbluttherapie.html` | `leistungen/eigenbluttherapie.html` | `leistungen/eigenbluttherapie.html` |
| `/services/blutegeltherapie/` | `leistungen/blutegeltherapie.html` | `leistungen/blutegeltherapie.html` | `leistungen/blutegeltherapie.html` |
| `/services/aderlass/` | `leistungen/aderlass.html` | `leistungen/aderlass.html` | `leistungen/aderlass.html` |
| `/services/mesotherapie/` | `leistungen/mesotherapie.html` | `leistungen/naturheilkunde.html#weitere-verfahren` | `leistungen/naturheilkunde.html#weitere-verfahren` |
| `/services/enzymtherapie/` | `leistungen/enzymtherapie.html` | `leistungen/naturheilkunde.html#weitere-verfahren` | `leistungen/naturheilkunde.html#weitere-verfahren` |
| `/services/orthomolekulare-medizin/` | `leistungen/orthomolekulare-medizin.html` | `leistungen/naturheilkunde.html#weitere-verfahren` | `leistungen/naturheilkunde.html#weitere-verfahren` |
| `/kontakt/` | `termin-kontakt.html` | `termin-kontakt.html` | `termin-kontakt.html` |
| `/termin/` (Formular entfällt) | `termin-kontakt.html` | `termin-kontakt.html` | `termin-kontakt.html` |
| `/impressum/` | `impressum.html` | `impressum.html` | `impressum.html` |
| `/datenschutzerklaerung/` | `datenschutz.html` | `datenschutz.html` | `datenschutz.html` |
| `/homepage-massage/` (Zweifel, 301 auf `/`) | `index.html` | `index.html` | `index.html` |
| `/?sliders=massage-1`, `massage-2`, `/?sections=top-bar` (Zweifel) | entfällt als Seite – Inhalte über Startseite und Kopf erfasst | entfällt | entfällt |
| `/leistungsspektrum/` (Vorlage, leer) | entfällt | entfällt | entfällt |

**Bewusst nicht übernommene Inhalte echter Seiten** (alle Entwürfe): Corona-Block, Bach-Zitat, Spam-Absatz (Enzymtherapie), Fremdtexte (TK-Artikel, Herstellertexte, Fremdzitate), türkische Textreste, Kontakt- und Terminformular, Steuernummer, Gelbfieberimpfstelle (bis zur Bestätigung). Begründungen: `docs/analyse-alte-website.md` Abschnitte 5 und 11.

## 6. Ausgeschlossene Vorlagenseiten

In **keinem** Entwurf übernommen: alle **111 Vorlagenseiten** und die **8 Zweifelsfälle** als eigene Seiten. Vollständige Liste mit URL und Begründung: `docs/analyse-alte-website.md` Abschnitt 9.

| Gruppe | Anzahl | Beispiele |
|---|---|---|
| Demo-Startseiten, Theme-Verkaufsseite, 404-Layout | 5 | `/homepage-plastic/` („free trial bottox injection“), `/homepage-diagnostic/`, `/homepage-medical-blog/`, `/multipage/`, `/404-layout/` |
| Element-Showcases | 15 | `/elements/…` (Buttons, Tabs, Tabellen, Formulare …) |
| Blog- und Galerie-Layouts, Galerien fremder Fachgebiete | 19 | `/classic-blog-…`, `/gallery-2-columns/`, `/gallery/neurosurgery/`, `/gallery/massage/` |
| Shop und Konto | 4 | `/shop/`, `/cart/`, `/checkout/`, `/mein-konto/` |
| Fiktives Team | 14 | `/team/`, `/team/antony-taylor/` …, `/team-category/…`, `/?post_type=team` |
| Erfundene Patientenstimmen | 18 | `/testimonials/`, `/?testimonials=…`, Folgeseiten |
| Demo-FAQ (Kaffee, Zahlung, Lieferung) | 25 | `/faq/`, `/?faq=how-to-choose-the-right-coffee`, `/faq-category/…` |
| Theme-Bausteine, leere Archive, Feeds | 11 | `/leistungsspektrum/` (leer), `/?sections=footer-logos`, `/sliders-category/leistungsspektrum/`, `/category/…`, `/feed/` |
| **Summe** | **111** | |
