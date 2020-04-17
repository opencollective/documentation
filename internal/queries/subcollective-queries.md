---
description: Queries for relatedcollective's manual operations
---

# Relatedcollective queries

## Create a relatedcollective

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

