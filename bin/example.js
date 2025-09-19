#!/usr/bin/env node
/**
 * Example usage of electerm-icons library
 */

import { 
  getIconForFile, 
  getIconForFolder,
  DEFAULT_FILE 
} from '../dist/index.js';

console.log('🎨 electerm-icons Example\n');

// Test common files
const testFiles = [
  'index.html',
  'style.css', 
  'app.js',
  'main.ts',
  'data.json',
  'config.yaml',
  'main.py',
  'App.java',
  'main.cpp',
  'README.md',
  'package.json',
  '.gitignore',
  'Dockerfile',
  'unknown.xyz'
];

console.log('📁 File Icons:');
testFiles.forEach(file => {
  const icon = getIconForFile(file);
  const isDefault = icon === DEFAULT_FILE;
  console.log(`  ${file.padEnd(15)} → ${icon}${isDefault ? ' (default)' : ''}`);
});

console.log('\n📂 Folder Icons:');
console.log(`  src               → ${getIconForFolder('src')}`);
console.log(`  components        → ${getIconForFolder('components')}`);
console.log(`  node_modules      → ${getIconForFolder('node_modules')}`);

console.log('\n✨ Simple and lightweight!');
