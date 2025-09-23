---
description: >-
  All transactions have specific properties assigned to them. Read on to learn
  about the various fields that describe all transactions on the platform.
---

# Individual Transactions

## Transaction Fields

| Name                     | Description                                                                                                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Expense Type             | Describes the kind of expense: invoice, reimbursement, virtual card, settlements and grants.                                                                                                                           |
| Kind                     | Indicates what kind of transaction it is (see Transaction Kinds)                                                                                                                                                       |
| Is Debt                  | Indicates “true” for platform transactions that represent a debt (PLATFORM\_TIP\_DEBT & HOST\_FEE\_SHARE\_DEBT).                                                                                                       |
| Amount                   | The amount of the transaction. Credit transactions have positive values and Debit transactions have negative values.                                                                                                   |
| Currency                 | The currency in which the transaction was recorded. This is typically the currency in which either the collective or fiscal host manage their funds.                                                                   |
| Original Currency Amount | If the transaction currency is different from the host currency, this amount will show the value in which the transaction was initiated. This is a string that includes the original value and currency (eg: 1000 SK). |
| Account ID               | The account to which this transaction is attributed.                                                                                                                                                                   |
| Opposite Account ID      | The other account related to the transaction.                                                                                                                                                                          |
| Host Collective ID       | If the collective is hosted by a fiscal host, this references the host (at the time the transaction was created).                                                                                                      |
| Is Refunded              | If a transaction was refunded then this field indicates “REFUNDED” otherwise it is empty.                                                                                                                              |
| Is Refund                | If the transaction is a refund then this field indicates “REFUND” otherwise it is empty.                                                                                                                               |
| Refund Transaction ID    | If the transaction has been refunded, this will have the transaction ID of the related refund transaction.                                                                                                             |
| Payment Processor        | The payment processor associated to the transaction (eg: Stripe, Paypal, Wise, Open Collective, Other).                                                                                                                |
| Payment Method           | The payment method associated to the transaction (eg: Credit Card, Balance)                                                                                                                                            |
| Merchant ID              | A reference number provided by the payment processor.                                                                                                                                                                  |
| Tax Type                 | If the transaction is or has related tax information, this indicates the type of tax (VAT/GST).                                                                                                                        |
| Tax Rate                 | If the transaction is or has related tax information, this indicates the applied tax rate.                                                                                                                             |
| Tax ID Number            | If the transaction is or has related tax information, this indicates the related tax identifier.                                                                                                                       |



### Deprecated Fields

These additional fields have been deprecated but may still apply to older transaction records:

| Transaction GraphQL ID | A unique 32 character transaction identifier. (formerly Long Transaction ID)                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gross Amount           | Until and including the year 2023 payment processor fees and taxes were stored as transaction fields. The gross amount is equal to the transaction amount plus the payment processor fees plus the taxes. |
| Payment Processor Fee  | Until the year 2024 payment processor fees were stored as fields of a transaction. Since 2024 they are stored as separate transactions.                                                                   |
| Platform Fee           | Platform fees were once stored as transaction fields. They are now separate transactions.                                                                                                                 |
| Host Fee               | Host fees were once stored as transaction fields. They are now separate transactions.                                                                                                                     |



## Transaction Kinds

Each transaction is of a single “kind.” The following are the "kinds" of transactions:

| CONTRIBUTION                     | Records a contribution made through the platform.                                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PAYMENT\_PROCESSOR\_FEE          | Records a fee charged by a payment processor.                                                                                                                                       |
| ADDED\_FUNDS                     | Funds that have been added to a collective account by a fiscal host.                                                                                                                |
| HOST\_FEE                        | Records a host fee allocated to the host in relation either a CONTRIBUTION or ADDED\_FUNDS                                                                                          |
| HOST\_FEE\_SHARE                 | Records a revenue share passed to the platform in relation to either a CONTRIBUTION or ADDED\_FUNDS                                                                                 |
| HOST\_FEE\_SHARE\_DEBT           | Records a debt to the platform due to a HOST\_FEE\_SHARE that has not been transferred to the platform.                                                                             |
| EXPENSE                          | Records an expense made through the platform.                                                                                                                                       |
| PLATFORM\_TIP                    | Records a platform tip added by a contributor to their contribution.                                                                                                                |
| PLATFORM\_TIP\_DEBT              | Records a debt to the platform due to a PLATFORM\_TIP that has not been transferred to the platform.                                                                                |
| PAYMENT\_PROCESSOR\_COVER        | Records payment processor fees that are covered by a fiscal host when a transaction is refunded (the payment processor do not refund the fees related to the original transaction). |
| PAYMENT\_PROCESSOR\_DISPUTE\_FEE | Records a fee paid by fiscal host when a contribution is disputed through a payment processor (dispute fees are charged regardless of dispute outcome).                             |
| BALANCE\_TRANSFER                | Usually done when emptying balance (Collective to Host, Project or Event to Collective). Or in some cases, moving balance between Fiscal Hosts.                                     |
| PREPAID\_PAYMENT\_METHOD         | \[LEGACY] records a transaction used for implementing gift cards.                                                                                                                   |
| UNNAMED                          | \[LEGACY] records transactions that date earlier then 2018 that experience migration challenges to later ledger versions.                                                           |
