---
description: >-
  Describes what we expect from new code. Also includes special tips to help you
  getting started!
---

# Best Practice Guidelines

## General rules

* When adding new dependencies, we use [fixed versions](https://docs.npmjs.com/about-semantic-versioning).
* Don't commit `package-lock.json` if you're not making any changes to the libraries.
* If the issue you're working on requires changes in both API and Frontend, give your Git branches the same name. CI will automatically pull the correct API's branch when testing the Frontend.
* We **love** screenshots - or better: screencasts. Include some in your pull requests to demonstrate your changes and you will have our eternal gratitude.

## Frontend rules

* I18n
  * The strings must be internationalized. See [/help/developers/translations](https://docs.opencollective.com/help/developers/translations).
  * Update the language files `npm run build:langs` and commit them to reflect the changes.
* Libraries
  * Whenever it's possible, we must use `styled-components` to write styles. See[ OC Styleguide.](https://styleguide.opencollective.com/)
  * We're getting rid of `material-ui`. Please don't use it for new development.
  * Icons must be imported from the [styled-icons](http://styled-icons.js.org/) library.
* Testing
  * Tests written with Cypress must follow our [good practices](https://docs.opencollective.com/help/developers/testing-with-cypress) conventions.

