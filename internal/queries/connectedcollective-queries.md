---
description: Queries for connected collective's manual operations
---

# Connected collective queries

## Create a connected collective

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
  'CONNECTED_COLLECTIVE'
)
```

