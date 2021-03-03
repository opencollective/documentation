---
description: >-
  Technical details about how we implement PayPal and how to get started
  developing with it.
---

# PayPal

## Developing / testing sandbox

### Buyer account

This is the account you'll use to make the \(fake\) payment. Go to [https://developer.paypal.com/developer/accounts/create](https://developer.paypal.com/developer/accounts/create), login with your personnal PayPal account then create a test account.

### Merchant account

1. Create an app here: [https://developer.paypal.com/developer/applications/create](https://developer.paypal.com/developer/applications/create)
2. Use the generated merchant credentials to set the following variables in API's `.env`:

```text
PAYPAL_ENVIRONMENT=sandbox
PAYPAL_APP_ID=APP-________
```

3. Encrypt your client secret, from the API repository:

```bash
npm run script scripts/encrypt.js PAYPAL_CLIENT_SECRET
```

4. Manually create a ConnectedAccount with your `clientId` and your encrypted `clientSecret`:

```sql
INSERT INTO "ConnectedAccounts" ("service", "clientId", "token", "CollectiveId")
VALUES (E'paypal', clientId, clientSecret, hostCollectiveId);
```

5. Create buyer's credentials on [https://developer.paypal.com/developer/accounts/create](https://developer.paypal.com/developer/accounts/create)

And you're ready to go. Use the credentials generated in step 2. to authenticate when ordering.

## Known issues

* The button may require multiple clicks to trigger on dev or staging. It should not affect production \(see [https://github.com/paypal/paypal-checkout/issues/471](https://github.com/paypal/paypal-checkout/issues/471)\)

