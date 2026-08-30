---
description: >-
  To ensure that the ledger remains accurate, Fiscal Host admins are able to
  process refunds through Open Collective.
icon: coins
---

# Processing Refunds

Collective admins are able to approve refunds for up to 30 days from the date the donation was made, as long as the payment provider supports the transaction.

After that point, donations can only be refunded by Fiscal Host admins.

{% hint style="warning" %}
Open Collective has a platform wide [Refund Policy](../giving-to-collectives/requesting-refunds/refund-policy.md). Fiscal Host admins should familiarize themselves with this policy before they develop their own.
{% endhint %}

#### Set Refund Policy:

All Fiscal Hosts are encouraged to have a public refund policy. You can add a refund policy by:

* Navigating to your Fiscal Host's Dashboard > Settings > Policies
* Adding your Refund Policy or a link to it under Contributions or Expenses Policy sections.

#### Refund a Donation

1. Go to your Fiscal Host **Dashboard > Transactions**.
2. Find the contribution you want to refund and open its details.
3. Click **Refund** and confirm the operation.

The refund flow depends on how the contribution was originally paid.

### Stripe and PayPal contributions

For contributions processed through Stripe or PayPal, the platform refunds the contributor automatically after you confirm. Funds are returned through the original payment method.

You can optionally:

* Cancel any linked recurring contribution
* Remove the contributor from the Collective's sponsor list
* Send the contributor a message explaining the refund

### Manual contributions and added funds

For contributions that were not processed through a payment provider — including [manual bank transfers](../giving-to-collectives/payment-methods.md), [added funds](receiving-money/adding-funds-manually.md), and other off-platform payments — the refund dialog is titled **Mark contribution as refunded**.

These refunds only reverse the transaction in Open Collective's ledger. **No money is moved by the platform.** You must return funds to the contributor outside Open Collective (for example, via bank transfer).

Before completing the refund, you must confirm:

> I confirm that the refund has been or will be performed manually off-platform. This action only reverses the transaction in the ledger; no money will be moved by the platform.

{% hint style="warning" %}
Only Fiscal Host admins can refund manual contributions and added funds. Collective admins should contact their Fiscal Host to process these refunds.
{% endhint %}

{% hint style="info" %}
For contributions that were made using a Stripe enabled payment method, the funds should automatically be returned to the contributor. For other payment methods where you cannot reverse the payment on-platform, we recommend [inviting the user to submit an expense](../collectives/spending-money/inviting-a-third-party-to-submit-an-expense.md).
{% endhint %}
