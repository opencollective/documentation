# Documentation CI

The CI workflow runs `npm run validate` through Turbo to check existing
GitBook navigation and links. GitBook publishing remains managed by GitBook.

### Remote cache in CI

CI uses Vercel Remote Cache through GitHub OIDC for repository branch pushes and
same-repository pull requests. Fork PRs and runs without `TURBO_TEAM` use local
caching. The organization-level `TURBO_TEAM` Actions variable is already available
in this repository; no `TURBO_TOKEN` repository secret is needed.

In Vercel team Settings → Build and Deployment → OIDC Policies for CLI Access,
create or update a Turborepo CLI policy for `opencollective/documentation` and
`.github/workflows/ci.yml`. Allow branch-push and pull-request claims, use the
default audience, and remove any main-only branch restriction. Keep repository
and workflow restrictions, and update existing policies instead of creating
overlapping ones. The pinned setup action exchanges GitHub OIDC tokens for a
short-lived cache token before Turbo runs and revokes it at job completion.

See [Vercel's OIDC setup](https://vercel.com/docs/monorepos/remote-caching/external-ci-cd#create-an-oidc-policy).
