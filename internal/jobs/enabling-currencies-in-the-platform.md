---
description: Whitelisting currencies to be used in the platform by hosts.
---

# Enabling Currencies in the Platform

## Procedure

1. In the **API**
   1. Update `server/graphql/v2/enum/Currency.js` adding the currency code to the array in the `pick` function we have in `Currency` enum type.
2. In the **Frontend**
   1. Update `lib/constants/currency.js` to include the currency code.
   2. Run `npm run graphql:update` .
3.  In our documentation:
   1. Update the revenue query in [Analytics](../queries/analytics.md#revenue-and-transaction-splits-by-month-with-all-currencies-converted-to-usd) to include the new currency with an up-to-date exchange rate.
   2. Update all exchange rates if they're outdated.

