#!/usr/bin/env python3
"""Statische Prüfung aller HTML-Seiten im Repository (ohne Abhängigkeiten).

Prüft je Seite:
  - interne Links und Assets (href, src, srcset, url() in style-Attributen): Datei existiert,
    Groß-/Kleinschreibung stimmt exakt (wie auf GitHub Pages), Anker (#id) existiert
  - keine absoluten Pfade mit führendem „/“, keine externen Skripte/Stylesheets/Schriften
  - Termin-Links: jeder Link auf doctolib.de zeigt exakt auf die vorgegebene URL,
    mit target="_blank" und rel="noopener noreferrer"
  - <meta name="robots" content="noindex, nofollow">, genau eine <h1>, <html lang>,
    <title> ≤ 60 Zeichen, Meta-Description vorhanden und ≤ 155 Zeichen
  - JSON-LD-Blöcke sind gültiges JSON
  - doppelte id-Attribute

Aufruf (im Repo-Root):  python3 tools/pruefe-seiten.py [ordner …]
Ohne Argument werden index.html und alle drei Entwurfsordner geprüft.
Rückgabewert 1, wenn Fehler gefunden wurden.
"""
import json
import os
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

DOCTOLIB = 'https://www.doctolib.de/allgemeinmedizin/berlin/nalan-bagci-kaikis-berlin/booking/'
WURZEL = Path(__file__).resolve().parent.parent
STANDARD = ['index.html', 'entwurf-1-fundament', 'entwurf-2-eigenstaendig', 'entwurf-3-verwandt']


class Sammler(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.h1, self.title, self.meta = [], [], 0, None, {}
        self.html_lang, self.jsonld, self.extern = None, [], []
        self._in_title = self._in_jsonld = False
        self._puffer = ''

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'html':
            self.html_lang = a.get('lang')
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self._in_title, self._puffer = True, ''
        if tag == 'meta' and a.get('name'):
            self.meta[a['name'].lower()] = a.get('content', '')
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self._in_jsonld, self._puffer = True, ''
        for attr in ('href', 'src', 'poster', 'data-src'):
            if a.get(attr) is not None:
                self.links.append((tag, attr, a[attr], a))
        for attr in ('srcset', 'imagesrcset'):
            if a.get(attr):
                for teil in a[attr].split(','):
                    url = teil.strip().split(' ')[0]
                    if url:
                        self.links.append((tag, attr, url, a))
        if a.get('style'):
            for url in re.findall(r'url\(["\']?([^"\')]+)', a['style']):
                self.links.append((tag, 'style', url, a))
        if tag in ('script', 'link') and (a.get('src') or a.get('href', '')).startswith(('http:', 'https:', '//')):
            if tag == 'script' or a.get('rel') in ('stylesheet', 'preload', 'modulepreload'):
                self.extern.append(a.get('src') or a.get('href'))

    def handle_data(self, data):
        if self._in_title or self._in_jsonld:
            self._puffer += data

    def handle_endtag(self, tag):
        if tag == 'title' and self._in_title:
            self.title, self._in_title = self._puffer.strip(), False
        if tag == 'script' and self._in_jsonld:
            self.jsonld.append(self._puffer)
            self._in_jsonld = False


def exakt_vorhanden(pfad: Path) -> bool:
    """Existiert der Pfad mit exakt dieser Schreibweise (macOS ist sonst tolerant)?"""
    try:
        rel = pfad.resolve().relative_to(WURZEL)
    except ValueError:
        return pfad.exists()
    aktuell = WURZEL
    for teil in rel.parts:
        if not aktuell.is_dir() or teil not in os.listdir(aktuell):
            return False
        aktuell = aktuell / teil
    return True


_id_cache = {}


def ids_von(datei: Path):
    if datei not in _id_cache:
        s = Sammler()
        s.feed(datei.read_text(encoding='utf-8', errors='replace'))
        _id_cache[datei] = set(s.ids)
    return _id_cache[datei]


def pruefe(datei: Path):
    fehler, hinweise = [], []
    text = datei.read_text(encoding='utf-8', errors='replace')
    s = Sammler()
    s.feed(text)
    rel = datei.relative_to(WURZEL)
    ist_uebersicht = rel.as_posix() == 'index.html'

    if not ist_uebersicht:
        if s.meta.get('robots', '').replace(' ', '') != 'noindex,nofollow':
            fehler.append('meta robots „noindex, nofollow“ fehlt')
        if s.h1 != 1:
            fehler.append(f'{s.h1} × <h1> (erwartet genau 1)')
    if not s.html_lang:
        fehler.append('<html lang> fehlt')
    if not s.title:
        fehler.append('<title> fehlt')
    elif len(s.title) > 60:
        fehler.append(f'<title> {len(s.title)} Zeichen (> 60): {s.title}')
    desc = s.meta.get('description')
    if desc is None:
        fehler.append('meta description fehlt')
    elif len(desc) > 155:
        fehler.append(f'meta description {len(desc)} Zeichen (> 155)')
    for block in s.jsonld:
        try:
            json.loads(block)
        except json.JSONDecodeError as e:
            fehler.append(f'JSON-LD ungültig: {e}')
    doppelt = {i for i in s.ids if s.ids.count(i) > 1}
    if doppelt:
        fehler.append(f'doppelte ids: {sorted(doppelt)}')
    for e in s.extern:
        fehler.append(f'externe Ressource eingebunden: {e}')

    for tag, attr, url, attrs in s.links:
        if url.startswith(('mailto:', 'tel:', 'data:', 'javascript:')):
            continue
        teile = urlsplit(url)
        if teile.scheme in ('http', 'https') or url.startswith('//'):
            if 'doctolib' in teile.netloc:
                if url != DOCTOLIB:
                    fehler.append(f'Doctolib-URL weicht ab: {url}')
                if attrs.get('target') != '_blank' or set((attrs.get('rel') or '').split()) != {'noopener', 'noreferrer'}:
                    fehler.append(f'Doctolib-Link ohne target="_blank" rel="noopener noreferrer"')
            elif tag == 'a' and attrs.get('target') == '_blank' and 'noopener' not in (attrs.get('rel') or ''):
                hinweise.append(f'externer Link ohne rel=noopener: {url}')
            continue
        if url.startswith('/'):
            fehler.append(f'absoluter Pfad (bricht auf GitHub Pages): {url}')
            continue
        ziel = datei if not teile.path else (datei.parent / unquote(teile.path))
        if teile.path and teile.path.endswith('/'):
            fehler.append(f'Link auf Ordner ohne index.html (bricht per file://): {url}')
            continue
        if teile.path and not exakt_vorhanden(ziel):
            fehler.append(f'{attr}: Ziel fehlt oder Schreibweise falsch: {url}')
            continue
        if teile.fragment and tag == 'a' and ziel.suffix == '.html':
            if teile.fragment not in ids_von(ziel.resolve()):
                fehler.append(f'Anker fehlt: {url}')
    return fehler, hinweise


def main():
    ziele = sys.argv[1:] or STANDARD
    dateien = []
    for z in ziele:
        p = (WURZEL / z)
        if p.is_file():
            dateien.append(p)
        elif p.is_dir():
            dateien += sorted(p.rglob('*.html'))
    gesamt = 0
    for d in dateien:
        fehler, hinweise = pruefe(d)
        if fehler or hinweise:
            print(f'\n{d.relative_to(WURZEL)}')
            for f in fehler:
                print(f'  FEHLER  {f}')
            for h in hinweise:
                print(f'  hinweis {h}')
        gesamt += len(fehler)
    print(f'\n{len(dateien)} Seiten geprüft, {gesamt} Fehler.')
    sys.exit(1 if gesamt else 0)


if __name__ == '__main__':
    main()
