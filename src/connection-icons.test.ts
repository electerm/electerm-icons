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

  it('searches by name, label and alias', () => {
    expect(findConnectionIcons('k8s').map((icon) => icon.name)).toContain('kubernetes');
    expect(findConnectionIcons('postgres').map((icon) => icon.name)).toEqual(['postgresql']);
    expect(findConnectionIcons('OpenAI').map((icon) => icon.name)).toEqual(['openai']);
    expect(findConnectionIcons('').length).toBe(connectionIcons.length);
    expect(findConnectionIcons('nothing-matches-this')).toEqual([]);
  });
});
