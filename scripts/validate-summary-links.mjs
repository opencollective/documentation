import { readFileSync } from 'node:fs';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const summary = readFileSync(resolve(root, 'SUMMARY.md'), 'utf8');
const links = [...summary.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
const missing = links.filter((link) => {
  if (link.startsWith('http') || link.startsWith('/')) {
    return false;
  }
  return !existsSync(resolve(root, link));
});

console.log(`SUMMARY.md links checked: ${links.length}`);
if (missing.length > 0) {
  console.error('Missing files referenced from SUMMARY.md:');
  for (const link of missing) {
    console.error(`  - ${link}`);
  }
  process.exit(1);
}

console.log('All SUMMARY.md file links exist.');
