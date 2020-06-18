---
description: Describe the moderation system works and how the team should use it
---

# Internal moderation tools

{% hint style="info" %}
For user documentation about moderation, see [Moderation](../product/moderation.md)
{% endhint %}

{% hint style="warning" %}
We don't provide any interface for the moderation features yet. To access them you'll need a direct access to the database - through Forest, PgAdmin, DBeaver...etc
{% endhint %}

## Limit user account

#### What

* All features \(submitting expenses, commenting...\) will be blocked for this user.
* A warning will be displayed at the top of all pages for this user.

![](../.gitbook/assets/image%20%287%29%20%281%29.png)

#### When

User is clearly spamming or trying malicious things on the platform.

#### How

Set `User.data.features.ALL` to `false`

### Limit specific feature

#### What

The specified feature will be blocked for this user.

#### When

User has a strange behavior with a feature, or is abusing a specific one. We want to prevent the use of it without blocking access to the others. For example, users having bad language in a conversation - we want to prevent them from commenting, but it's ok to have them creating orders.

#### How

Set `User.data.features.{FEATURE_NAME}` to `false`

To see a list of all features names, check [https://github.com/opencollective/opencollective-api/blob/master/server/constants/features.ts](https://github.com/opencollective/opencollective-api/blob/master/server/constants/features.ts)

**Example**

* Disable access to expenses: `User.data.features.EXPENSES = false` 
* Disable access to conversations: `User.data.features.CONVERSATIONS = false` 

## Ban users & collectives permanently

First make sure that users don't have any data that is problematic to delete:

```sql
WITH profiles_to_ban AS (
    SELECT * FROM "Collectives"
    WHERE slug = ANY($collectiveSlugs)
) SELECT 
  COUNT(c.id) AS nb_collectives,
    COUNT(t.id) AS nb_transactions, 
    COUNT(e.id) AS nb_expenses,
  COUNT(o.id) AS nb_orders
FROM 
    profiles_to_ban c
LEFT JOIN 
    "Transactions" t ON t."CollectiveId" = c.id OR t."FromCollectiveId" = c.id
LEFT JOIN
    "Expenses" e ON e."CollectiveId" = c.id AND status = 'PAID'
LEFT JOIN
    "Orders" o ON o."FromCollectiveId" = c.id OR o."CollectiveId" = c.id AND o.status != 'ERROR'
```

If that's ok and you're 100% sure that all these collectives are SPAM, you can also include the collective admins:

```sql
SELECT mc.slug 
FROM "Members" m
INNER JOIN "Collectives" c ON m."CollectiveId" = c.id
INNER JOIN "Collectives" mc ON m."MemberCollectiveId" = mc.id
WHERE m."role" = 'ADMIN' AND m."CollectiveId" = c.id
AND c.slug = ANY($collectiveSlugs)
AND c."deletedAt" IS NULL
```

Make sure you re-run the first query with these new entries to make sure it's safe to ban them.

Please refer to [this query](https://github.com/opencollective/opencollective-api/blob/master/sql/ban-collectives.sql) to ban users and collectives from the platforms. You'll need to input a list of collective slugs to the query. When banning a user, all the related data \(memberships, expenses, comments...etc\) are \(soft-\) deleted. A special flag is set in `user.data.isBanned` is set to `true`.

User's email will be locked in database, to that it will be impossible for the user to register with the same email address.

