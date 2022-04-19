## Project Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Steps for local setup

create a new `.env.development.local` file inside `/path-to-project/frontend`

```
REACT_APP_ENERLLY_BASE_API_URL=http://localhost:8000/
REACT_APP_SENTRY_DNS=''
ESLINT_NO_DEV_ERRORS=true
GENERATE_SOURCEMAP=false
REACT_APP_HOTJAR_ID=''
REACT_APP_TAWK_LINK=''
REACT_APP_NEWRELIC_ACCOUNT_ID = ''
REACT_APP_NEWRELIC_IDENTIFIER = ''
```

Use local system for frontend development, if you want you can use docker by uncommenting the frontend section `docker-compose.yaml` file. But it is observed to be slower for local development.

#### Run the following codes:

```
yarn,
yarn start
```

#### Run local E2E test using jest pupperteer

You need to have your backend server and frontend server running before running the E2E test.

```
yarn run e2e
```

NOTE: We have headless browser turned off. To turn it on go to `jest-puppeteer.config.js`, make `headless: false` and `devtools: true` to work better and faster which writing tests.

**PS - Make sure you don't push your local `jest-puppeteer.config.js`, else tests will fail**
