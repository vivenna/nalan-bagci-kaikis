# Master-Prompt: Drei Website-Entwürfe für die Praxis von Nalan Bagci Kaikis

Du arbeitest im Repository `/Users/mohamed/github-projekte/nalan-bagci-kaikis`. Deine Aufgabe ist es, **drei vollständige, klickbare Website-Entwürfe** für die Arztpraxis von Nalan Bagci Kaikis (Berlin) zu bauen. Sie sollen dem Auftraggeber und der Ärztin erlauben, drei Richtungen direkt nebeneinander zu vergleichen und eine auszuwählen.

Lies dieses Dokument vollständig, bevor du anfängst. Arbeite dann selbstständig durch alle Phasen (Abschnitt 11). Frag nur nach, wenn dich etwas wirklich blockiert. Bei allem anderen: sinnvolle Annahme treffen, weitermachen und die Annahme in `docs/offene-fragen.md` festhalten.

---

## 1. Ausgangslage

| Was | Wo |
|---|---|
| Alte Website der Praxis (Struktur- und Inhaltsquelle) | https://www.hausarztpraxis-zum-schloss.de |
| Bisherige Analyse der alten Website **und** ein Entwurf **nur der Startseite** | `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf` (außerhalb des Repos, **nur lesen, nie verändern**) |
| Dein Arbeitsverzeichnis (hier entsteht alles Neue) | `/Users/mohamed/github-projekte/nalan-bagci-kaikis` |
| Terminbuchung | https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/ |

Die Ordnerstruktur in diesem Repo ist vorbereitet (siehe `README.md`). Du darfst sie erweitern, wenn es sinnvoll ist, aber nicht umbauen, ohne es zu begründen.

**Beginne damit, den Ordner `nalan-bagci-kaikis-entwurf` komplett zu lesen**: die Analyse, den Startseiten-Entwurf (HTML, CSS, JS, Assets) und alles andere darin. Dort stehen schon Erkenntnisse über die alte Website, Farben, Schriften, Animationen und Bildmaterial. Baue darauf auf, statt es neu zu erfinden. Danach analysierst du die alte Website selbst vollständig (Phase 1).

---

## 2. Ziel und Haltung der Website

Das ist das Wichtigste an der ganzen Aufgabe. Es entscheidet über jede Gestaltungs- und Textentscheidung.

1. **Erste Anforderung des Auftrags: ein modernes, hochwertiges und seriöses Erscheinungsbild.** Alles andere ist dem untergeordnet.
2. **Der Hauptzweck der Website ist nicht, Aktionen auszulösen.** Sie soll die Ärztin, ihr Ansehen (auch international) und ihre Praxis gut, modern und glaubwürdig darstellen. Die Website ist eine Visitenkarte und ein Statement, kein Verkaufstrichter.
3. **Haupt-CTA ist „Termin buchen“, aber dezent.** Er ist immer auffindbar (Header, Seitenende, sinnvolle Stellen im Text), aber nie aufdringlich: keine Pop-ups, keine Sticky-Banner über dem Inhalt, kein Countdown, keine Verknappung („nur noch X Termine“), keine Ausrufezeichen-Sprache, keine überdimensionalen Buttons, die den Inhalt erdrücken.
4. **Rollenhierarchie der Ärztin, die die gesamte Website durchziehen muss:**
   1. In erster Linie **Fachärztin**,
   2. dann **Lehrärztin** (Lehrpraxis),
   3. dann erst **Naturheilkunde / Komplementärmedizin**.

   Die Naturheilkunde ist eine Besonderheit der Praxis und bekommt ihre verdiente Aufmerksamkeit (eigener Bereich, eigene Landing Pages, eigener Platz auf der Startseite). Die Website darf aber **nicht wie die Website einer Heilpraktikerin wirken**. Konkret:
   - Titel, Hero und Unterzeile der Startseite und der Praxis-Seite stellen die fachärztliche Qualifikation in den Vordergrund.
   - Naturheilkunde wird als **ärztlich verantwortete Ergänzung** zur schulmedizinischen Versorgung beschrieben („integrativ“, „ergänzend“, „auf Basis ärztlicher Diagnostik“), nicht als Alternative zur Medizin.
   - Das Wort „Heilpraktikerin“ taucht nicht als Selbstbezeichnung in Überschriften, Hero-Texten oder Metadaten auf. Qualifikationen und Zusatzbezeichnungen nennst du sachlich und exakt so, wie sie auf der alten Website oder in den Entwurfsunterlagen stehen. Erfinde keine.
   - Optik und Ton der Naturheilkunde-Seiten bleiben ärztlich-nüchtern. Kein Esoterik-Vokabular, keine Lotusblüten, Chakra-Bildsprache, Räucherstäbchen, keine Zen-Steine-Stockfotos.
5. **Internationales Ansehen und Moderne**: Die Website soll sich anfühlen wie die einer Praxis, die auch international bestehen kann. Das bedeutet: durchdachte Typografie, großzügiger Weißraum, hochwertige Bildsprache, ein sauber eingebautes Sprachmenü und ein ruhiger, souveräner Ton. Behaupte nichts, was du nicht belegen kannst (siehe Abschnitt 8).
6. **Sprache der Entwürfe: Deutsch.** Anrede „Sie“. Sachlich, ruhig, ärztlich. Keine Werbesprache, keine Superlative („beste“, „einzigartig“, „führend“), keine Buzzwords.

---

## 3. Die drei Entwürfe

Alle drei Entwürfe sind **vollständige, funktionierende Websites**. Sie unterscheiden sich in Gestaltung, Layout-Konzept und Bewegung **und in der Seitenstruktur** (Details in Abschnitt 4: Entwurf 1 ist die vollständige Referenz, Entwurf 2 strafft die Leistungen, Entwurf 3 darf die gesamte Struktur etwas freier umbauen). Gemeinsam ist allen die **Faktenbasis**: Fakten, Texte und Bilder stammen aus einer Quelle in `shared/` (siehe Abschnitt 8). Strukturen dürfen sich unterscheiden, Fakten nie.

### Entwurf 1: `entwurf-1-fundament/` (Das Fundament)

Der vorhandene Startseiten-Entwurf aus dem Entwurfs-Ordner **ist** die Basis. Aus ihm wächst die gesamte Website.

- Übernimm Farben, Typografie, Abstände, Komponenten-Stil und **alle Animationen und Interaktionen** des Startseiten-Entwurfs. Extrahiere sie zuerst in Design-Tokens (CSS Custom Properties) und wiederverwendbare Komponenten, damit Unterseiten konsistent aufbauen.
- Die Startseite von Entwurf 1 ist der vorhandene Entwurf, nur so weit angepasst, wie nötig ist, um zur restlichen Website zu passen (Navigation mit Sprachmenü, CTA-Ziel Doctolib, Rollenhierarchie aus Abschnitt 2). Verändere sonst nichts an seinem Charakter.
- Alle neuen Seiten (Unterseiten, Leistungsseiten, Landing Pages, Rechtliches) müssen sich anfühlen, als wären sie vom selben Designer wie die Startseite. Wenn Unterseiten neue Komponenten brauchen (z. B. FAQ-Akkordeon, Ablauf-Schritte, Tabellen), entwickle sie in der Sprache des Startseiten-Entwurfs.
- **Kopiere** die benötigten Dateien in `entwurf-1-fundament/` (nicht verlinken). Der Entwurfs-Ordner bleibt unberührt.

### Entwurf 2: `entwurf-2-verwandt/` (Verwandt, aber deutlich anders)

- **Farbwelt**: erkennbar verwandt mit Entwurf 1. Wer beide nebeneinander sieht, erkennt die Verwandtschaft (gleiche Farbfamilie/Stimmung), aber es ist keine Kopie. Nuancen, Verhältnisse und Akzentfarbe dürfen sich verschieben.
- **Struktur und Layout deutlich anders**: andere Navigationsform (z. B. Mega-Menü, seitliche oder überlagerte Navigation statt klassischer Kopfleiste), anderer Seitenrhythmus, anderes Raster, andere Karten-/Blockformen, andere Hero-Komposition, andere Typografie-Hierarchie. Auch die Reihenfolge und Gewichtung der Abschnitte auf der Startseite darf anders sein.
- **Animationen deutlich anders**: eine eigene Bewegungssprache. Beispiel: Entwurf 1 arbeitet mit X, dann arbeitet Entwurf 2 mit etwas spürbar anderem (z. B. scrollgesteuerte Abläufe, Maskenreveals, Parallax mit Maß, ruhigere oder markantere Übergänge). Analysiere erst, was Entwurf 1 macht, und entscheide dann bewusst anders.
- Die Verschiedenheit muss in 5 Sekunden Vergleich sichtbar sein, ohne dass der Entwurf an Seriosität verliert.

### Entwurf 3: `entwurf-3-eigenstaendig/` (Komplett eigenständig)

- **Gemeinsam mit den anderen sind nur das Logo und gegebenenfalls die Bilder.** Alles andere ist neu gedacht: Farbwelt, Schriften, Layout-Konzept, Navigation, Bewegung, Bildbehandlung, Komponenten, Mikrointeraktionen.
- Wähle bewusst eine Richtung, die sich weder an Entwurf 1 noch 2 anlehnt und auch nicht an das übliche Arztpraxis-Klischee (Hellblau/Weiß, Stethoskop-Icons, Stock-Lächeln). Sie muss trotzdem klar **modern, hochwertig und seriös** bleiben. Mutig ja, verspielt nein.
- **Strukturell mehr Freiheit** (Details in Abschnitt 4): Die Website darf insgesamt freier aufgebaut sein als die alte, aber ohne alles auf den Kopf zu stellen.
- Der Mut gilt der Gestaltung und dem Aufbau, nicht den Fakten: Die Rollenhierarchie aus Abschnitt 2 gilt unverändert.

### Gemeinsame Regeln für alle drei

- Pro Entwurf entsteht in `docs/design-entscheidungen.md` ein kurzer Abschnitt: Leitidee, Farbpalette (mit Hex-Werten), Schriften, Navigationskonzept, Animationskonzept, Begründung, **und eine Tabelle, die die drei Entwürfe in diesen Punkten gegenüberstellt**.
- Jeder Entwurf muss auf Desktop, Tablet und Smartphone gut aussehen (Mobile-first denken, die meisten Besucher kommen mobil von Google).
- Keine Lorem-ipsum-Texte, keine „TODO“-Reste in sichtbaren Bereichen.

---

## 4. Seitenstruktur: orientiert an der alten Website, pro Entwurf unterschiedlich weit umgebaut

**Gemeinsame Grundlage:** Die Haupt-Seitenstruktur der alten Website `hausarztpraxis-zum-schloss.de` ist der Ausgangspunkt. Analysiere in Phase 1 jede Seite, jede Navigationsebene, den Footer, Rechtliches und Zusatzseiten (z. B. Team, Praxis, Sprechzeiten, Lehrpraxis, Aktuelles/Hinweise, Anfahrt, Jobs; nimm, was dort tatsächlich existiert).

**Vorlagen-/Platzhalterseiten nicht übernehmen:** Auf der alten Website sind noch einige Vorlagenseiten (Dummy-/Template-Seiten, z. B. mit Beispieltext oder Platzhaltern) unter der Domain veröffentlicht. Diese Seiten werden **in keinem Entwurf** übernommen. Prüfe jede Seite inhaltlich: Nur Seiten mit echtem, korrektem Inhalt zählen. Liste alle ausgeschlossenen Seiten mit URL und Begründung in `docs/analyse-alte-website.md` auf. Bei Zweifeln übernimmst du die Seite nicht und trägst sie in `docs/offene-fragen.md` ein.

### Entwurf 1: Vollständige Referenz

- Übernimmt **jede einzelne inhaltlich richtige Unterseite** der alten Website, auch alle einzelnen Leistungsseiten. Nichts Relevantes fällt weg.
- Nur modernisierte Darstellung und sinnvolle Gruppierung, aber keine inhaltliche Straffung. Es gibt eine Leistungen-Übersichtsseite (Hub), die alle Leistungen gruppiert zeigt (z. B. *Hausärztliche/fachärztliche Versorgung*, *Vorsorge & Check-ups*, *Naturheilkunde & komplementäre Medizin*; ableiten aus dem, was es wirklich gibt), und darunter **jede Leistung mit eigener Unterseite**.
- Entwurf 1 ist damit auch die Vollständigkeits-Referenz: Aus ihm werden die Faktenliste und die Texte in `shared/inhalte/de/` gespeist.

### Entwurf 2: Leistungen gestrafft und umstrukturiert

- Die Leistungen werden **bewusst umstrukturiert**. Im Menü stehen nicht dutzende Unterseiten, die ohnehin niemand anklickt. Nur die **wirklich wichtigen Leistungen** bekommen einen prominenten Platz (Menü, Startseite, Hub). Nutze dafür sachliche Kriterien: Relevanz für Patientinnen und Patienten, Besonderheit der Praxis, Suchnachfrage.
- Die übrigen Leistungen entscheidest du **frei**: anders einbauen (z. B. als Liste/Akkordeon/Kacheln auf dem Hub, gebündelt zu Themenseiten, innerhalb anderer Seiten) oder gar nicht eigenständig nennen. Begründe jede Entscheidung kurz in `docs/sitemap.md`.
- Abwägung für SEO: Naturheilkunde-Seiten, die für Google-Einstiege wichtig sind (Abschnitt 5), dürfen auch dann als eigene Landing Page existieren, wenn sie nicht im Hauptmenü stehen (erreichbar über Hub und interne Links). Sie komplett zu streichen braucht eine Begründung.
- Auch die restliche Struktur folgt der alten Website; Umbau betrifft vor allem Leistungen und deren Navigation.

### Entwurf 3: Mehr Freiheit bei der gesamten Struktur

- Nicht alles auf den Kopf stellen, aber **deutlich mehr Spielraum** als bei Entwurf 1 und 2: Seiten dürfen zusammengelegt, anders geschnitten, umbenannt und neu gewichtet werden (z. B. Praxis/Team/Lehrpraxis als eine erzählte Seite, Leistungen nach Anliegen statt nach Fachbereich, Startseite als Einstieg in zwei, drei Pfade, andere Footer-/Menülogik).
- Pflichtinhalte bleiben unverrückbar: Rollenhierarchie (Abschnitt 2), alle wesentlichen Informationen der alten Website (Kontakt, Sprechzeiten, Anfahrt, Qualifikationen, Leistungsübersicht), Impressum, Datenschutz, Termin-Weiterleitung, Sprachmenü und die Landing Pages der Naturheilkunde (Abschnitt 5).
- Auch hier gilt: Was wegfällt oder verschoben wird, steht mit Begründung in `docs/sitemap.md`.

### Gemeinsame Dokumentation

Lege **vor** dem Bauen `docs/sitemap.md` an: je Entwurf ein Seitenbaum mit Seitentyp (Informationsseite / Landing Page / Rechtliches), dazu ein **Alt→Neu-Mapping** der alten Seiten auf die neuen (für jeden Entwurf; Entwurf 1 dient als Vergleich) und die Liste der ausgeschlossenen Vorlagenseiten. URL-Schema in allen Entwürfen: deutsche, sprechende Slugs, Kleinbuchstaben, Bindestriche, keine Umlaute (`ae/oe/ue/ss`). Slugs gleicher Seiten sollen in allen Entwürfen gleich lauten.

---

## 5. Naturheilkunde-Unterseiten als Landing Pages

Die Leistungsseiten, **vor allem die Naturheilkunde-Unterseiten**, sind keine reinen Informationsseiten, sondern **Landing Pages**: Besucher, die direkt von Google auf einer solchen Seite landen, sollen auf dieser Seite verstehen, ob sie hier richtig sind, Vertrauen fassen und **direkt von dort aus einen Termin buchen können**, ohne vorher über die Startseite zu müssen. Gleichzeitig gelten die Haltung aus Abschnitt 2 und die rechtlichen Grenzen aus Abschnitt 7.

### Baustein-Vorlage (Reihenfolge und Auswahl je Leistung anpassen)

1. **Hero**: H1 mit der Suchintention (z. B. die Behandlung + Ort „Berlin“, natürlich formuliert), eine kurze Einordnung in 1–2 Sätzen, ein dezenter Termin-CTA, kleine Vertrauenszeile (Fachärztin, Lehrärztin, Sprachen, Standort), soweit belegbar.
2. **Kurzantwort / Worum geht es?**: direkte, sachliche Erklärung in wenigen Sätzen. Diese Passage ist auch für Featured Snippets geeignet.
3. **Für wen / wann kann das sinnvoll sein?**: ehrlich, ohne Heilversprechen.
4. **Ärztliche Einordnung**: Wie fügt sich das Verfahren in die schulmedizinische Versorgung ein? Hier verankerst du die Rollenhierarchie: Diagnostik und Verantwortung liegen bei der Fachärztin.
5. **Ablauf**: Schritte von der ersten Terminbuchung bis zur Behandlung (visuell klar, z. B. nummerierte Schritte).
6. **Was Sie wissen sollten**: Dauer, Kosten bzw. Kostenübernahme (Selbstzahlerleistung/Kasse, **nur** so, wie es die alte Website oder die Entwurfsunterlagen hergeben, sonst Platzhalter + Eintrag in `docs/offene-fragen.md`), Vorbereitung, Hinweise.
7. **Zwischen-CTA**: ruhig, mit Doctolib-Link, Telefonnummer als Alternative.
8. **FAQ**: 4–7 echte Fragen, die Patienten stellen. Als Akkordeon, barrierefrei, mit `FAQPage`-Schema.
9. **Verwandte Leistungen**: Querverlinkung zu thematisch passenden Seiten und zurück zum Hub.
10. **Praxis-Kurzvorstellung und Kontakt**: Ärztin, Adresse, Anfahrt, Sprechzeiten, Telefon.
11. **Abschluss-CTA** und **Hinweis**, dass Naturheilkunde die schulmedizinische Behandlung ergänzt und nicht ersetzt.

Auf jeder Landing Page ist der Termin-CTA **mehrfach, aber ruhig** erreichbar: im Header, im Hero, nach dem Ablauf, am Ende. Er soll nicht lauter sein als der Inhalt.

### SEO-Grundlagen für diese Seiten (technisch sauber umsetzen)

- Eindeutiges `<title>` (≤ 60 Zeichen) und `<meta name="description">` (≤ 155 Zeichen) pro Seite, genau eine H1, saubere H2/H3-Hierarchie.
- Open-Graph-Tags (Titel, Beschreibung). Canonical, `hreflang`, `og:url`, `sitemap.xml` und `robots.txt` brauchen die endgültige Domain und werden **erst beim Livegang** ergänzt. In den Entwürfen weglassen, aber in der README als Vorbereitungsliste für den Livegang aufführen.
- Strukturierte Daten (JSON-LD): `MedicalClinic`/`Physician` (Name, Adresse, Telefon, Öffnungszeiten, Sprachen), `MedicalWebPage`, `FAQPage`, `BreadcrumbList`. Nur Daten verwenden, die belegt sind.
- Sichtbare Breadcrumbs, interne Verlinkung (Hub ↔ Unterseiten ↔ verwandte Leistungen).
- Alle Seiten der Entwürfe bekommen `<meta name="robots" content="noindex, nofollow">`, damit sie nicht in Google landen. Die README erwähnt, dass das vor Livegang entfernt werden muss.
- Natürliche Sprache statt Keyword-Stuffing. Lokaler Bezug (Berlin, Stadtteil, Anfahrt) selbstverständlich einbauen.
- Schnelle Ladezeit (siehe Abschnitt 9).

---

## 6. Terminbuchung und Sprachmenü

### Terminbuchung

- **Es gibt kein Anfrageformular mehr.** Das Formular der alten Website entfällt komplett.
- Alle „Termin buchen“-Buttons und -Links führen direkt zu:
  `https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/`
  - `target="_blank"` mit `rel="noopener noreferrer"`, einheitliche Beschriftung (z. B. „Termin online buchen“) und ein dezenter Hinweis „Sie werden zu Doctolib weitergeleitet“ an passender Stelle (z. B. auf der Kontakt-Seite oder als `title`/Kurzhinweis).
  - Die URL steht in allen drei Entwürfen überall identisch. Prüfe das am Ende mit `grep`.
- Es gibt trotzdem eine Seite **„Termin & Kontakt“** (kein Formular!): Doctolib-CTA, Telefonnummer (für Patienten, die lieber anrufen), Adresse, Sprechzeiten, Anfahrt (ÖPNV/Parken/Barrierefreiheit, soweit auf der alten Website vorhanden), Hinweis zu Notfällen (112 / ärztlicher Bereitschaftsdienst 116117), falls auch die alte Website darauf hinweist.
- Karte: **keine** eingebettete Google-Maps-Karte ohne Einwilligung. Nimm ein statisches Bild bzw. eine stilisierte Darstellung mit Link zu OpenStreetMap/Google Maps oder eine Zwei-Klick-Lösung.

### Sprachmenü (nur Demo)

- Die Entwürfe sind **auf Deutsch**. Zusätzlich gibt es ein **Sprachmenü mit Deutsch / English / Türkçe** (Header, auf Mobilgeräten im Menü), damit man sieht, wie ein Sprachwechsel aussehen und sich anfühlen würde. Gestalte es passend zum jeweiligen Entwurf (jeder Entwurf darf eine eigene Form wählen: Dropdown, Segmented Control, Overlay etc.).
- Mindestumfang der Übersetzung (EN und TR): Navigation, Footer, CTA-Texte, komplette Startseite, die Seite „Termin & Kontakt“ und **eine** Naturheilkunde-Landing-Page komplett. Auf allen anderen Seiten bleibt der Inhalt deutsch und es erscheint ein dezenter Hinweis, dass diese Seite in der Demo nur auf Deutsch vorliegt.
- Technische Umsetzung: einfach und robust, **muss auch beim Öffnen per `file://` und über `python3 -m http.server` funktionieren** (also kein `fetch` auf JSON-Dateien; Übersetzungen als JS-Objekte in `shared/inhalte/uebersetzungen/en.js` und `tr.js`, Schlüssel-Attribute `data-i18n`). Gewählte Sprache in `localStorage` (mit try/catch) merken, `<html lang>` korrekt umschalten. Dokumentiere im README kurz, wie das produktiv gelöst würde (Unterordner `/en/`, `/tr/` mit `hreflang`).
- Übersetzungen sind gut und idiomatisch, medizinische Begriffe korrekt. Kennzeichne in `docs/offene-fragen.md`, dass sie vor Livegang von Muttersprachlern bzw. fachkundig geprüft werden müssen.
- Türkisch ist LTR, es sind keine RTL-Anpassungen nötig. Prüfe aber, dass die Zeichen (ç, ğ, ı, İ, ö, ş, ü) in den gewählten Schriften korrekt dargestellt werden.

---

## 7. Rechtliche und berufsrechtliche Leitplanken

Ärztliche Websites unterliegen strengen Regeln. Halte dich konsequent daran:

- **Heilmittelwerbegesetz (HWG) / ärztliches Berufsrecht**: keine Heilversprechen, keine Erfolgs- oder Wirkungsgarantien („heilt“, „befreit von“, „garantiert“), keine Vorher/Nachher-Darstellungen, keine reißerischen oder anpreisenden Formulierungen, keine Patientenerfahrungsberichte als Werbung, keine Vergleiche mit Kolleginnen/Kollegen. Formuliere zurückhaltend: „kann unterstützen“, „wird häufig eingesetzt bei“, „ergänzend“.
- **Pflichtseiten**: Impressum und Datenschutzerklärung (und was sonst auf der alten Website existiert, z. B. Barrierefreiheitserklärung). Übernimm die Daten (Name, Anschrift, Kammer, Berufsbezeichnung, Aufsichtsbehörde, USt-ID usw.) **aus der alten Website**, erfinde keine. Markiere die Seiten klar als „Entwurf: vor Livegang rechtlich prüfen lassen“ (in `docs/offene-fragen.md` und als dezenter, nicht öffentlicher Hinweis im HTML-Kommentar).
- **Datenschutz by Design**: keine Tracker, keine Analytics, kein Facebook-Pixel. **Schriften lokal einbinden** (keine Google-Fonts-CDN-Einbindung, keine externen CDNs für Skripte, Bilder oder Icons). Dadurch ist kein Cookie-Banner nötig. Wenn du dennoch ein externes Element einbindest, dann nur per Zwei-Klick-Lösung und dokumentiert.
- **Barrierefreiheit** (siehe Abschnitt 9).
- **Bildrechte**: Verwende nur Bilder aus dem Entwurfs-Ordner bzw. von der alten Website der Praxis (das sind die Bilder der Auftraggeberin). Keine Stockfotos von Personen, keine KI-generierten Menschen, keine Bilder aus anderen Quellen. Fehlen Bilder, nutze gestaltete Platzhalter (klar erkennbar, in `docs/offene-fragen.md` aufgelistet).

---

## 8. Inhalte: Wahrheit vor Wirkung

- **Erfinde keine Fakten.** Qualifikationen, Titel, Zusatzbezeichnungen, Mitgliedschaften, Auszeichnungen, Jahreszahlen, Patientenzahlen, Preise, Öffnungszeiten, Telefonnummern, Sprachen, Ausstattung, Team-Mitglieder: alles muss aus der alten Website bzw. dem Entwurfs-Ordner stammen. Was du nicht belegen kannst, bleibt weg oder wird als klar gekennzeichneter Platzhalter geführt und in `docs/offene-fragen.md` gesammelt.
- **Keine erfundenen Bewertungen, Zitate oder Gütesiegel.**
- „Internationales Ansehen“ erzeugst du durch Gestaltung, Mehrsprachigkeit und belegbare Fakten (z. B. gesprochene Sprachen, Ausbildungsstationen, Lehrtätigkeit), nicht durch Behauptungen.
- Übernimm die Texte der alten Website inhaltlich, aber **überarbeite sie**: kürzer, klarer, besser strukturiert, im Ton von Abschnitt 2. Die finalen Texte liegen **einmal** als Markdown pro Seite in `shared/inhalte/de/` (Dateiname = Slug, mit Frontmatter für Titel, Meta-Description, Seitentyp). Alle drei Entwürfe beziehen ihre Fakten und Formulierungen aus diesen Texten. Entwurf 2 und 3 dürfen sie kürzen, bündeln oder neu anordnen, aber keine abweichenden Fakten einführen.
- Leistungen, für die auf der alten Website nur wenige Informationen stehen und die du für eine Landing Page ausbauen musst, schreibst du allgemein-medizinisch korrekt und zurückhaltend. Konkrete praxisspezifische Angaben (Kosten, Dauer, Ablauf) nur, wenn sie belegt sind; sonst markierter Platzhalter + `docs/offene-fragen.md`.

---

## 9. Technische Anforderungen

- **Grundsatz: so einfach wie möglich.** Das ist eine kleine, statische Website. Baue nichts komplizierter als nötig. Kein Framework, kein Build-Schritt, keine npm-Abhängigkeiten, kein Generator, keine Drittanbieter-Tools. Reines HTML, CSS und Vanilla-JavaScript. Bibliotheken nur, wenn wirklich nötig, dann lokal eingebunden (nie per CDN).
- **Hosting auf GitHub Pages ohne Einrichtungsaufwand**: Das Repo wird direkt über *Settings → Pages → Deploy from a branch → `main` / `/ (root)`* veröffentlicht, ohne GitHub Actions und ohne weitere Tools. Dafür gilt:
  - `index.html` im Repo-Root (Übersicht der drei Entwürfe) und je eine `index.html` in jedem Entwurfsordner.
  - Leere Datei `.nojekyll` im Repo-Root.
  - **Ausschließlich relative Pfade** (kein führendes `/`), weil die Seite unter `https://<name>.github.io/<repo>/…` liegt. Verlinkungen müssen lokal per Doppelklick (`file://`), per `python3 -m http.server` **und** auf GitHub Pages funktionieren. Wähle dafür ein einheitliches Schema (z. B. `seite.html` oder `ordner/index.html`, dann Links mit explizitem `index.html`).
  - **Groß-/Kleinschreibung** von Dateinamen und Pfaden konsequent und exakt (GitHub Pages unterscheidet, macOS lokal nicht), nur Kleinbuchstaben, keine Leerzeichen oder Umlaute in Dateinamen.
  - Keine Serverlogik, keine Rewrite-/Redirect-Regeln, keine Abhängigkeit von einem Webserver-Verhalten.
  - Das Repo bleibt klein: Bilder optimiert, keine riesigen Rohdateien, keine Videos.
- **Mehrseitig**: jede Seite eine eigene HTML-Datei (gut für SEO und Teilen von Links). Header, Footer und Navigation werden pro Seite wiederholt. Das ist bei dieser Größe in Ordnung und bewusst einfacher als ein Template-System. Halte die Wiederholung konsistent (beim Anlegen per Skript vervielfältigen ist erlaubt, aber das Skript ist kein Teil der Lieferung, die fertigen Dateien werden eingecheckt).
- **Pfade und Assets**: Gemeinsame Bilder/Logos aus `shared/assets/`, Schriften und Entwurfs-spezifische Assets im jeweiligen Entwurfsordner.
- **Responsive**: Mobile-first, Breakpoints sinnvoll, keine horizontale Scrollbar, Touch-Ziele ≥ 44 px.
- **Barrierefreiheit (WCAG 2.2 AA als Ziel)**: semantisches HTML (`header/nav/main/footer`), „Zum Inhalt springen“-Link, sichtbare Fokuszustände, Tastaturbedienung für Menü, Sprachmenü und Akkordeons, ausreichende Kontraste (nachrechnen!), `alt`-Texte, korrekte `lang`-Attribute, **`prefers-reduced-motion` respektieren** (Animationen dann deutlich reduzieren/abschalten), Inhalte dürfen ohne JavaScript lesbar bleiben (Animationen als Progressive Enhancement; Inhalte nicht per CSS dauerhaft auf `opacity: 0` lassen, wenn JS fehlt).
- **Performance**: Bilder zuschneiden, in WebP/AVIF und passenden Größen (`srcset`/`sizes`), `loading="lazy"` unterhalb des Folds, `width`/`height` setzen (kein Layout-Shift), Schriften als `woff2` mit `font-display: swap` und Subsetting, wenig JS, Animationen über `transform`/`opacity`. Ziel: Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO), sofern lokal messbar.
- **Browser**: aktuelle Versionen von Chrome, Safari, Firefox, Edge; iOS Safari und Android Chrome.
- **Icons/Favicon**: aus dem Logo ableiten (Favicon, Apple-Touch-Icon, `theme-color`).
- **Code-Qualität**: lesbar, kommentiert nur dort, wo es nötig ist, einheitliche Namensgebung, keine toten Dateien.

---

## 10. Struktur der Lieferung

```
master-prompt.md
README.md                        (aktualisieren: Überblick, Ansehen, Hinweise vor Livegang)
index.html                       Übersichtsseite mit den drei Entwürfen (Karten mit Screenshot/Kurzbeschreibung, Links)
docs/
  analyse-alte-website.md        Ergebnis von Phase 1 (Seiten, Texte, Medien, Schwächen, Chancen)
  sitemap.md                     Seitenbaum je Entwurf, Alt→Neu-Mapping, URL-Schema, Seitentypen
  design-entscheidungen.md       Pro Entwurf Leitidee + Vergleichstabelle
  landing-page-konzept.md        Vorlage + Seitenliste der Landing Pages mit Ziel-Suchbegriffen
  offene-fragen.md               Annahmen, Platzhalter, fehlende Fakten, rechtliche Prüfungen
  qa-bericht.md                  Ergebnis der Qualitätsprüfung
shared/
  inhalte/de/*.md                Finale deutsche Texte, eine Datei pro Seite
  inhalte/uebersetzungen/en.js, tr.js
  assets/logo/, assets/bilder/   Optimiert, mit sprechenden Dateinamen
entwurf-1-fundament/             Komplette Website (index.html + alle Unterseiten)
entwurf-2-verwandt/              Komplette Website
entwurf-3-eigenstaendig/         Komplette Website
tools/                           Optional: nur kleine Prüfskripte (Link-Check), nicht nötig fürs Hosting
```

Jeder Entwurfsordner hat eine eigene `index.html` als Startseite. Im Repo-Root liegt außerdem eine leere Datei `.nojekyll`, damit GitHub Pages die Dateien unverändert ausliefert.

---

## 11. Vorgehen (Phasen)

Arbeite in dieser Reihenfolge. Nach jeder Phase committest du mit einer aussagekräftigen Nachricht (ein Commit pro Phase oder sinnvoller Teilschritt). **Nicht pushen, nichts deployen.**

**Phase 0: Entwurfs-Ordner lesen.** `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf` komplett durchgehen. Halte in Stichpunkten fest, was dort schon an Analyse, Design-Tokens (Farben, Schriften, Abstände, Radien, Schatten), Animationen, Komponenten und Bildern vorhanden ist. Prüfe, ob der Startseiten-Entwurf technisch zu den Vorgaben in Abschnitt 9 passt, und notiere Abweichungen.

**Phase 1: Alte Website vollständig analysieren.** Rufe https://www.hausarztpraxis-zum-schloss.de und jede Unterseite ab (Navigation, Footer, Rechtliches, versteckte Unterseiten, Sitemap, Bilder, PDFs). Nutze `sitemap.xml`, falls vorhanden, und prüfe stichprobenartig mit dem Browser auf Seiten, die sich per Fetch nicht vollständig laden lassen. Erstelle `docs/analyse-alte-website.md` (Seitenliste mit URL, Zweck, Inhalten, Medien; Stärken/Schwächen; Kontaktdaten, Sprechzeiten, Qualifikationen, Leistungen, Team als belegte Faktenliste). Lade die verwendbaren Bilder und das Logo nach `shared/assets/` und optimiere sie.

**Phase 2: Konzept.** Erstelle `docs/sitemap.md`, `docs/landing-page-konzept.md` und die Grundstruktur von `docs/design-entscheidungen.md` und `docs/offene-fragen.md`. Lege die Sitemap für alle drei Entwürfe fest (Abschnitt 4). Entscheide, welche Leistungen als Landing Pages ausgebaut werden und mit welcher Such-Intention (Seite → Haupt-Suchbegriff → 2–3 Nebenbegriffe).

**Phase 3: Gemeinsame Basis.** Schreibe die deutschen Texte nach `shared/inhalte/de/`, erstelle die EN/TR-Demo-Übersetzungen, organisiere die Assets. Schreibe die Texte für **alle** Seiten von Entwurf 1; Entwurf 2 und 3 bedienen sich daraus und kürzen, bündeln oder erzählen neu, ohne Fakten zu ändern. Zusätzlich nötige Texte (z. B. gebündelte Übersichten) liegen im jeweiligen Entwurfsordner. Erst danach wird gebaut, damit alle drei Entwürfe auf derselben Faktenbasis stehen.

**Phase 4: Entwürfe bauen.** Reihenfolge: **1 → 2 → 3**. Entwurf 1 zuerst, weil er die Referenz ist, an der 2 und 3 gemessen werden. Wenn du Subagents/parallele Arbeit nutzen kannst, baue Entwurf 2 und 3 parallel, aber erst, nachdem Entwurf 1 steht und die gemeinsame Basis fertig ist. Gib jedem Subagent klare Grenzen (nur der eigene Entwurfsordner), und lies danach das Ergebnis selbst kritisch gegen.

**Phase 5: Qualitätsprüfung.** Prüfe jeden Entwurf wirklich im Browser (Claude in Chrome bzw. Playwright/Puppeteer, falls verfügbar), mindestens in 375 px, 768 px und 1440 px Breite, mit Screenshots von Startseite, Leistungen-Einstieg (Hub oder Entsprechung), einer Naturheilkunde-Landing-Page, Termin & Kontakt, jeweils in Deutsch und in einer Fremdsprache. Dazu:
- keine Konsolenfehler, keine 404 (alle internen Links und Assets per Skript prüfen),
- alle Termin-Links führen exakt auf die Doctolib-URL,
- Sprachmenü funktioniert, `lang`-Attribut stimmt,
- Tastaturbedienung, Fokus, Kontraste, `prefers-reduced-motion`,
- Lighthouse oder gleichwertige Prüfung, soweit lokal möglich,
- Kopf-/Metadaten, JSON-LD (valide), Breadcrumbs, FAQ-Schema,
- Texte gegen Abschnitt 7 und 8 gelesen (keine Heilversprechen, keine erfundenen Fakten, keine „Heilpraktikerin“-Selbstbezeichnung),
- Verschiedenheit: Entwurf 2 und 3 unterscheiden sich sichtbar wie in Abschnitt 3 und 4 gefordert; Entwurf 1 enthält wirklich jede inhaltlich richtige Seite der alten Website und keine Vorlagenseite.
- GitHub-Pages-Test: Das Repo wird in einem lokalen Unterordner-Setup (`python3 -m http.server` im Repo-Root, Aufruf von `/entwurf-1-fundament/`) geprüft, damit relative Pfade auch unter `https://<name>.github.io/<repo>/` funktionieren.

Behebe gefundene Probleme und dokumentiere das Ergebnis ehrlich in `docs/qa-bericht.md`. Ungelöste Punkte stehen dort als offen, nicht als erledigt.

**Phase 6: Abschluss.** Baue `index.html` im Repo-Root (Übersicht mit den drei Entwürfen, Kurzbeschreibung, Link zu jedem). Aktualisiere `README.md`. Fasse in deiner Abschlussnachricht kurz zusammen: was gebaut wurde, wie man es ansieht (`python3 -m http.server 8000`), die drei wichtigsten Unterschiede zwischen den Entwürfen, die wichtigsten offenen Fragen an Auftraggeber und Ärztin.

---

## 12. Do / Don’t auf einen Blick

**Do**
- Erst lesen und analysieren, dann bauen.
- Entwurf 1 nahtlos auf dem vorhandenen Startseiten-Entwurf aufbauen.
- Termin-CTA überall konsistent, ruhig und auf Doctolib zeigend.
- Fachärztin zuerst, Lehrärztin danach, Naturheilkunde als ärztliche Ergänzung.
- Fehlendes ehrlich markieren und sammeln.
- Eigenes Ergebnis kritisch im echten Browser prüfen.

**Don’t**
- Den Entwurfs-Ordner verändern oder das Repo pushen/deployen.
- Ein Anfrageformular bauen.
- Fakten, Bewertungen, Zertifikate, Preise oder Bilder erfinden.
- Heilversprechen, Esoterik-Anmutung oder Werbe-Superlative.
- Externe Fonts/CDNs/Tracker/Karten ohne Einwilligung einbinden.
- Animationen ohne Rücksicht auf `prefers-reduced-motion` oder Lesbarkeit.
- Einen der Entwürfe nur halb fertigstellen: Alle drei sind vollständige Websites mit allen Seiten.
