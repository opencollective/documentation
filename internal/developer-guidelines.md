# Developer Guidelines

The goal of this page is to document how we are developing Open Collective. What are the good practices, design decisions, architecture, etc.

## Coding Principles

* Everything we do is open source
* We should use Github Issues as much as possible. Anyone, inside or outside the organization, should be able to pick up an issue
* Make pull requests for everything
* We need to make it easy for anyone to install a local copy and contribute code
* Any repo should be able to be installed locally with just a `npm install` and start with `npm start`
* The `README.md` should be kept up to date and should describe how to deploy to the different environments
* "If you break something, it's not your fault". It's important when you develop a new feature or fix something to have confidence that nothing else will break. If tests pass, you shouldn't have to worry. The opposite is also true: "if someone else broke your code, it's your fault". That's why it's important to write tests. Think about it as a way to protect your code and to avoid having to fix it because someone else broke it.
* All scripts should be referenced in `package.json` so that they can be run with `npm run $script`
* We use "[config](https://www.npmjs.com/package/config)" to manage environment variables.
* Production or test environment variables should only be kept on heroku \(you can access them using the command `heroku config --json --app opencollective-staging-app`

## Version control \(GIT\)

* Make clear pull requests with clear commit messages

To avoid unnecessary commits use `git commit --amend` instead of regular `git commit`. If you already pushed, you might have to force push \(`git push origin --force`\), it's usually ok if you're on a feature branch. If you need to rewrite the commit history: `git rebase --interactive HEAD~5`

## Javascript coding rules

* We use ES6 syntax \(arrow functions, `const`, ...\) and eslint. Our rules are defined in the [eslint-config-opencollective repo](https://github.com/opencollective/eslint-config-opencollective).
* We use string interpolation \(``const str = `hello ${var}`;``\)

## Testing and Continuous Integration

* We should thrive to have as much test coverage as possible
* We use cypress.io for end to end tests

