---
description: >-
  OAuth lets you create applications that can access Open Collective's API to
  read information and trigger changes on the platform.
icon: server
---

# OAuth

OpenCollective implements the standard OAuth 2.0 [Authorization Code Grant Flow](https://oauth.net/2/grant-types/authorization-code/). Additionally, we support [PKCE](https://oauth.net/2/pkce/) for the Authorization Code Grant Flow, which is recommended to prevent theft of the authorization code by intermediaries, malicious scripts, or browser extensions.

### Creating an OAuth app



1. Go to `https://opencollective.com/{account}/admin/for-developers` (replace `{account}` by the slug of the account you want to use as the owner of the app)
2. Click on `+ Create OAuth app` and fill in the required information\

3. On the success page, copy the client ID and secret for later use



### Authorizing OAuth apps



Open Collective's OAuth implementation supports the standard [authorization code grant type](https://tools.ietf.org/html/rfc6749#section-4.1).

The web application flow to authorize users for your app is:

1. Users are redirected to request their Open Collective identity
2. Users are redirected back to your site by Open Collective with special code shared in the URL
3. You exchange the received code for an OAuth token

#### 1. Request a user's Open Collective identity



> GET [https://opencollective.com/oauth/authorize](https://opencollective.com/oauth/authorize)

**Parameters**



<table><thead><tr><th width="150">Name</th><th width="150">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>client_id</code></td><td>string</td><td><strong>Required.</strong> The client ID you copied after <a href="https://github.com/opencollective/documentation-old/blob/v2/developers/oauth.md#creating-an-oauth-app">creating your app</a>.</td></tr><tr><td><code>response_type</code></td><td>string</td><td><strong>Required.</strong> Only supported value for now is <code>code</code></td></tr><tr><td><code>redirect_uri</code></td><td>string</td><td>The URL in your application where users will be sent after authorization. If left out, Open Collective will redirect users to the callback URL configured in the OAuth Application settings. If provided, the redirect URL's host and port must exactly match the callback URL.</td></tr><tr><td><code>scope</code></td><td>string</td><td>A comma (legacy) or space separated list of scopes. If not provided, <code>scope</code> defaults to an empty list. See <a href="https://github.com/opencollective/documentation-old/blob/v2/developers/oauth.md#scopes-for-oauth-apps">scopes below</a>.</td></tr><tr><td><code>state</code></td><td>string</td><td>Use it to pass some state back to your application after redirecting and to protect against cross-site request forgery attacks (CSRF) by including an unguessable random string.</td></tr><tr><td><code>code_challenge</code></td><td>string</td><td>The code challenge value when using PKCE.</td></tr><tr><td><code>code_challenge_method</code></td><td>string</td><td>The code challenge method when using PKCE. The only valid value is <code>S256</code>.</td></tr></tbody></table>

#### 2. Users are redirected back to your site



After users accept your request, they're redirected back to your site with a temporary `code` passed as an URL query parameter as well as the `state` you provided in the previous step. The temporary code will expire after 5 minutes. If the states don't match, then a third party created the request, and you should abort the process.

Otherwise, you can exchange the `code` you received as a parameter for an access token:

> POST [https://opencollective.com/oauth/token](https://opencollective.com/oauth/token)

**Parameters**



<table><thead><tr><th width="150">Parameter</th><th width="150">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>grant_type</code></td><td>string</td><td><strong>Required.</strong> The only supported value for now is <code>authorization_code</code></td></tr><tr><td><code>client_id</code></td><td>string</td><td><strong>Required.</strong> The client ID of your OAuth application (from <a href="https://github.com/opencollective/documentation-old/blob/v2/developers/oauth.md#creating-an-oauth-app">Creating an OAuth App</a>)</td></tr><tr><td><code>client_secret</code></td><td>string</td><td><strong>Required.</strong> The client secret of you OAuth application (from <a href="https://github.com/opencollective/documentation-old/blob/v2/developers/oauth.md#creating-an-oauth-app">Creating an OAuth App</a>)</td></tr><tr><td><code>code</code></td><td>string</td><td><strong>Required.</strong> The code you received as a response to <a href="https://github.com/opencollective/documentation-old/blob/v2/developers/oauth.md#1.-request-a-users-open-collective-identity">Step 1</a>, after the redirect)</td></tr><tr><td><code>redirect_uri</code></td><td>string</td><td><strong>Required.</strong> The URL in your application where users are sent after authorization.</td></tr><tr><td><code>code_verifier</code></td><td>string</td><td>The code verifier when using PKCE.</td></tr></tbody></table>

**Response**



If the request succeeds, you'll receive an HTTP 200 response code with a JSON payload like:

```
{
  "access_token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "token_type": "bearer",
  "expires_in": 7776000
}
```

This `access_token` is what you want to use to access the API. The `expires_in` property is the number of seconds for which the access token is valid for, currently this is always 90 days from the creation of the access token.

#### 3. Use the access token to access the API



The access token allows you to make requests to the API on a behalf of a user on our public GraphQL API.

```
Authorization: Bearer {ACCESS_TOKEN}
GET https://opencollective.com/oauth/token
```

For example, in curl you can set the Authorization header like this:

```
curl 'https://opencollective.com/api/graphql/v2' \
  -H 'authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/json' \
  -d '{"query": "{ me { id name email } }"}'
```

### Scopes for OAuth apps



Scopes let you specify exactly what type of access you need. Scopes _limit_ access for OAuth tokens. They do not grant any additional permission beyond that which the user already has.

When setting up an OAuth App on Open Collective, requested scopes are displayed to the user on the authorization form.

#### Available scopes



* `email`: Access your email address.
* `incognito`: Access your incognito account.
* `account`: Manage your account, collectives and organizations.
* `expenses`: Create and manage expenses, payout methods.
* `orders`: Create and manage contributions, payment methods.
* `transactions`: Refund and reject recorded transactions.
* `virtualCards`: Create and manage virtual cards.
* `updates`: Create and manage updates.
* `conversations`: Create and manage conversations.
* `webhooks`: Create and manage webhooks
* `host`: Administrate fiscal host
