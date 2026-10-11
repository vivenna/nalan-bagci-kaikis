#!/usr/bin/env python3
"""Prüft die Demo-Übersetzungen (shared/inhalte/uebersetzungen/en.js, tr.js) gegen alle HTML-Seiten.

- jeder Schlüssel aus data-i18n / data-i18n-attr und aus Sprache.t('…') in den Entwurfs-Skripten
  muss in EN und TR vorhanden sein (Seiten ohne vollständige Übersetzung: nur allg.*-Schlüssel nötig)
- das Markup der Übersetzung (Tags) muss dem deutschen Original entsprechen
- nicht verwendete Schlüssel werden als Hinweis gelistet

Aufruf (im Repo-Root):  python3 tools/pruefe-uebersetzungen.py [--de-liste datei.json]
  --de-liste schreibt alle Schlüssel mit deutschem Text als JSON (Hilfe für Übersetzer).
Rückgabewert 1 bei fehlenden Schlüsseln oder Markup-Abweichungen.
"""
import json
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
ORDNER = ['entwurf-1-fundament', 'entwurf-2-verwandt', 'entwurf-3-eigenstaendig']
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}


def lade(sprache):
    t = (WURZEL / 'shared' / 'inhalte' / 'uebersetzungen' / f'{sprache}.js').read_text(encoding='utf-8')
    return json.loads(re.search(r'=\s*(\{.*\})\s*;\s*$', t, re.S).group(1))


class Sammler(HTMLParser):
    """Sammelt data-i18n-Elemente mit ihrem inneren HTML (Quelltext-Ausschnitt)."""
    def __init__(self, text):
        super().__init__(convert_charrefs=False)
        self.text = text
        self.zeilen = [0]
        for z in text.split('\n')[:-1]:
            self.zeilen.append(self.zeilen[-1] + len(z) + 1)
        self.stapel, self.funde, self.attr, self.voll = [], {}, {}, False

    def pos(self):
        z, s = self.getpos()
        return self.zeilen[z - 1] + s

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'body' and a.get('data-i18n-seite') == 'voll':
            self.voll = True
        if a.get('data-i18n-attr'):
            for paar in a['data-i18n-attr'].split(';'):
                name, _, key = paar.partition(':')
                if key.strip():
                    self.attr.setdefault(key.strip(), a.get(name.strip(), ''))
        if tag in VOID:
            return
        start_inhalt = self.pos() + len(self.get_starttag_text())
        self.stapel.append((tag, a.get('data-i18n'), start_inhalt))

    def handle_endtag(self, tag):
        while self.stapel:
            t, key, start = self.stapel.pop()
            if t == tag:
                if key:
                    self.funde.setdefault(key, self.text[start:self.pos()].strip())
                break


def tags(html):
    return Counter(re.findall(r'<\s*(\w+)', html or ''))


def main():
    en, tr = lade('en'), lade('tr')
    de, seiten_voll, js_keys = {}, {}, set()
    for o in ORDNER:
        for f in sorted((WURZEL / o).rglob('*.html')):
            s = Sammler(f.read_text(encoding='utf-8'))
            s.feed(s.text)
            for k, v in list(s.funde.items()) + list(s.attr.items()):
                de.setdefault(k, v)
                if s.voll:
                    seiten_voll.setdefault(k, f.relative_to(WURZEL).as_posix())
        for js in (WURZEL / o).rglob('*.js'):
            js_keys |= {k for k in re.findall(r"\bt\(\s*'([\w.-]+)'", js.read_text(encoding='utf-8')) if not k.endswith('.')}
    benoetigt = {k for k in de if k.startswith('allg.') or k in seiten_voll} | js_keys
    fehler = 0
    for name, w in (('EN', en), ('TR', tr)):
        fehlt = sorted(k for k in benoetigt if k not in w)
        if fehlt:
            fehler += len(fehlt)
            print(f'{name}: {len(fehlt)} fehlende Schlüssel')
            for k in fehlt:
                print(f'  {k}  ←  {de.get(k, "(aus Skript)")[:90]}')
        for k in sorted(benoetigt & set(w)):
            if k in de and tags(de[k]) != tags(w[k]):
                fehler += 1
                print(f'{name}: Markup weicht ab bei {k}: DE {dict(tags(de[k]))} / {name} {dict(tags(w[k]))}')
    unbenutzt = sorted(set(en) - set(de) - js_keys)
    if unbenutzt:
        print(f'Hinweis: {len(unbenutzt)} Schlüssel werden auf keiner Seite verwendet: {", ".join(unbenutzt[:20])}{" …" if len(unbenutzt) > 20 else ""}')
    if '--de-liste' in sys.argv:
        ziel = Path(sys.argv[sys.argv.index('--de-liste') + 1])
        ziel.write_text(json.dumps({k: de.get(k, '') for k in sorted(benoetigt)}, ensure_ascii=False, indent=1), encoding='utf-8')
    print(f'{len(benoetigt)} benötigte Schlüssel, {len(en)} EN, {len(tr)} TR, {fehler} Probleme.')
    sys.exit(1 if fehler else 0)


if __name__ == '__main__':
    main()
