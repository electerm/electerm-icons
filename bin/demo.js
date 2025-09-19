#!/usr/bin/env node
/**
 * Show statistics and examples of the electerm-icons library
 */

import { 
  getIconForFile, 
  getIconForFolder,
  DEFAULT_FILE,
  DEFAULT_FOLDER
} from '../dist/index.js';

console.log('📊 electerm-icons Library Summary\n');

// Test various file types by category
const testCases = {
  'Web Development': [
    'index.html', 'style.css', 'app.js', 'main.ts', 'data.json', 'config.xml'
  ],
  'Programming Languages': [
    'main.py', 'App.java', 'main.c', 'app.cpp', 'Program.cs', 'main.go', 'lib.rs'
  ],
  'Configuration': [
    'config.yaml', 'settings.toml', 'app.ini', 'query.sql'
  ],
  'Documentation': [
    'README.md', 'LICENSE'
  ],
  'Special Files': [
    'package.json', '.gitignore', 'Dockerfile'
  ],
  'Media & Others': [
    'logo.svg', 'data.pdf', 'sheet.xlsx', 'archive.zip', 'script.sh'
  ]
};

console.log('🎯 Icon Mapping Examples:');
for (const [category, files] of Object.entries(testCases)) {
  console.log(`\n📁 ${category}:`);
  files.forEach(file => {
    const icon = getIconForFile(file);
    const isDefault = icon === DEFAULT_FILE;
    console.log(`   ${file.padEnd(20)} → ${icon}${isDefault ? ' (default)' : ''}`);
  });
}

console.log('\n📂 Folder Examples:');
console.log(`   Any folder         → ${getIconForFolder('src')}`);
console.log(`   node_modules       → ${getIconForFolder('node_modules')}`);
console.log(`   dist               → ${getIconForFolder('dist')}`);

console.log('\n🎉 Simplified library with essential functions only!');
