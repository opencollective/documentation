---
description: >-
  For every transaction on Open Collective, multiple transactions are created to
  reflect the differences in every party's balance. Read on to learn more about
  how transactions are paired and grouped.
---

# Transaction Pairs, Groups & Perspectives

## Transaction Pairs <a href="#transaction-pairs" id="transaction-pairs"></a>

Transactions are always created in complementary pairs: a credit transaction and a debit transaction. For example, when Contributor A makes a contribution to Collective B, two transactions are created:

<figure><img src="../../.gitbook/assets/image (10).png" alt="A table featuring an example of a transaction pair. The table has two rows, one for each transaction. Both feature the date April 16, 2024 and kind set to Contribution. The first has type &#x22;CREDIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;$10.00&#x22;; the second has type &#x22;DEBIT,&#x22; account set to &#x22;Contributor A,&#x22; and amount &#x22;-$10.00&#x22;"><figcaption></figcaption></figure>

Or when an expense is paid from Collective B to Payee C, two transactions are also created:

<figure><img src="../../.gitbook/assets/image (11).png" alt="A table featuring an example of a transaction pair. The table has two rows, one for each transaction. Both feature the date April 16, 2024 and kind set to Expense. The first has type &#x22;CREDIT,&#x22; account &#x22;Payee C,&#x22; and amount &#x22;$10.00&#x22;; the second has type &#x22;DEBIT,&#x22; account set to &#x22;Contributor B,&#x22; and amount &#x22;-$10.00&#x22;"><figcaption></figcaption></figure>

{% hint style="warning" %}
#### Not quite Double Entry Book Keeping

Though the “transactions pairs” is a fundamental ledger pattern and it may sound like it is compatible with double entry book keeping, it isn’t.
{% endhint %}

## Transaction Groups

Usually transactions are created in groups that have a shared context. For example, when a contribution is made by Contributor A via Stripe to Collective B that is hosted by Fiscal Host C the following transaction group will be created:

1. A pair of CONTRIBUTION transactions.
2. A pair of PAYMENT PROCESSOR FEE transactions.
3. A pair of HOST FEE transactions

<figure><img src="../../.gitbook/assets/image (5).png" alt="An example of a transaction group, featuring size transactions. All  of the transactions have the same date, April 16, 2024, and Group ID: 1234-5678-1234-5678. The first transaction has the kind &#x22;Contribution,&#x22; the type &#x22;CREDIT,&#x22; account &#x22;Collective B&#x22;, and amount &#x22;$10.00.&#x22; The second transaction has the kind &#x22;Contribution,&#x22; the type &#x22;DEBIT,&#x22; account &#x22;Contributor A&#x22;, and amount &#x22;$-10.00.&#x22; The third transaction has the kind &#x22;Payment Processor Fee,&#x22; the type &#x22;CREDIT,&#x22; account &#x22;Stripe&#x22;, and amount &#x22;$00.50.&#x22; The fourth transaction has the kind &#x22;Payment Processor Fee,&#x22; the type &#x22;DEBIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;-$00.50.&#x22; The fifth transaction has the kind &#x22;Host Fee,&#x22; the type &#x22;CREDIT,&#x22; account &#x22;Fiscal Host C,&#x22; and amount &#x22;$1.00.&#x22; The sixth transaction has the kind &#x22;Host Fee,&#x22; the type &#x22;DEBIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;$-1.00.&#x22;"><figcaption></figcaption></figure>

## Ledger Perspectives

Different users sees a different perspective of the same ledger. The perspective a user sees depends on the account through which they are looking at the ledger. Typically each account sees only transactions related to it. Fiscal hosts are an exception since they see both their own transactions and the transactions of the collectives they host.&#x20;

In the following contribution example, the contributor will see just one transaction, their contribution debited from their account:

<figure><img src="../../.gitbook/assets/image (6).png" alt="An example of a contributor&#x27;s perspective on a transaction. There is a table with one row. The date is &#x22;Apr 16, 2024,&#x22; the kind is &#x22;Contribution,&#x22; the type is &#x22;DEBIT,&#x22; the account is &#x22;Contributor A,&#x22; and the amount is &#x22;-$10.00.&#x22;"><figcaption></figcaption></figure>

A collective admin will see three transactions which correctly represent the contribution and two fees, resulting in a net $8.50 for the collective:

<figure><img src="../../.gitbook/assets/image (7).png" alt="An example of a collective admin&#x27;s perspective on a transaction. The table features three rows, on all three rows, the date is &#x22;Apr 16, 2024&#x22; and the account is &#x22;Collective B.&#x22; In the first row, the kind is &#x22;Contribution,&#x22; the type is &#x22;CREDIT,&#x22; and the amount is &#x22;$10.00.&#x22; In the second row, the kind is &#x22;Payment Processor Fee,&#x22; the type is &#x22;DEBIT,&#x22; and the amount is &#x22;-$0.50.&#x22;  In the third row, the kind is &#x22;Host Fee,&#x22; the type is &#x22;DEBIT,&#x22; and the amount is &#x22;-$1.00.&#x22;"><figcaption></figcaption></figure>

The Stripe account (though it has no users, there is a global Stripe account to which transactions are attributed) will show just the payment processor fee that it charged:

<figure><img src="../../.gitbook/assets/image (8).png" alt="An example of a transaction from Stripe&#x27;s perspective. There is only one row in the table. The date is &#x22;Apr 16, 2024,&#x22; the kind is &#x22;Payment Processor Fee,&#x22; type is &#x22;CREDIT,&#x22; account is &#x22;Stripe,&#x22; and amount is &#x22;$0.50.&#x22;"><figcaption></figcaption></figure>

Fiscal hosts see the largest amount of transactions since they see both their own transactions and the transactions of their hosted collectives (for which they are fiscally responsible):

<figure><img src="../../.gitbook/assets/image (9).png" alt="An example of a transaction from a Fiscal Host&#x27;s perspective. The table features four rows, every row has the same date &#x22;Apr 15, 2024.&#x22; The first row has the kind &#x22;Contribution,&#x22; type &#x22;CREDIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;$10.00.&#x22; The second row has the kind &#x22;Payment Processor Fee,&#x22; type &#x22;DEBIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;-$0.50.&#x22; The third row has the kind &#x22;Host Fee,&#x22; type &#x22;CREDIT,&#x22; account &#x22;Fiscal Host C,&#x22; and amount &#x22;$1.00.&#x22; The fourth row has the kind &#x22;Host Fee,&#x22; type &#x22;DEBIT,&#x22; account &#x22;Collective B,&#x22; and amount &#x22;-$1.00.&#x22;"><figcaption></figcaption></figure>

{% hint style="success" %}
See more about [the fiscal host perspective](fiscal-host-ledger-perspective.md).
{% endhint %}
