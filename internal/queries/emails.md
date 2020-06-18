# Emails

Queries to get an export of email addresses from the database for various communications.

## Get Backers \(name, email, totalDonations, lastDonation\) of a collective

```sql
WITH constants AS (
      SELECT id FROM "Collectives" WHERE slug='chsf'
    ), total_donations AS (
      SELECT
        max("FromCollectiveId") as "FromCollectiveId",
        SUM(amount) as amount,
        max("createdAt") as "lastDonationAt"
      FROM "Transactions" t
      WHERE t."CollectiveId" IN (SELECT id FROM constants) AND t.amount >= 0
      GROUP BY "FromCollectiveId"
    )

    SELECT
      m."MemberCollectiveId" as id,
      m."createdAt" as "createdAt",
      td."lastDonationAt" as "lastDonation",
      u."firstName" as "firstName",
      u."lastName" as "lastName",
      u.email as email,
      m.role as role,
      c.website as website,
      c."twitterHandle" as "twitterHandle",
      td.amount as "totalDonations"
    FROM "Members" m
    LEFT JOIN "Collectives" c ON c.id = m."MemberCollectiveId"
    LEFT JOIN "Users" u on u."CollectiveId" = c.id
    LEFT JOIN total_donations td ON td."FromCollectiveId" = m."MemberCollectiveId"
    WHERE m."CollectiveId" IN (SELECT id FROM constants)
    AND m."deletedAt" IS NULL
    ORDER BY "totalDonations" DESC, m."createdAt" ASC
```

## Get RSVPs to an event

```sql
SELECT 
  to_char(o."createdAt", 'YYYY-MM-DD HH:MI') as "date", o.quantity, (o."totalAmount" / 100) as "totalAmount", o.currency, o."TierId", o.description, 
  c.name, c.description, u.email, c."twitterHandle", c.website, c.image 
FROM 
  "Orders" o
LEFT JOIN "Collectives" c ON o."FromCollectiveId" = c.id
LEFT JOIN "Users" u ON u."CollectiveId" = c.id
LEFT JOIN "Collectives" e ON e.id = o."CollectiveId" 
WHERE e.slug = 'september-2018'
ORDER BY o."createdAt" DESC
```

## Fetch all email addresses

```sql
SELECT email FROM "Users" where "deletedAt" is null
```

## Fetch email addresses of all admins of collectives on a given host

```sql
SELECT c.slug as collective, uc.slug as profile, m.role, u.email
FROM "Members" m
LEFT JOIN "Collectives" uc ON uc.id = m."MemberCollectiveId"
LEFT JOIN "Collectives" c ON c.id = m."CollectiveId"
LEFT JOIN "Users" u ON u."CollectiveId" = m."MemberCollectiveId"
WHERE m.role='ADMIN' AND m."CollectiveId" IN (SELECT "CollectiveId" FROM "Members" WHERE role = 'HOST' AND "MemberCollectiveId"=11004)
AND u.email IS NOT NULL
AND c."isActive" IS TRUE
AND c."deletedAt" IS NULL
```

## Opt-in newsletter emails

```sql
-- Export email for newsletter
SELECT "createdAt", "firstName", "lastName", "email"
FROM "Users"
WHERE "newsletterOptIn" IS TRUE
  AND "deletedAt" IS NULL
  AND "createdAt" >= current_date - INTERVAL '2 months' -- Optional: to get only last 2 month's emails
```

## All admins of organizations

\(that have sponsored at least one "open source", "diversity in tech" or "Tech meetups" collective\)

```sql
/* 820 collectives selected */
with collectives AS (
  SELECT id, slug, tags
  FROM "Collectives"
  WHERE "isActive" IS TRUE
    AND "deletedAt" IS NULL
    AND (tags @> '{"Tech meetups"}' OR tags @> '{"diversity in tech"}' OR tags @> '{"open source"}')
),
/* getting all sponsors of those collectives (881 sponsors, 560 distinct) */
"sponsorsCollectives" AS (
  SELECT DISTINCT ON (c.slug) c.*
  FROM "Members" m LEFT JOIN "Collectives" c ON c.id=m."MemberCollectiveId"
  WHERE "CollectiveId" IN (SELECT id FROM collectives)
    AND role='BACKER' AND m."deletedAt" IS NULL
    AND c.type='ORGANIZATION'
),
/* getting all admins of those sponsors (594 distinct admins) */
"orgAdminCollectives" AS (
  SELECT DISTINCT ON (c.slug) c.*
  FROM "Members" m LEFT JOIN "Collectives" c ON c.id=m."MemberCollectiveId"
  WHERE "CollectiveId" IN (SELECT id FROM "sponsorsCollectives")
    AND role='ADMIN' AND m."deletedAt" IS NULL
    AND c.type='USER'
)
/* getting email addresses of those admins (593 distinct email addresses) */
SELECT DISTINCT ON (u.email) ac.slug as org, u."firstName", u."lastName", u.email
FROM "Users" u LEFT JOIN "orgAdminCollectives" ac ON u."CollectiveId" = ac.id
WHERE u."deletedAt" IS NULL AND email IS NOT NULL AND ac.id IS NOT NULL
```

