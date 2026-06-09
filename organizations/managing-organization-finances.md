---
description: >-
  Read on to learn how Open Collective empowers Organizations admins to manage
  incoming and outgoing funds.
icon: sack-dollar
---

# Managing Organization Finances

There are some workflows you need to be familiar with to enable the operations of your Organization. As you are in control of and responsible for the back office admin, it's up to you to process money coming in and out.

## Platform billing

Organizations on the platform subscription model pay a monthly fee based on their plan tier, active collectives, and expense volume. View and manage your subscription from **Dashboard > Settings > Platform Billing**.

The billing page shows your current plan, usage against included limits, and options to upgrade for additional features such as Wise/PayPal payouts, expected funds, or bank account sync.

See [Platform Subscription](platform-subscription.md) and [Pricing](../why-open-collective/pricing.md) for tier details and crowdfunding fee options.

## Receiving Money&#x20;

To enable people to contribute to your Organization, you need to set up ways that they can pay you. Learn more about this in the [Receiving Money](../fiscal-hosts/receiving-money/) section.&#x20;

## Sending Money&#x20;

If you wish to use Open Collective's integrations with payment processors to enable paying expenses in one click, you can connect Wise or PayPal from your Organization Dashboard > Settings > Sending Money. Learn more in our [Paying Expenses with Wise](../fiscal-hosts/expense-payment/paying-expenses-with-wise.md) and [Paying Expenses with PayPal](../fiscal-hosts/expense-payment/paying-expenses-with-paypal.md) guides.

If you do not want to link these services, you can pay expenses by other means outside the platform (e.g. manual bank transfer), and mark them as paid manually on Open Collective. Alternatively, you can utilize the [Vendors](../fiscal-hosts/managing-your-collectives/vendors.md) feature to pay expenses to organizations without Open Collective profiles.

## Payment Requests

Organizations that manage their own finances on Open Collective can review and pay expenses from **Dashboard > Outgoing Money > Payment Requests** (or **Dashboard > Payment Requests** without the sidebar reorganization preview).

This page lists payment requests submitted to your Organization. You can filter by status, amount, payout method, and other criteria, and use tabs to switch between **All**, **Pending**, **Approved**, **Rejected**, and **Paid** requests.

When your Organization has connected Wise or Stripe, a **payment processor overview** appears at the top of the page. For each connected processor, it shows:

* The current balance in your connected account
* A link to add funds on the processor's website
* The total amount of approved expenses ready to pay through that processor
* The total amount of expenses currently batched for batch payment (Wise)

This overview updates automatically when you approve, schedule, pay, or batch expenses, so you can see whether you have enough balance before paying.

If you use Wise and your account requires One-Time Token (OTT) authorization, you can schedule expenses for batch payment and use the **Pay Batch** button from the banner on this page. Learn more in the [batch payment section](../fiscal-hosts/expense-payment/paying-expenses-with-wise.md#batching-and-paying-expenses-using-ott) of our Wise guide.

{% hint style="info" %}
The payment processor overview on Payment Requests is only shown for Organizations that manage their own money on the platform. Collectives hosted by a Fiscal Host use the host's **Pay Disbursements** page instead.
{% endhint %}
