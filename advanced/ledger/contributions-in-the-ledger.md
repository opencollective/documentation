---
description: >-
  Learn more about how Contributions and Refunds are reflected in Open
  Collective's ledger.
---

# Contributions in the Ledger

## Contributions

1. A contribution will typically include a pair of CONTRIBUTION transactions and a pair of PAYMENT\_PROCESSOR\_FEE transactions.
2. If the contribution is made to a Collective that is hosted by a Fiscal Host and if that host charges a hosting fee then there will also be a pair of HOST\_FEE transactions.
3. If a Fiscal Host has a revenue share agreement with the platform then there will also be a pair of HOST\_FEE\_SHARE transactions:
   1. If HOST\_FEE\_SHARE applies and the payment processor supports it, the contribution will be split during processing: the Fiscal Host and the platform will each receive their portions, and the HOST\_FEE\_SHARE amount will be sent directly to the platform.&#x20;
   2. If that is not possible, the entire contribution amount (minus the payment processor fee) is directed to the Fiscal Host and a pair of HOST\_FEE\_SHARE\_DEBT transactions are also created to account for money owed by the Fiscal Host to the platform. The debt transactions are later aggregated and used to generate an expense through which the Fiscal Host pays the platform and the debt is reconciled.

As a result, a single contribution can result in a set of transactions:

<figure><img src="../../.gitbook/assets/image (15).png" alt="A table showing an example of a contribution that has a Host Fee Share.  The first two transactions show the initial contribution as a CREDIT to the Collective and as a DEBIT from the Contributor. The next two transactions show the Payment Processor Fee as a CREDIT to Stripe and as a DEBIT from the Collective. The next two transactions show the Host Fee as a CREDIT to the Fiscal Host and as a DEBIT from the Collective. The next two transactions show the Host Fee Share as a CREDIT to the platform and as a DEBIT from the Fiscal Host. Lastly, the final two transactions show Host Fee Share Debt as a CREDIT to the Fiscal Host and as a DEBIT from the platform."><figcaption></figcaption></figure>

Find out more about [Platform settlement expenses](../../fiscal-hosts/platform-settlements.md).&#x20;

## Refunded Contributions

When contributions are refunded, a new transaction group is created. It contains a set of opposite (relative to the contribution itself) transactions:

1. The contribution is returned: debited from the Collective and credited to the contributor
2. The host fees are returned: debited from the Fiscal Host and credited to the Collective.
3. The host fee share paid to the platform is returned: it is debited from the platform and credited to the Fiscal Host.
4. The host fee share debt is cancelled: it is debited from the Fiscal Host and credited to the platform.
5. Payment processor fee transactions are **not** reversed since they are typically not refunded by the payment processors. In such cases, Fiscal Hosts cover the payment processor fees that have not been refunded, and this is represented in the ledger with a pair of PAYMENT\_PROCESSOR\_COVER transactions.

<figure><img src="../../.gitbook/assets/image (16).png" alt="A table showing an example of a refunded contribution. The table is nearly identical to the one above, with a few exceptions. The first two transactions in the table are for the contribution with a DEBIT from the Collective and a CREDIT to the original contributor. The next two transactions are for the Host Fee, with a DEBIT from the Fiscal Host and a CREDIT to the Collective. The next two transactions are for the Host Fee Share with a DEBIT from the platform and a CREDIT to the Fiscal Host. The next two transactions are for the Host Fee Share Debt, with a DEBIT from the Fiscal Host and a CREDIT to the platform. The final two transactions are to cover the Payment Processor fees that were not refunded with a DEBIT from the Fiscal Host and a CREDIT to the Collective."><figcaption></figcaption></figure>

As a result, the ledger footprint of a refunded contribution includes:

1. The contribution transactions are one transaction group.
2. The refund transactions are a second transaction group.
3. There is a relationship between the transactions in the two transaction groups. Each transaction in the contribution transaction group (except the payment processor fees) will have a Refund Transaction ID that points to the opposite transaction in the refund transaction group.
4. The contribution transactions will be marked as REFUNDED.
5. The related refund transactions will be marked as REFUND.

<figure><img src="../../.gitbook/assets/image (17).png" alt="A table showing an example of a contribution that has been refunded, featuring all of the transactions that make up the original transaction group as well as the transaction group comprised of all of the transactions that were apart of the refund process. All of the transactions have IDs and all of the transactions (except for the payment processor fees) in the original contribution&#x27;s transaction group have Refund Transaction IDs that show which refund transactions are associated with each original transaction."><figcaption></figcaption></figure>

It is possible to imagine these two transaction sets existing side by side:

<figure><img src="../../.gitbook/assets/image (21).png" alt="Two tables side by side that provide an example of a refunded transaction. The two tables are identical to the table above, except the two transaction groups appear next to each other with arrows pointing from the original transaction to the corresponding transaction in the refunded transaction group."><figcaption></figcaption></figure>

## Perspectives of Refunded Contributions

From a contributor's perspective, a refunded contribution looks like a straightforward pair of opposite transactions: a debit when the contribution was made and a credit when it was refunded.

<figure><img src="../../.gitbook/assets/image (22).png" alt="A table showcasing an example of a refunded contribution from the contributor&#x27;s perspective. The first transaction has the type &#x22;DEBIT,&#x22; a property that states &#x22;REFUNDED,&#x22; and an amount of &#x22;-$10.00.&#x22; The second transaction has a type &#x22;CREDIT,&#x22; a property that says &#x22;REFUND,&#x22; and an amount &#x22;$10.00.&#x22;"><figcaption></figcaption></figure>

From a Collective's perspective, a refunded contribution looks slightly less symmetric because the PAYMENT PROCESSOR FEE transaction is not refunded and is instead reflected by the PAYMENT PROCESS COVER transaction:

<figure><img src="../../.gitbook/assets/image (23).png" alt="A table showing an example of a refunded contribution from a Collective&#x27;s perspective. The first three transactions are associated with the initial contribution and feature a transaction labelled &#x22;Contribution,&#x22; another labeled &#x22;Payment Processor Fee,&#x22; and a final one labeled &#x22;Host Fee.&#x22; The Contribution and Host Fee transactions have a property labeled &#x22;REFUNDED,&#x22; while Payment Processor Fee does not. The last three transactions roughly correspond to the original three transactions, but in reverse: Contribution, Host Fee, and Payment Processor Cover. All three have the label &#x22;REFUND.&#x22;"><figcaption></figcaption></figure>

From a Fiscal Host “Operational Funds” perspective, a refunded contribution looks symmetrical except for the PAYMENT PROCESSOR COVER transaction:

<figure><img src="../../.gitbook/assets/image (24).png" alt="A table showing an example of a refunded transaction from a Fiscal Host&#x27;s Operational Funds perspective. The first three transactions are Host Fee, Host Share, and Host Fee Share Debt and all have the label &#x22;REFUNDED.&#x22; The next three transactions are the reverse transactions: they have the same &#x22;Kind,&#x22; but the types have been reversed from CREDIT to DEBIT (and vis versa), and all three have the label &#x22;REFUND.&#x22; The last transaction has the &#x22;Kind&#x22; Payment Processor Cover and a label of &#x22;REFUND.&#x22; "><figcaption></figcaption></figure>

From a Fiscal Host “Managed Funds” perspective, a refunded contribution looks the same as it does from a collective perspective:

<figure><img src="../../.gitbook/assets/image (25).png" alt="A table showing an example of a refunded contribution from the perspective of a Fiscal Host&#x27;s Managed Funds. It is identical to the table showing a Collective&#x27;s perspective on a refunded transaction."><figcaption></figcaption></figure>

## Disputed Contributions

A dispute occurs when a contributor files a complaint with a payment processor (usually because of suspected fraud). If a dispute is settled in favor of the Fiscal Host the contribution transactions in the ledger remain unchanged. If a dispute is settled in favor of a contributor the transaction will be refunded (and refund transactions will be created in the ledger).

Regardless of the dispute outcome, payment processors charge a dispute fee (paid by the Fiscal Host) which is recorded in the platform as an additional pair of PAYMENT\_PROCESSOR\_DISPUTE\_FEE transactions:

<figure><img src="../../.gitbook/assets/image (26).png" alt="A table showing an example of transactions associated with a disputed contribution. Both transactions have the Kind &#x22;Payment Processor Dispute Fee.&#x22; The first has the Type &#x22;CREDIT,&#x22; the Account &#x22;Stripe,&#x22; and the amount &#x22;$12.00.&#x22; The second transaction has the Type &#x22;DEBIT,&#x22; the Account &#x22;Fiscal Host C,&#x22; and the Amount &#x22;-$12.00.&#x22;"><figcaption></figcaption></figure>
