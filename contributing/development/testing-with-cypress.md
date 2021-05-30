---
description: >-
  We use Cypress for our end-to-end tests. This page references our custom
  commands and the best practices that we try to follow.
---

# Testing with Cypress

## Best practices

We should try to stick with [https://docs.cypress.io/guides/references/best-practices.html](https://docs.cypress.io/guides/references/best-practices.html) as much as possible. In short, we should currently enforce:

### Use data-cy to target DOM elements

> Don’t target elements based on CSS attributes such as: id, class, tag Add data-\* attributes to make it easy to target elements

### Tests independence

Tests should not rely on each others results and should be repeatable \(we must be able to run it multiple times consecutively\). You can use commands like `cy.signup()` to ensure that you start from a fresh context.

## Custom commands

To improve the testing experience and the readability of our tests, we have defined a set of custom commands in `cypress/support/commands.js`.

### Login, signup and seeding

Both the `cy.login` and `cy.signup` commands accept a redirect parameter. You can use it to be redirected to a specific page as soon as the command succeed.

{% hint style="info" %}
**`cy.login({email, redirect} = params)`**
{% endhint %}

Login with an existing account. If not provided in `params`, the email used for authentication will be `testuser+admin@opencollective.com`.

Note that addresses formatted like `test*@opencollective.com` are a special case that let you login directly without the need to confirm your email. You can use the `randomEmail` helper to generate these.

{% hint style="info" %}
**`cy.signup({user, redirect} = params)`**
{% endhint %}

Create an account and login with it. If no params is provided, the account will be created with a random email.

{% hint style="info" %}
**`cy.createCollective({ type` = 'ORGANIZATION'`, email =`defaultTestUserEmai**l**`})`**
{% endhint %}

Helper to quickly create a collective that use designated by `email` will be an admin of.

{% hint style="info" %}
**`cy.addCreditCardToCollective({ collectiveSlug })`**
{% endhint %}

Adds a default test credit card to the collective referenced by `collectiveSlug`

### Forms

{% hint style="info" %}
**`cy.fillStripeInput(container, cardParams)`**
{% endhint %}

Fills a stripe input.

* `container` \(optional\) the DOM that contains the input
* `cardParams` \(optional\) the credit card info. Defaults to a valid card. Keys:
  * `creditCardNumber`
  * `expirationDate`
  * `cvcCode`
  * `postalCode`

### Emails

{% hint style="info" %}
**`cy.openEmail(filterFunc)`**
{% endhint %}

This function is used to open an email in Cypress. If the command succeed, a page with the email is loaded and you'll be able to run all the usual cypress commands \(`cy.get`, `cy.contains`...\) to test it.

* `fiterFunc` is a function used to filter the list of emails. As soon as it returns `true`, command will start to open the email. For a complete list of the fields you can use to filter the emails, see [https://github.com/djfarrelly/MailDev/blob/master/docs/rest.md](https://github.com/djfarrelly/MailDev/blob/master/docs/rest.md) 

**Examples**

```javascript
// Will open the first email with where subject contains "Hello World"
cy.openEmail(({ subject }) => subject.includes('Hello World'));

// Will open the first email sent to `test@email.com`
cy.openEmail(({ to }) => to[0].address === 'test@email.com' );
```

{% hint style="info" %}
**`cy.getInbox()`**
{% endhint %}

Return the full inbox as a list of [email objects](https://github.com/djfarrelly/MailDev/blob/master/docs/rest.md#example-email-response). `cy.openEmail` should be privileged, but this one can be useful if you need to do more advanced verification like counting the number of emails or who the email was sent to.

```javascript
> cy.getInbox()
[{
  "id":"XwgKAxto",
  "time":"2014-10-05T19:02:09.156Z",
  "from":[{
    "address":"angelo.pappas@fbi.gov",
    "name":"Angelo Pappas"
  }],
  "to":[{
    "address":"johnny.utah@fbi.gov",
    "name":"Johnny Utah"
  }],
  "subject":"The ex-presidents are surfers",
  "text":"The wax at the bank was surfer wax!!!",
  "html":"<!DOCTYPE html><html><head></head><body><p>The wax at the bank was surfer wax!!!</p></body></html>",
  "headers":{
    "content-type":"multipart/mixed; boundary=\"---sinikael-?=_1-14125357291310.1947895612102002\"",
    "from":"Angelo Pappas <angelo.pappas@fbi.gov>",
    "to":"Johnny Utah <johnny.utah@fbi.gov>",
    "subject":"The ex-presidents are surfers",
    "x-some-header":"1000",
    "x-mailer":"nodemailer (1.3.0; +http://www.nodemailer.com; SMTP/0.1.13[client:1.0.0])",
    "date":"Sun, 05 Oct 2014 19:02:09 +0000",
    "message-id":"<1412535729142-cc4cb0f1-41b96073-6ac4bee1@fbi.gov>",
    "mime-version":"1.0"
  },
  "messageId":"1412535729142-cc4cb0f1-41b96073-6ac4bee1@fbi.gov",
  "priority":"normal",
  "attachments":[{
    "contentType":"text/plain",
    "contentDisposition":"attachment",
    "fileName":"attachment-1.txt",
    "generatedFileName":"attachment-1.txt",
    "contentId":"0958713110a99ea2afc3b117c9d5feb3@mailparser",
    "stream":{
      "domain":null,
      "_events":{},
      "_maxListeners":10,
      "writable":true,
      "checksum":{"_binding":{}},
      "length":0,
      "charset":"UTF-8",
      "current":""
    },
    "checksum":"d41d8cd98f00b204e9800998ecf8427e"
  }],
  "envelope":{
    "from":"angelo.pappas@fbi.gov",
    "to":["johnny.utah@fbi.gov"],
    "host":"djf-3.local",
    "remoteAddress":"127.0.0.1"
  }
}]
```

{% hint style="info" %}
**`cy.clearInbox()`**
{% endhint %}

Clears the inbox. It is a good practice to run it in `before` to ensure that your test cannot be influenced by the emails sent in previous tests.

