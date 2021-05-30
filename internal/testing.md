# Testing

Tests are intended to be run either on development machines \(`NODE_ENV=development`\) or on a test server such as circleci \(`NODE_ENV=circleci`\). This documentation concentrates on the development testing experience.

## Setup

We use [Mocha](https://mochajs.org/) for unit-testing and [Cypress](https://www.cypress.io/) for end-to-end \(e2e\) testing. 
More details on setting up your local machine for tests can be found at, [https://github.com/opencollective/opencollective-frontend/blob/main/docs/e2e.md](https://github.com/opencollective/opencollective-frontend/blob/main/docs/e2e.md).

### Database

Create an `opencollective_test` database accessible to user `opencollective`.

```text
$> createdb opencollective_test
$> psql opencollective_test -c "GRANT ALL PRIVILEGES ON DATABASE opencollective_test to opencollective"
```

### Code

Check out `api`, `website` and `app` Git repositories, preserving their original directory names.

```text
$> git clone https://github.com/OpenCollective/api.git
$> git clone https://github.com/OpenCollective/website.git
$> git clone https://github.com/OpenCollective/app.git
```

### Environment

Create `.env` files in your `api`, `website` and `app` checkouts:

**`api/.env` file**

```text
NODE_ENV=development
WEBSITE_DIR=/path/to/your/opencollective/website
APP_DIR=/path/to/your/opencollective/app
```

**`website/.env` and `app/.env` files**

```text
NODE_ENV=development
API_DIR=/path/to/your/opencollective/api
GITHUB_CLIENT_ID=xxxx [replace with your Github app id]
GITHUB_CLIENT_SECRET=xxx [replace with your Github app client secret]
```

## Test

* run unit- and e2e-tests: `npm test`
* run unit-tests: `npm run test:unit`
* run e2e-tests: `npm run test:e2e`
* run single unit-test: instrument test `describe` or `it` with `.only` flag
* run single e2e-test file: `npm run test:e2e path/to/e2e/test.js`, e.g from API directory: `npm run test:e2e ../website/test/e2e/public_donation_page.js`. The script will detect whether it is a `website` or `api` test file and launch the client and its nightwatch test accordingly.

### How to debug an e2e test that failed?

* Run the API:

  `$opencollective-api> PG_DATABASE=opencollective_test npm run dev`

* Reset the database:

  `$> curl http://localhost:3060/database/reset`

* Run the website

  `$opencollective-website> npm run dev`

* Open your browser at the URL of the test that is failing, e.g.

  `open http://localhost:3000/testcollective`

If you want to rerun a particular e2e test file, you can run `npm run nightwatch $file` \(e.g. `npm run nightwatch test/e2e/expenses_page.js`\)

### How to debug when GitHub is challenging the oAuth process?

* Run the api with the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` env variables \(you can find them [here](https://github.com/organizations/OpenCollective/settings/applications/346712)\).
* Run the website, go to [http://localhost:3000/opensource/apply](http://localhost:3000/opensource/apply) and go through the flow. Use the login `opencollectivetest` and the password that is stored in 1Password.

