---
description: >-
  Fiscal hosts can issue virtual cards to hosted Collectives, while Collective
  admins can request and manage cards for approved Collectives.
icon: credit-card
---

# Virtual Cards

Virtual cards let a hosted Collective pay expenses from its budget without using a physical card. Virtual Card Visa® Commercial Credit cards are issued by Celtic Bank.

{% hint style="warning" %}
Virtual cards are available only when the fiscal host has enabled the virtual-card feature. Card requests and card creation are subject to the host's policy and limits.
{% endhint %}

## For Collective admins

If your fiscal host allows card requests, switch to your approved Collective and go to **Dashboard > Virtual Cards > Request card**. Provide:

* The purpose of the card
* Private notes for the host administrators
* A spending limit and limit interval

Available intervals can include per authorization, daily, weekly, monthly, yearly, or all time. Review the host's policy and terms, then agree to them before submitting the request. The host will review the request, create the card, assign it to a person, and email you when it is available.

You can view cards assigned to your Collective, filter them by status or creation date, and view the card details when you need the card number, expiry date, or CVV. Depending on the card and your permissions, you can pause, resume, delete, or edit card details, and view the card's transactions.

{% hint style="info" %}
When a Collective admin pauses a card, a host administrator must resume it. Canceled cards cannot be paused or resumed.
{% endhint %}

## For fiscal hosts

### Configure card settings

From your fiscal host dashboard, go to **Settings > Virtual Cards**. You can:

* Enable or disable card requests from hosted Collectives
* Automatically notify Collectives about missing receipts after 15 and 29 days
* Automatically suspend cards with pending receipts after 31 days, then resume them after all receipts are submitted
* Pause unused cards after a period of inactivity
* Publish a card-use policy of up to 3,000 characters

The policy is shown to Collective admins when they request a card. Use it to explain receipt deadlines, allowed charges, limits, and who to contact with questions.

### Review requests and issue cards

Go to **Dashboard > Virtual Cards > Requests** to filter requests by hosted Collective or status: pending, approved, or rejected. Open a request to review its purpose, notes, requested limit, and interval.

To issue a card, go to **Dashboard > Virtual Cards > Issued**, select **Create virtual card**, choose the hosted Collective and an assignee, then enter a card name and spending limit. You can also assign a card directly from the requests list. A Collective can have multiple cards, and the issued-card list shows the account, last four digits, available balance, renewal date, and status.

Host administrators can edit limits, pause or resume cards, delete cards, view transactions, and open the card in Stripe. Spending limits are enforced per the selected interval and the host's configured maximums.
