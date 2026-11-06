/**
 * Curated connection icons: operating systems, server software, databases,
 * clouds, AI vendors and runtimes. Generated from the SVG Logos set
 * (@iconify-json/logos, MIT) plus a few generic glyphs from MDI.
 *
 * Each `name` maps to `<icons dir>/<name>.svg`. Do not rename an icon
 * without keeping the file in sync, `npm test` checks every entry.
 */

export type ConnectionIconGroup =
  | 'os'
  | 'server'
  | 'database'
  | 'cloud'
  | 'ai'
  | 'lang'
  | 'generic'

export interface ConnectionIcon {
  /** file name in the icons directory, without the .svg extension */
  name: string
  /** display name */
  label: string
  group: ConnectionIconGroup
  /** extra search terms, e.g. k8s for kubernetes */
  aliases?: string[]
}

export const connectionIconGroups: ConnectionIconGroup[] = [
  'os',
  'server',
  'database',
  'cloud',
  'ai',
  'lang',
  'generic'
]

export const connectionIcons: ConnectionIcon[] = [
  // os
  { name: 'ubuntu', label: 'Ubuntu', group: 'os', aliases: ['linux'] },
  { name: 'debian', label: 'Debian', group: 'os', aliases: ['linux'] },
  { name: 'centos', label: 'CentOS', group: 'os', aliases: ['linux'] },
  { name: 'redhat', label: 'Red Hat', group: 'os', aliases: ['rhel', 'redhat', 'linux'] },
  { name: 'fedora', label: 'Fedora', group: 'os', aliases: ['linux'] },
  { name: 'archlinux', label: 'Arch Linux', group: 'os', aliases: ['arch', 'linux'] },
  { name: 'rocky-linux', label: 'Rocky Linux', group: 'os', aliases: ['rocky', 'linux'] },
  { name: 'linux-mint', label: 'Linux Mint', group: 'os', aliases: ['mint', 'linux'] },
  { name: 'suse', label: 'openSUSE', group: 'os', aliases: ['suse', 'opensuse', 'linux'] },
  { name: 'cloudlinux', label: 'CloudLinux', group: 'os', aliases: ['linux'] },
  { name: 'linux-tux', label: 'Linux', group: 'os', aliases: ['tux', 'linux'] },
  { name: 'freebsd', label: 'FreeBSD', group: 'os', aliases: ['bsd'] },
  { name: 'macos', label: 'macOS', group: 'os', aliases: ['mac', 'osx', 'apple'] },
  { name: 'apple', label: 'Apple', group: 'os', aliases: ['mac', 'macos'] },
  { name: 'microsoft-windows', label: 'Windows', group: 'os', aliases: ['win', 'windows'] },
  { name: 'android', label: 'Android', group: 'os' },
  { name: 'raspberry-pi', label: 'Raspberry Pi', group: 'os', aliases: ['rpi', 'pi'] },
  // server
  { name: 'docker', label: 'Docker', group: 'server', aliases: ['container'] },
  { name: 'kubernetes', label: 'Kubernetes', group: 'server', aliases: ['k8s'] },
  { name: 'nginx', label: 'Nginx', group: 'server', aliases: ['web server'] },
  { name: 'apache-http', label: 'Apache HTTP Server', group: 'server', aliases: ['httpd', 'apache'] },
  { name: 'traefik-proxy', label: 'Traefik', group: 'server', aliases: ['proxy'] },
  { name: 'jenkins', label: 'Jenkins', group: 'server', aliases: ['ci'] },
  { name: 'gitlab', label: 'GitLab', group: 'server', aliases: ['git'] },
  { name: 'github', label: 'GitHub', group: 'server', aliases: ['git'] },
  { name: 'grafana', label: 'Grafana', group: 'server', aliases: ['monitor'] },
  { name: 'prometheus', label: 'Prometheus', group: 'server', aliases: ['monitor'] },
  { name: 'zabbix', label: 'Zabbix', group: 'server', aliases: ['monitor'] },
  { name: 'tomcat', label: 'Tomcat', group: 'server', aliases: ['java'] },
  { name: 'helm', label: 'Helm', group: 'server', aliases: ['k8s'] },
  { name: 'rancher', label: 'Rancher', group: 'server', aliases: ['k8s'] },
  { name: 'ansible', label: 'Ansible', group: 'server', aliases: ['devops'] },
  { name: 'terraform', label: 'Terraform', group: 'server', aliases: ['devops'] },
  { name: 'vagrant', label: 'Vagrant', group: 'server', aliases: ['vm'] },
  { name: 'vmware', label: 'VMware', group: 'server', aliases: ['vm', 'vcenter'] },
  { name: 'serverless', label: 'Serverless', group: 'server' },
  { name: 'terminal', label: 'Terminal', group: 'server', aliases: ['shell', 'console'] },
  // database
  { name: 'postgresql', label: 'PostgreSQL', group: 'database', aliases: ['postgres', 'pg'] },
  { name: 'mysql', label: 'MySQL', group: 'database' },
  { name: 'mariadb', label: 'MariaDB', group: 'database' },
  { name: 'mongodb', label: 'MongoDB', group: 'database', aliases: ['mongo'] },
  { name: 'redis', label: 'Redis', group: 'database', aliases: ['cache'] },
  { name: 'elasticsearch', label: 'Elasticsearch', group: 'database', aliases: ['elastic'] },
  { name: 'opensearch', label: 'OpenSearch', group: 'database' },
  { name: 'kafka', label: 'Kafka', group: 'database', aliases: ['queue'] },
  { name: 'rabbitmq', label: 'RabbitMQ', group: 'database', aliases: ['queue', 'mq'] },
  { name: 'meilisearch', label: 'Meilisearch', group: 'database', aliases: ['search'] },
  // cloud
  { name: 'aws', label: 'AWS', group: 'cloud', aliases: ['amazon', 'ec2', 's3'] },
  { name: 'azure', label: 'Azure', group: 'cloud', aliases: ['microsoft'] },
  { name: 'google-cloud-platform', label: 'Google Cloud', group: 'cloud', aliases: ['gcp'] },
  { name: 'cloudflare', label: 'Cloudflare', group: 'cloud', aliases: ['cdn'] },
  { name: 'heroku', label: 'Heroku', group: 'cloud' },
  { name: 'vercel', label: 'Vercel', group: 'cloud' },
  { name: 'netlify', label: 'Netlify', group: 'cloud' },
  { name: 'linode', label: 'Linode', group: 'cloud', aliases: ['akamai'] },
  { name: 'vultr', label: 'Vultr', group: 'cloud' },
  { name: 'openstack', label: 'OpenStack', group: 'cloud' },
  // ai
  { name: 'openai', label: 'OpenAI', group: 'ai', aliases: ['gpt', 'chatgpt'] },
  { name: 'ollama', label: 'Ollama', group: 'ai', aliases: ['llm', 'local'] },
  { name: 'anthropic', label: 'Anthropic', group: 'ai', aliases: ['claude'] },
  { name: 'claude', label: 'Claude', group: 'ai', aliases: ['anthropic'] },
  { name: 'google-gemini', label: 'Gemini', group: 'ai', aliases: ['google', 'bard'] },
  { name: 'hugging-face', label: 'Hugging Face', group: 'ai', aliases: ['huggingface', 'hf'] },
  { name: 'mistral-ai', label: 'Mistral AI', group: 'ai', aliases: ['mistral'] },
  { name: 'deepseek', label: 'DeepSeek', group: 'ai' },
  { name: 'qwen', label: 'Qwen', group: 'ai', aliases: ['tongyi', '通义'] },
  { name: 'github-copilot', label: 'GitHub Copilot', group: 'ai', aliases: ['copilot'] },
  { name: 'vercel-ai-sdk', label: 'AI SDK', group: 'ai', aliases: ['ai'] },
  // lang
  { name: 'python', label: 'Python', group: 'lang', aliases: ['py'] },
  { name: 'nodejs', label: 'Node.js', group: 'lang', aliases: ['node', 'npm'] },
  { name: 'go', label: 'Go', group: 'lang', aliases: ['golang'] },
  { name: 'rust', label: 'Rust', group: 'lang', aliases: ['cargo'] },
  { name: 'java', label: 'Java', group: 'lang', aliases: ['jdk'] },
  { name: 'javascript', label: 'JavaScript', group: 'lang', aliases: ['js'] },
  { name: 'php', label: 'PHP', group: 'lang' },
  { name: 'ruby', label: 'Ruby', group: 'lang' },
  { name: 'dotnet', label: '.NET', group: 'lang', aliases: ['csharp', 'net'] },
  { name: 'swift', label: 'Swift', group: 'lang' },
  { name: 'kotlin', label: 'Kotlin', group: 'lang' },
  // generic
  { name: 'server', label: 'Server', group: 'generic', aliases: ['host'] },
  { name: 'database', label: 'Database', group: 'generic', aliases: ['db'] },
  { name: 'folder', label: 'Folder', group: 'generic', aliases: ['dir'] },
  { name: 'home', label: 'Home', group: 'generic', aliases: ['house', 'user'] },
  { name: 'cloud', label: 'Cloud', group: 'generic' },
  { name: 'lock', label: 'Locked', group: 'generic', aliases: ['secure'] },
  { name: 'shield-check', label: 'Secure', group: 'generic', aliases: ['shield', 'ssl'] },
  { name: 'router-wireless', label: 'Network', group: 'generic', aliases: ['router', 'wifi'] },
  { name: 'harddisk', label: 'Disk', group: 'generic', aliases: ['disk', 'storage'] },
  { name: 'nas', label: 'NAS', group: 'generic', aliases: ['storage'] },
  { name: 'earth', label: 'Internet', group: 'generic', aliases: ['globe', 'web', 'public'] },
  { name: 'key', label: 'Key', group: 'generic', aliases: ['ssh', 'auth'] },
  { name: 'monitor-dashboard', label: 'Dashboard', group: 'generic', aliases: ['panel'] },
  { name: 'web', label: 'Web', group: 'generic', aliases: ['http'] },
  { name: 'dns', label: 'DNS', group: 'generic', aliases: ['domain'] },
  { name: 'archive', label: 'Archive', group: 'generic', aliases: ['backup', 'zip'] },
]

/** Look up a connection icon by name, alias or label (case insensitive). */
export function findConnectionIcons (keyword: string): ConnectionIcon[] {
  const word = keyword.trim().toLowerCase()
  if (!word) {
    return connectionIcons
  }
  return connectionIcons.filter(icon => {
    return [icon.name, icon.label, ...(icon.aliases || [])]
      .some(text => text.toLowerCase().includes(word))
  })
}
