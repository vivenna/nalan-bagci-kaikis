# Design-Entscheidungen

Stand: 11.10.2026 · Grundlage: `master-prompt.md` Abschnitte 2, 3, 9 · Startseiten-Entwurf: `docs/vorarbeit-entwurfsordner.md` · Seitenbäume: `docs/sitemap.md`

## 1. Gemeinsame Grundsätze (alle drei Entwürfe)

- **Haltung:** modern, hochwertig, seriös, international. Die Fachärztin steht vorn, danach die Lehrärztin, dann die Naturheilkunde als ärztlich verantwortete Ergänzung. Keine Esoterik-Bildsprache und keine Arztpraxis-Klischees (Stethoskop-Icons, Stock-Lächeln).
- **Termin-CTA:** überall „Termin online buchen“ → Doctolib (neues Fenster, `rel="noopener noreferrer"`), ruhig gestaltet, nie größer als nötig. Telefon als gleichwertige Alternative. Keine Pop-ups, keine Sticky-Banner über dem Inhalt.
- **Bilder:** nur Logo, Bildmarke und Porträt (`shared/assets/`); fehlende Motive als gestaltete Platzhalter.
- **Schriften:** lokal als `woff2` mit `font-display: swap`, je Familie die Subsets **latin + latin-ext** über `unicode-range` (Türkisch: ç ğ ı İ ö ş ü). Keine CDNs, keine externen Ressourcen, keine Cookies, kein Tracking.
- **Barrierefreiheit (Ziel WCAG 2.2 AA):** Kontraste ≥ 4,5 : 1 für Text (nachgerechnet, siehe Paletten), sichtbarer Fokus, Sprunglink, Tastaturbedienung aller Menüs und Akkordeons, Touch-Ziele ≥ 44 px, `prefers-reduced-motion` schaltet Bewegung ab, ohne JavaScript ist jeder Inhalt sichtbar (Animationen nur mit Klasse `.js`).
- **Sprachmenü:** gemeinsame Logik `shared/js/sprache.js` (Deutsch/English/Türkçe, `localStorage`, `<html lang>`), eigene Gestaltung je Entwurf.
- **Platzhalter** für nicht belegte Angaben: sichtbar, ruhig, je Entwurf gestaltet (`<span class="platzhalter">`).

---

## 2. Entwurf 1 „Fundament“

**Leitidee:** Das Bogenfenster aus dem Schloss-Emblem der Praxis ist die Bühne. Der vorhandene Startseiten-Entwurf wird zur vollständigen Website ausgebaut, ohne seinen Charakter zu verändern. Unterseiten sprechen dieselbe Sprache: Bogenformen, weiche Glasflächen, warme Creme, Marineblau und Türkis.

**Farbpalette** (aus Logo und alter Website, unverändert; Details `vorarbeit-entwurfsordner.md` §2.1)

| Name | Hex | Rolle | Kontrast |
|---|---|---|---|
| Marine | `#2C3662` | Text, Überschriften, dunkle Flächen | 10,5 : 1 auf Creme |
| Logo-Türkis | `#00A09B` | Bildmarke, Linien, Akzente (nicht für kleinen Text) | – |
| Türkis | `#47CCC8` | Primärknopf-Fläche (Text Marine), Akzente auf Marine | Marine auf Türkis 5,9 : 1 |
| Türkis tief | `#29AEAA` | Verläufe, Hover | – |
| Creme | `#F6F3ED` | Grundfläche | – |
| Creme tief | `#EEE9DF` | zweite Fläche | – |
| Marine tief | `#222A4E` | Termin-Band, Fuß | Weiß 13,9 : 1 |
| Nebentext | Marine 74 % auf Creme | Fließtext sekundär | ≥ 5,0 : 1 |

Korrekturen gegenüber dem Startseiten-Entwurf: Die Nummern der Verfahrensliste werden auf Marine 74 % angehoben (vorher 2,45 : 1). Nebentext auf Glaskarten bekommt mindestens 4,5 : 1.

**Schriften:** Fraunces (Titel; Achsen opsz + wght, normal und kursiv) und Figtree (Text, wght 300–900), beide OFL. **Neu:** latin-ext-Dateien aus `@fontsource-variable/fraunces` und `/figtree` per `unicode-range` ergänzt, damit ğ, İ, ş, Ğ, Ş gesetzt werden. Typo-Skala bis auf den Einstiegstitel unverändert (h1 `clamp(3rem, 1.2rem + 7.2vw, 6.3rem)`, ab 64em `clamp(4.5rem, 7.2vw, 6.3rem)` – im Startseiten-Entwurf 6.6rem; bei 1440 px lag „als Ganzes sehen.“ 1 px unter der Spaltenbreite und brach je nach Schriftdarstellung um, bei 1024 px brach die Zeile immer; h2 `clamp(2.3rem, 1.4rem + 3.6vw, 4.4rem)`, Text 1.125rem/1.65). Unterseiten-H1 eine Stufe kleiner (`clamp(2.4rem, 1.4rem + 4.4vw, 4.6rem)`). **Ersatzschriften gegen Layoutverschiebung:** Bis Fraunces/Figtree geladen sind, zeigt der Browser Georgia bzw. Arial, per `size-adjust` auf die Laufweite der Webschriften skaliert („Fraunces Ersatz“ nur im Einstiegstitel, „Figtree Ersatz“ für den Fließtext). Dadurch bricht beim Schriftwechsel keine Zeile anders um (CLS der Startseite vorher 0,21, jetzt 0; Messung in `docs/qa-bericht.md`).

**Navigationskonzept:** klassische Kopfleiste wie im Entwurf (Logo links, Glas-Effekt beim Scrollen, blendet beim Herunterscrollen aus). Sie wird mehrseitig:
- Menü: Ihre Ärztin · Leistungen (Aufklapper mit drei Gruppen) · Naturheilkunde · Termin & Kontakt.
- Sprachmenü als Pille „DE“ mit Aufklappliste (Deutsch, English, Türkçe), passend zur Pillenform der Knöpfe.
- CTA „Termin online buchen“ als Primärknopf (Türkis, Marine-Text).
- Mobil: Menü-Knopf öffnet das Menü als Vollfläche mit Fokusfalle und Esc. Darin stehen Sprachwahl, Telefon und CTA.
- Die **mobile Aktionsleiste entfällt**, weil sie dauerhaft über dem Inhalt lag (Auftrag 2.3). Der kleine Termin-Knopf im mobilen Kopf bleibt.

**Animationskonzept:** alle Animationen des Startseiten-Entwurfs bleiben (Emblem zeichnet sich, Bogen öffnet sich, Porträt tritt ins Fenster, Zeilen-Intro, Schwung-Linie, schwebende Glaskarten, Laufband, Wort-für-Wort-Haltungssatz, Einblendungen, Reiter mit gleitendem Zeiger, Lichtkegel auf Kacheln, magnetische Knöpfe, Glas-Kopfzeile, Live-Status „Jetzt geöffnet“, Wochenplan mit Jetzt-Linie, Zeitleiste füllt sich). Korrekturen: Bei reduzierter Bewegung ist die Zeitleiste sofort gefüllt. Ohne JS sind Reiter-Panels und Mobilmenü sichtbar bzw. erreichbar. Der Live-Status verwendet übersetzbare Texte.

**Unterseiten-Komponenten** (neu, in der Sprache der Startseite):
- **Seitenkopf:** Brotkrumen, Eyebrow, H1 mit Zeilen-Intro, Lead, CTA-Paar. Rechts eine kleine Bogenfläche mit dem Linien-Emblem als Wasserzeichen; auf „Ihre Ärztin“ das Porträt im Bogen.
- **Kurzantwort:** große Absatzschrift mit Türkis-Schwunglinie.
- **Für-wen-Liste:** Häkchen in Türkis-Kreisen.
- **Ärztliche Einordnung:** Glaskarte mit Schild-Icon.
- **Ablauf:** Schritte-Komponente aus dem Termin-Band in heller Variante.
- **Was Sie wissen sollten:** Faktenkarten im Kachel-Raster mit Lichtkegel.
- **FAQ:** Akkordeon aus abgerundeten Karten; das Plus dreht sich zum Kreuz, die Höhe animiert.
- **Zwischen-CTA:** ruhiges Band.
- **Verwandte Leistungen:** Pfeil-Links.
- **Praxis-Kurzvorstellung:** Avatar mit Name, Rolle, Adresse, Sprechzeiten heute.
- **Abschluss-CTA:** Marine-Band mit Emblem-Wasserzeichen.
- **Hub:** Kacheln je Gruppe; die Naturheilkunde-Seite nutzt die nummerierte Verfahrensliste.
- **Termin & Kontakt:** Wochenplan, Notfall-Kasten, Adress-Block, Kartenlink (OpenStreetMap/Google Maps, keine Einbettung).
- **Rechtliches:** schlichte Lesespalte.
- **Platzhalter:** gepunktete Pille „Angabe folgt“.

**Begründung:** Der Startseiten-Entwurf erfüllt die Haltung bereits und ist gemessen schnell und barrierearm. Er wird erweitert statt verändert. Die einzigen inhaltlichen Eingriffe betreffen die Rollenhierarchie im Hero: Die H1-Vorzeile nennt „Fachärztin für Allgemeinmedizin · Berlin-Charlottenburg“, die Unterzeile nennt Lehre und erst danach Naturheilkunde. Außerdem führen alle Termin-Knöpfe jetzt zu Doctolib. Auf der Startseite steht der Abschnitt „Ihre Ärztin“ jetzt vor den Leistungen: Erst kommen Fachärztin und Lehre, dann das Leistungsspektrum mit der Naturheilkunde. Die Leistungskacheln verlinken auf die Unterseiten.

---

## 3. Entwurf 2 „Verwandt“

**Leitidee:** *Die Praxis als ruhiges, klar gegliedertes Dossier.* Dieselbe Farbfamilie wie Entwurf 1 (Marine, Türkis, helle Fläche), aber ins Kühle, Tiefe und Grafische verschoben: Porzellan statt Creme, Nacht-Petrol als große Fläche, Türkis nur noch als feine Linie. Ein editoriales Raster mit nummerierten Abschnitten und einer Abschnittsleiste links, Haarlinien statt Rundungen, eine serifenlose Titelschrift mit Serifen-Fließtext. Das wirkt wie eine sorgfältig gesetzte Fachpublikation und passt zur Rolle der Fachärztin und Lehrärztin.

**Farbpalette** (verwandt: Marine und Türkis bleiben erkennbar, die Verhältnisse kehren sich um)

| Name | Hex | Rolle | Kontrast |
|---|---|---|---|
| Tinte | `#1F2A47` | Text, Überschriften, Kopf-Leiste, Knöpfe | 13,2 : 1 auf Porzellan |
| Nacht-Petrol | `#0E4F57` | große Flächen (Hero-Feld, Naturheilkunde-Säule, CTA-Band) | Weiß darauf 9,2 : 1 |
| Logo-Türkis | `#00A09B` | Haarlinien, Fortschrittslinien, Markierungen (nur Deko) | 3,0 : 1 (nicht für Text) |
| Türkis-Text | `#00756F` | Links und Hervorhebungen auf Hell | 5,2 : 1 auf Porzellan |
| Türkis hell | `#7FD9D3` | Text/Linien auf Petrol | 5,6 : 1 auf Petrol |
| Sand | `#E3CFA6` | kleine Zahlen und Marken auf Petrol (neuer, warmer Gegenakzent) | 6,0 : 1 auf Petrol |
| Porzellan | `#F5F7F6` | Grundfläche (kühl, statt Creme) | – |
| Nebel | `#E4ECEA` | zweite Fläche, Hinweisboxen | Tinte darauf 11,8 : 1 |
| Linie | `#C8D4D1` | Haarlinien 1 px | – |
| Nebentext | `#4A5568` | sekundärer Text | 7,0 : 1 auf Porzellan |

**Schriften:** *Instrument Sans* (`@fontsource-variable/instrument-sans`, Achsen wdth 75–100, wght 400–700, OFL) für Titel, Navigation und Bedienelemente. Titel stehen leicht schmal (wdth 85–90), mit Gewicht 500–600 und enger Laufweite. *Source Serif 4* (`@fontsource-variable/source-serif-4`, Achse opsz, wght 200–900, OFL) für Fließtext (1.125rem/1.62) und große Zitate. Je Familie latin + latin-ext.
- Typo-Hierarchie (umgekehrt zu Entwurf 1: Sans-Titel, Serifen-Text):
  - h1 `clamp(2.6rem, 1.5rem + 4.6vw, 5.4rem)` Instrument Sans 560
  - h2 `clamp(1.9rem, 1.3rem + 2.4vw, 3.2rem)` 560
  - Abschnittsmarken „01 — Praxis“ in Versalien, 0.78rem, Laufweite .14em
  - Zitate in Source Serif kursiv, 1.6–2.2rem

**Raster und Formen:**
- 12-Spalten-Raster (max. 84rem). Jeder Abschnitt hat eine **Abschnittsleiste** links (3 Spalten: Nummer und Marke, auf dem Desktop haftend) und Inhalt rechts (8 Spalten).
- Abschnitte sind durch eine 1-px-Haarlinie getrennt.
- Radien 2 px, keine Schatten (außer Mega-Menü-Panel). Rechteckige Bilder.
- Karten sind offen: Haarlinie oben, Nummer, Titel, Kurztext, Pfeil.

**Navigationskonzept:**
- **Service-Leiste** oben (Tinte, 40 px): Telefon, Adresse, Sprachwahl als Segment-Schalter „DE | EN | TR“.
- **Hauptleiste** (Porzellan, 72 px): Logo, „Praxis“, „Leistungen“ als **Mega-Menü**, „Termin & Kontakt“ und der CTA „Termin online buchen“ als Rahmenknopf in Tinte.
- Das Mega-Menü öffnet per Klick (`aria-expanded`, Esc, Fokusführung) ein Panel über die volle Breite: links „Hausärztliche Versorgung“, Mitte „Naturheilkunde, ärztlich ergänzt“, rechts eine Termin-Karte mit Sprechzeiten heute, Telefon und Doctolib.
- **Mobil:** Knopf „Menü“ öffnet eine Vollbild-Überlagerung in Tinte mit großen Links, aufklappbaren Leistungsgruppen, Sprachwahl, Telefon und CTA.

**Hero-Komposition:** geteilter Einstieg:
- Links auf Porzellan: Abschnittsmarke „Hausarztpraxis · Berlin-Charlottenburg“, H1 „Nalan Bagci-Kaikis, Fachärztin für Allgemeinmedizin“ und ein Lead, der Lehre und dann Naturheilkunde nennt.
- Rechts das Porträt in einem hohen **Rechteck** auf einem Nebel-Feld, hinterlegt von einer Petrol-Fläche, die über die Kante läuft.
- Darunter eine **Faktenleiste** mit vier Spalten und Haarlinien: Fachärztin für Allgemeinmedizin · Lehrärztin · Akupunktur · Naturheilverfahren · Deutsch, English, Türkçe.

**Startseiten-Rhythmus** (anders als Entwurf 1): Hero → Faktenleiste → 01 Haltung (Haltungssatz als großes Serifen-Zitat + Ärztin kurz) → 02 Leistungen (zwei Säulen: hell „Hausärztliche Versorgung“, Petrol „Naturheilkunde, ärztlich ergänzt“) → 03 Termin (drei Schritte mit scrollgesteuerter Fortschrittslinie) → 04 Sprechzeiten und Anfahrt (Haarlinien-Tabelle) → Fuß.

**Bewegungssprache** (bewusst anders als Entwurf 1: keine Zeichen-Animation, kein Schweben, kein Magnet, kein Laufband):
1. **Zeilen-Maskenreveal:** Titelzeilen gleiten aus einer unsichtbaren Maske nach oben (`translateY(105%) → 0`, 900 ms, `cubic-bezier(.7,0,.2,1)`, 70 ms Versatz je Zeile), beim Laden und beim Eintritt in den Viewport.
2. **Bild-Clip-Reveal:** Porträt und Flächen öffnen sich per `clip-path: inset(100% 0 0 0) → inset(0)` (1100 ms).
3. **Haarlinien zeichnen sich** beim Eintritt eines Abschnitts von links (`scaleX 0 → 1`, 800 ms).
4. **Scrollgesteuerte Fortschrittslinie** in Ablauf- und Termin-Schritten (CSS `animation-timeline: view()`, Rückfall: IntersectionObserver aktiviert Schritt für Schritt).
5. **Parallax mit Maß:** Petrol-Fläche hinter dem Porträt verschiebt sich höchstens 24 px.
6. **Mega-Menü:** Panel öffnet per `clip-path` von oben (320 ms).
7. **Karten-Hover:** Nebel-Fläche füllt sich von links (`scaleX`), Pfeil rückt 4 px.

Bei `prefers-reduced-motion: reduce` entfällt alles. Ohne JS ist alles sofort sichtbar.

**Komponenten für Unterseiten:**
- **Brotkrumen:** Versalien, Schrägstriche.
- **Seitenkopf:** Abschnittsmarke + H1 + Lead + CTA, rechts Kurzfakten der Leistung.
- **Kurzantwort:** großer Serifen-Absatz mit Türkis-Linie links.
- **Ablauf:** vertikal mit Fortschrittslinie.
- **Was Sie wissen sollten:** zweispaltige Faktentabelle mit Haarlinien.
- **FAQ:** Haarlinien-Zeilen, Plus wird zu Minus.
- **Hub-Karten:** nummeriert, offen.
- **CTA-Block:** Petrol-Band mit weißem Rahmenknopf und Telefon.
- **Hinweisbox:** Nebel-Fläche mit Türkis-Kante.
- **Platzhalter:** gestrichelte Türkis-Unterstreichung mit Marke „Angabe folgt“.

**Abgrenzung zu Entwurf 1:** (1) Kopf mit Service-Leiste und Mega-Menü statt Glas-Kopfleiste; (2) Haarlinien und Rechtecke statt Bogen, Glas und 28-px-Radien; (3) Sans-Titel mit Serifen-Text statt Serifen-Titel mit Sans-Text; (4) Masken- und Scroll-Bewegung statt Zeichnen, Schweben und Magnet; (5) kühle Porzellan- und Petrol-Flächen statt warmer Creme. Gemeinsam bleiben Marine/Tinte und Türkis als Familie, das Logo und das Porträt.

---

## 4. Entwurf 3 „Eigenständig“

**Leitidee:** *Register.* Die Praxis als präzise geordnetes Register, wie das Inhaltsverzeichnis einer guten Monografie oder das Wegeleitsystem eines Museums. Die Gestaltung folgt der Schweizer Moderne: eine einzige Schriftfamilie in mehreren Breiten, nummerierte Wege, viel Raum. Aubergine dient als ruhige, unverwechselbare Markenfläche, Messing als feine Linie und Ziffer, Kalkstein als Grund. Das wirkt international und hochwertig, ohne Arztpraxis-Klischee, und hat keine Verwandtschaft zu Marine, Türkis oder Creme.

**Farbpalette**

| Name | Hex | Rolle | Kontrast |
|---|---|---|---|
| Aubergine | `#3B2235` | Markenflächen (Hero, CTA-Band, Fuß), Überschriften | 11,9 : 1 auf Kalkstein; Weiß darauf 14,3 : 1 |
| Aubergine tief | `#2A1726` | Fuß, Hover auf Aubergine | – |
| Tinte | `#1D191C` | Fließtext | 14,5 : 1 auf Kalkstein |
| Kalkstein | `#EDEAE6` | Grundfläche (hellgrau, nicht cremig) | – |
| Papier | `#FFFFFF` | Register-Spalte, Karten, Bildrahmen | – |
| Stein | `#D9D4CD` | Linien | – |
| Messing | `#9A7637` | Linien, große Ziffern (Großschrift) | 3,5 : 1 auf Kalkstein (≥ 3 : 1 für große Schrift), 4,2 : 1 auf Papier; nicht für kleinen Text |
| Messing dunkel | `#7A5A22` | kleine Ziffern und Marken auf Hell | 5,3 : 1 auf Kalkstein, 6,3 : 1 auf Weiß |
| Messing hell | `#D7B77C` | Ziffern und Marken auf Aubergine | 7,5 : 1 |
| Nebentext | `#5A5257` | sekundärer Text | 6,3 : 1 auf Kalkstein |

**Schrift:** eine Familie, *Archivo* (`@fontsource-variable/archivo`, Achsen wdth 62–125, wght 100–900, OFL, latin + latin-ext). Die Breitenachse trägt die Hierarchie:
- Titel breit und leicht (wdth 115–125, wght 300–420, enge Laufweite)
- Register-Ziffern schmal (wdth 62–75, tabellarische Ziffern)
- Marken in Versalien (wdth 100, wght 600, Laufweite .14em)
- Fließtext normal (wdth 100, wght 400, 1.0625rem/1.65)

Größen: h1 `clamp(2.4rem, 1.2rem + 5.2vw, 5.8rem)`, h2 `clamp(1.8rem, 1.2rem + 2.6vw, 3.2rem)`.

**Layout-Konzept:**
- Auf dem Desktop eine **feste Register-Spalte** links (288 px, Papierweiß, Messing-Haarlinie rechts) mit Logo, nummeriertem Register, Sprachwahl und CTA.
- Daneben eine asymmetrische Inhaltsfläche mit großen typografischen Setzungen und vollflächigen Aubergine-Bändern.
- Bildbehandlung im **Passepartout**: Das Porträt steht quadratisch beschnitten in einem weißen Rahmen mit versetzter Messing-Linie und einer Bildlegende wie ein Museumsschild.
- Karten als **Register-Zeilen** (ganze Breite, große Ziffer, Titel, eine Zeile Text, Pfeil). Ecken eckig, keine Schatten.

**Navigationskonzept „Register“:**
- 01 Die Praxis · 02 Anliegen · 03 Naturheilkunde · 04 Besuch planen. Die aktive Seite trägt eine Messing-Marke.
- Sprachwahl als Textliste „Deutsch / English / Türkçe“ am Fuß der Spalte.
- CTA „Termin online buchen“ als Aubergine-Knopf.
- **Mobil:** schlanke Kopfzeile (Logo + Knopf „Register“). Das Register öffnet sich als **Bogen von unten** (Bottom Sheet, Fokusfalle, Esc, Wischgeste nicht nötig).
- Auf Landing Pages zusätzlich ein haftendes Inhaltsregister „Auf dieser Seite“, dessen Marke dem Lesefortschritt folgt.

**Hero-Komposition:**
- Vollbreites Aubergine-Feld mit Eyebrow in Messing hell („Praxis zum Schloss · Schloßstraße 21 · Charlottenburg“).
- H1 breit gesetzt: „Fachärztin für Allgemeinmedizin“, darüber der Name in Versalien.
- Unterzeile: „Hausärztliche Versorgung – fachärztlich, mit Erfahrung in der Lehre, ergänzt um Naturheilverfahren, wo es ärztlich sinnvoll ist.“
- Rechts das Porträt im Passepartout.
- Darunter **drei Wege** als große Register-Zeilen: 01 Hausärztliche Versorgung · 02 Naturheilkunde, ärztlich ergänzt · 03 Die Praxis kennenlernen.

**Bewegungssprache** (anders als 1 und 2):
1. **Seitenübergänge** mit der View Transitions API (`@view-transition { navigation: auto; }`): Der Seitentitel trägt `view-transition-name: seitentitel` und wechselt weich, die Register-Marke gleitet zum neuen Eintrag, der Inhalt blendet kurz über (220 ms). Browser ohne Unterstützung wechseln die Seite normal.
2. **Register-Zeilen:** Bei Hover/Fokus rückt der Text um 12 px ein, eine Messing-Linie wächst von links (`scaleX`, 240 ms), die Ziffer wechselt von Messing zu Aubergine.
3. **Inhaltsregister mit Lesemarke:** Die Marke folgt dem aktiven Abschnitt (IntersectionObserver, `transform`).
4. **Bottom Sheet** gleitet von unten herein (`translateY`, 300 ms, `cubic-bezier(.2,.8,.2,1)`).
5. Sonst keine Einblendungen beim Scrollen. Die Seite steht ruhig, die Bewegung liegt im Übergang und in der Bedienung.

Bei `prefers-reduced-motion: reduce` gibt es keine View Transitions und keine Bewegung. Ohne JS bleibt das Register auf dem Desktop sichtbar; mobil ist es als Liste am Seitenende erreichbar.

**Komponenten für Unterseiten:**
- **Brotkrumen als Registerpfad:** „02 Anliegen / 02.1 Vorsorge“.
- **Seitenkopf:** Registernummer, H1 breit, Lead.
- **Kurzantwort:** Absatz mit Messing-Initialziffer.
- **Ablauf:** horizontale Schrittfolge mit schmalen Messing-Ziffern, mobil vertikal.
- **Was Sie wissen sollten:** „Datenblatt“ mit schmaler Versalien-Labelspalte.
- **FAQ:** nummerierte Fragen, Plus/Minus.
- **Hub:** Register-Zeilen.
- **CTA-Band:** Aubergine, Kalkstein-Text.
- **Hinweis:** Rahmen in Messing dunkel.
- **Platzhalter:** gepunkteter Messing-Rahmen „Angabe folgt“.

**Abgrenzung:** zu Entwurf 1 (Bogen, Creme, Fraunces, Zeichnen/Schweben) und Entwurf 2 (Mega-Menü, Petrol/Porzellan, Masken- und Scroll-Reveals) in Farbe, Schrift, Navigation, Bildbehandlung und Bewegung. Gemeinsam bleiben nur das Logo (auf Papierweiß in Originalfarben) und das Porträt.

---

## 5. Vergleichstabelle

| | Entwurf 1 „Fundament“ | Entwurf 2 „Verwandt“ | Entwurf 3 „Eigenständig“ |
|---|---|---|---|
| **Leitidee** | Bogenfenster aus dem Schloss-Emblem als Bühne; warm, freundlich, einladend | ruhiges Dossier; editoriales Raster, Haarlinien, Fachpublikation | Register; Schweizer Moderne, nummerierte Wege, Museums-Anmutung |
| **Farbpalette** | Marine `#2C3662`, Türkis `#47CCC8` / `#00A09B`, Creme `#F6F3ED` | Tinte `#1F2A47`, Nacht-Petrol `#0E4F57`, Türkis-Linie `#00A09B`, Porzellan `#F5F7F6`, Sand `#E3CFA6` | Aubergine `#3B2235`, Kalkstein `#EDEAE6`, Messing `#9A7637` / `#7A5A22`, Tinte `#1D191C` |
| **Schriften** | Fraunces (Serife, Titel) + Figtree (Sans, Text) | Instrument Sans (Sans, Titel/UI) + Source Serif 4 (Serife, Text) | Archivo allein (Breitenachse trägt die Hierarchie) |
| **Navigation** | Glas-Kopfleiste, Aufklapper „Leistungen“, Vollflächen-Menü mobil | Service-Leiste + Mega-Menü, Vollbild-Überlagerung mobil | feste Register-Spalte links, Bottom Sheet mobil |
| **Sprachmenü** | Pille „DE ▾“ mit Liste | Segment-Schalter „DE \| EN \| TR“ in der Service-Leiste | Textliste „Deutsch / English / Türkçe“ im Register |
| **Hero** | Porträt im Bogenfenster, schwebende Glaskarten, Emblem zeichnet sich | Porträt im hohen Rechteck auf Petrol-Feld, Faktenleiste | Aubergine-Feld, breiter Titel, Porträt im Passepartout, drei Wege |
| **Raster/Formen** | weiche Radien (28 px), Glas, Kacheln | 12er-Raster mit Abschnittsleiste, Haarlinien, 2 px | asymmetrisch, eckig, Register-Zeilen, Datenblatt |
| **Bewegung** | Zeichnen, Schweben, Wort-für-Wort, Magnet, Lichtkegel, Laufband, Live-Status | Masken-Reveals, Clip-Reveals, zeichnende Haarlinien, scrollgesteuerter Fortschritt, maßvolle Parallax | Seitenübergänge (View Transitions), Register-Mikrointeraktionen, Lesemarke |
| **Seitenstruktur** | 23 Seiten, jede Leistung einzeln (Referenz) | 18 Seiten, Leistungen gestrafft, Themenseite „Hausärztliche Versorgung“ | 17 Seiten, drei Wege, Anliegen-Hub, erzählte Praxisseite |
| **Wirkung** | nahbar, warm, mit lokalem Bezug | sachlich-akademisch, präzise, kühl-elegant | selbstbewusst, international, galerieartig ruhig |
