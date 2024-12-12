# Contribution flow

The contribution flow is how users support a collective on Open Collective. The Contribution flow can be directly accessed via this link: e.g. [https://opencollective.com/webpack/donate](https://opencollective.com/webpack/donate)

Replace 'webpack' with your collective slug to generate your own.

## URL parameters

The contribution flow supports many URL parameters to pre-fill the contribution.

Example: [https://opencollective.com/webpack/donate/profile?amount=66.66\&interval=month](https://opencollective.com/webpack/donate/profile?amount=66.66\&interval=month).

This link will bring you directly to the profile step of the contribution flow for webpack, with a monthly contribution of $66.66.

| name                                                                   | type                 | description                                                                                                        | default                         | example                                            |
| ---------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------- | -------------------------------------------------- |
| `amount`                                                               | amount               | Default contribution amount                                                                                        |                                 | `&amount=42.42`                                    |
| `quantity`                                                             | integer              | Default number of units (for products and tickets only)                                                            | 1                               | `&quantity=5`                                      |
| `interval`                                                             | interval             | The contribution interval (must be supported by the selected tier, if any)                                         |                                 | `&interval='month'`                                |
| `paymentMethod`                                                        | string               | ID of the payment method to use. Will fallback to another payment method if not available.                         |                                 |                                                    |
| `contributeAs`                                                         | string               | Slug of the default profile to use to contribute                                                                   | Logged in user personal profile |                                                    |
| `email`                                                                | string               | Guest contributions only: The email to use to contribute                                                           |                                 | `&email=test@opencollective.com`                   |
| `name`                                                                 | string               | Guest contributions only: The name to use to contribute                                                            |                                 | `&name=John Doe`                                   |
| `legalName`                                                            | string               | Guest contributions only: The legal name to use to contribute                                                      |                                 | `&legalName=John Doe`                              |
| `disabledPaymentMethodTypes`                                           | comma-separated list | To disable specific payment method types                                                                           |                                 | `&disabledPaymentMethodTypes=MANUAL,BANK_TRANSFER` |
| `redirect`                                                             | string               | The URL to redirect to after a successful contribution                                                             |                                 | `&redirect=https://www.example.com/thank-you`      |
| `tags`                                                                 | comma-separated list | Some tags to attach to the contribution                                                                            |                                 | `&tags=tag1,tag2`                                  |
| `hideSteps`                                                            | boolean              | To hide the steps on top. Will also hide the "previous" button on step payment                                     |                                 |                                                    |
| `hideFAQ`                                                              | boolean              | Embed only: Whether we need to hide the right-column FAQ                                                           | false                           | `&hideFAQ=true`                                    |
| `hideHeader`                                                           | boolean              | Embed only: Whether we need to hide the contribution flow header                                                   | false                           | `&hideHeader=true`                                 |
| `backgroundColor`                                                      | color                | Embed only: A custom color to use as the background color of the contribution flow                                 |                                 | `&backgroundColor=#ff0000`                         |
| `useTheme`                                                             | boolean              | Embed only: Whether to use the collective theme (custom colors)                                                    | false                           | `&useTheme=true`                                   |
| `shouldRedirectParent`                                                 | boolean              | Embed only: Whether to redirect the parent of the iframe rather than the iframe itself. The `iframe` needs to have |                                 |                                                    |
| its `sandbox` property set to `allow-top-navigation` for this to work. |                      |                                                                                                                    |                                 |                                                    |
| `totalAmount`                                                          | alias                | Deprecated: Use `amount` instead                                                                                   |                                 | `&totalAmount=4200`                                |
| `defaultEmail`                                                         | alias                | Deprecated: Use `email` instead                                                                                    |                                 |                                                    |
| `defaultName`                                                          | alias                | Deprecated: Use `name` instead                                                                                     |                                 |                                                    |

## Embed Contribution flow

To integrate a "Contribute" option directly on your website

The embed contribution flow is a way to integrate Open Collective on your own website. Visitors will be able to contribute directly, by simply providing an email address.

![Embedded contribution on the website of an initiative](<../.gitbook/assets/image (39).png>)

### General considerations

* The widget will look better if it has some space, ideally the full page height & width
* Some parameters can be used to customize the UI. See [URL Parameters](contribution-flow.md#url-parameters) above

### Embed the default tier (Donate)

The simplest way to embed the contribution flow is by using the `/donate` URL (e.g. [https://opencollective.com/babel/donate](https://opencollective.com/babel/donate)). Just replace `COLLECTIVE_SLUG` by your collective slug below:

```markup
<iframe src="https://opencollective.com/embed/COLLECTIVE_SLUG/donate" style="width: 100%; min-height: 100vh;"></iframe>
```

### Embed a specific tier

To embed a specific tier, you'll need to know its ID. For that, go to your profile page, click on "Contribute" for the tier you want to embed then check the URL. It should look like `https://opencollective.com/COLLECTIVE_SLUG/contribute/TIER_SLUG-TIER_ID/checkout`

From this URL, you can deduct the embedded one (prefix with `embed` and removes `/checkout`):

```markup
<iframe src="https://opencollective.com/embed/COLLECTIVE_SLUG/contribute/TIER_SLUG-TIER_ID" style="width: 100%; min-height: 100vh;"></iframe>
```

### Embed an event ticket

Embedding for event tickets uses the same route as regular tiers. you must make sure to remove the parent collective path and to include a slug. The slug can be anything, so if you're not sure feel free to put any value in there. For example, this path:

> [https://opencollective.com/mautic/events/mautic-conference-europe-4da0de72/order/32898](https://opencollective.com/mautic/events/mautic-conference-europe-4da0de72/order/32898)

can be embedded as:

> [https://opencollective.com/embed/mautic-conference-europe-4da0de72/contribute/general-access-ticket-32898](https://opencollective.com/embed/mautic-conference-europe-4da0de72/contribute/general-access-ticket-32898.)
