---
description: >-
  If you want to create a link to a specific part of your Open Collective
  fundraising page on your website, you can amend your URL with the following
  options.
icon: hands-holding-dollar
---

# Creating Custom Fundraising URLs

{% hint style="info" %}
Your Contribution flow can be directly accessed via this link: [https://opencollective.com/YOURCOLLECTIVE/donate](https://opencollective.com/YOURCOLLECTIVE/donate).&#x20;

Replace `YOURCOLLECTIVE` with your collective’s slug.
{% endhint %}

You may decide you wish to preset the contribution module on your fundraising page, rather than just sending your contributors to the page itself.

In these cases, you can customize your URL to do a number of things, including:

* Setting a specific default amount for contributions
* Disabling certain payment types
* Creating a custom background color or frame
* Setting who the contribution is from&#x20;

For example, if you run the Webpack collective, and want to link users directly to the donation page, with a default monthly donation of $3.33, you can do so by adjusting the URL:

[https://opencollective.com/webpack/donate/profile?interval=month\&amount=3.33\&contributeAs=me](https://opencollective.com/webpack/donate/profile?interval=month\&amount=66.66\&contributeAs=me)\
\
If you wish to customize this, replace “webpack” with the designated handle of your Collective, and change the amount to the total you wish.

\
You can find the full list of variables below:

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
| cryptoCurrency                                                         | float                | Embed only: Whether we need to hide the right-column FAW                                                           |                                 |                                                    |
| cryptoAmount                                                           | boolean              | Embed only: Whether we need to hide the contribution flow header                                                   |                                 |                                                    |
| `hideFAQ`                                                              | boolean              | Embed only: Whether we need to hide the right-column FAQ                                                           | false                           | `&hideFAQ=true`                                    |
| `hideHeader`                                                           | boolean              | Embed only: Whether we need to hide the contribution flow header                                                   | false                           | `&hideHeader=true`                                 |
| `backgroundColor`                                                      | color                | Embed only: A custom color to use as the background color of the contribution flow                                 |                                 | `&backgroundColor=#ff0000`                         |
| `useTheme`                                                             | boolean              | Embed only: Whether to use the collective theme (custom colors)                                                    | false                           | `&useTheme=true`                                   |
| `shouldRedirectParent`                                                 | boolean              | Embed only: Whether to redirect the parent of the iframe rather than the iframe itself. The `iframe` needs to have |                                 |                                                    |
| its `sandbox` property set to `allow-top-navigation` for this to work. |                      |                                                                                                                    |                                 |                                                    |
