---
description: >-
  Open Collective features Two-Factor Authentication to help ensure the security
  of your account. This section features information and instructions for
  setting up and using 2FA for payouts.
icon: user-clock
---

# Fiscal Host Security

## Security Checks

We want to make sure that Fiscal Hosts are confident an expense is accurate and complete before approving it.

This is why we carry out some automated Security Checks for factors you may want to keep in mind during the approval process.

Learn more on the [Understanding Security Checks](../expense-payment/understanding-security-checks.md) page.&#x20;



## Two-Factor Authentication for Payouts

Fiscal Hosts now have the ability to enable Two-Factor Authentication (2FA) on payouts. This means that when you go to the Host dashboard and click “Go to pay” to open the payment modal, you will sometimes be prompted to enter a 2FA code as an extra layer of security.&#x20;

### Enabling 2FA for login

First, you need to enable two-factor authentication on your user account. You can find the instructions on how to do this on the [Security for Accounts](../../advanced/security-for-accounts/) page.

### Enabling 2FA for payouts&#x20;

Now you’re ready to make payouts from the host dashboard. Click “Go to pay” for the first expense. The payment modal will then open, giving you the option to pay out the expense.&#x20;

For the first expense that you’re paying in a session, you will be prompted to enter your 2FA code. When prompted, open your authenticator app and enter the 6-digit code that is under the entry for your account on Open Collective.&#x20;

Then click the pay button in the modal again. If the code is correct, the payment will go through.&#x20;

Now that you have been authenticated by inputting your 2FA code, you can make payments until the sum of their amounts adds up to a limit specified in your Fiscal Host Dashboard > Settings > Security (which defaults to $10,000.00). When the sum of the payment amounts goes over the limit, you will be asked to enter a new 2FA code to keep making payments.

If you and another admin or accountant for your organization are making payments at the same time, you each get your own limit instead of working with a shared one.

{% hint style="warning" %}
When you enable 2FA for payouts on your organization, every admin or accountant who makes payments will need to enable 2FA for login on their individual accounts, so please make sure to let them know this before enabling it.
{% endhint %}

### Rolling Payouts&#x20;

Admins will be asked to authenticate with 2FA authentication when they make their first payment and again once they’ve hit the rolling limit.
