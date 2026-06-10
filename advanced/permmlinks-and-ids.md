---
description: >-
  Permalinks and public IDs let you share direct links to expenses,
  contributions, and other records across dashboard views.
icon: link
---

# Permalinks and Public IDs

Open Collective uses short **permalinks** and **public IDs** so you can share links to specific expenses, contributions, and other records. Permalinks open the correct dashboard view based on who is signed in.

## Public IDs

Each record has a public ID with a type prefix:

| Prefix | Record type |
| ------ | ----------- |
| `ex_` | Expense |
| `or_` | Order (contribution) |

You can copy a public ID from the expense header (**Copy ID** chip) or from dashboard action menus.

## Permalink URLs

Permalink format:

```
https://opencollective.com/permalink/{publicId}
```

Short links also work at `/id/{publicId}` and redirect to the appropriate destination.

## Copy link actions

In dashboard lists and detail views, use **Copy link** from the row actions menu or **More Actions**. The copied URL is a permalink that routes viewers to the right place:

* **Fiscal host admins** - host expense or contribution views
* **Collective admins** - collective payment request or contribution views
* **Submitters** - submitted expenses or outgoing contributions
* **Guests** - public expense page or sign-in prompt when access is required

## Private accounts

Permalinks to records on private accounts redirect unauthorized viewers. If you do not have permission to view a private account, you may see an access-denied page rather than the record details.

See [Private Organizations](../organizations/private-organizations.md) for more on private account visibility.

## Legacy URLs

Older URLs using collective slugs and numeric IDs (for example `/{collective}/expenses/{id}`) may still work. Prefer permalinks when sharing links with teammates or between dashboard sections.
