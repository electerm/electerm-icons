import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import {
  connectionIcons,
  connectionIconGroups,
  findConnectionIcons
} from './connection-icons.js';

// icons/ is a sibling of src/, not of dist/, so resolve from the repo root
const iconsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../icons');

const fileNames = readdirSync(iconsDir);

const NAMED_COLORS: Record<string, string> = { black: '#000000', white: '#ffffff' };

/**
 * A dark, unsaturated colour — the svg default black or a brand black — is the
 * only kind that disappears on a dark panel. Saturated darks (brand blue, brand
 * red) still read as a shape, so they are left alone.
 */
function isNearBlack (color: string): boolean {
  const raw = (NAMED_COLORS[color] ?? color).replace('#', '');
  const hex = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw;
  if (!/^[0-9a-f]{6}$/i.test(hex)) return false;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const saturation = max === 0 ? 0 : (max - min) / max;
  const linear = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
  return saturation < 0.2 && luminance < 0.15;
}

describe('connection icons', () => {
  it('points every entry at a file that exists', () => {
    const files = new Set(fileNames);
    const missing = connectionIcons
      .filter((icon) => !files.has(icon.name + '.svg'))
      .map((icon) => icon.name);
    expect(missing).toEqual([]);
  });

  it('uses unique names', () => {
    const names = connectionIcons.map((icon) => icon.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('only uses declared groups', () => {
    const known = new Set<string>(connectionIconGroups);
    for (const icon of connectionIcons) {
      expect(known.has(icon.group), icon.name).toBe(true);
    }
  });

  it('ships small, well formed svg files', () => {
    for (const icon of connectionIcons) {
      const file = resolve(iconsDir, icon.name + '.svg');
      const svg = readFileSync(file, 'utf8').trim();
      expect(svg.startsWith('<svg'), icon.name).toBe(true);
      expect(svg.endsWith('</svg>'), icon.name).toBe(true);
      // keep the bundled set lightweight: nothing here should be a bitmap
      expect(statSync(file).size, icon.name).toBeLessThan(64 * 1024);
    }
  });

  it('has no unresolved currentColor, an <img> cannot inherit it', () => {
    for (const icon of connectionIcons) {
      const svg = readFileSync(resolve(iconsDir, icon.name + '.svg'), 'utf8');
      expect(svg.includes('currentColor'), icon.name).toBe(false);
    }
  });

  // the picker and the bookmark tree draw these on a dark panel as well, and
  // an <img> cannot be recoloured by css, so a monochrome glyph has to carry a
  // mid tone of its own instead of the svg default black
  it('keeps every glyph visible on a dark panel', () => {
    const offenders: string[] = [];
    for (const icon of connectionIcons) {
      const svg = readFileSync(resolve(iconsDir, icon.name + '.svg'), 'utf8');
      // multi colour artwork paints gradients, its black outlines sit on top
      // of a light shape and are readable either way
      if (svg.includes('stop-color=')) continue;
      const root = svg.slice(0, svg.indexOf('>') + 1);
      const rootFill = /fill=["']([^"']+)["']/.exec(root)?.[1] ?? null;
      const elements = svg.match(/<(?:path|rect|circle|ellipse|polygon|polyline|g)\b[^>]*>/gi) ?? [];
      const colors: string[] = [];
      for (const element of elements) {
        const fill = /fill=["']([^"']+)["']/.exec(element)?.[1] ?? rootFill;
        // no fill at all means the svg default, black
        colors.push((fill ?? 'black').toLowerCase());
      }
      const painted = colors.filter((color) => color !== 'none' && !color.startsWith('url('));
      if (!painted.length) {
        offenders.push(`${icon.name}: has no painted colour`);
        continue;
      }
      if (painted.every((color) => isNearBlack(color))) {
        offenders.push(`${icon.name}: only near black colours (${[...new Set(painted)].join(', ')})`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it('searches by name, label and alias', () => {
    expect(findConnectionIcons('k8s').map((icon) => icon.name)).toContain('kubernetes');
    expect(findConnectionIcons('postgres').map((icon) => icon.name)).toEqual(['postgresql']);
    expect(findConnectionIcons('OpenAI').map((icon) => icon.name)).toEqual(['openai']);
    expect(findConnectionIcons('').length).toBe(connectionIcons.length);
    expect(findConnectionIcons('nothing-matches-this')).toEqual([]);
  });
});
