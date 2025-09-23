---
icon: ticket
---

# Personel Tokens

Personal tokens are used to authenticate with the Open Collective API. They are not tied to a specific application and can be used for various purposes, such as automating tasks or integrating with other services. To use a personal token, you can pass it as a `Personal-Token` HTTP header or as a `personalToken` query parameter in the URL.

If your goal is to have other users authenticating with your app/script, you should look into [OAuth](https://docs.opencollective.com/help/developers/oauth) rather than personal tokens.

**Creating Personal Tokens**

To create a personal token, follow these steps:

1. Go to your Open Collective account workspace.
2. Navigate to the "For developers" section.
3. Click on the "Create Personal Token" button.
4. Enter a name for your personal token and select the scopes you want it to have.
5. Optionally tick the checkbox for "Advanced privileges" if you want your token to be able to call queries and mutations that require 2FA (see ).
6. Optionally set an expiration date.
7. Click on the "Create token" button.

Everything you set here can be later changed from the token settings page.

**Using Personal Tokens**

Once you have created a personal token, you can use it to authenticate with the Open Collective API. To do this, you can pass the token as a Personal-Token HTTP header or as a `personalToken` query parameter in the URL. For example, the following URL would use the personal token "my-token" to make a GET request to the /graphql endpoint:

```
https://api.opencollective.com/graphql/v2?personalToken=my-token
```

**Scopes**

Personal tokens support the same scopes as OAuth apps. Scopes determine what actions a personal token can perform. You can find a complete list of scopes in the[ OAuth documentation](https://docs.opencollective.com/help/developers/oauth).

**Advanced privileges**

The "Allow this token to directly use operations that would normally require 2FA" checkbox allows you to grant your personal token the ability to perform certain actions that would normally require two-factor authentication (2FA). This can be useful for automating tasks that require access to sensitive data, such as processing expenses. However, it is important to note that granting this privilege increases the security risk if your personal token is compromised.

**Use cases for personal tokens**

Personal tokens can be used for a variety of purposes, including:

* Automating tasks such as creating expenses, managing memberships, or issuing payouts.
* Integrating with other services such as accounting software or project management tools.
* Developing custom tools and integrations for Open Collective.
