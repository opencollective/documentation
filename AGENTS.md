# AGENTS.md

## Project overview

This repository is the **Open Collective user documentation** site. It contains GitBook-formatted Markdown (`SUMMARY.md`, frontmatter, `{% hint %}` blocks, `.gitbook/assets/`) and is published at https://documentation.opencollective.com via GitBook (synced from GitHub).

There is no application server or database in this repo. The Open Collective platform itself lives in separate repositories (`opencollective-api`, `opencollective-frontend`, etc.).

## Cursor Cloud specific instructions

### Local development workflow

1. Install tooling: `npm install`
2. Validate navigation links: `npm run validate` (checks every file linked from `SUMMARY.md`)
3. Preview locally: `npm run serve` → http://localhost:4000

Local preview uses [Docsify](https://docsify.js.org/) (`index.html` + generated `_sidebar.md` from `SUMMARY.md`). It renders Markdown and sidebar navigation but **does not** fully emulate GitBook cloud features (`{% hint %}`, card tables, embeds). For pixel-perfect preview, use the GitBook editor or the published site.

**Honkit/GitBook CLI** (`honkit build`) is not suitable for this repo because GitBook-specific template tags fail at build time.

### Linting

`npm run lint:sample` runs markdownlint on a couple of pages. Expect many findings on GitBook-authored Markdown (HTML tables, long lines, `{% %}` blocks). There is no repo-wide lint gate today.

### Tests

There is no automated test suite. `npm run validate` is the primary structural check for doc contributions.

### Publishing

Changes merged to `main` are picked up by GitBook automatically. No local build step is required for deployment.

### Secrets

None required for working on this repository.
