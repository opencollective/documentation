---
description: >-
  Open Collective is built around a ledger that records all of the financial
  activity on the platform. Read on to learn more about how our ledger works.
icon: memo-circle-check
---

# Understanding the Ledger

## Introduction

At the heart of Open Collective is a ledger that records all the financial activities that take place on the platform. The ledger is our source of truth. It is the foundation that makes possible crowdfunding contributions, added funds, grants and expenses. All these financial interactions generate transactions that are recorded in the ledger.&#x20;

Most users interact with the ledger indirectly by making contributions and submitting expenses, and for most users, that is enough. However, as the platform has grown, larger organizations who rely on the platform, primarily fiscal hosts and medium-to-large collectives, need to use information from the platform for accounting purposes. In response to these needs, we are making the ledger itself more visible, accessible, and legible to users.

{% hint style="warning" %}
#### The ledger does not always provide a complete financial picture for entities (such as fiscal hosts or independent collectives) that manage funds off-platform.

If you are a fiscal host or an independent collective that uses banking and financial services (some of which may be connected to the platform) then you likely have financial activities that do not originate on the platform and will NOT be reflected unless you intentionally add them to the platform.

For example: if you make a payment directly from your bank account, that payment will not show up on the platform unless you manually add it to the platform.
{% endhint %}

### Immutability

The transparency at Open Collective relies on the ledger to be a trustworthy source of information. Therefore, transactions on the ledger cannot be modified. Transactions can only be added to the ledger. There are rare cases where platform support does intervene in the ledger to:

1. Mark a transaction as deleted - the transaction is not really deleted, it still exists in the ledger, however it is marked as deleted and is no longer included in calculations and will not appear in transaction lists or exports.
2. Reassign a transaction to a different account. The transactions themselves are not modified, but the account to which it is related can be changed.

## When are transactions generated?

Transactions are generated in Open Collective's ledger when:

1. Via the platform, financial transactions are confirmed via payment processors when:
   1. A contribution is successfully charged and confirmed by a payment processor (such as Paypal, or credit cards via Stripe).
   2. A contribution is refunded.
   3. An expense is successfully paid through a payment processor (such as Wise or Paypal).
   4. An expense is marked as unpaid (when payment does not reach its destination).
2. Off the platform, financial transactions that occurred off platform are documented on the platform when:
   1. A fiscal host [adds funds](added-funds-in-the-ledger.md) that have arrived in their bank accounts and assigns them to their designated collective.
   2. Off platform (manually paid) expenses are documented on the platform by fiscal hosts. &#x20;
3. Inside the platform: money is moved between collective accounts within the same fiscal host.

{% hint style="warning" %}
#### Expected Funds: potential future financial activities that do not generate transactions.

Expected Funds are created

1. By contributors who select a manual payment method (checks and bank transfers).
2. By fiscal host admins who document expected funds from institutional funders.

Both are registered as “Expected Funds” that do not generate ledger transactions. Transactions will be created only when they are identified by fiscal hosts when the actual payment is received. Read more about [Expected Funds](../../fiscal-hosts/receiving-money/expected-funds.md)&#x20;
{% endhint %}

[Read more about individual transactions.](individual-transactions.md)

[Read more about transaction pairs, groups, and perspectives.](transaction-pairs-groups-and-perspectives.md)&#x20;

## Accessing the Ledger

The ledger can be accessed:

1. Directly in the platform via the dashboard [Transactions tool](individual-transactions.md)
2. [As exported CSV Files](exporting-transactions.md)
3. [Through the API](../../development/api.md)
