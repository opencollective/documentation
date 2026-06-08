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

## Set refund policy

All Fiscal Hosts are encouraged to have a public refund policy. You can add a refund policy by:

* Navigating to your Fiscal Host's Dashboard > Settings > Policies
* Adding your Refund Policy or a link to it under Contributions or Expenses Policy sections.

## Refund a donation

1. Go to your Fiscal Host Dashboard > Ledger > Transactions.
2. Find the contribution you want to refund.
3. Click **Refund** on the transaction row.
4. Review the **Refund contribution charge** modal:
   * **Contribution detail** - contributor, destination account, amount, and date
   * **Refund allocation** - how the refund is split between the contributor, collective balance, host balance, platform fees, payment processor fees, platform tips, and tax
5. If the collective balance is insufficient, you may need to check **Allow negative balance** to proceed. The collective balance will go negative until additional contributions are received.
6. Optionally:
   * **Cancel recurring contribution** - stops future charges (on by default when available)
   * **Remove contributor from Collective** - hides them from the public profile
   * **Send custom message to contributor**
7. Confirm the refund.

Stripe and PayPal contribution charges open the full refund modal with allocation details. Other payment methods may show a simpler confirmation dialog.

{% hint style="info" %}
For contributions made using Stripe, funds are automatically returned to the contributor. For other payment methods, we recommend [inviting the user to submit an expense](../collectives/spending-money/inviting-a-third-party-to-submit-an-expense.md).
{% endhint %}

## Cancel recurring without refunding

To stop future charges without refunding past payments:

1. Navigate to Fiscal Host Dashboard > Incoming Money > Incoming Contributions.
2. Open the contribution and click **Cancel contribution**.
3. Optionally remove the contributor from the collective profile or send a custom message.

## Reject vs refund

Use **Reject** only when you want to remove a contributor from a collective entirely. Reject refunds the charge, cancels recurring contributions, and marks the contribution as rejected.

If you only need to correct a mistaken charge, use **Refund** instead. See [Rejecting and Refunding Financial Contributions](../collectives/raising-money/rejecting-and-refunding-financial-contributions.md).

The process for refunding contributions differs slightly depending on the original payment method. Stripe refunds process automatically after you confirm. Manual payment methods may require additional steps.
