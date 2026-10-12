# Praxis zum Schloss – drei Website-Entwürfe

Drei vollständige, klickbare Entwürfe für die neue Website der hausärztlichen Praxis von Nalan Bagci-Kaikis, Fachärztin für Allgemeinmedizin, Schloßstraße 21, 14059 Berlin-Charlottenburg. Die Entwürfe beruhen auf denselben Texten und Praxisdaten. Sie unterscheiden sich in Gestaltung, Navigation und darin, wie weit sie die Struktur der bisherigen Website umbauen.

Die Entwürfe sind nur zur Ansicht da. Jede Seite trägt `noindex, nofollow` und ein sichtbares Schild „Entwurf von vivenna“.

## Ansehen

```sh
python3 -m http.server 8000
```

Im Repo-Root starten, dann `http://localhost:8000` öffnen. Die Übersichtsseite (`index.html`) verlinkt alle drei Entwürfe.

- **Ohne Server:** `index.html` per Doppelklick öffnen (`file://`) geht ebenfalls, auch das Sprachmenü. Die Schriften werden dann nur nicht vorgeladen.
- **GitHub Pages:** *Settings → Pages → Deploy from a branch → `main` / `/ (root)`*. Alle Pfade sind relativ, die Seiten laufen unter `https://<name>.github.io/<repo>/`. `.nojekyll` sorgt dafür, dass die Dateien unverändert ausgeliefert werden. Vorher [Vertraulichkeit](#vor-dem-teilen-vertraulichkeit) beachten.

## Die drei Entwürfe

| | Entwurf 1 „Fundament“ | Entwurf 2 „Verwandt“ | Entwurf 3 „Eigenständig“ |
|---|---|---|---|
| Ordner | `entwurf-1-fundament/` | `entwurf-2-verwandt/` | `entwurf-3-eigenstaendig/` |
| Idee | baut nahtlos auf dem vorhandenen Startseiten-Entwurf auf; Bogenfenster aus dem Schloss-Emblem | gleiche Herkunft, ruhigere redaktionelle Haltung; Haarlinien, Dossier-Landing-Pages | eigenes Konzept: die Website als nummeriertes Register |
| Seiten | 23 – jede alte Leistung einzeln | 18 – Hausärztliches gebündelt | 17 – Leistungen nach Anliegen |
| Navigation | Kopfleiste mit Untermenü | Serviceleiste und Mega-Menü | feste Register-Spalte, mobil als Bogen von unten |
| Schrift | Fraunces + Figtree | Instrument Sans + Source Serif 4 | Archivo |
| Farben | Marineblau, Türkis, Creme | Tinte, Petrol, Porzellan | Aubergine, Messing, Kalkstein |

Ausführlich: [docs/design-entscheidungen.md](docs/design-entscheidungen.md) und [docs/sitemap.md](docs/sitemap.md).

## Struktur

```
index.html                  Übersicht der drei Entwürfe
vorschau/                   Vorschaubilder für die Übersicht
entwurf-1-fundament/        Entwurf 1 (HTML-Seiten, assets/css, assets/js, assets/fonts)
entwurf-2-verwandt/         Entwurf 2 (dazu inhalte/ mit entwurfseigenen Texten)
entwurf-3-eigenstaendig/    Entwurf 3 (dazu inhalte/ mit entwurfseigenen Texten)
shared/
  inhalte/praxisdaten.yml   Praxisdaten: Adresse, Telefon, Sprechzeiten, Doctolib-URL
  inhalte/de/               alle Seitentexte auf Deutsch, eine Markdown-Datei je Seite
  inhalte/uebersetzungen/   Demo-Übersetzungen Englisch/Türkisch (en.js, tr.js)
  js/sprache.js             Sprachumschaltung (gemeinsam für alle Entwürfe)
  assets/logo/, bilder/     Logo, Favicons, Porträt (optimiert)
docs/                       Analyse der alten Website, Sitemap, Landing-Page-Konzept,
                            Design-Entscheidungen, offene Fragen, QA-Bericht (+ docs/qa/ Screenshots)
tools/                      Prüfskripte
master-prompt.md            Auftrag
```

**Wo die Texte stehen:**

- **Quelle der Texte:** `shared/inhalte/de/*.md`, für entwurfseigene Seiten `entwurf-*/inhalte/*.md`.
- **HTML ist ein Stand dieser Dateien:** Die Seiten wurden daraus erzeugt. Der Generator gehört nicht zur Lieferung. Eine Textänderung in Markdown erscheint deshalb nicht von selbst im HTML; für die Entwürfe direkt im HTML ändern.
- **Für den Livegang:** Die Markdown-Dateien sind die Grundlage für die Umsetzung des gewählten Entwurfs.

Der vorhandene Startseiten-Entwurf liegt außerhalb des Repos (`../nalan-bagci-kaikis-entwurf`). Er wurde nur gelesen, nie verändert.

## Prüfen

```sh
python3 tools/pruefe-seiten.py          # Links, Assets, Doctolib-Links, Metadaten, JSON-LD, IDs
python3 tools/pruefe-uebersetzungen.py  # EN/TR vollständig und mit gleichem Markup
```

Beide kommen ohne zusätzliche Pakete aus. Ergebnisse der Browser-, Barrierefreiheits- und Lighthouse-Prüfung stehen in [docs/qa-bericht.md](docs/qa-bericht.md).

## Offene Fragen

Was Praxis und Ärztin noch klären oder liefern müssen, steht in [docs/offene-fragen.md](docs/offene-fragen.md). Auf den Seiten sind fehlende Angaben als Platzhalter sichtbar markiert. Die wichtigsten offenen Fragen:

- **OF-01** Lehrärztin/Lehrpraxis
- **OF-02** Name und Titel
- **OF-04** Sprechzeiten
- **OF-07** Gelbfieberimpfstelle
- **OF-21** Kosten der Selbstzahlerleistungen
- **OF-30** Rechte am Porträt
- **OF-50** Doctolib-Profil

## Vor dem Teilen: Vertraulichkeit

Bei Veröffentlichung über GitHub Pages ist das ganze Repo öffentlich abrufbar, also auch `docs/` (Analyse der alten Website mit kritischen Befunden) und `master-prompt.md`. `noindex` schützt nur vor Suchmaschinen, nicht vor dem Aufruf. Vorher entscheiden, ob diese Ordner entfernt werden oder ein privates Repo bzw. ein geschütztes Hosting genutzt wird (OF-47).

## Vor dem Livegang

Für den gewählten Entwurf:

1. **Indexierung freigeben:** `<meta name="robots" content="noindex, nofollow">` auf allen Seiten entfernen. Das Schild „Entwurf von vivenna“ entfernen.
2. **Adressen festlegen:**
   - Auf jeder Seite `<link rel="canonical">` und `og:url` mit absoluter URL setzen, `og:image` absolut.
   - `sitemap.xml` und `robots.txt` anlegen.
   - Für die alten Adressen 301-Weiterleitungen nach [docs/sitemap.md](docs/sitemap.md) §5 einrichten.
3. **Mehrsprachigkeit richtig umsetzen:**
   - Die Sprachumschaltung per Skript ist nur eine Demo.
   - Live jede Sprache unter eigener URL anlegen (`/en/…`, `/tr/…`), als vollständige HTML-Seiten mit `lang`, gegenseitigem `hreflang` (inkl. `x-default`) und eigener Title/Description.
   - Das Sprachmenü verlinkt dann diese Seiten.
   - Übersetzungen muttersprachlich prüfen lassen.
4. **Inhalte freigeben:**
   - Alle Platzhalter ersetzen oder die betroffenen Sätze streichen.
   - Texte ärztlich und rechtlich prüfen (HWG, Berufsordnung).
   - Impressum und Datenschutzerklärung juristisch prüfen.
   - Rechte am Porträt klären.
5. **Daten prüfen:**
   - Doctolib-URL gegen das freigeschaltete Profil testen.
   - Sprechzeiten in Text und JSON-LD abgleichen.
   - Strukturierte Daten mit dem Rich-Results-Test prüfen.
6. **Technik:**
   - HTTPS, gzip/brotli und Cache-Header beim Hosting aktivieren.
   - Firefox, iOS Safari, Android und Screenreader von Hand prüfen (siehe QA-Bericht, Abschnitt 5).
   - Danach Lighthouse und PageSpeed mit der echten URL wiederholen.
