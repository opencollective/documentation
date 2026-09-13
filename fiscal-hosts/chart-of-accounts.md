---
description: >-
  The Chart of Accounts feature is a tool to help organizations reconcile their
  Open Collective ledger with their off-platform accounting processes.
icon: memo-circle-check
---

# Chart of Accounts

Chart of Accounts are used in accounting for recording and categorizing all financial transactions that an organization makes. It is a kind of ledger with clearly defined categories that make it easier to identify where money came from and how it was spent when filing taxes. Within Open Collective, the Chart of Accounts feature refers to the system that organizations on the platform can use to categorize contributions and expenses so that it is easier to reconcile their transactions with their other accounting processes that use a more formal Chart of Accounts system.

Using the Chart of Accounts feature on Open Collective is a two-step process: first, you must define the categories that transactions can fall into; then, you need to select the category for each transaction.

## Define Categories

Fiscal Hosts can create and manage categories by navigating to their Fiscal Host Dashboard > Settings > Chart of Accounts. On this page, you will see a table containing all of the categories that are currently added to your organization. Every category has the following properties:

* **Code:** The code associated with a category is defined by the external accounting software or process that an organization uses. We recommend asking your organization's accountant for this information.
* **Name:** The name of the category is the formal human legible identifier for a category. If no Friendly Name is defined, this is what will appear on the platform.
* **Friendly Name:** The Friendly Name is an optional identifier for a category that is displayed in place of the Name. This is useful if the accountant requires a specific Name, but you would like for what is displayed on the platform to be different. For example, an organization may have a category named "Expenses - Travel," but a Friendly Name "Travel" to make the selection process cleaner.
* **Visibility**: A category can be made visible only to host admins so that expense submitters cannot select it when submitting an expense. Balance and clearing accounts are always managed by host admins.
* **Kind:** A category can either be applied to expenses or contributions. These are profit-and-loss categories: they describe the kind of expense or revenue.
* **Applies to:** A category can either be applied to Organizational Funds or Managed Funds. Organizational Funds are transactions that are related to the Fiscal Host itself, and Managed Funds are transactions related to hosted Collectives. Balance and clearing accounts apply to all funds and do not use this field.
* **Expense types:** Open Collective features different kinds of expenses. This property can be used to ensure that specific categories can only be used with specific expense types. The expense types that are possible to select here are:
  * Virtual Card Charges
  * Grants
  * Invoices
  * Reimbursements
  * Settlements
  * Unclassified

{% hint style="info" %}
If you have the [Balance & clearing accounts](../advanced/preview-features.md#balance-and-clearing-accounts-closed-beta) preview enabled, the create and edit forms also include **Type**: **Profit and Loss** (the expense and contribution categories above), **Balance**, or **Clearing**. Balance and clearing categories track which payment device money moved through. Filter the table by **Type** to find them.
{% endhint %}

### Create Category

To create a new category, navigate to Fiscal Host Dashboard > Settings > Chart of Accounts. On this page, click "Create Category +" in the top right corner.

On the page that appears, you will then be able to configure the category according to the properties outlined above. There is also an additional field for Instructions that allows you to enter in more information about the specific category.

### Edit Category

To edit a category, navigate to Fiscal Host Dashboard > Settings > Chart of Accounts. On this page, find the specific category that you would like to edit, and then click the three dot icon on the right of the category's row.&#x20;

On the page that appears, you will then be able to configure the category according to the properties outlined above.&#x20;

### Payment device assignments

{% hint style="info" %}
This tab is available when the [Balance & clearing accounts](../advanced/preview-features.md#balance-and-clearing-accounts-closed-beta) preview is enabled. Only host admins can change assignments; accountants can view them.
{% endhint %}

Open **Settings > Chart of Accounts** and select the **Payment device assignments** tab. Assign a balance or clearing account to each payment device. Payments processed through that device are attributed to the selected account automatically.

You can assign accounts to:

* Connected processors: **Stripe**, **PayPal**, and **Wise**
* Manual payment methods (bank transfer and other custom methods from **Settings > Receiving Money**)
* Connected bank accounts (Plaid and GoCardless), including each sub-account

You can make the same assignment from **Settings > Receiving Money** (Stripe, PayPal, and custom payment methods) and **Settings > Sending Money** (Wise).

If you have not connected any payment devices yet, the tab explains how to connect Stripe, Wise, or PayPal, add a manual payment method, or [connect a bank account](bank-account-synchronization.md).

### Policies

Within a Fiscal Host's Policy settings, Admins can set requirements for categorization of Expenses. Navigate to your Fiscal Host Dashboard > Policies, and scroll to **Expense categorization**. There, you will be able to:

* Require expense submitters to select a category when submitting an expense
* Require Collective admins to verify expense categories when reviewing and approving expenses

## Transaction Categorization

In order for transactions to be associated with the appropriate categories, they must be categorized.

### Expense Categorization

To categorize an expense, navigate to Fiscal Host Dashboard > Outgoing Money > All Payment Requests. Find the specific expense you would like to categorize and click on the grey drop down next to where it says “Category” and select or search for the specific category that applies.&#x20;

Alternatively, when an expense submitter submits an expense, they are able to select from your list of categories.&#x20;

{% hint style="info" %}
Contact us if you're interested in using AI to help automate the expense categorization process.
{% endhint %}

### Contribution Categorization

To categorize a contribution, navigate to Fiscal Host Dashboard > Incoming Money > Incoming Contributions. Find the specific contribution that you would like to categorize, click the three dots icon on the right, click View Details, click the grey drop down and select or search for the category that you would like to apply.

## Balance and clearing accounts <a href="#balance-and-clearing-accounts" id="balance-and-clearing-accounts"></a>

Profit-and-loss categories (expenses and contributions) describe *what* the money was for. Balance and clearing accounts describe *where* it moved — which Stripe account, Wise balance, bank account, or manual payment method.

After you assign accounts to payment devices, Open Collective applies them automatically when it can:

* Stripe and PayPal contributions use the account assigned to that connected processor
* Expenses paid through Wise or PayPal use the account assigned to that payout connection
* Bank-transfer contributions and other manual payment methods use the account assigned to that method
* Transactions matched from a [connected bank account](bank-account-synchronization.md) use the account assigned to that bank sub-account

The first assignment is kept. Later matching does not overwrite an account that is already set.

You can also choose or change the account yourself:

* When [adding funds](receiving-money/adding-funds-manually.md), use **Balance / clearing account**. Suggested accounts appear first when a payment device or assigned bank account matches the collective.
* When [paying an expense manually](expense-payment/paying-expenses-as-a-fiscal-host.md), use **Payment device**.
* On an expense or contribution, host admins can change the assigned account from the balance/clearing account control.
* Transaction details include **Balance Accounting Category**. Host admins and accountants can include **Balance Accounting Category Code** and **Balance Accounting Category Name** in a [transaction export](../advanced/ledger/exporting-transactions.md).
