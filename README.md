# nalan-bagci-kaikis

Website-Entwürfe für die Praxis von Nalan Bagci Kaikis (Berlin). Es entstehen drei Entwürfe einer vollständigen Website, die miteinander verglichen werden sollen.

Die komplette Aufgabenbeschreibung steht in [master-prompt.md](master-prompt.md).

## Struktur

```
master-prompt.md            Aufgabe für die KI (Einstiegspunkt)
index.html                  Übersicht der drei Entwürfe (wird von der KI erstellt)
docs/                       Analyse, Sitemap, Design-Entscheidungen, offene Fragen, QA-Bericht
shared/
  inhalte/de/               Alle Texte der Seiten (Deutsch), eine Datei pro Seite
  inhalte/uebersetzungen/   Demo-Übersetzungen Englisch / Türkisch
  assets/logo/              Logo-Dateien
  assets/bilder/            Optimierte Bilder (von allen Entwürfen genutzt)
entwurf-1-fundament/        Baut direkt auf dem Startseiten-Entwurf auf
entwurf-2-verwandt/         Ähnliche Farbwelt, andere Struktur und Animation
entwurf-3-eigenstaendig/    Komplett eigenes Konzept (nur Logo und Bilder gleich)
```

Der bestehende Startseiten-Entwurf liegt außerhalb dieses Repos unter `/Users/mohamed/github-projekte/nalan-bagci-kaikis-entwurf` und wird nur gelesen, nie verändert.

## Hosting (GitHub Pages)

Repo auf GitHub hochladen, dann *Settings → Pages → Deploy from a branch → `main` / `/ (root)`*. Mehr ist nicht nötig. Die Datei `.nojekyll` sorgt dafür, dass die Dateien unverändert ausgeliefert werden. Alle Pfade sind relativ, die Seiten laufen daher unter `https://<name>.github.io/<repo>/`.

## Lokal ansehen

```sh
python3 -m http.server 8000
```

Dann `http://localhost:8000` öffnen.
