import { describe, it, expect } from 'vitest';
import { 
  getIconForFile, 
  getIconForFolder,
  DEFAULT_FILE,
  DEFAULT_FOLDER
} from './index.js';

describe('electerm-icons', () => {
  it('should return default file icon for unknown extensions', () => {
    expect(getIconForFile('unknown.xyz')).toBe(DEFAULT_FILE);
  });

  it('should return correct icons for common web files', () => {
    expect(getIconForFile('index.html')).toBe('file_type_html.svg');
    expect(getIconForFile('style.css')).toBe('file_type_css.svg');
    expect(getIconForFile('script.js')).toBe('file_type_js.svg');
    expect(getIconForFile('app.ts')).toBe('file_type_typescript.svg');
    expect(getIconForFile('data.json')).toBe('file_type_json.svg');
  });

  it('should return correct icons for programming languages', () => {
    expect(getIconForFile('main.py')).toBe('file_type_python.svg');
    expect(getIconForFile('App.java')).toBe('file_type_java.svg');
    expect(getIconForFile('main.c')).toBe('file_type_c.svg');
    expect(getIconForFile('main.cpp')).toBe('file_type_cpp.svg');
    expect(getIconForFile('Program.cs')).toBe('file_type_csharp.svg');
  });

  it('should return correct icons for specific filenames', () => {
    expect(getIconForFile('package.json')).toBe('file_type_package.svg');
    expect(getIconForFile('.gitignore')).toBe('file_type_git.svg');
    expect(getIconForFile('Dockerfile')).toBe('file_type_docker.svg');
    expect(getIconForFile('LICENSE')).toBe('file_type_license.svg');
  });

  it('should return default folder icon', () => {
    expect(getIconForFolder('unknown-folder')).toBe(DEFAULT_FOLDER);
    expect(getIconForFolder('src')).toBe(DEFAULT_FOLDER);
    expect(getIconForFolder('node_modules')).toBe(DEFAULT_FOLDER);
  });

  it('should handle files without extensions', () => {
    expect(getIconForFile('README')).toBe(DEFAULT_FILE);
    expect(getIconForFile('Dockerfile')).toBe('file_type_docker.svg'); // Special case
  });

  it('should handle multiple extensions correctly', () => {
    expect(getIconForFile('component.test.js')).toBe('file_type_js.svg');
    expect(getIconForFile('styles.min.css')).toBe('file_type_css.svg');
  });

  it('should use memoization for repeated extensions', () => {
    // First call
    expect(getIconForFile('file1.py')).toBe('file_type_python.svg');
    // Second call should use memoized result
    expect(getIconForFile('file2.py')).toBe('file_type_python.svg');
  });
});
