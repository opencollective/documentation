# Queries

## Activity

#### Active hosts, collectives and backers per month

```text
SELECT 
    to_char(date_trunc('month', t."createdAt"), 'YYYY-mm') as "month", 
    COUNT(DISTINCT(t."HostCollectiveId")) as "activeHosts", 
    COUNT(DISTINCT(t."CollectiveId")) as "activeCollectives",
    COUNT(DISTINCT(t."FromCollectiveId")) as "activeBackers"
FROM "Transactions" t

LEFT JOIN "Collectives" c On (t."CollectiveId" = c.id AND c.type LIKE 'COLLECTIVE')

WHERE t."deletedAt" IS NULL AND ((t."OrderId" IS NOT NULL AND t.type LIKE 'CREDIT') 
    OR (t."ExpenseId" IS NOT NULL AND t.type LIKE 'DEBIT')) AND
    t."createdAt" BETWEEN '2016/01/01' AND '2019/01/01'
GROUP BY "month" ORDER BY "month"
```

per year with total donations and platform fees per currency \(USD and EUR\):

```text
SELECT 
    to_char(date_trunc('year', t."createdAt"), 'YYYY') as "year", 
    COUNT(DISTINCT(t."HostCollectiveId")) as "activeHosts", 
    COUNT(DISTINCT(t."CollectiveId")) as "activeCollectives",
    COUNT(DISTINCT(t."FromCollectiveId")) as "activeBackers",
    SUM(
    CASE WHEN t."OrderId" IS NOT NULL AND t.type='CREDIT' AND t.currency = 'USD' THEN t.amount / 100
    END
    ) as "totalDonations (USD)",
    SUM(
    CASE WHEN t."OrderId" IS NOT NULL AND t.type='CREDIT' AND t.currency = 'EUR' THEN t.amount / 100
    END
    ) as "totalDonations (EUR)",
    SUM(
    CASE WHEN t."OrderId" IS NOT NULL AND t.type='CREDIT' AND t.currency = 'USD' THEN -t."platformFeeInHostCurrency" / 100
    END
    ) as "Platform fee (USD)",
    SUM(
    CASE WHEN t."OrderId" IS NOT NULL AND t.type='CREDIT' AND t.currency = 'EUR' THEN -t."platformFeeInHostCurrency" / 100
    END
    ) as "Platform fee (EUR)"
FROM "Transactions" t

LEFT JOIN "Collectives" c On (t."CollectiveId" = c.id AND c.type LIKE 'COLLECTIVE')

WHERE t."deletedAt" IS NULL
AND ((t."OrderId" IS NOT NULL AND t.type LIKE 'CREDIT') 
    OR (t."ExpenseId" IS NOT NULL AND t.type LIKE 'DEBIT'))
GROUP BY "year" ORDER BY "year"
```

#### Active backers per month

```text
select 
    date_trunc('month', t."createdAt") as "month", 
    count(distinct("FromCollectiveId")) 
from "Transactions" t

where "deletedAt" is null 
    and "FromCollectiveId" != "HostCollectiveId" 
    and type ilike 'credit'
GROUP BY "month" ORDER BY "month"
```

#### Total \(cumulative backers\) up to a date

```text
select 
    count(distinct("FromCollectiveId"))

from "Transactions" t

where "deletedAt" is null and "FromCollectiveId" != "HostCollectiveId" and type ilike 'credit' and "createdAt" < '2017-11-01 00:00:00.00-00'
```

#### Collectives active \(any txn\) after 3 months, per monthly cohort

For all the collectives created in a given month, how many of them are still active after 3 months?

```text
WITH "collectivesCreated" as (
    SELECT 
        c."createdAt" as "createdAt", 
        c.slug, 
        min(t."createdAt") as "firstTransaction", 
        max(t."createdAt") as "latestTransaction", 
        EXTRACT(day from (min(t."createdAt") - c."createdAt")) as "daysToFirstTransaction",
        EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) as "activeDays",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 7 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 7 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active7",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 14 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 14 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active14",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 30 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 30 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active30",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 60 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 60 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active60",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 90 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 90 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active90",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 180 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 180 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active180",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 365 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 365 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active365"

    FROM "Collectives" c 
    LEFT JOIN "Transactions" t ON (c.id=t."CollectiveId" and t."createdAt" < '2018-02-01')
    WHERE c.type ilike 'collective'
    GROUP BY c.id)

SELECT 
    to_char("createdAt", 'YYYY-mm') as "month", 
    count(*) as "totalCollectivesCreated", 
    SUM(active7) as "active7days",
    SUM(active14) as "active14days",
    SUM(active30) as "active30days",
    SUM(active60) as "active60days",
    SUM(active90) as "active90days",
    SUM(active180) as "active180days",
    SUM(active365) as "active365days",
    ROUND((SUM(active7)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent7days",
    ROUND((SUM(active14)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent14days",
    ROUND((SUM(active30)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent30days",
    ROUND((SUM(active60)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent60days",
    ROUND((SUM(active90)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent90days",
    ROUND((SUM(active180)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent180days",
    ROUND((SUM(active365)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent365days"

FROM "collectivesCreated" 
GROUP BY month ORDER BY month NULLS FIRST
```

#### Collectives active \(expenses-only\) after 3 months, per monthly cohort

For all the collectives created in a given month, how many of them are still active after 3 months?

```text
WITH "collectivesCreated" as (
    SELECT 
        c."createdAt" as "createdAt", 
        c.slug, 
        min(t."createdAt") as "firstTransaction", 
        max(t."createdAt") as "latestTransaction", 
        EXTRACT(day from (min(t."createdAt") - c."createdAt")) as "daysToFirstTransaction",
        EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) as "activeDays",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 7 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 7 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active7",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 14 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 14 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active14",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 30 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 30 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active30",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 60 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 60 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active60",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 90 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 90 THEN 0
            WHEN min(t."createdAt") IS NULL THEN 0
        END as "active90"

    FROM "Collectives" c 
    LEFT JOIN "Transactions" t ON (c.id=t."CollectiveId" and t."ExpenseId" is not null and t."createdAt" < '2018-02-01')
    WHERE c.type ilike 'collective'
    GROUP BY c.id)

SELECT 
    to_char("createdAt", 'YYYY-mm') as "month", 
    count(*) as "totalCollectivesCreated", 
    SUM(active7) as "active7days",
    SUM(active14) as "active14days",
    SUM(active30) as "active30days",
    SUM(active60) as "active60days",
    SUM(active90) as "active90days",
    ROUND((SUM(active7)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent7days",
    ROUND((SUM(active14)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent14days",
    ROUND((SUM(active30)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent30days",
    ROUND((SUM(active60)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent60days",
    ROUND((SUM(active90)::FLOAT::numeric/count(*)::FLOAT::numeric),3) AS "percent90days"

FROM "collectivesCreated" 
GROUP BY month ORDER BY month NULLS FIRST
```

#### Monthly subscriptions active after 3 months, per monthly cohort

For all the monthly subscriptions that started in a given month, how many are still active after 3 months?

```text
WITH "activeSubscriptions" as (
    SELECT 
        s."createdAt" as "createdAt", 
        min(t."createdAt") as "firstTransaction", 
        max(t."createdAt") as "latestTransaction", 
        EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) as "activeDays",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 90 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 90 THEN 0
        END as "active90",

        CASE 
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) >= 60 THEN 1
            WHEN EXTRACT(day from (max(t."createdAt") - min(t."createdAt"))) < 60 THEN 0
        END as "active60",

        CASE
            WHEN (max(fc.type) ilike 'user') THEN 1
            ELSE 0
        END as "isUser",

        CASE
            WHEN (max(fc.type) ilike 'organization') THEN 1
            ELSE 0
        END as "isOrg"

    FROM "Transactions" t 

    LEFT JOIN "Orders" d ON (d.id=t."OrderId" and t."createdAt" < '2018-03-01') 
    LEFT JOIN "Subscriptions" s ON s.id=d."SubscriptionId" 
    LEFT JOIN "Collectives" fc on fc.id = d."FromCollectiveId"

    WHERE s.interval = 'month'
    GROUP BY s.id
)

SELECT 
    to_char("createdAt", 'YYYY-mm') as "month", 
    /* total subscription counts */
    count(*) as "totalSubscriptionsCreated",
    SUM("isUser") as "totalSubscriptionsCreatedByUsers",
    SUM("isOrg") as "totalSubscriptionsCreatedByOrgs",

    /* 60-day subscription calcs */
    SUM(active60) as "totalActiveAfter60days",  
    SUM(active60 * "isUser") as "totalActiveByUsersAfter60days",
    SUM(active60 * "isOrg") as "totalActiveByOrgsAfter60days",

    /* 90-day subscription calcs */
    SUM(active90) as "totalActiveAfter90days",
    SUM(active90 * "isUser") as "totalActiveByUsersAfter90days",
    SUM(active90 * "isOrg") as "totalActiveByOrgsAfter90days"    
FROM "activeSubscriptions" GROUP BY month ORDER BY month
```

#### Measure activated and deactivated Subs per month

```text
with subs as (select s.id, s."activatedAt", s."deactivatedAt" from "Orders" o

left join "Subscriptions" s on s.id = o."SubscriptionId"

where o."processedAt" is not null and o."SubscriptionId" is not null and o."deletedAt" is null and s."deletedAt" is null and s."activatedAt" is not null)

select 
    to_char("activatedAt", 'YYYY-mm') as "month", /* change to "deactivatedAt" to get deactivated count */
    count(*) as "subsCount"

from subs

Group by "month" order by "month"
```

#### Top collectives of a month

```text
SELECT sum(amount) / 100 as "totalAmount", max(t.currency) as currency, max(c.slug) as collective, max(c.website) as website, max(c."twitterHandle") as twitter, max(c.description) as description
FROM "Transactions" t
LEFT JOIN "Collectives" c ON c.id = t."CollectiveId"
WHERE t."createdAt" > '2018-03-01'
  AND t."createdAt" < '2018-04-01'
  AND t.type='CREDIT'
  AND t."platformFeeInHostCurrency" < 0
 GROUP BY t."CollectiveId"
 ORDER BY "totalAmount" DESC
```

#### Top new collectives of a month

```text
SELECT sum(amount) / 100 as "totalAmount", max(t.currency) as currency, max(c.slug) as collective, max(c.website) as website, max(c."twitterHandle") as twitter, max(c.description) as description
FROM "Transactions" t
LEFT JOIN "Collectives" c ON c.id = t."CollectiveId"
WHERE t."createdAt" > '2018-03-01'
  AND c."createdAt" > '2018-03-01'
  AND t."createdAt" < '2018-04-01'
  AND c."createdAt" < '2018-04-01'
  AND t.type='CREDIT'
  AND t."platformFeeInHostCurrency" < 0
 GROUP BY t."CollectiveId"
 ORDER BY "totalAmount" DESC
```

#### Top collectives by number of new backers

```text
SELECT max(c.slug) as collective, max(c."createdAt") as "createdAt", count(*) as "totalNewBackers", max(c.website) as website, max(c."twitterHandle") as twitter, max(c.description) as description
FROM "Members" m
LEFT JOIN "Collectives" c ON m."CollectiveId" = c.id
WHERE m."createdAt" > '2018-03-01'
  AND m."createdAt" < '2018-04-01'
  AND m.role='BACKER'
GROUP BY "CollectiveId"
ORDER BY "totalNewBackers" DESC
```

#### Top backers of a month

```text
with res as (SELECT CONCAT('https://opencollective.com/', max(backer.slug)) as backer, sum(amount) / 100 as "amount", max(t.currency) as currency, string_agg(DISTINCT c.slug, ', ') AS "collectives supported", max(backer."twitterHandle") as twitter, max(backer.description) as description, max(backer.website) as website
FROM "Transactions" t
LEFT JOIN "Collectives" backer ON backer.id = t."FromCollectiveId"
LEFT JOIN "Collectives" c ON c.id = t."CollectiveId"
WHERE t."createdAt" > '2018-05-01'
  AND t."createdAt" < '2018-06-01'
  AND t.type='CREDIT'
  AND t."platformFeeInHostCurrency" < 0
  AND t."deletedAt" IS NULL
 GROUP BY t."FromCollectiveId"
 ORDER BY "amount" DESC)
 SELECT row_number() over(order by "amount" DESC) as "#", * from res
```

#### All sponsors \(all months\)

```text
select
    to_char(t."createdAt", 'YYYY-mm') as "month",
    sum(t.amount)/100 as amount,
    max(t.currency) as currency,
    c.slug as "fromCollective"

from "Transactions" t
inner join "Collectives" c on c.id = t."FromCollectiveId"

where
    amount > 0 and
    "CollectiveId" != 1 and
    t."platformFeeInHostCurrency" < 0 and
    t."deletedAt" IS NULL and
    ((t."OrderId" IS NOT NULL AND t.type LIKE 'CREDIT')
    OR (t."ExpenseId" IS NOT NULL AND t.type LIKE 'DEBIT'))
    AND c.type ilike 'organization'
    AND ((t."RefundTransactionId" IS NOT NULL AND
          t."data"->'refund' IS NULL AND
          t.type = 'CREDIT') OR t."RefundTransactionId" IS NULL)

group by c.slug, "month"
order by c.slug
```

#### Total contributions from new sponsors Vs. old sponsors per month

```text
with old as (
  SELECT
    to_char(date_trunc('month', t."createdAt"), 'YYYY-mm') as "month",
    count(c.id) as "count",
    min(t."createdAt") as "firstTransaction",
    SUM("amount") / 100 as "totalAmount",
    t.currency
  FROM "Transactions" t
  LEFT JOIN "Collectives" c ON c.id = t."FromCollectiveId"
  WHERE
    t."createdAt" >= '2018-01-01'
    AND t."deletedAt" IS NULL
    AND t.type='CREDIT'
    AND c.type='ORGANIZATION'
    AND c."createdAt" < date_trunc('month', t."createdAt")::DATE -- organizations created before the first day of the month
  GROUP BY t.currency, month
),
new as (
  SELECT
    to_char(date_trunc('month', t."createdAt"), 'YYYY-mm') as "month", count(c.id) as "count",
    SUM("amount") / 100 as "totalAmount",
    t.currency
  FROM "Transactions" t
  LEFT JOIN "Collectives" c ON c.id = t."FromCollectiveId"
  WHERE
    t."createdAt" >= '2018-01-01'
    AND t."deletedAt" IS NULL
    AND t.type='CREDIT'
    AND c.type='ORGANIZATION'
    AND c."createdAt" >= date_trunc('month', t."createdAt")::DATE -- organizations created after the first day of the month
  GROUP BY t.currency, month
)

SELECT
  old.month, old.currency,
  new.count as "# new orgs", new."totalAmount",
  old.count as "# old orgs", old."totalAmount",
  to_char(100.0 * new."totalAmount" /(old."totalAmount"+new."totalAmount")::float,'999D99%') as "% of new orgs"
FROM old
LEFT JOIN new ON old.currency = new.currency AND old.month = new.month
ORDER BY month DESC
```

Note: you can limit this view to one single currency by adding `WHERE old.currency = 'USD'`:

```text
FROM old
LEFT JOIN new ...
WHERE old.currency = 'USD'
ORDER BY month DESC
```

#### New sponsors created

```text
SELECT slug, coalesce(sum(t.amount), 0)/100 as "amountDonated" from "Collectives" c inner join "Transactions" t on c.id = t."FromCollectiveId" 
where c."createdAt" >= '2018-05-1' and c."createdAt" < '2018-06-1' 
and c.type = 'ORGANIZATION' AND t.type = 'CREDIT' group by c.slug 
having coalesce(sum(t.amount), 0) > 100;
```

#### Total $ received per collective \(all months\)

```text
select 
    to_char(t."createdAt", 'YYYY-mm') as "month",
    sum(t.amount)/100 as amount,
    max(t.currency) as currency,
    c.slug as "collective"

from "Transactions" t
inner join "Collectives" c on c.id = t."CollectiveId"

where 
    amount > 0 and 
    "CollectiveId" != 1 and
    t."platformFeeInHostCurrency" < 0 and
    t."deletedAt" IS NULL and
    ((t."OrderId" IS NOT NULL AND t.type LIKE 'CREDIT') 
    OR (t."ExpenseId" IS NOT NULL AND t.type LIKE 'DEBIT'))


group by c.slug, "month"
order by c.slug
```

#### New collectives created

```text
SELECT 
    to_char(date_trunc('week', c."createdAt"), 'YYYY-mm-dd') as "month",
    count(*) filter (where tags::text ilike '%open source%') as "newOpenSourceCollectives",
    count(*) filter (where tags::text ilike '%tech meetup%') as "newTechMeetups",
    count(*) filter (where ((tags::text not ilike '%open source%' AND tags::text not ilike '%tech meetup%') OR tags is null)) as "newOtherCollectives",
    COUNT(*) as "totalNewCollectives"
FROM "Collectives" c

WHERE c.type ilike 'collective' and "createdAt" is not null and "createdAt" > '2016-01-01'

GROUP BY "month" ORDER BY "month"
```

### Revenue calcs

#### Revenue and transaction splits by month with all currencies converted to USD

```text
-- Revenue and transaction splits by month with all currencies
-- converted to USD.
--
-- Note: the exchange rates are from November 8 2018

with conversions as (select
    date_trunc('month', t."createdAt") as "givenMonth",

    /* deal with currency */
    CASE
        WHEN (t.currency = 'USD') THEN t.amount / 1
        WHEN (t.currency = 'EUR') THEN t.amount / 0.88
        WHEN (t.currency = 'MXN') THEN t.amount / 20.09
        WHEN (t.currency = 'AUD') THEN t.amount / 1.39
        WHEN (t.currency = 'CAD') THEN t.amount / 1.31
        WHEN (t.currency = 'INR') THEN t.amount / 73.02
        WHEN (t.currency = 'SEK') THEN t.amount / 9.07
        WHEN (t.currency = 'GBP') THEN t.amount / 0.77
        ELSE 0
    END AS "amountInUSD",
    CASE
        WHEN (t.currency = 'USD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1
        WHEN (t.currency = 'EUR') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 0.88
        WHEN (t.currency = 'MXN') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 20.09
        WHEN (t.currency = 'AUD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1.39
        WHEN (t.currency = 'CAD') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 1.31
        WHEN (t.currency = 'INR') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 73.02
        WHEN (t.currency = 'SEK') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 9.07
        WHEN (t.currency = 'GBP') AND t.amount > 0 THEN t."platformFeeInHostCurrency" / 0.77
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
    END as isRefund

    FROM "Transactions" t
    LEFT JOIN "Orders" d on t."OrderId" = d.id
    LEFT JOIN "Subscriptions" s on d."SubscriptionId" = s.id
    LEFT JOIN "Collectives" fc on t."FromCollectiveId" = fc.id
    WHERE
        t."deletedAt" IS NULL AND
        t."createdAt" BETWEEN '2016/01/01' AND '2020/01/01' AND
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
    SUM(totalExpensesRecorded) as "numExpensesPaid"

FROM conversions
GROUP BY "givenMonth"
ORDER BY "givenMonth"
```

#### Monthly gross revenue, split by currency

```text
SELECT 
  "hostCurrency",
  -sum("platformFeeInHostCurrency") / 100 as "revenue",
  date_trunc('month', "createdAt") as "month"
FROM "Transactions"
WHERE "OrderId" IS NOT NULL
  AND type = 'CREDIT'
  AND "deletedAt" IS NULL
  AND "platformFeeInHostCurrency" < 0
GROUP BY "hostCurrency", "month"
ORDER BY month DESC
```

#### Monthly gross revenue, split by recurring vs one-time

```text
select 
    "currency",
    sum("amount") as "origAmount",
    date_trunc('month', "createdAt") as "givenMonth",
    case 
        when "SubscriptionId" is Null THEN false
        else true
    end as "recurring"
 from "Transactions"
 where "type" = 'DONATION' and "PaymentMethodId" is NOT NULL
 GROUP BY "currency", "givenMonth", "recurring"
```

## Fee-related calcs

#### Fees by group by month for all donations.

Note: it doesn't include expenses \(yet\).

```text
select 
    t."GroupId",
    g."name",
    t."txnCurrency",
    sum(t."amount") as "origAmount",
    date_trunc('month', t."createdAt") as "givenMonth",
    cast(sum(t."platformFeeInTxnCurrency") as FLOAT)/100 as "platformFee",
    cast(sum(t."hostFeeInTxnCurrency") AS FLOAT)/100 as "hostFee",
    cast(sum(t."paymentProcessorFeeInTxnCurrency") AS FLOAT)/100 as "stripeFee",
    cast(sum(t."amountInTxnCurrency") as FLOAT)/100 as "totalDonationsInTxnCurrency",
    count(t."id") as "numDonations"
from "Transactions" t
LEFT JOIN "Groups" g on t."GroupId" = g."id"
where "type" = 'DONATION' and "txnCurrency" IS NOT NULL and "PaymentMethodId" is NOT NULL
GROUP By t."GroupId", g."name", t."txnCurrency", "givenMonth"
ORDER BY t."GroupId"
```

#### Active collectives in a month and how much they paid in fees.

You'll need to update the month start and end dates to run it for a particular month and update %name for different organizations.

```text
select 
    t."GroupId",
    g."name",
    sum(t."amount") as "origAmount",
    cast(sum(t."platformFeeInTxnCurrency") as FLOAT)/100 as "platformFee",
    cast(sum(t."hostFeeInTxnCurrency") AS FLOAT)/100 as "hostFee",
    cast(sum(t."paymentProcessorFeeInTxnCurrency") AS FLOAT)/100 as "stripeFee",
    cast(sum(t."amountInTxnCurrency") as FLOAT)/100 as "totalDonationsInTxnCurrency",
    count(t."id") as "numDonations"
from "Transactions" t
LEFT JOIN "Groups" g on t."GroupId" = g."id"
where 
g."slug" like 'wwcode%' and 
t."createdAt" between '2016/05/01' and '2016/05/31'
GROUP By t."GroupId", g."name"
ORDER BY t."GroupId"
```

## Other

#### Amount we are holding for collectives at any given moment

Change UserId to other hosts to find out for anyone else.

```text
select  
    cast(COALESCE(sum(t."netAmountInGroupCurrency"), 0) as float)/100 as "hostBalance"
from "UserGroups" ug
left join "Transactions" t on t."GroupId" = ug."GroupId"

where (ug."UserId" = 40 or ug."UserId" = 772)
    and ug.role like 'HOST' 
    and ug."GroupId" not in (1, 7, 34) /* remove opencollective, tipbox and ispcwa (because it's negative) */
    and t."deletedAt" is null
```

#### Estimate how many subscriptions are marked active but haven't had a transaction in last 30 days

```text
with recentdonations as (
    SELECT distinct("DonationId")

    FROM "Transactions" 

    WHERE "createdAt" between '2016/10/29' and '2016/11/30'
        and "DonationId" is not null and "deletedAt" is null
)

select 
    d.id as "DonationId",
    d."UserId" as "UserId",
    d."GroupId" as "GroupId",
    d.amount as "Amount",
    d."createdAt" as "DonationCreatedAt",
    d.currency as currency
from "Donations" d

left join "Subscriptions" s on d."SubscriptionId" = s.id

where 
    d.id not in (select "DonationId" from recentdonations)
and d."deletedAt" is null
and s."deletedAt" is null
and s."isActive" = true 
and d."isProcessed" = true

order by currency;
```

