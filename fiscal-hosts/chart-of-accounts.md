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
* **Visibility**: A category can be made visible only to host admins so that expense submitters cannot select it when submitting an expense.
* **Kind:** A category can either be applied to expenses or contributions.
* **Applies to:** A category can either be applied to Organizational Funds or Managed Funds. Organizational Funds are transactions that are related to the Fiscal Host itself, and Managed Funds are transactions related to hosted Collectives.
* **Expense types:** Open Collective features different kinds of expenses. This property can be used to ensure that specific categories can only be used with specific expense types. The expense types that are possible to select here are:
  * Virtual Card Charges
  * Grants
  * Invoices
  * Reimbursements
  * Settlements
  * Unclassified

### Create Category

To create a new category, navigate to Fiscal Host Dashboard > Settings > Chart of Accounts. On this page, click "Create Category +" in the top right corner.

On the page that appears, you will then be able to configure the category according to the properties outlined above. There is also an additional field for Instructions that allows you to enter in more information about the specific category.

### Edit Category

To edit a category, navigate to Fiscal Host Dashboard > Settings > Chart of Accounts. On this page, find the specific category that you would like to edit, and then click the three dot icon on the right of the category's row.&#x20;

On the page that appears, you will then be able to configure the category according to the properties outlined above.&#x20;

### Policies

Within a Fiscal Host's Policy settings, Admins can set requirements for categorization of Expenses. Navigate to your Fiscal Host Dashboard > Policies, and scroll to **Expense categorization**. There, you will be able to:

* Require expense submitters to select a category when submitting an expense
* Require Collective admins to verify expense categories when reviewing and approving expenses

## Transaction Categorization

In order for transactions to be associated with the appropriate categories, they must be categorized.

### Expense Categorization

To categorize an expense, navigate to Fiscal Host Dashboard > Expenses. Find the specific expense you would like to categorize and click on the grey drop down next to where it says “Category” and select or search for the specfic category that applies.&#x20;

Alternatively, when an expense submitter submits an expense, they are able to select from your list of categories.&#x20;

{% hint style="info" %}
Contact us if you're interested in using AI to help automate the expense categorization process.
{% endhint %}

### Contribution Categorization

To categorize a contribution, navigate to Fiscal Host Dashboard > Contributions. Find the specific contribution that you would like to categorize, click the three dots icon on the right, click View Details, click the grey drop down and select or search for the category that you would like to apply.
