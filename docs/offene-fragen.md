# Offene Fragen, Annahmen und Platzhalter

Stand: 11.10.2026 · Sammelstelle für alles, was vor dem Livegang mit der Praxis bzw. dem Auftraggeber geklärt werden muss. Jede Frage nennt: **Was ist offen**, **warum relevant**, **wo betroffen**, **Annahme bis zur Klärung**. Quellen: `docs/analyse-alte-website.md` (v. a. §6.15), `docs/vorarbeit-entwurfsordner.md` §7.4.

Priorität: **A** = vor Freigabe eines Entwurfs klären · **B** = vor Livegang klären · **C** = gut zu wissen.

## A – Fakten und Bezeichnungen

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme bis zur Klärung |
|---|---|---|---|---|---|
| OF-01 | A | **„Lehrärztin“ / Lehrpraxis:** Der Auftrag beschreibt die Ärztin als Lehrärztin (Lehrpraxis). Belegt ist nur die **frühere** Lehre: Tätigkeit in Lehrpraxen der Charité, wissenschaftliche Mitarbeiterin am Institut für Allgemeinmedizin der Charité „in Lehre und Forschung“, Vorlesungen und Seminare. Nicht belegt: heutige Lehrpraxis, Hochschule, Umfang (Blockpraktikum, Famulatur, PJ), Weiterbildungsbefugnis. | zweite Stufe der Rollenhierarchie; falsche Angaben wären irreführend | Hero, Vertrauenszeilen, Praxisseite (Abschnitt „Lehre“), Fuß, JSON-LD (nicht verwendet) | „Lehrärztin“ wird als Rolle aus dem Auftrag verwendet. Details zur Lehrpraxis (Hochschule, seit wann, welche Ausbildungsabschnitte) stehen als Platzhalter. Belegte Lehrtätigkeit an der Charité wird in der Vergangenheit erzählt. |
| OF-02 | A | **Name und Titel:** Register und Impressum: „Nalan Bagci-Kaikis“ ohne „Dr.“; Website-Kopf und Mail: „Dr.“; fünf Schreibweisen (mit/ohne Bindestrich, Bağcı). | Einheitlichkeit (Google, Verzeichnisse); akademischer Grad muss korrekt geführt werden | überall | „Nalan Bagci-Kaikis“ ohne „Dr.“ (Registerschreibweise). |
| OF-03 | A | **Zusatzbezeichnungen:** Verzeichnisse nennen Akupunktur, Naturheilverfahren (alle) und Homöopathie (nur arzt-auskunft); die Website nennt „Akupunktur und Naturheilkunde, Reisemedizin“ wie Facharzttitel. Nicht bei der Ärztekammer verifiziert. | Qualifikationen müssen exakt stimmen (Berufsrecht) | Hero, Praxisseite, Vertrauenszeilen, Naturheilkunde-Seiten | „Fachärztin für Allgemeinmedizin“; Zusatzbezeichnungen „Akupunktur“ und „Naturheilverfahren“; Homöopathie nur als Leistung; Reisemedizin als Leistung, nicht als Bezeichnung. |
| OF-04 | A | **Sprechzeiten:** drei Versionen. Website (Mo 9–12 + 15–17, Di/Mi 9–12, Do 9–12 + 15–18, Fr 9–12, aber unter „Sonderöffnungszeiten während der Corona-Pandemie“), arzt-auskunft (Fr geschlossen, Akutsprechstunde Mo 9–11, Do 9–12), Jameda (vormittags bis 13 Uhr). | Patienten verlassen sich darauf; Google gleicht ab; Live-Status in Entwurf 1 | Startseiten, Termin & Kontakt, Fuß, JSON-LD, Live-Status | Website-Fassung ohne Corona-Überschrift; Hinweis „vor Livegang bestätigen“ in diesem Dokument. Keine Akutsprechstunde genannt. |
| OF-05 | A | **Zweite Nummer 030 3255050:** Website (Fax-Symbol), KBV, arzt-auskunft, Sanego = Fax; Jameda = Telefon. | korrekte Kontaktangaben | Termin & Kontakt, Fuß, Impressum, JSON-LD | Fax. |
| OF-06 | A | **Sprachen** Englisch und Türkisch: nur arzt-auskunft; Sanego nennt nur Deutsch; Website ohne Angabe. | Sprachmenü und Vertrauenszeile stellen die Sprachen heraus | Vertrauenszeilen, Praxisseite, JSON-LD `availableLanguage` | Deutsch, Englisch, Türkisch – bitte bestätigen (auch: spricht das Praxisteam diese Sprachen?). |
| OF-07 | A | **Gelbfieberimpfstelle:** Die alte Website nennt eine „zugelassene Gelbfieberimpfstelle“, die amtliche Berliner Liste (11.10.2026) enthält die Praxis nicht. | Falschangabe wäre irreführend; Reisende verlassen sich darauf | Impfungen und Reisemedizin | Nicht erwähnt. |
| OF-08 | A | **Forschungsprojekt Herzinsuffizienz:** Website „leitete“, Projektsteckbrief der Bundesärztekammer nennt eine andere Projektleiterin. | Lebenslauf muss belegbar sein | Praxisseite | Neutral: „in Lehre und Forschung am Institut für Allgemeinmedizin der Charité tätig“; Projekt nicht als „geleitet“ beschrieben. |
| OF-09 | B | **Barrierefreier Zugang:** „ebenerdig oder Aufzug“ nur arzt-auskunft. | Ältere und mobilitätseingeschränkte Patienten | Termin & Kontakt, Praxisseite | „Ebenerdig oder mit Aufzug erreichbar (Angabe bitte bestätigen)“ nur in den Dokumenten; auf der Website als Text mit Platzhalter-Hinweis. |
| OF-10 | B | **Anfahrt:** keine Angaben zu Bus/Bahn, Parken, Eingang. | Anfahrt-Abschnitt (Auftrag Abschnitt 6) | Termin & Kontakt, Landing Pages (Kontaktblock) | Platzhalter „Haltestellen und Parkmöglichkeiten – Angabe folgt“; nur Adresse und Kartenlinks. |
| OF-11 | B | **Praxisname:** „Praxis zum Schloss“ vs. „Hausarztpraxis zum Schloss“; Verwechslungsgefahr mit „Praxis am Schloss“ (Klausenerplatz 2). | Marke, lokales SEO | überall | „Praxis zum Schloss“ als Name, „Hausarztpraxis“ als Beschreibung; Ärztin und Adresse immer mitnennen. |
| OF-12 | B | **Team:** Website erwähnt nur „Helferin“/„Praxisteam“. Namen, Anzahl, Rollen, Sprachen des Teams? | Vertrauen; Praxisseite | Praxisseite | Kein Team-Abschnitt mit Namen; allgemein „das Praxisteam“. |
| OF-13 | B | **Akuttermine / Akutsprechstunde:** Die Website sagt: auch bei Akutem vorher anrufen; arzt-auskunft nennt Akutsprechzeiten. | Termin-Weg für Akutfälle | Termin & Kontakt | Akutes: bitte anrufen (Website-Regel); Doctolib für planbare Termine. |
| OF-14 | B | **Neupatienten:** Nimmt die Praxis neue Patientinnen und Patienten auf? | häufige Frage; JSON-LD `isAcceptingNewPatients` | Termin & Kontakt, FAQ | Keine Aussage. |

## B – Leistungen und Kosten

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme bis zur Klärung |
|---|---|---|---|---|---|
| OF-20 | A | **Aktuelles Leistungsangebot:** Werden alle 16 Leistungen weiter angeboten (insbesondere Mesotherapie, Enzymtherapie, orthomolekulare Medizin, Homöopathie, Blutegel, Aderlass, Hypnotherapie)? | Seitenumfang aller Entwürfe | Leistungsseiten, Hubs | Ja, wie auf der alten Website. |
| OF-21 | A | **Kosten je Verfahren:** Belegt sind nur „Schröpfen zahlen die Kassen nicht“ und „Vitaminkuren keine Kassenleistung“. Für Akupunktur, Neuraltherapie, Eigenblut, Blutegel, Aderlass, Infusionen (außer Vitaminkuren), Phytotherapie/Homöopathie, Mesotherapie, Enzym-, orthomolekulare Therapie fehlen Angaben (Kasse/IGeL/privat, Preisrahmen). | Auftrag Abschnitt 5 Baustein 6; Transparenz | „Was Sie wissen sollten“ jeder Landing Page | Platzhalter „Kosten: Angabe folgt“; allgemeine Hinweise nur, wo allgemeingültig (z. B. Akupunktur als Kassenleistung nur bei bestimmten chronischen Schmerzen – bitte bestätigen, ob die Praxis das abrechnet). |
| OF-22 | A | **Dauer, Sitzungszahl, Vorbereitung** je Verfahren (Praxisangaben). Belegt nur: Kurschemata der Aufbaukuren (6–10 Infusionen), Aderlass-Menge (50–300 ml). | Baustein 6 | Landing Pages | Platzhalter; allgemein übliche Angaben nur als „in der Regel“, wo medizinisch allgemein gültig. |
| OF-23 | B | **Mesotherapie:** Einsatzbereich in der Praxis (Schmerztherapie? ästhetisch?). Alter Text überwiegend kosmetisch. | Positionierung, HWG | Entwurf 1 `mesotherapie`, Hubs in 2/3 | Neutral beschrieben, ohne ästhetische Versprechen. |
| OF-24 | B | **Enzymtherapie:** Welche Präparate/Verfahren (alter Text: „Schlangengifttherapie“, Herstellertext)? | sachliche Beschreibung | Entwurf 1 `enzymtherapie`, Hubs | Allgemein beschrieben, Datenlage ehrlich benannt. |
| OF-25 | B | **Ärztliche Hypnotherapie:** Qualifikation/Angebot? | Psychosomatik-Seite | `psychosomatik` | Nur als Methode erwähnt, die im Gespräch infrage kommen kann. |
| OF-26 | B | **Laserakupunktur / Moxibustion:** Vorhanden? Alter Text nennt Nadeln, Laser, Moxa allgemein. | Ausstattung nicht erfinden | `akupunktur` | Nur Nadelakupunktur als Standard beschrieben, Laser/Moxa als „Varianten, die es gibt“ ohne Praxisbezug. |
| OF-27 | B | **Vorsorge-Intervalle:** Altersgrenzen auf der alten Seite teils veraltet; neue Texte nennen die aktuellen allgemeinen Regeln der gesetzlichen Krankenkassen. | fachliche Richtigkeit | `vorsorge` | Ärztin prüft die Angaben vor Freigabe. |
| OF-28 | B | **Reiseimpfungen: Kosten** (viele Kassen erstatten freiwillig, privat abgerechnet?) | Transparenz | `impfungen-reisemedizin` | Platzhalter. |
| OF-29 | B | **Ärztliche Freigabe aller medizinischen Texte** (insbesondere Naturheilkunde) und ggf. juristische Prüfung nach HWG/Berufsordnung. | Haftung, Berufsrecht | alle Leistungsseiten | Texte sind zurückhaltend formuliert, aber nicht freigegeben. |

## C – Bilder und Rechte

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme bis zur Klärung |
|---|---|---|---|---|---|
| OF-30 | A | **Porträt:** Fotograf und Nutzungsrechte unbekannt; Einwilligung zur erneuten Veröffentlichung, Recht zur Bearbeitung (Freistellung, Zuschnitte). | Urheber- und Persönlichkeitsrecht | alle Entwürfe | Verwendung als Entwurf, Klärung vor Livegang. |
| OF-31 | B | **Logo:** Gestalter, Rechte, Vektor-Original? Verwendet wird eine Nachzeichnung (SVG) und eine abgeleitete Negativ-Fassung. | Markenrecht, Druckqualität | alle Entwürfe | Nachzeichnung als Arbeitsstand. |
| OF-32 | B | **Fehlende Fotos:** Praxisräume, Empfang, Wartebereich, Behandlungsraum, Eingang Schloßstraße 21, Team, Behandlungssituationen. | Vertrauen, Orientierung | Platzhalter in allen Entwürfen (Praxisseite, Termin & Kontakt, ggf. Leistungsseiten) | gestaltete Platzhalter; Empfehlung: kleines Fotoshooting. |
| OF-33 | C | **Stockfotos der alten Website** (Lizenzen unbekannt) werden nicht verwendet. Falls einzelne Motive gewünscht sind: Lizenznachweis nötig. | Urheberrecht | – | nicht verwendet |

## D – Recht

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme bis zur Klärung |
|---|---|---|---|---|---|
| OF-40 | A | **Impressum und Datenschutzerklärung sind Entwürfe** und müssen vor dem Livegang rechtlich geprüft werden (Fachanwalt Medizin-/IT-Recht oder Ärztekammer). Im HTML als Kommentar markiert. | Pflichtangaben | `impressum.html`, `datenschutz.html` aller Entwürfe | – |
| OF-41 | A | **Pflichtangaben für Ärztinnen (§ 5 DDG):** zuständige Kammer (Ärztekammer Berlin), gesetzliche Berufsbezeichnung „Ärztin“ und Staat der Verleihung, berufsrechtliche Regelungen, zuständige KV (Kassenärztliche Vereinigung Berlin) – auf der alten Website fehlend. | Impressumspflicht | `impressum.html` | Als „Ergänzung, bitte bestätigen“ eingetragen. Diese Angaben ergeben sich aus der Niederlassung in Berlin und dem Eintrag im Bundesarztregister; sie sind nicht erfunden, aber von der Praxis zu bestätigen. |
| OF-42 | A | **Steuernummer** steht im alten Impressum unter „Umsatzsteuer-ID“. Veröffentlichung nicht vorgeschrieben, Missbrauchsrisiko. | Datensparsamkeit | `impressum.html` | Nicht übernommen; mit Steuerberatung klären, ob eine USt-IdNr. existiert. |
| OF-43 | A | **Hoster der neuen Website** (Datenschutzerklärung, Auftragsverarbeitung). Die Entwürfe laufen auf GitHub Pages (nur zur Vorschau). | Datenschutzerklärung | `datenschutz.html` | Platzhalter „Hosting-Anbieter – Angabe folgt“. |
| OF-44 | B | **Doctolib:** Datenschutzhinweis zur Weiterleitung, Vertrag/AVV der Praxis mit Doctolib, Barrierefreiheit des Buchungsmoduls (BFSG). | Datenschutz, BFSG | `datenschutz.html`, Termin & Kontakt | Hinweis auf Weiterleitung und Doctolib-Datenschutzerklärung. |
| OF-45 | B | **HWG-Prüfung** der Naturheilkunde-Texte (siehe OF-29). | Wettbewerbs- und Berufsrecht | Leistungsseiten | zurückhaltende Formulierungen |
| OF-46 | C | **Barrierefreiheitserklärung:** auf der alten Website nicht vorhanden; Pflicht nach BFSG für Kleinstunternehmen vermutlich nicht. | BFSG | – | Keine Seite angelegt. |
| OF-47 | A | **Veröffentlichung dieses Repositorys:** Wird das Repo per GitHub Pages veröffentlicht, sind auch `docs/` (Analyse mit kritischen Befunden zur alten Website, z. B. Spam-Link) und `master-prompt.md` öffentlich abrufbar (`noindex` gilt nur für die HTML-Seiten). | Vertraulichkeit gegenüber der Kundin | Repository | Vor dem Teilen entscheiden, ob `docs/` entfernt oder ein privates Repo bzw. Hosting genutzt wird. |

## E – Technik und Livegang

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme |
|---|---|---|---|---|---|
| OF-50 | A | **Doctolib-Profil:** Die Buchungs-URL stammt aus dem Auftrag. Bei der Voranalyse (01.10.2026) war kein Profil auffindbar. Existiert das Profil, ist es freigeschaltet, und ist `…/nalan-bagci-kaikis-berlin/booking/` die richtige Einstiegsseite? | alle Termin-CTAs | alle Seiten | URL wie im Auftrag. |
| OF-51 | B | **Endgültige Domain und URL-Schema** (Canonical, `hreflang`, `og:url`, `og:image`, `sitemap.xml`, `robots.txt`, JSON-LD-URLs, 301-Weiterleitungen der alten URLs nach `docs/sitemap.md` §5). | SEO | alle Seiten | JSON-LD-URLs vorläufig auf Basis der alten Domain. |
| OF-52 | B | **`noindex, nofollow`** auf allen Entwurfsseiten vor dem Livegang entfernen. | Indexierung | alle Seiten | – |
| OF-53 | B | **Alte WordPress-Installation:** Vorlagenseiten löschen/`noindex`, Spam-Link (Enzymtherapie) entfernen, Installation prüfen lassen – unabhängig vom Relaunch. | Sicherheit, Ruf | alte Website | Empfehlung an die Praxis. |
| OF-54 | C | **Pflege:** Wer pflegt Sprechzeiten, Urlaub, Hinweise? (statische Website) | Betrieb | – | – |

## F – Übersetzungen

| Nr. | Prio | Was ist offen | Warum relevant | Wo betroffen | Annahme |
|---|---|---|---|---|---|
| OF-60 | A | **Englische und türkische Demo-Übersetzungen** (`shared/inhalte/uebersetzungen/en.js`, `tr.js`) müssen vor dem Livegang von Muttersprachlern und fachkundig (medizinische Begriffe) geprüft werden. | Qualität, Verständlichkeit, Haftung | Navigation, Fuß, CTAs, Startseiten, Termin & Kontakt, Akupunktur | Demo-Qualität. |
| OF-61 | B | **Produktive Mehrsprachigkeit:** eigene Seiten unter `/en/` und `/tr/` mit `hreflang`; Umfang (welche Seiten) festlegen. | Aufwand, SEO | – | Demo zeigt nur die Bedienung. |

## G – Annahmen des Auftragnehmers (Gestaltung und Struktur)

| Nr. | Annahme | Begründung |
|---|---|---|
| OF-70 | Die **mobile Aktionsleiste** des Startseiten-Entwurfs („Anrufen / Termin“, dauerhaft über dem Inhalt) entfällt in Entwurf 1; der kleine Termin-Knopf im mobilen Kopf bleibt. | Auftrag 2.3: keine Sticky-Banner über dem Inhalt |
| OF-71 | Die **Entwurf-Plakette** („Entwurf von vivenna · nicht die offizielle Website“) bleibt in allen Entwürfen klein sichtbar. | Kennzeichnung als Entwurf; ist kein CTA |
| OF-72 | Mesotherapie, Enzymtherapie und orthomolekulare Medizin haben nur in Entwurf 1 eigene Seiten. | `docs/sitemap.md` §3, `landing-page-konzept.md` §2 |
| OF-73 | Diagnostik, Behandlung und Psychosomatik sind in Entwurf 2 auf einer Themenseite gebündelt und in Entwurf 3 Abschnitte des Anliegen-Hubs. | `docs/sitemap.md` §3–4 |
| OF-74 | Haltungssatz und Leitsatz „Den Menschen als Ganzes sehen“ stammen von der alten Startseite (gekürzt); der Gegensatz „nicht die Symptome, sondern die Ursachen“ wird nicht übernommen. | klingt nach Wirkversprechen |
| OF-75 | Geburtsjahr/Geburtsort aus dem Lebenslauf werden nicht übernommen. | für die Rolle nicht nötig; Datensparsamkeit |

## Platzhalter-Register

Wird beim Schreiben der Texte (Phase 3) und beim Bau ergänzt: Jede Stelle mit `{{platzhalter: …}}` in `shared/inhalte/de/*.md` bzw. jeder gestaltete Bildplatzhalter ist einer der obigen Fragen zugeordnet. Vollständige Liste siehe Abschnitt „Platzhalter je Seite“ unten.

### Platzhalter je Seite

| Seite (Inhaltsdatei) | Platzhalter | Frage |
|---|---|---|
| `aderlass` | Kostenübernahme bzw. Kosten des Aderlasses – Angabe folgt | OF-21 |
| `akupunktur` | Kosten und Abrechnung in der Praxis – Angabe folgt | OF-21 |
| `akupunktur` | Dauer einer Sitzung und übliche Anzahl der Sitzungen – Angabe folgt | OF-22 |
| `aufbaukuren` | Kosten der Kuren – Angabe folgt | OF-21 |
| `aufbaukuren` | Dauer einer Infusion – Angabe folgt | OF-22 |
| `blutegeltherapie` | Kosten der Blutegeltherapie – Angabe folgt | OF-21 |
| `blutegeltherapie` | Dauer einer Behandlung – Angabe folgt | OF-22 |
| `datenschutz` | Name und Anschrift des Hosting-Anbieters, Auftragsverarbeitungsvertrag – Angabe folgt | OF-43 |
| `datenschutz` | Speicherdauer der Server-Protokolle – Angabe folgt | OF-43 |
| `datenschutz` | Angaben zur Zusammenarbeit mit Doctolib (Auftragsverarbeitung) – Angabe folgt | OF-44 |
| `eigenbluttherapie` | Kosten der Eigenbluttherapie – Angabe folgt | OF-21 |
| `eigenbluttherapie` | übliche Anzahl und Abstand der Sitzungen – Angabe folgt | OF-22 |
| `enzymtherapie` | Welche Präparate und Anwendungsformen die Praxis einsetzt – Angabe folgt | OF-24 |
| `enzymtherapie` | Kosten – Angabe folgt | OF-21 |
| `impfungen-reisemedizin` | Ob die Praxis zugelassene Gelbfieberimpfstelle ist, wird vor Livegang bestätigt | OF-07 |
| `impfungen-reisemedizin` | Kosten und Erstattung von Reiseimpfungen – Angabe folgt | OF-21 |
| `impressum` | Berufsrechtliche Angaben vor Livegang von der Praxis bestätigen lassen | OF-41 |
| `impressum` | Umsatzsteuer-Identifikationsnummer, falls vorhanden – Angabe folgt | OF-42 |
| `impressum` | Fotografin oder Fotograf – Angabe folgt | OF-30 |
| `mesotherapie` | Anwendungsbereiche der Mesotherapie in der Praxis – Angabe folgt | OF-23 |
| `mesotherapie` | Kosten je Sitzung – Angabe folgt | OF-21 |
| `naturheilkunde` | Kostenrahmen je Verfahren – Angaben folgen | OF-21 |
| `neuraltherapie` | Kostenübernahme bzw. Kosten der Neuraltherapie – Angabe folgt | OF-21 |
| `neuraltherapie` | Dauer einer Sitzung und übliche Anzahl – Angabe folgt | OF-22 |
| `orthomolekulare-medizin` | Kostenübernahme von Laborwerten und Präparaten – Angabe folgt | OF-21 |
| `phytotherapie-homoeopathie` | Kostenübernahme der Beratung und der Mittel – Angabe folgt | OF-21 |
| `psychosomatik` | Qualifikation und Angebot ärztliche Hypnotherapie – Angabe folgt | OF-25 |
| `psychosomatik` | Dauer eines Gesprächstermins – Angabe folgt | OF-22 |
| `schroepfen` | Kosten je Sitzung – Angabe folgt | OF-21 |
| `schroepfen` | Dauer einer Sitzung – Angabe folgt | OF-22 |
| `startseite` | Hinweise zu Bus, Bahn und Parken folgen | OF-10 |
| `termin-kontakt` | Haltestellen von Bus und Bahn sowie Parkmöglichkeiten – Angaben folgen | OF-10 |
| `unsere-praxis` | Hochschule, Umfang und seit wann die Praxis Lehrpraxis ist – Angaben folgen | OF-01 |
| `unsere-praxis` | Fotos der Praxisräume und des Praxisteams folgen | OF-32 |
| `vorsorge` | Dauer eines Vorsorgetermins – Angabe folgt | OF-22 |

Zusätzlich in allen Entwürfen: **Bildplatzhalter** für Praxisräume, Team, Eingang (OF-32) auf der Praxisseite und auf Termin & Kontakt, gestaltet je Entwurf.
