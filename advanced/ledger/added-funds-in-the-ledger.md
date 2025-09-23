---
description: >-
  Added Funds a represented slightly differently in the ledger than
  contributions. Read on to learn about how Open Collective reflects these
  transactions.
---

# Added Funds in the Ledger

Added funds are funds that are manually added to Collective accounts by Fiscal Hosts when they process manual bank transfers and checks. Added fund-related transactions are potentially different from contribution-related transactions:

1. They are initiated by a Fiscal Host admin and not by a contributor.
2. They are created in response to manual data entry (and not automated interaction with a payment processor system).
3. They can be manually dated by the Fiscal Host admin to reflect when the funds actually arrived. In such cases, the “Transaction Date” will show the date (and time) the transaction itself was created in the ledger and the “Effective Date” will show the date entered by the Fiscal Host admin.

Added funds transaction groups typically look like contributions in the ledger, but instead of a pair of CONTRIBUTION transactions, there will be a pair of ADDED\_FUNDS transactions.

<figure><img src="../../.gitbook/assets/image (27).png" alt="A table showing an example of Added Funds in the ledger. The first transaction has the Kind &#x22;Added Funds,&#x22; the Type &#x22;CREDIT,&#x22; the Account &#x22;Collective B,&#x22; and the Amount &#x22;$1,000.00.&#x22; The second transaction has the Kind &#x22;Added Funds,&#x22; the Type &#x22;DEBIT,&#x22; the Account &#x22;Contributor A,&#x22; and the Amount &#x22;-$1,000.00.&#x22; The third transaction has the Kind &#x22;Host Fee,&#x22; the Type &#x22;CREDIT,&#x22; the Account &#x22;Fiscal Host C,&#x22; and the Amount &#x22;$100.00.&#x22; The fourth transaction has the Kind &#x22;Host Fee,&#x22; the Type &#x22;DEBIT,&#x22; the Account &#x22;Collective B,&#x22; and the Amount &#x22;-$100.00.&#x22; The fifth transaction has the Kind &#x22;Host Fee Share,&#x22; the Type &#x22;CREDIT,&#x22; the Account &#x22;Platform,&#x22; and the Amount &#x22;$15.00.&#x22; The sixth transaction has the Kind &#x22;Host Fee Share,&#x22; the Type &#x22;DEBIT,&#x22; the Account &#x22;Fiscal Host C,&#x22; and the Amount &#x22;-$15.00.&#x22;"><figcaption></figcaption></figure>
