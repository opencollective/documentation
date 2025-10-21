---
description: >-
  When the currency of a Collective and the currency of your payment method
  don't match, Open Collective allows you to choose what currency works best for
  you.
icon: circle-yen
---

# Multi-Currency Expenses

When submitting an invoice or reimbursement, you can choose to submit in the currency of the Collective or the currency of your payment method.&#x20;

#### Supported Currencies

* **Wise**: Collective currency or payout method currency, with the limitation of the[ currencies that are supported by Wise](https://wise.com/help/articles/2897238/which-currencies-can-i-add-keep-and-receive-in-my-wise-account)
* **PayPal**:[ Any currency supported by PayPal](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/)
* **Other**: Any currency accepted by the Fiscal Host. Please contact the host admin if you're unsure about whether it will be accepted.

When making a payment you will receive the full amount in the currency you selected, regardless of fluctuations in currency rates.

**How do we calculate our Exchange Rate?**

* We rely on the payout provider (Wise, PayPal) whenever possible
* Otherwise, we fall back on internal caching and third-party APIs, mostly[ https://fixer.io](https://fixer.io/)
