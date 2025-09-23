---
description: >-
  Over time, we've made some changes to how we structure the ledger. Read on to
  learn about the changes and your options for using our legacy options.
---

# Ledger Changelog

## January 2024: Separate payment processor fees and taxes&#x20;

_From January 2024 payment processor fees and taxes were separated from the transaction record in the ledger._ \


Over the last couple of years, we’ve received feedback from Fiscal Hosts and accountants that has prompted us to make a change to the ledger to make it more consistent and future-proof. We’ve modified the ledger so that payment processor fees and taxes are recorded as separate transactions.&#x20;

_This is how payment processor fees and taxes were represented in the ledger until January 2024, as fields/properties of a transaction:_

<table><thead><tr><th>type</th><th>kind</th><th>amount</th><th width="182">paymentProcessorFee</th><th>netAmount</th></tr></thead><tbody><tr><td>CREDIT</td><td>CONTRIBUTION</td><td>100</td><td>1.8</td><td>98.2</td></tr></tbody></table>



_For contributions or expenses made after January 2024, separate transactions will be recorded for payment processor fees and taxes. For example:_

| type   | kind                    | amount |
| ------ | ----------------------- | ------ |
| CREDIT | CONTRIBUTION            | 100    |
| DEBIT  | PAYMENT\_PROCESSOR\_FEE | -1.8   |

### CSV Export Backwards Compatibility

The default export configuration hasn’t changed and still includes a column for payment processor fees. However, from 2024, payment processor fees are exported as separate transactions and the payment processor fee column will be set to zero. If you need to continue to export data (from the 1st of January 2024 and onward) with payment processor fees as a column (instead of separate transactions) enable the “Separate transactions compatibility” option. This will convert the newly separated payment processor fee transactions back into transaction columns.

<figure><img src="../../.gitbook/assets/image (52).png" alt="A screenshot of a toggle setting with the text &#x22;Export taxes and payment processor fees as columns.&#x22;"><figcaption></figcaption></figure>

### Dashboard Transactions List

In the dashboard transactions tool, the new transactions (for payment processor fees and taxes) will appear as separate transactions. In this screenshot, the blue line on the left side of the table is a visual indicator for a group of related transactions. Here you can see that a (now separate) Payment processor fee transaction is related to the contribution transaction.

<figure><img src="../../.gitbook/assets/image (53).png" alt="A screenshot of some transactions in the Dashboard Transaction list. On the left, there is a blue line that indicates that these transactions belong to the same transaction group."><figcaption></figcaption></figure>

You can also filter to see only those transactions using the “kind” filter:

<figure><img src="../../.gitbook/assets/image (54).png" alt="A screenshot of the Transaction List&#x27;s filter option. It has been set to filter by Kind, and there is a list of different Kinds that can be chosen from, including &#x22;Added funds,&#x22; Balance transfer,&#x22; and &#x22;Contribution.&#x22;"><figcaption></figcaption></figure>
