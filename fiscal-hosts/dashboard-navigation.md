---
description: >-
  Reference for the fiscal host and organization dashboard sidebar, including
  how new Incoming Money and Outgoing Money menus map to older labels.
icon: map
---

# Dashboard Navigation

The dashboard sidebar groups tasks by what you are trying to do. The layout depends on your account type (individual, collective, organization, or fiscal host) and your role on that account.

Money-in and money-out sections use the **Incoming Money** and **Outgoing Money** labels described below. This layout is enabled by default. To revert to the previous **Expenses** and **Contributions** labels, toggle **Sidebar Reorganization Incoming/Outgoing** off from [Preview Features](../advanced/preview-features.md).

## Account switcher

Use the account switcher in the top-left corner to move between profiles where you hold a role (personal account, collective admin, organization admin, fiscal host admin, and so on). The sidebar updates to show tasks relevant to the selected account.

## Sidebar groups by account type

### Fiscal hosts and organizations with money management

| Sidebar group | Pages | Typical tasks |
| ------------- | ----- | --------------- |
| **Overview** | Overview | Balances, setup checklist, key metrics |
| **Accounts** | Accounts | Projects, events, and connected accounts (collectives and organizations) |
| **Outgoing Money** | Pay Disbursements, Paid Disbursements, Approve Payment Requests, All Payment Requests, Outgoing Contributions | Review, approve, and pay expenses; track outgoing contributions from this account |
| **Incoming Money** | Incoming Contributions, Expected Funds, Incomplete Contributions, Issued Payment Requests | Track contributions received, pending bank transfers, and payment requests you submitted |
| **Internal Transfers** | Internal Transfers | Move funds between accounts you manage (preview) |
| **Funds & Grants** | Hosted Funds, Hosted Grant Requests, Grants, Approve Grant Requests | Manage grant programs and hosted funds |
| **Ledger** | Transactions, Bank Account Sync, CSV Imports | Full transaction history and off-platform reconciliation |
| **Hosting** | Hosted Collectives, Applications | Manage hosted collectives and incoming applications |
| **People** | People | Search accounts, roles, KYC status, and exports |
| **Vendors** | Vendors | Vendor directory for your host |
| **Reports** | Transactions, Expenses, Contributions | Downloadable reports |
| **Settings** | Info, Fiscal Hosting, Receiving Money, Sending Money, and more | Account configuration |

### Hosted collectives

Hosted collectives see a smaller set of sections focused on fundraising and spending: **Overview**, **Outgoing Money**, **Incoming Money**, **Transactions**, **Contributors**, **Tiers**, **Team**, and **Settings**.

### Individual accounts

Individuals typically see **Overview**, **Payment Requests** (or **Expenses**), **Contributions** (outgoing contributions you made), **Transactions**, and **Settings**.

## Old label to new label reference

Use this table when following older documentation or support articles that reference previous sidebar names.

| Previous label | Current label | Notes |
| -------------- | ---------------------------------------- | ----- |
| **Expenses** (fiscal host) | **Outgoing Money** | Host expense workflows are split across sub-pages |
| Expenses - ready to pay | **Outgoing Money > Pay Disbursements** | Expenses approved and awaiting payment |
| Expenses - all | **Outgoing Money > All Payment Requests** | Full expense list |
| Expenses - approve | **Outgoing Money > Approve Payment Requests** | Expenses pending collective or host approval |
| **Contributions** (fiscal host) | **Incoming Money** | Received money and related workflows |
| Contributions - received | **Incoming Money > Incoming Contributions** | Financial contributions to hosted accounts |
| **Expected Funds** | **Incoming Money > Expected Funds** | Pending offline or bank contributions |
| **Incomplete Contributions** | **Incoming Money > Incomplete Contributions** | Contributions that need follow-up |
| Contributions - from this account | **Outgoing Money > Outgoing Contributions** | Contributions this account made to others |
| Expenses - submitted by this account | **Incoming Money > Issued Payment Requests** | Payment requests you submitted |
| **Collectives** | **Hosting > Hosted Collectives** | List of hosted collectives |
| **Contributors** (on hosted collective) | **Contributors** | Unchanged for hosted collectives |
| **Contributors** / community (fiscal host) | **People** | Host-wide account directory |
| **Transactions** (with money management) | **Ledger > Transactions** | Full ledger view |
| **Payment Requests** (self-hosted organization) | **Outgoing Money > Payment Requests** | Organizations paying their own expenses |

{% hint style="info" %}
**Settings** paths are unchanged. For example, **Dashboard > Settings > Receiving Money** works the same regardless of sidebar layout.
{% endhint %}

## Related documentation

* [Your Dashboard](../getting-started/your-dashboard.md) - getting started with the dashboard
* [Preview Features](../advanced/preview-features.md) - revert to the previous sidebar layout or try other previews
