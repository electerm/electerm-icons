# electerm-icons

A lightweight TypeScript library providing essential file type icons plus a curated set of connection icons (operating systems, server software, databases, clouds, AI vendors, runtimes), similar to vscode-icons but with only the icons that are actually used.

## Features

- 🎯 **Essential Icons Only**: 48 file type icons and 95 connection icons
- 📦 **Lightweight**: 456KB in total, against 7.6MB for the full vscode-icons set
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🌐 **ES Modules**: Modern ES module support only
- 📁 **Complete API**: Same interface as vscode-icons for easy migration

## Installation

```bash
npm install electerm-icons
```

## Usage

```typescript
import { 
  getIconForFile,
  getIconForFolder
} from 'electerm-icons';

// Get icon for files
console.log(getIconForFile('index.html'));      // 'file_type_html.svg'
console.log(getIconForFile('script.js'));       // 'file_type_js.svg'
console.log(getIconForFile('main.py'));         // 'file_type_python.svg'
console.log(getIconForFile('unknown.xyz'));     // 'default_file.svg'

// Get icon for folders
console.log(getIconForFolder('src'));           // 'default_folder.svg'
```

## Connection Icons

Besides file types, the package ships a curated set of icons for *hosts* — the icon a
bookmark, a bookmark folder or a connection tab shows next to its name.

- `os`: Ubuntu, Debian, CentOS, Red Hat, Fedora, Arch Linux, Rocky Linux, Linux Mint,
  openSUSE, CloudLinux, Linux, FreeBSD, macOS, Apple, Windows, Android, Raspberry Pi
- `server`: Docker, Kubernetes, Nginx, Apache HTTP, Traefik, Jenkins, GitLab, GitHub,
  Grafana, Prometheus, Zabbix, Tomcat, Helm, Rancher, Ansible, Terraform, Vagrant,
  VMware, Serverless, Terminal
- `database`: PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Elasticsearch, OpenSearch,
  Kafka, RabbitMQ, Meilisearch
- `cloud`: AWS, Azure, Google Cloud, Cloudflare, Heroku, Vercel, Netlify, Linode,
  Vultr, OpenStack
- `ai`: OpenAI, Ollama, Anthropic, Claude, Gemini, Hugging Face, Mistral AI, DeepSeek,
  Qwen, GitHub Copilot, AI SDK
- `lang`: Python, Node.js, Go, Rust, Java, JavaScript, PHP, Ruby, .NET, Swift, Kotlin
- `generic`: Server, Database, Folder, Home, Cloud, Locked, Secure, Network, Disk, NAS,
  Internet, Key, Dashboard, Web, DNS, Archive

Every entry maps to `<icons dir>/<name>.svg`, so a consumer only needs the icons
directory plus the manifest:

```typescript
import {
  connectionIcons,
  connectionIconGroups,
  findConnectionIcons
} from 'electerm-icons';

console.log(connectionIcons[0]);
// { name: 'ubuntu', label: 'Ubuntu', group: 'os', aliases: [ 'linux' ] }

// search by name, label or alias — 'k8s' finds kubernetes
console.log(findConnectionIcons('k8s').map(icon => icon.name));
```

The icons are plain self-contained SVGs (no `currentColor`, fixed colours), so they can
be used straight from an `<img src>` without any build step.

## Supported File Types

### Web Development
- HTML: `.html`, `.htm`, `.xhtml`
- CSS: `.css`, `.scss`, `.sass`, `.less`
- JavaScript: `.js`, `.mjs`, `.cjs`
- TypeScript: `.ts`, `.tsx`
- JSON: `.json`, `.jsonc`
- XML: `.xml`, `.xsd`, `.xsl`

### Programming Languages
- Python: `.py`, `.pyw`, `.pyc`, `.pyo`
- Java: `.java`, `.class`, `.jar`
- C/C++: `.c`, `.h`, `.cpp`, `.cxx`, `.cc`, `.hpp`, `.hxx`
- C#: `.cs`, `.csx`
- PHP: `.php`, `.phtml`, `.php3`, `.php4`, `.php5`
- Go: `.go`
- Rust: `.rs`, `.rlib`
- Ruby: `.rb`, `.erb`, `.gemspec`
- Swift: `.swift`
- Kotlin: `.kt`, `.kts`

### Data & Configuration
- YAML: `.yaml`, `.yml`
- TOML: `.toml`
- INI: `.ini`, `.cfg`, `.conf`
- SQL: `.sql`, `.mysql`, `.pgsql`

### Documentation
- Markdown: `.md`, `.markdown`, `.mdown`

### Special Files
- `package.json`, `package-lock.json`
- `.gitignore`, `.gitattributes`
- `Dockerfile`, `docker-compose.yml`
- `CMakeLists.txt`, `Makefile`
- `LICENSE`, `README.md`

## API Reference

### Functions

#### `getIconForFile(fileName: string): string`
Returns the appropriate icon filename for a given file.

#### `getIconForFolder(folderName: string): string`
Returns the appropriate icon filename for a folder.

#### `findConnectionIcons(keyword: string): ConnectionIcon[]`
Returns the connection icons whose name, label or alias contains `keyword`
(case insensitive). An empty keyword returns all of them.

### Constants

- `DEFAULT_FILE`: Default file icon
- `DEFAULT_FOLDER`: Default folder icon
- `connectionIcons`: `ConnectionIcon[]`, the connection icon manifest
- `connectionIconGroups`: the group ids used by `ConnectionIcon.group`

### Types

```typescript
type ConnectionIconGroup =
  | 'os' | 'server' | 'database' | 'cloud' | 'ai' | 'lang' | 'generic'

interface ConnectionIcon {
  /** file name in the icons directory, without the .svg extension */
  name: string
  label: string
  group: ConnectionIconGroup
  /** extra search terms, e.g. k8s for kubernetes */
  aliases?: string[]
}
```

## Size Comparison

| Library | Icons | Size | Use Case |
|---------|-------|------|----------|
| vscode-icons | 1700+ | 7.6MB | Full IDE support |
| electerm-icons | 143 | 456KB | File types + connection icons |

## Migration from vscode-icons

electerm-icons provides the same API as vscode-icons, making migration simple:

```typescript
// Before (vscode-icons)
import { getIconForFile } from 'vscode-icons-js';

// After (electerm-icons)
import { getIconForFile } from 'electerm-icons';

// Same function calls work identically
const icon = getIconForFile('index.html');
```

## Development

```bash

# Build the library
npm run build

# Run tests
npm test

# Development with watch mode
npm run dev
```

## License

MIT © ZHAO Xudong

## Credits

The file type icons are sourced from [vscode-icons](https://github.com/vscode-icons/vscode-icons), the connection icons from [SVG Logos](https://github.com/gilbarbara/logos) (via [@iconify-json/logos](https://icon-sets.iconify.design/logos/)) and a few generic glyphs from [Material Design Icons](https://pictogrammers.com/library/mdi/) (via [@iconify-json/mdi](https://icon-sets.iconify.design/mdi/)). Both icon sets are MIT licensed. All brand logos remain the trademarks of their owners and are used only to identify the corresponding software.

```
Copyright (c) 2016-present Roberto Huertas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```
