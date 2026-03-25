---
description: Use PayPal to send money for your collectives
icon: paypal
---

# Paying Expenses with PayPal

We offer PayPal as an option for paying expenses through PayPal Payouts. In order to activate PayPal Payouts for your Collectives, please [contact us](https://opencollective.com/contact).&#x20;

Note that the following limitations and prerequisites should be met in order to activate PayPal Payouts.&#x20;

***

#### Limitations and Prerequisites <a href="#limitations-and-prerequisites" id="limitations-and-prerequisites"></a>

* A PayPal business account with:
  * Access to PayPal Payouts.
    * There's a manual request that needs to be filled, [more information here](https://developer.paypal.com/docs/payouts/standard/integrate-api/#link-knowbeforeyoucode).
  * A confirmed identity, email, and bank account linked to your PayPal business account.
  * Sufficient funds in your PayPal business account.
* Payments should respect the fund amount you have accounted for in the platform.
  * You can't pay expenses if the budget accounted for by the Collective is not enough to cover the transfer expenses.
* The host is still responsible for managing funds in PayPal.
  * Expenses are paid with your PayPal Balance.

***

Once we have enabled PayPal for your Fiscal Host, in order to connect your business PayPal account to Open Collective, you will need to go through the following steps.

1.  Create a new PayPal app

    * Open [PayPal's Developer](https://developer.paypal.com/developer/applications/) page and Log In.
    * In _My Apps & Credentials_ page, select the **Live** environment, and click in _Create app_.

    ![](https://docs.opencollective.com/help/~gitbook/image?url=https%3A%2F%2F2931279126-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-LWSZizTt4ZC1UNDV89f%252F-MBtBWbx66R6KN3FV2yX%252F-MBtcqMyYZnbthVaK-fe%252Fimage.png%3Falt%3Dmedia%26token%3D36686141-5661-432b-9fa3-d648254ac05e\&width=300\&dpr=4\&quality=100\&sign=2c5f881c\&sv=2)

    * Name this App after Open Collective, this way you'll always remember where this token is being used.
    * App Type: Merchant
    * Click _Create App._

    ![](https://docs.opencollective.com/help/~gitbook/image?url=https%3A%2F%2F2931279126-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-LWSZizTt4ZC1UNDV89f%252F-MBtBWbx66R6KN3FV2yX%252F-MBtfqaPxi-qRSyXTeXX%252FScreen%2520record%2520from%25202020-07-10%252013.30.21.gif%3Falt%3Dmedia%26token%3D62f2294c-da13-4290-a3c3-585780b5b897\&width=768\&dpr=4\&quality=100\&sign=df0967f6\&sv=2)
2.  In App settings, make sure the following boxes are checked:

    * Accept payments (if you wish to enable payments with PayPal)
    * Payouts (if you wish to enable Expense payout with PayPal)
    * Customer Disputes
    * Transaction Search

    ![](https://docs.opencollective.com/help/~gitbook/image?url=https%3A%2F%2F2931279126-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LWSZizTt4ZC1UNDV89f%252Fuploads%252Ff1YS9p3IpruRDP4jF1xM%252Fimage.png%3Falt%3Dmedia%26token%3D18bae32a-940b-435f-8bad-ced28b28db7c\&width=768\&dpr=4\&quality=100\&sign=4c4d0e8a\&sv=2)
3.  Now, copy the necessary information to Open Collective.

    * Open a new tab and go to [Open Collective](https://www.opencollective.com/).
    * Navigate to your Fiscal Host Dashboard > Settings > Sending Money
    * You will see a new section called PayPal and under that there will be two inputs named "Client Id" and "Secret"
    * Enter your "Client Id" and "Secret" which you've obtained before and click "Connect to PayPal"

    ![](https://docs.opencollective.com/help/~gitbook/image?url=https%3A%2F%2F2931279126-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-LWSZizTt4ZC1UNDV89f%252F-MYKpVN8PgQ47PpB4drG%252F-MYKpfCzAawOBmgn7Hjp%252FPeek%25202021-04-15%252016-00.gif%3Falt%3Dmedia%26token%3D9647b087-6ae9-412a-b900-f7a800553e01\&width=768\&dpr=4\&quality=100\&sign=caf555fb\&sv=2)

***

## Payee Identity Verification

Open Collective now requires payees to connect their PayPal account through a PayPal OAuth authorization flow when they choose PayPal as a payout method. This replaces the previous experience where payees simply typed in a PayPal email address.

When a payee connects their PayPal account, Open Collective receives their verified identity information directly from PayPal, including their **name**, **email address**, and **country** (note: country currently displays as "unknown" while a PayPal scope application is pending — this will be resolved in a future update).

### What you will see as a Fiscal Host

In the payee section of each expense, you will now see:

* A **Verified** badge if the PayPal payout method was connected through the PayPal authorization flow.
* An **Unverified** badge if the payout method was saved before this feature was introduced (i.e., a legacy email entry).
* The verified identity details obtained from PayPal (name, email, country) when the account is verified.

You will also see new [Security Checks](understanding-security-checks.md) related to PayPal verification on each expense. These will indicate whether the account is verified, and whether the name on the PayPal account matches the legal name the payee provided on Open Collective.

### Legacy (unverified) payout methods

PayPal payout methods created before this feature was introduced are marked as **unverified**. Payees with unverified payout methods will see a prompt on their account to reconnect through the PayPal flow and confirm ownership of their email address.

Verification is **not currently mandatory** — payees can still submit expenses using unverified payout methods. However, this may change in the future: we are considering a host policy option that would require payees to verify their PayPal account before an expense can be submitted or approved.

{% hint style="info" %}
If you have concerns about an unverified PayPal payout method on a specific expense, you can use the "Mark as Incomplete" action to ask the payee to update their payout method before you process payment.
{% endhint %}
