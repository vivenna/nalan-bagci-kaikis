# Landing-Page-Konzept

Stand: 11.10.2026 · Grundlage: `master-prompt.md` Abschnitte 2, 5, 7, 8 · Seitenbäume: `docs/sitemap.md`

Alle Leistungsseiten sind Landing Pages: Wer von Google direkt auf einer Leistungsseite landet, soll dort erkennen, ob er hier richtig ist. Die Seite soll Vertrauen schaffen und einen Termin ermöglichen, ohne Umweg über die Startseite. Das gilt besonders für die Naturheilkunde. Dabei gilt die Haltung aus Abschnitt 2: Die Fachärztin steht im Vordergrund, und Naturheilkunde ist eine ärztlich verantwortete Ergänzung. Der Ton ist ruhig und sachlich, ohne Heilversprechen.

## 1. Baustein-Vorlage

| # | Baustein (Auftrag) | Quelle im Inhaltsformat (`shared/inhalte/de/<slug>.md`) | Hinweise |
|---|---|---|---|
| 1 | **Hero** | `h1` (Frontmatter) + Abschnitt `{#hero}` + vom Generator: Brotkrumen, Termin-CTA, Vertrauenszeile | H1 = Leistung + Ort, natürlich formuliert („Akupunktur in Berlin-Charlottenburg“). Vertrauenszeile aus belegten Daten: „Fachärztin für Allgemeinmedizin · Lehrärztin · Schloßstraße 21, Charlottenburg · Deutsch, English, Türkçe“ (Sprachen und „Lehrärztin“ als offene Punkte markiert) |
| 2 | **Kurzantwort** „Worum geht es?“ | `{#kurzantwort}` | 2–4 Sätze, beantwortet die Suchfrage direkt (Featured-Snippet-tauglich) |
| 3 | **Für wen / wann sinnvoll?** | `{#fuer-wen}` | ehrlich, „kann“, „wird eingesetzt bei“, keine Krankheitslisten nach § 12 HWG-Art, kein Heilversprechen |
| 4 | **Ärztliche Einordnung** | `{#einordnung}` | Diagnostik und Verantwortung liegen bei der Fachärztin; Verhältnis zur schulmedizinischen Behandlung; ehrliche Aussage zur Studienlage, wo angebracht |
| 5 | **Ablauf** | `{#ablauf}` (nummerierte Liste) | von der Terminbuchung bis zur Behandlung, 4–5 Schritte |
| 6 | **Was Sie wissen sollten** | `{#wissen}` (Label: Text) | Dauer, Kosten/Kostenübernahme, Vorbereitung, Gegenanzeigen – nur belegte Angaben, sonst `{{platzhalter: …}}` |
| 7 | **Zwischen-CTA** | Generator | ruhig: „Termin online buchen“ (Doctolib) + Telefon als Alternative, Hinweis „Sie werden zu Doctolib weitergeleitet“ |
| 8 | **FAQ** | `{#faq}` (4–7 Fragen) | Akkordeon (`<details>`/`<summary>` oder Knopf mit `aria-expanded`), `FAQPage`-JSON-LD |
| 9 | **Verwandte Leistungen** | Frontmatter `verwandt` + Generator | 2–4 Querverweise und Rücklink zum Hub |
| 10 | **Praxis-Kurzvorstellung und Kontakt** | Generator aus `shared/inhalte/praxisdaten.yml` | Ärztin (Porträt-Kopf), Adresse, Anfahrt-Link, Sprechzeiten, Telefon |
| 11 | **Abschluss-CTA und Hinweis** | Generator + `{#hinweis}` | Hinweis: Naturheilkunde ergänzt die schulmedizinische Behandlung und ersetzt sie nicht |

**CTA-Regeln:** Der Termin-CTA steht im Kopf (immer), im Hero, nach dem Ablauf und am Seitenende. Er ist nie lauter als der Inhalt: keine Pop-ups, keine Sticky-Banner über dem Inhalt, keine Verknappung, keine Ausrufezeichen. Einheitliche Beschriftung **„Termin online buchen“**. Ziel immer exakt `https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/` mit `target="_blank" rel="noopener noreferrer"`. Telefon `030 322 36 12` (`tel:+49303223612`) als gleichwertige Alternative.

Hausärztliche Leistungsseiten (Vorsorge, Impfungen, Diagnostik, Behandlung, Psychosomatik) nutzen dieselbe Vorlage. Die „Ärztliche Einordnung“ heißt dort z. B. „Was die Praxis dafür bietet“, und der Abschluss-Hinweis zur Naturheilkunde entfällt.

## 2. Seitenliste mit Suchintention

Suchnachfrage = **qualitative Einschätzung** (hoch / mittel / gering) aus Thema, Ortsbezug und Wettbewerb. Es wurden keine Suchvolumen gemessen; vor dem Livegang lassen sich die Werte z. B. mit der Google Search Console der Praxis prüfen.

| Seite (Slug) | Haupt-Suchbegriff | Nebenbegriffe | Intention | Nachfrage (Einschätzung) | Besonderheiten / Risiken | E1 | E2 | E3 |
|---|---|---|---|---|---|---|---|---|
| `vorsorge` | Check-up Hausärztin Berlin-Charlottenburg | Gesundheitsuntersuchung Charlottenburg; Hautkrebs-Screening Berlin; Vorsorgeuntersuchung Hausarzt 14059 | lokal-transaktional | hoch | Altersgrenzen/Intervalle nur nennen, wo sicher; Kassenleistung belegt (allgemein) | ✔ | ✔ | ✔ |
| `impfungen-reisemedizin` | Reiseimpfung Berlin-Charlottenburg | reisemedizinische Beratung Berlin; Impfberatung Hausärztin; Malariaprophylaxe Beratung | lokal-transaktional | hoch | „Gelbfieberimpfstelle“ nicht übernehmen (nicht in amtlicher Liste); Kosten Reiseimpfungen nicht belegt → Platzhalter | ✔ | ✔ | ✔ |
| `diagnostik` | Belastungs-EKG Hausarzt Charlottenburg | Ultraschall Hausärztin Berlin; Lungenfunktion Hausarzt; Langzeit-Blutdruckmessung | lokal-transaktional | mittel | – | ✔ | Abschnitt | gebündelt |
| `behandlung` | Hausärztin Berlin-Charlottenburg | Hausarzt Schloßstraße; DMP Diabetes Hausarzt Charlottenburg; Wundversorgung Hausarzt | lokal-transaktional | hoch | Kernseite der Fachärztin | ✔ | Abschnitt | gebündelt |
| `psychosomatik` | Psychosomatik Hausärztin Berlin | psychosomatische Grundversorgung Charlottenburg; Erschöpfung Hausarzt Berlin | informierend/lokal | mittel | „ärztliche Hypnotherapie“ nur als Methode, Qualifikation offen | ✔ | Abschnitt | gebündelt |
| `akupunktur` | Akupunktur Berlin-Charlottenburg | Akupunktur Ärztin Berlin; Akupunktur Krankenkasse Rückenschmerzen; Akupunktur Hausärztin | lokal-transaktional | hoch | **vollständig übersetzt (EN/TR)**; Kassenleistung nur unter bestimmten Voraussetzungen (allgemein); Praxis-Kosten → Platzhalter | ✔ | ✔ | ✔ |
| `neuraltherapie` | Neuraltherapie Berlin | Neuraltherapie nach Huneke Arzt; Neuraltherapie Charlottenburg | lokal-transaktional | mittel | ärztliches Injektionsverfahren; Gegenanzeigen belegt | ✔ | ✔ | ✔ |
| `schroepfen` | Schröpfen Berlin | Hijama Berlin; Hacamat Berlin; blutiges Schröpfen Arzt | lokal-transaktional | mittel | Selbstzahlerleistung belegt; keine „Entgiftungs“-Aussagen | ✔ | ✔ | ✔ |
| `aufbaukuren` | Infusionstherapie Berlin-Charlottenburg | Vitamininfusion Arzt Berlin; Aufbauinfusion Hausärztin; Eiseninfusion Charlottenburg | lokal-transaktional | mittel–hoch | **HWG-Risiko hoch** (alte Texte: Entgiftung, Immunstärkung) → nur sachlich, ärztliche Indikation und Laborkontrolle betonen; Vitaminkuren keine Kassenleistung (belegt) | ✔ | ✔ | ✔ |
| `phytotherapie-homoeopathie` | Phytotherapie Ärztin Berlin | Homöopathie Hausärztin Berlin; pflanzliche Arzneimittel Beratung | informierend | gering–mittel | alter Text teils Fremdtext → neu schreiben; Homöopathie: Studienlage ehrlich benennen | ✔ | ✔ | ✔ |
| `eigenbluttherapie` | Eigenbluttherapie Berlin | Eigenblutbehandlung Arzt Charlottenburg | informierend/lokal | gering–mittel | Gegenanzeigen belegt; Datenlage begrenzt | ✔ | ✔ | ✔ |
| `blutegeltherapie` | Blutegeltherapie Berlin | Blutegel Arzt Berlin; Blutegelbehandlung Charlottenburg | lokal-transaktional | gering–mittel | Gegenanzeigen ausführlich belegt | ✔ | ✔ | ✔ |
| `aderlass` | Aderlass Berlin | Aderlass Arzt Berlin; Aderlass Hausärztin | informierend/lokal | gering | auch schulmedizinisch (z. B. bei Eisenspeicherkrankheit); alte Indikationen fachlich fehlerhaft → nicht übernehmen | ✔ | ✔ | ✔ |
| `mesotherapie` | Mesotherapie Berlin-Charlottenburg | Mesotherapie Ärztin Berlin | lokal-transaktional | mittel (überwiegend ästhetisch) | alter Text kosmetisch-werblich; Einsatzbereich in der Praxis offen | ✔ | Hub-Abschnitt | Hub-Abschnitt |
| `enzymtherapie` | Enzymtherapie Berlin | Schlangengifttherapie Arzt | informierend | gering | alter Text Herstellertext + Spam; Datenlage schwach | ✔ | Hub-Abschnitt | Hub-Abschnitt |
| `orthomolekulare-medizin` | Orthomolekulare Medizin Berlin | Mikronährstofftherapie Arzt Berlin | informierend | gering–mittel | alter Text fachlich fehlerhaft | ✔ | Hub-Abschnitt | Hub-Abschnitt |

### Kern-Set der Naturheilkunde-Landing-Pages (in allen drei Entwürfen)

`akupunktur`, `neuraltherapie`, `schroepfen`, `aufbaukuren`, `phytotherapie-homoeopathie`, `eigenbluttherapie`, `blutegeltherapie`, `aderlass` (8 Seiten) + Bereichsseite `naturheilkunde`.

**Nur in Entwurf 1 als eigene Landing Page:** `mesotherapie`, `enzymtherapie`, `orthomolekulare-medizin`. Gründe: problematische Altinhalte (kosmetische Werbung, Herstellertext mit Spam-Absatz, fachlich falscher Text), hohes HWG-Risiko, schwache Datenlage, geringe oder überwiegend ästhetische Suchintention, unklares Angebot in der Praxis. In Entwurf 2 und 3 werden sie auf dem Naturheilkunde-Hub unter „Weitere Verfahren“ (Anker `#weitere-verfahren`) kurz und sachlich beschrieben.

### Weitere Seiten (keine Landing Pages)

| Seite | Haupt-Suchbegriff (Title/H1-Orientierung) |
|---|---|
| Startseite | Hausärztin in Berlin-Charlottenburg – Nalan Bagci-Kaikis |
| `unsere-praxis` | Nalan Bagci-Kaikis, Fachärztin für Allgemeinmedizin |
| `leistungen` (Hub) | Leistungen der Hausarztpraxis in Charlottenburg |
| `naturheilkunde` (Hub) | Naturheilverfahren beim Hausarzt in Berlin-Charlottenburg |
| `termin-kontakt` | Termin und Kontakt – Praxis zum Schloss, Schloßstraße 21 |

## 3. SEO-Technik (alle Seiten, alle Entwürfe)

- `<title>` eindeutig, ≤ 60 Zeichen, Muster „Leistung in Berlin-Charlottenburg | Praxis zum Schloss“ bzw. kürzer, wenn nötig.
- `<meta name="description">` ≤ 155 Zeichen, sachlich, mit Ort, ohne Werbesprache.
- Genau **eine H1**, saubere H2/H3-Hierarchie (keine übersprungenen Ebenen).
- Open Graph: `og:title`, `og:description`, `og:type` (`website`), `og:locale` (`de_DE`), `og:site_name`. `og:image` und `og:url` erst beim Livegang (brauchen absolute URLs).
- **JSON-LD** (nur belegte Daten):
  - `Physician` (Praxis): Name „Praxis zum Schloss – Nalan Bagci-Kaikis“, `medicalSpecialty` Allgemeinmedizin (`PrimaryCare`), Adresse, Telefon, Fax, E-Mail, `openingHoursSpecification` (Website-Fassung, offener Punkt), `availableLanguage` (de, en, tr – Verzeichnisangabe, offener Punkt). Auf Startseite und Termin & Kontakt vollständig, auf anderen Seiten als Referenz per `@id`.
  - `MedicalWebPage` je Seite (mit `about`/`name`, `inLanguage` „de“, auf Leistungsseiten `lastReviewed` erst nach ärztlicher Freigabe – vorerst weglassen).
  - `FAQPage` auf Seiten mit FAQ (Fragen und Antworten exakt wie sichtbar).
  - `BreadcrumbList` auf allen Unterseiten, deckungsgleich mit den sichtbaren Brotkrumen.
  - URLs in JSON-LD vorerst auf Basis `https://www.hausarztpraxis-zum-schloss.de/` + Entwurfspfad; vor dem Livegang an das endgültige URL-Schema anpassen.
- Sichtbare Brotkrumen auf allen Unterseiten (`nav aria-label="Brotkrumen"`, `aria-current="page"`).
- Interne Verlinkung: Hub ↔ Leistung ↔ verwandte Leistungen; im Fließtext beschreibende Linktexte.
- `<meta name="robots" content="noindex, nofollow">` auf **allen** Seiten der Entwürfe (vor dem Livegang entfernen).
- Canonical, `hreflang`, `og:url`, `sitemap.xml`, `robots.txt`: **erst beim Livegang** (README, Abschnitt „Vor dem Livegang“).
- Lokaler Bezug in natürlicher Sprache: Berlin-Charlottenburg, Schloßstraße 21, Nähe Schloss Charlottenburg (Bildmarke).

## 4. Textregeln

- **Rollenhierarchie:** Fachärztin für Allgemeinmedizin → Lehrärztin → Naturheilkunde als ärztlich verantwortete Ergänzung („ergänzend“, „integrativ“, „auf Basis ärztlicher Diagnostik“). Nie „Alternativmedizin“, nie „Heilpraktikerin“ als Selbstbezeichnung.
- **HWG/Berufsrecht:** keine Heil- oder Erfolgsversprechen („heilt“, „befreit“, „garantiert“, „Behandlungserfolge sprechen für sich“), keine Entgiftungs-/Entschlackungsaussagen, keine Listen schwerer Erkrankungen als Anwendungsgebiete (insbesondere keine Krebs-Bezüge), keine Vorher-Nachher-Darstellungen, keine Patientenstimmen, keine Vergleiche mit Kolleginnen und Kollegen, keine Superlative. Formulierungen wie „kann unterstützen“, „wird eingesetzt bei“, „ergänzend“.
- **Ehrlichkeit:** Wo die Studienlage begrenzt ist, wird das ruhig gesagt („Die Studienlage ist uneinheitlich; wir setzen das Verfahren deshalb nur ergänzend und nach ärztlicher Abklärung ein.“).
- **Ton:** Anrede „Sie“, ruhig, sachlich, kurze Absätze, keine Ausrufezeichen, keine Buzzwords.
- **Fakten:** nur aus `docs/analyse-alte-website.md` Abschnitt 6; alles andere als `{{platzhalter: …}}` mit Eintrag in `docs/offene-fragen.md`. Allgemein-medizinisches Wissen (was ist ein Verfahren, typische Gegenanzeigen, gesetzliche Vorsorgeregeln) ist erlaubt, wenn es korrekt und zurückhaltend formuliert ist. Praxisspezifische Angaben (Kosten, Dauer, Ablauf in der Praxis) nur, wenn belegt.
- **Platzhalter** sind sichtbar gestaltet, aber unaufdringlich („Angabe folgt“), damit klar ist, was die Praxis noch liefern muss.
