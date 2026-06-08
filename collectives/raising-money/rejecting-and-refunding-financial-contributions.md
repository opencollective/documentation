---
description: >-
  Using our moderation features, you can reject and refund donations or block
  certain people or groups from contributing to your Collective.
icon: coins
---

# Rejecting and Refunding  Financial Contributions

Our moderation features give you control over who is able to donate to your Collective.

You can refund mistaken contributions, reject unwanted donations, cancel recurring contributions, and block contributions from selected accounts or groups.

You can reject financial contributions for any reason, but if you want to clarify the types of donations you will not accept, you can outline your terms in your Contribution Policy.

Navigate to your Collective's Dashboard > Settings > Policies.

{% hint style="info" %}
If enabled by the Fiscal Host, Collective admins can reject and/or refund financial contributions for up to 30 days after they are made. Fiscal Host admins can refund contributions indefinitely. We recommend Fiscal Hosts have their own refund policy. See [Fiscal Host Policies](../../fiscal-hosts/setting-up-a-fiscal-host/fiscal-host-policies.md).
{% endhint %}

## Refund vs reject vs cancel

These actions serve different purposes:

| Action | What it does | When to use it |
| ------ | ------------ | -------------- |
| **Refund** | Returns money to the contributor. Optionally cancels future recurring charges and/or removes the contributor from your profile. | A mistaken or duplicate charge, or when you need to return funds without treating the contributor as banned. |
| **Reject** | Refunds the charge, cancels recurring contributions, removes the contributor from your Collective, and marks the contribution as rejected. | You do not want this person or group associated with your Collective. |
| **Cancel contribution** | Stops future recurring charges only. Does not refund past charges. | A contributor wants to stop giving, or you need to end a subscription without refunding history. |

{% hint style="warning" %}
If you only need to refund a mistaken transaction, use **Refund** rather than **Reject**. The reject flow always removes the contributor from your Collective.
{% endhint %}

## Refunding a contribution

1. Navigate to your Collective's Dashboard > Ledger > Transactions (or **Transactions** if your account does not show a Ledger group).
2. Find the contribution.
3. Click **Refund**.
4. Review the refund allocation (amount returned to the contributor, amounts deducted from the collective, host, and platform).
5. Optionally enable:
   * **Cancel recurring contribution** - stops future charges (enabled by default when available)
   * **Remove contributor from Collective** - hides them from your public profile and exports while keeping the ledger entry
   * **Send custom message to contributor**
6. Confirm the refund.

If the collective balance is insufficient to cover the refund, host admins may see an **Allow negative balance** option to process the refund anyway.

## Rejecting a contribution

Rejecting a contribution:

* Refunds the financial contributor
* Cancels any future recurring contribution
* Removes their membership from your Collective so they are not listed as a sponsor
* Displays the contribution as rejected

To reject a contribution:

1. Navigate to your Collective's Dashboard > Ledger > Transactions (or **Transactions**).
2. Find the contribution.
3. Click **Reject**.
4. Optionally add a message explaining your decision.
5. Confirm.

## Canceling a recurring contribution (without refunding)

Hosts and contributors can cancel recurring contributions without refunding past charges.

**As a fiscal host admin:**

1. Navigate to Fiscal Host Dashboard > Incoming Money > Incoming Contributions.
2. Open the contribution or use the row actions menu.
3. Click **Cancel contribution**.
4. Optionally remove the contributor from the collective profile or send them a custom message.
5. Confirm.

**As a contributor:**

1. Navigate to your Dashboard > Outgoing Contributions (or **Contributions** without the sidebar reorg preview).
2. Find the recurring contribution and cancel it.

See [Making a Recurring Contribution](../../giving-to-collectives/making-a-recurring-contribution.md) for contributor-side steps.

Fiscal host admins should see [Processing Refunds](../../fiscal-hosts/processing-refunds.md) for host-level refund details.

### Rejecting categories of financial contributor

You may choose to prohibit certain types of group from contributing to your Collective.

We offer the option to block the following groups:

* Adult websites
* Casino/gambling websites
* SEO services
* VPN/proxy services
* Essay writing services
* Affiliate/review services

If you wish to block one or more of these, navigate to your Collective's Dashboard > Settings > Policies and find the drop-down under "Rejected Categories".

Once you have made your selection, any account that has been tagged by the Open Collective team as belonging to one of these categories will not be able to contribute to your Collective.

They will be notified that they are blocked from contributing when they navigate to your "Contribute To..." page.

If you would like to let potential contributors to your Collective know upfront what your contribution policy is, and what kinds of contributions you may not accept, you can also do this in the Policies section of the Collective menu. This will be displayed in the contribution flow as well.

{% hint style="warning" %}
It is against Open Collective's community guidelines and moderation policy for a contributor to create a new account to get around the category filter. If this happens, [please report it to us](https://opencollective.com/contact).
{% endhint %}
