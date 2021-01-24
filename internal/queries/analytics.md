# Analytics

## Get annual budget and bunch of expenses stats per collective

### **WARNING: Don't run in production. Can take a while.**

```text
with "monthlySubscriptions" as
    (SELECT
      t."GroupId", COALESCE(SUM(t.amount * 12),0) as total
      FROM "Subscriptions" s
      LEFT JOIN "Donations" d ON s.id = d."SubscriptionId"
      LEFT JOIN "Transactions" t
      ON (s.id = d."SubscriptionId"
        AND t.id = (SELECT MAX(id) from "Transactions" t where t."DonationId" = d.id))
      WHERE t.amount > 0
        AND t."deletedAt" IS NULL
        AND s.interval = 'month'
        AND s."isActive" IS TRUE
        AND s."deletedAt" IS NULL
      GROUP BY t."GroupId"),

      "yearlyAndOneTimeSubscriptions" as
    (SELECT
      t."GroupId", COALESCE(SUM(t.amount),0) as total FROM "Transactions" t
      LEFT JOIN "Donations" d ON t."DonationId" = d.id
      LEFT JOIN "Subscriptions" s ON d."SubscriptionId" = s.id
      WHERE t.amount > 0
        AND t."deletedAt" IS NULL
        AND t."createdAt" > (current_date - INTERVAL '12 months') 
        AND ((s.interval = 'year' AND s."isActive" IS TRUE AND s."deletedAt" IS NULL) OR s.interval IS NULL)
      GROUP BY t."GroupId"),

    "inActiveSubscriptions" as
    (SELECT
      t."GroupId", COALESCE(SUM(t.amount),0) as total FROM "Transactions" t
      LEFT JOIN "Donations" d on t."DonationId" = d.id
      LEFT JOIN "Subscriptions" s ON d."SubscriptionId" = s.id
      WHERE t.amount > 0
        AND t."deletedAt" IS NULL
        AND t."createdAt" > (current_date - INTERVAL '12 months')
        AND s.interval = 'month' AND s."isActive" IS FALSE AND s."deletedAt" IS NULL
      GROUP BY t."GroupId"),

    "expensesData" as 
        (select e."GroupId", e.status, count(*) as "countExpenses", sum(amount) as "totalExpenses", max("createdAt") as "lastExpenseDate" from "Expenses" e
        WHERE "deletedAt" is null
        GROUP BY "GroupId", status
        ORDER BY "GroupId")

SELECT 
    id as "groupId", 
    slug, 
    COALESCE(ms.total,0)/100 + COALESCE(ys.total,0)/100 + COALESCE(ias.total,0)/100 as "annualBudget",
    currency, 
    ed.status as "expenseStatus",
    ed."lastExpenseDate",
    ed."countExpenses", 
    ed."totalExpenses"/100 as "sumOfExpenses"

     from "Groups" g
LEFT JOIN "monthlySubscriptions" ms on ms."GroupId" = g.id
LEFT JOIN "yearlyAndOneTimeSubscriptions" ys on ys."GroupId" = g.id
LEFT JOIN "inActiveSubscriptions" ias on ias."GroupId" = g.id
LEFT JOIN "expensesData" ed on ed."GroupId" = g.id
ORDER BY g.id
```

## Get backercount and core contributors

```text
with "backers" as 
(select "GroupId", count(*) as "backerCount" from "UserGroups"
    where role = 'BACKER'
    GROUP BY "GroupId")

select 
    g.id as "groupId", 
    g.name as "groupName",
    g.slug as "groupSlug",
    u.id as "userId",
    u."firstName" as "userFirstName", 
    u."lastName" as "userLastName", 
    u.email as "userEmail", 
    u.username as "username", 
    u.website as "userWebsite",
    u."twitterHandle" as "userTwitter",
    ug.role,
    b."backerCount"
from "UserGroups" ug
LEFT JOIN "Groups" g on ug."GroupId" = g.id
LEFT JOIN "Users" u on ug."UserId" = u.id
LEFT JOIN "backers" b on ug."GroupId" = b."GroupId"
WHERE ug.role = 'MEMBER' OR ug.role = 'HOST'
ORDER BY g.id
```

### Count of how many orders have updated paymentMethod after a failed charge

```text
with subs as 
(select distinct(id) as id, max("chargeRetryCount") as "chargeRetryCount" from "SubscriptionHistories" sh where "deletedAt" is null and "chargeRetryCount" > 0 group by id)

select oh.id, max("FromCollectiveId") as "FromCollectiveId", max("SubscriptionId"), max("chargeRetryCount") as "subId" 
from "OrderHistories" oh 
left join subs s on oh."SubscriptionId" = s.id
where "chargeRetryCount" > 0
group by oh.id having count("PaymentMethodId") > 1
```

## Revenue and transaction splits by month with all currencies converted to USD

```text
-- Revenue and transaction splits by month with all currencies
-- converted to USD.
--
-- Note: the exchange rates are from July 10 2020

with conversions as (select
    date_trunc('month', t."createdAt") as "givenMonth",

    /* deal with currency */
    CASE
        WHEN (t.currency = 'USD') THEN t.amount / 1
        WHEN (t.currency = 'EUR') THEN t.amount / 0.874114
        WHEN (t.currency = 'GBP') THEN t.amount / 0.79071
        WHEN (t.currency = 'MXN') THEN t.amount / 22.66051
        WHEN (t.currency = 'CAD') THEN t.amount / 1.354446
        WHEN (t.currency = 'CHF') THEN t.amount / 0.9392
        WHEN (t.currency = 'UYU') THEN t.amount / 43.695617
        WHEN (t.currency = 'AUD') THEN t.amount / 1.426737
        WHEN (t.currency = 'INR') THEN t.amount / 74.77525
        WHEN (t.currency = 'JPY') THEN t.amount / 107.175937
        WHEN (t.currency = 'NZD') THEN t.amount / 1.522297
        WHEN (t.currency = 'NGN') THEN t.amount / 388.000345
        WHEN (t.currency = 'CZK') THEN t.amount / 23.274006
        WHEN (t.currency = 'BRL') THEN t.amount / 5.357999
        WHEN (t.currency = 'SEK') THEN t.amount / 8.981097
        ELSE 0
    END AS "amountInUSD",
    CASE
        WHEN (t."data"->>'isFeesOnTop' = 'true' AND t."type" = 'CREDIT' AND t."CollectiveId" = 1) THEN t."amount"
        WHEN (t.currency = 'USD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1
        WHEN (t.currency = 'EUR') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 0.874114
        WHEN (t.currency = 'GBP') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 0.79071
        WHEN (t.currency = 'MXN') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 22.66051
        WHEN (t.currency = 'CAD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1.354445
        WHEN (t.currency = 'CHF') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 0.9392
        WHEN (t.currency = 'UYU') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 43.695617
        WHEN (t.currency = 'AUD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1.426737
        WHEN (t.currency = 'INR') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 74.77525
        WHEN (t.currency = 'JPY') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 107.175937
        WHEN (t.currency = 'NZD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1.522297
        WHEN (t.currency = 'NGN') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 388.000345
        WHEN (t.currency = 'CZK') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 23.274006
        WHEN (t.currency = 'BRL') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 5.357999
        WHEN (t.currency = 'SEK') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 8.981097
        ELSE 0
    END AS "platformFeeInUSD",

    /*
    Generate donations categories
    - added-funds (manually added funds - we didn't get a platform fee)
    // for rest of these we charge a fee
    - recurringMonthlyNew (new monthly subscription in this month)
    - recurringMonthlyOld (carryover monthly subscription in this month)
    - recurringAnnualNew (new annual subscription this month)
    - recurringAnnualOld (carryover annual subscription renewed this month)
    - one-time (one-time donations)
    */

    CASE
        WHEN
            t.amount > 0 AND t."OrderId" IS NOT NULL AND
            (t."platformFeeInHostCurrency" = 0 OR t."platformFeeInHostCurrency" IS NULL)
        THEN 1
        ELSE 0
    END AS addedFunds,


    CASE
        WHEN t.amount > 0 AND
        d."SubscriptionId" is NULL AND
        (t."platformFeeInHostCurrency" is not null AND t."platformFeeInHostCurrency" != 0)
        THEN 1
        ELSE 0
    END AS oneTimeDonations,

    CASE
        WHEN
            t.amount > 0 AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'month%'
        THEN 1
        ELSE 0
    END AS recurringMonthlyTotal,

    CASE
        WHEN
            t.amount > 0 AND t."OrderId" IS NOT NULL AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'month%' AND
            date_trunc('month', t."createdAt") = date_trunc('month', s."activatedAt")
        THEN 1
        ELSE 0
    END AS recurringMonthlyNew,

    CASE
        WHEN
            t.amount > 0 AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'month%' AND
            date_trunc('month', t."createdAt") > date_trunc('month', s."activatedAt")
        THEN 1
        ELSE 0
    END AS recurringMonthlyOld,

    CASE
        WHEN
            t.amount > 0 AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'year%'
        THEN 1
        ELSE 0
    END AS recurringAnnuallyTotal,

    CASE
        WHEN
            t.amount > 0 AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'year%' AND
            date_trunc('month', t."createdAt") = date_trunc('month', s."activatedAt")
        THEN 1
        ELSE 0
    END AS recurringAnnuallyNew,

    CASE
        WHEN
            t.amount > 0 AND
            (t."platformFeeInHostCurrency" IS NOT NULL AND t."platformFeeInHostCurrency" != 0) AND
            d."SubscriptionId" is NOT NULL AND s."interval" like 'year%' AND
            date_trunc('month', t."createdAt") > date_trunc('month', s."activatedAt")
        THEN 1
        ELSE 0
    END AS recurringAnnuallyOld,

    /*
    Generate expenses categories
    - total (all expenses recorded)
    - manual (submitted but no money exchanged from us)
    - paypal (paid through paypal)
    */

    CASE
        WHEN
            t.amount < 0 AND t."ExpenseId" IS NOT NULL
        THEN 1
        ELSE 0
    END AS totalExpensesRecorded,

    CASE
        WHEN
            t.amount < 0 AND t."ExpenseId" IS NOT NULL AND
            t."PaymentMethodId" IS NULL
        THEN 1
        ELSE 0
    END AS manualExpenses,

    CASE
        WHEN
            t.amount < 0 AND t."ExpenseId" IS NOT NULL AND
            t."PaymentMethodId" IS NOT NULL
        THEN 1
        ELSE 0
    END AS paypalExpenses,

    /*
    Generate user categories
    - backer
    - sponsor (org)
    */

    CASE
        WHEN (fc.type ilike 'user') THEN 1
        ELSE 0
    END as "isUser",

    CASE
        WHEN (fc.type ilike 'organization') THEN 1
        ELSE 0
    END as "isOrg",

    /** isNotRefund: The transaction isn't either a refund or
        refunded. */
    CASE
        WHEN (t."RefundTransactionId" IS NULL) THEN 1
        ELSE 0
    END as isNotRefund,
    /** hasBeenRefunded: A refunded transaction represents the
        original donation from User to Collective */
    CASE
        WHEN (t."RefundTransactionId" IS NOT NULL AND
              t."data"->'refund' IS NULL AND
              t.type = 'CREDIT')
        THEN 1
        ELSE 0
    END as hasBeenRefunded,
    /** isRefund: A refund is true when the transaction represents
        moving funds from Collective to User after a refund. */
    CASE
        WHEN (t."RefundTransactionId" IS NOT NULL AND
              t."data"->'refund' IS NOT NULL AND
              t."type" = 'DEBIT')
        THEN 1
        ELSE 0
    END as isRefund,
    
    CASE
        WHEN (t."data"->>'isFeesOnTop' = 'true' AND t."type" = 'CREDIT' AND t."CollectiveId" = 1) THEN t."amount"
        ELSE 0
    END AS feesOnTop

    FROM "Transactions" t
    LEFT JOIN "Orders" d on t."OrderId" = d.id
    LEFT JOIN "Subscriptions" s on d."SubscriptionId" = s.id
    LEFT JOIN "Collectives" fc on t."FromCollectiveId" = fc.id
    WHERE
        t."deletedAt" IS NULL AND
        t."createdAt" BETWEEN '2020/01/01' AND '2021/01/01' AND
        d."deletedAt" IS NULL AND
        s."deletedAt" IS NULL)

/* End temporary table */

SELECT
    to_char("givenMonth", 'YYYY-mm') as "month",

    /* donations */
    (SUM("amountInUSD" * recurringMonthlyTotal * (isNotRefund + isRefund) +
         "amountInUSD" * recurringAnnuallyTotal * (isNotRefund + isRefund) +
         "amountInUSD" * oneTimeDonations * (isNotRefund + isRefund) +
         "amountInUSD" * addedFunds) / 100)::DECIMAL(10, 0)::money
        AS "totalMoneyBroughtIntoPlatformInUSD",

    (SUM("amountInUSD" * recurringMonthlyTotal * (isNotRefund + isRefund) +
         "amountInUSD" * recurringAnnuallyTotal * (isNotRefund + isRefund) +
         "amountInUSD" * oneTimeDonations * (isNotRefund + isRefund)) / 100)::DECIMAL(10, 0)::money
        AS "totalDonationsMadeOnPlatformInUSD",

    (SUM("amountInUSD" * isRefund / 100))::DECIMAL(10, 0)::money
        AS "refundTransactions",

    (SUM("platformFeeInUSD")/-100)::DECIMAL(10,0)::money AS "OCFeeInUSD",

    /* monthly donations */

      /* total donations */
      (SUM("amountInUSD" * recurringMonthlyTotal * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringMonthlyTotalDonationsInUSD",
      (SUM("amountInUSD" * recurringMonthlyTotal * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringMonthlyTotalDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringMonthlyTotal * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringMonthlyTotalDonationsFromOrgsInUSD",

      /* old donations */
      (SUM("amountInUSD" * recurringMonthlyOld * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringMonthlyOldDonationsInUSD",
      (SUM("amountInUSD" * recurringMonthlyOld * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringMonthlyOldDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringMonthlyOld * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringMonthlyOldDonationsFromOrgsInUSD",

      /* new donations */
      (SUM("amountInUSD" * recurringMonthlyNew * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringMonthlyNewDonationsInUSD",
      (SUM("amountInUSD" * recurringMonthlyNew * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringMonthlyNewDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringMonthlyNew * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringMonthlyNewDonationsFromOrgsInUSD",

    /* annual donations */

      /* total donations */
      (SUM("amountInUSD" * recurringAnnuallyTotal * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringAnnualDonationsInUSD",
      (SUM("amountInUSD" * recurringAnnuallyTotal * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyTotalDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringAnnuallyTotal * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyTotalDonationsFromOrgsInUSD",

      /* old donations */
      (SUM("amountInUSD" * recurringAnnuallyOld * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringAnnuallyOldDonationsInUSD",
      (SUM("amountInUSD" * recurringAnnuallyOld * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyOldDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringAnnuallyOld * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyOldDonationsFromOrgsInUSD",

      /* new donations */
      (SUM("amountInUSD" * recurringAnnuallyNew * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "recurringAnnuallyNewDonationsInUSD",
      (SUM("amountInUSD" * recurringAnnuallyNew * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyNewDonationsFromUsersInUSD",
      (SUM("amountInUSD" * recurringAnnuallyNew * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "recurringAnnuallyNewDonationsFromOrgsInUSD",

    /* one-time donations */
    (SUM("amountInUSD" * oneTimeDonations * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "oneTimeDonationsInUSD",
    (SUM("amountInUSD" * oneTimeDonations * (isNotRefund + isRefund) * "isUser")/100)::DECIMAL(10,0)::money AS "oneTimeDonationsFromUsersInUSD",
    (SUM("amountInUSD" * oneTimeDonations * (isNotRefund + isRefund) * "isOrg")/100)::DECIMAL(10,0)::money AS "oneTimeDonationsFromOrgsInUSD",

    /* added funds */
    (SUM("amountInUSD" * addedFunds * (isNotRefund + isRefund))/100):: DECIMAL(10,0)::money AS "addedFundsInUSD",

    /* expenses */
    (SUM("amountInUSD" * totalExpensesRecorded * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "expensesPaidInUSD",
    (SUM("amountInUSD" * manualExpenses * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "manualExpensesInUSD",
    (SUM("amountInUSD" * paypalExpenses * (isNotRefund + isRefund))/100)::DECIMAL(10,0)::money AS "paypalExpensesInUSD",

    /* counts of transactions */
    COUNT(*)/2 AS "numTransactions",
    SUM(recurringMonthlyTotal + recurringAnnuallyTotal + oneTimeDonations + addedFunds) AS "numMoneyBroughtInEntries",
    SUM(recurringMonthlyTotal + recurringAnnuallyTotal + oneTimeDonations) AS "numDonationMadeOnPlatformEntries",

    /* monthly */
    SUM(recurringMonthlyTotal * (isNotRefund + isRefund)) as "numRecurringMonthlyTotalDonations",
    SUM(recurringMonthlyTotal * (isNotRefund + isRefund) * "isUser") as "numRecurringMonthlyTotalDonationsFromUsers",
    SUM(recurringMonthlyTotal * (isNotRefund + isRefund) * "isOrg") as "numRecurringMonthlyTotalDonationsFromOrgs",

    SUM(recurringMonthlyOld * (isNotRefund + isRefund)) as "numRecurringMonthlyOldDonations",
    SUM(recurringMonthlyOld * (isNotRefund + isRefund) * "isUser") as "numRecurringMonthlyOldDonationsFromUsers",
    SUM(recurringMonthlyOld * (isNotRefund + isRefund) * "isOrg") as "numRecurringMonthlyOldDonationsFromOrgs",

    SUM(recurringMonthlyNew * (isNotRefund + isRefund)) as "numRecurringMonthlyNewDonations",
    SUM(recurringMonthlyNew * (isNotRefund + isRefund) * "isUser") as "numRecurringMonthlyNewDonationsFromUsers",
    SUM(recurringMonthlyNew * (isNotRefund + isRefund) * "isOrg") as "numRecurringMonthlyNewDonationsFromOrgs",

    /* annually */
    SUM(recurringAnnuallyTotal * (isNotRefund + isRefund)) as "numRecurringAnnualDonations",
    SUM(recurringAnnuallyTotal * (isNotRefund + isRefund) * "isUser") as "numRecurringAnnuallyTotalDonationsFromUsers",
    SUM(recurringAnnuallyTotal * (isNotRefund + isRefund) * "isOrg") as "numRecurringAnnuallyTotalDonationsFromOrgs",

    SUM(recurringAnnuallyOld * isNotRefund) as "numRecurringAnnuallyOldDonations",
    SUM(recurringAnnuallyOld * isNotRefund * "isUser") as "numRecurringAnnuallyOldDonationsFromUsers",
    SUM(recurringAnnuallyOld * isNotRefund * "isOrg") as "numRecurringAnnuallyOldDonationsFromOrgs",

    SUM(recurringAnnuallyNew * (isNotRefund + isRefund)) as "numRecurringAnnuallyNewDonations",
    SUM(recurringAnnuallyNew * (isNotRefund + isRefund) * "isUser") as "numRecurringAnnuallyNewDonationsFromUsers",
    SUM(recurringAnnuallyNew * (isNotRefund + isRefund) * "isOrg") as "numRecurringAnnuallyNewDonationsFromOrgs",

    /* one-time */
    SUM(oneTimeDonations * (isNotRefund + isRefund)) as "numOneTimeDonations",
    SUM(oneTimeDonations * (isNotRefund + isRefund) * "isUser") as "numOneTimeDonationsFromUsers",
    SUM(oneTimeDonations * (isNotRefund + isRefund) * "isOrg") as "numOneTimeDonationsFromOrgs",

    SUM(addedFunds) as "numAddedFunds",
    SUM(totalExpensesRecorded) as "numExpensesPaid",
    SUM(feesOnTop) as "feesOnTop"

FROM conversions
GROUP BY "givenMonth"
ORDER BY "givenMonth"
```

