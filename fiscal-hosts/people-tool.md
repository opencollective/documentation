---
description: >-
  The People tool is a fiscal host directory of individuals who interacted with
  your organization, with account details, KYC status, and financial history.
icon: users
---

# People Tool

The People tool lists individuals who have interacted with your fiscal host or organization: collective admins, contributors, expense submitters, and payees. Use it to review roles, KYC status, and financial activity in one place.

## Who can access it

The **People** section appears in the dashboard sidebar for accounts with money management (fiscal hosts and self-hosted organizations). It is not available for individual accounts or accountant-only roles.

Navigate to **Dashboard > People**.

## The People list

The page title is **People**, with the description "People that interacted with your organization."

### View tabs

Preset filters at the top of the list:

* **All**
* **Collective Admins**
* **Financial Contributors**
* **Expense Submitters**
* **Payees**

### Filters and sorting

Use the filter bar to narrow results:

* **Search** by name or email
* **Relation Type** - admin, contributor, expense submitter, payee, and other roles
* **Account** - filter by a specific hosted collective
* **Total Contributed** and **Total Expended** - amount ranges
* **Sort** by name, date created, total contributed, or total expended

### Columns

| Column | Description |
| ------ | ----------- |
| Account | Avatar, display name, and legal name |
| Email | Email address with copy button |
| KYC | Verification status (when KYC is enabled) |
| Country | Location |
| Roles | Relationship badges (admin, contributor, payee, etc.) |
| Total Expenses | Amount and count of expenses |
| Total Contributions | Amount and count of contributions |

### Row actions

Click the row actions menu to:

* **View All Expenses** - opens the expense list filtered to this person
* **View All Contributions** - opens Incoming Contributions filtered to this person
* **View All Transactions** - opens host transactions filtered to this person
* **Submit Manual KYC Verification** - available for individuals when KYC is enabled

Click a row to open the account detail page.

### Export

Self-hosted organizations (not fiscal hosts) see an **Export Contributors** button that downloads a CSV of contributor data.

## Account detail

Clicking a person opens their account detail at **Dashboard > People > {account}**.

### Header

The header shows account type, KYC status, tax form status, and counts of rejected or spam expenses. Actions include **View Profile** and **Copy URL**.

### Overview tab

* **Details** - legal name, display name, email, location, social links
* **Platform Activity** - join date, first and latest interaction, roles
* **Administrators / Admin of** - linked admin accounts
* **Financial metrics** - amounts received from and disbursed to this person over time
* **Recently Received / Recently Disbursed** - preview of recent transactions

### Money Movement tab

Full transaction history with date, amount, search, accounting category, and hosted account filters.

### Managed Disbursements tab

For individuals, shows expenses this person approved, paid, or rejected. Filter by Approved, Paid, or Rejected.

### Activities tab

Paginated activity feed for this person relative to your organization.

### KYC tab

When KYC is enabled, shows verification history and a button to submit a new manual verification. See [Know Your Customer (KYC)](know-your-customer-kyc.md).

## Related documentation

* [Know Your Customer (KYC)](know-your-customer-kyc.md)
* [Dashboard Navigation](dashboard-navigation.md)
* [Vendors](managing-your-collectives/vendors.md) - separate vendor directory for organizations
