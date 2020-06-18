---
description: >-
  Technical details about how we implement TransferWise and how to get started
  developing with it.
---

# TransferWise

TransferWise integration can be used to automate expense payment as a way to provide one-click wire transfer for expenses.

## Developer Sandbox

### API Token

1. [Sign up for a developer account sandbox](https://sandbox.transferwise.tech/register).
   * Two-factor authentication \(2FA\) code for sandbox login is 111111.
2. [Go to settings](https://sandbox.transferwise.tech/user/settings).
3. Add a new Token.
4. Done, now you can copy your token!

### Connect Account to your Host

1. Manually create a ConnectedAccount with generated `clientId` and `clientSecret`:

   ```sql
   INSERT INTO "ConnectedAccounts" ("service", "token", "CollectiveId")
   VALUES (E'transferwise', token, hostCollectiveId);
   ```

   * We're currently defaulting to your Business profile if two profiles exists. If you have two profiles and want to use your personal one, make sure to add `{ "type": "personal" }` to the `data` column of the created Conencted Account.

