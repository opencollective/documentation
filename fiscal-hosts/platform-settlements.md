---
description: >-
  Sometimes Fiscal Hosts need to pay Open Collective a share of tips and host
  fees. Read on to learn about how Open Collective handles the settlement
  process.
icon: hand-holding-circle-dollar
---

# Platform Settlements

{% hint style="success" %}
The settlement process is only triggered after the cumulative amount of money owed passes $10.&#x20;

For example, if in January your Fiscal Host owes $5 and in February your collective owes $6, the settlement created at the start of March (covering February) will be for $11.
{% endhint %}

A special type of expense is created when you owe Open Collective money from Platform Tips or Host Fees.&#x20;

**Platform Tips** are an optional fee that contributors can add on top of contributions to support the Open Collective platform. If a tip is made with a bank transfer transaction, the money, including the tip, will arrive in your bank account.&#x20;

{% hint style="info" %}
When a payment with a tip goes through Stripe, the tip is automatically diverted to Open Collective, and you don't need to do anything.
{% endhint %}

**Host Fee Share** (shown as "Platform Share" on the expense) is the 15% a Fiscal Host on legacy pricing pays to Open Collective when they charge their hosted Collectives a [Host Fee](setting-up-a-fiscal-host/setting-your-fiscal-host-fees.md). Fiscal Hosts on a [platform subscription](../organizations/platform-subscription.md) don't pay a Host Fee Share.&#x20;

Every month, the total amount of money owed from platform tips sent to the Fiscal Host through manual bank transfers and host fee share is calculated and submitted to the Fiscal Host as an expense. We refer to this total figure as the **Platform Settlement**. Platform Tips and Host Fee Share are billed in separate settlement expenses, so you may receive more than one in the same month.

Platform Settlement Expenses will automatically appear once per month if any tips or host fee shares are due to be transferred to Open Collective. You can proceed to approve and pay it like any other expense including via card using Stripe.

### Which payout method is used

Platform settlements and platform subscription bills share the same payout method selection:

* **Last used method is remembered.** New settlements and bills use the payout method of your last paid platform expense of either kind (settlement or platform bill), so switching the method on one carries over to the next one. Bills or settlements paid manually to the bank account count too. Expenses paid with "other" are ignored, so the automated methods are tried again.
* **Large amounts don't default to Stripe.** Settlements and platform bills above $1,000 USD do not default to Stripe (card) payment. They default to the bank account instead (or PayPal / other when applicable). For settlements, the limit applies to the combined amount owed.
* **Changing the payout method keeps the status.** Switching the payout method on a settlement or platform bill no longer sends it back to **Pending**, so it can still be paid without being approved again. Changing the amount, items or currency still resets the status.

### Where to see platform tip activity

Tips collected on your behalf are tracked on an internal Platform Tips account. These internal billing flows are hidden from the default Budget and Transactions sections on your Fiscal Host's public profile page, so visitors see your activity with hosted collectives rather than platform settlements.

To review platform tip and application fee transactions, open **Dashboard > Ledger > Transactions** and filter by **Kind**. See [Viewing Transactions](../advanced/ledger/viewing-transactions.md#public-profile-vs.-dashboard) for details.
