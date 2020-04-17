---
description: Queries for related collective's manual operations
---

# Related collective queries

## Create a related collective

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
  'RELATED_COLLECTIVE'
)
```

