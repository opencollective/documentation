---
description: Process for the team to verify & activate a pledge collective
---

# Claiming a pledged collective

Pledged collective claims are sent to us by email. Once received, we reply by sending the following plan:

> Hi \_\_\_\_\_\_\_\_\_,
>
> Thank you for getting in touch about [https://opencollective.com/\_\_\_\_\_](https://opencollective.com/_____). ​I'm going to assist you with the process, the steps of which are as follows:
>
> 1. We need to verify that you are an admin of the Github organization. To do so:
>    * Create a new public repository on [https://github.com/](https://github.com/python)\_\_\_\_\_\_\_ \(ie. opencollective-verification\)
>    * In this repository, create a file with the following content: "{INSERT RANDOM UUID HERE}"
>    * [Create](https://opencollective.com/create-account) an Open Collective account 
> 2. Reply to this email with the link to the new repository and the email that you used to register on Open Collective \(if different from \_\_\_\_\_\_\_\). 
> 3. We'll activate and link the collective to your account, then we will send you the email addresses of the pledgers.
>
> Let me know if you have any question.



Once we receive the verification email:

* Set the `HostCollectiveId` of the collective to `11004` , `isActive` to `true` , `approvedAt` to the current date and `isPledged` to false.
* Create the HOST member

```sql
INSERT INTO "Members"  (
  "createdAt",
  "updatedAt",
  "since",
  "CreatedByUserId",
  "MemberCollectiveId",
  "CollectiveId",
  "role"
) VALUES (
  NOW(),
  NOW(),
  NOW(),
  2,
  11004,
  __COLLECTIVE_ID__,
  'HOST'
)
```

* Add user as collective admin

```sql
INSERT INTO "Members"  (
  "createdAt",
  "updatedAt",
  "since",
  "CreatedByUserId",
  "MemberCollectiveId",
  "CollectiveId",
  "role"
) VALUES (
  NOW(),
  NOW(),
  NOW(),
  2,
  __MEMBER_COLLECTIVE_ID__,
  __COLLECTIVE_ID__,
  'ADMIN'
)
```

* Export the list of emails with the following query, and send them to the claimer:

```sql
SELECT DISTINCT u.email, concat('$', ROUND("totalAmount" / 100, 2)) AS amount, o."interval", o."publicMessage" AS message
FROM "Orders" o 
INNER JOIN "Users" u ON o."CreatedByUserId" = u.id
WHERE o."CollectiveId" = $collective_id
```

