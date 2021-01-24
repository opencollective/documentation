# Newsletter

We send a newsletter once a month to our wider community of users and supporters. This is done via Mailchimp.

## Newsletter Process

### Signups

People can subscribe to the newsletter using the form at the bottom of the homepage.

### Import Recipients

Users who create new platform accounts and opt-in to the newsletter need to be added manually. A developer with database access needs to export the data using the query below. Then use Mailchimp's `Import contacts` function to add them to the main mailing list.

```sql
-- Export email for newsletter
SELECT u."createdAt", c.name as full_name, "email"
FROM "Users" u
inner join "Collectives" c on u."CollectiveId" = c.id
WHERE "newsletterOptIn" IS TRUE
  AND u."deletedAt" IS NULL
  AND u."createdAt" >= current_date - INTERVAL '2 months' -- Optional: to get only last 2 month's emails
```

### Content

Content can come from a range of sources.

Examples:

* Announcing new features or improvements
* Tweets about Open Collective or a specific Collective
* Blog posts by Open Collective
* Blog posts and articles by other people
* Media like podcasts or videos of talks
* Exciting partnerships with sponsors
* Tips and ideas for Collective fundraising
* New noteworthy Collectives that joined

The general style is brief and straightforward, with opportunities to click through for more info.

### Monthly stats / Leaderboard

The monthly leaderboard is a popular section of the newsletter, showing top backers & sponsors, top Collectives by new backers, and top new Collectives by donations. To get this data, use the following command and then put the data in the team Google Drive.

```bash
# Make sure to adapt the OC_GOOGLE_DRIVE env variable properly if needed.
# It must be set with the path were the data should be exported.
# Default: `${process.env.HOME}/Google\ Drive/Open\ Collective`
$  NODE_ENV="production" PG_URL="postgres://USER@HOST:5432/DB_NAME" npm run export:csv
```

