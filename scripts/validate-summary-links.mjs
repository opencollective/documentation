import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

const root = resolve(import.meta.dirname, '..');

function walkMarkdownFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.git') continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walkMarkdownFiles(path, files);
    } else if (entry.endsWith('.md')) {
      files.push(path);
    }
  }
  return files;
}

const summary = readFileSync(resolve(root, 'SUMMARY.md'), 'utf8');
const summaryLinks = [...summary.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
const missingSummaryLinks = summaryLinks.filter((link) => {
  if (link.startsWith('http') || link.startsWith('/')) {
    return false;
  }
  return !existsSync(resolve(root, link));
});

console.log(`SUMMARY.md links checked: ${summaryLinks.length}`);
if (missingSummaryLinks.length > 0) {
  console.error('Missing files referenced from SUMMARY.md:');
  for (const link of missingSummaryLinks) {
    console.error(`  - ${link}`);
  }
  process.exit(1);
}

console.log('All SUMMARY.md file links exist.');

const brokenGitBookLinks = [];
for (const file of walkMarkdownFiles(root)) {
  const content = readFileSync(file, 'utf8');
  if (content.includes('/broken/pages/')) {
    brokenGitBookLinks.push(file.replace(`${root}/`, ''));
  }
}

console.log(`Markdown files scanned for broken GitBook links: ${walkMarkdownFiles(root).length}`);
if (brokenGitBookLinks.length > 0) {
  console.error('Files still referencing /broken/pages/:');
  for (const file of brokenGitBookLinks) {
    console.error(`  - ${file}`);
  }
  process.exit(1);
}

console.log('No /broken/pages/ links found.');
