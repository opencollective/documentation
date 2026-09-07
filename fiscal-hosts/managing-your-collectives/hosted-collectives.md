---
description: >-
  Using Open Collective, a Fiscal Host can view all the Collectives it hosts,
  and filter by duration and fee structure.
icon: people-roof
---

# Hosted Collectives

Open Collective makes it easy to keep track of all the Collectives that you host.

To view a list of all your Hosted Collectives, navigate to your Fiscal Host’s Dashboard > Hosting > Hosted Collectives.

#### Search

Either find the Collective listed on the page or look them up by their name via the search bar.&#x20;

#### Tabs

Utilize the tabs to view all, active, frozen or unhosted Collectives.&#x20;

#### Filters

You can use several filters to narrow your list of hosted Collectives:

* **Type:** The page is automatically set to show Collectives and Funds. You can customize this to also show projects and events.
* **Fee structure:** Global host fee (the standard fee you set in your settings) or a custom fee.
* **Status**
* **Balance**
* **Joined host on:** Show Collectives that joined your Fiscal Host within a date range.
* **Left host on:** Show Collectives that left your Fiscal Host within a date range.
* **Had financial activity on:** Show Collectives that had financial activity within a date range.
* **No financial activity on:** Show Collectives that had no financial activity within a date range.

You can also sort by the period of time you've hosted them — most recent and oldest.

## Create collective

Host admins can create a new hosted collective directly from the dashboard, without waiting for an application. This is useful when you are onboarding a group yourself or setting up accounts on their behalf.

To create a collective, go to **Dashboard > Hosting > Hosted Collectives** and click **Create collective**.

### Form fields

| Field | Description |
| ----- | ----------- |
| **Collective's name** | Required. The public name of the collective. |
| **Profile URL** | Required for public hosts. Auto-suggested from the name; you can customize the slug before creating the account. Not shown for private hosts — the platform generates a slug automatically. |
| **Short description** | Optional. A brief summary of the collective. |
| **Invite Administrators** | Add up to five people to invite as collective admins. Each invitee receives an email with instructions to sign up and accept. |
| **Private note to invited admins** | Optional. Included in the invitation email only — not visible on the collective's public profile. |
| **Add me as an admin of this collective** | Check this to make yourself an admin instead of (or in addition to) inviting others. |

At least one admin is required before you can create the collective. You must either invite at least one administrator or check **Add me as an admin of this collective**.

The collective is created immediately and appears in your hosted collectives list. It is already hosted by your fiscal host — no separate application or approval step is needed.

### Invited status

If you invited admins but none have accepted yet, the collective shows an **Invited** badge in the hosted collectives list. The badge clears once at least one invited admin accepts their invitation.

If a collective still has no admins after creation, you can invite one from **More Actions > Invite admin** on that collective's row.

### Invitation flow

Invited administrators receive an email with a link to sign up (or sign in) and accept the invitation. If you added a private note, it appears in that email.

Once an invitee completes their profile and accepts, they become a collective admin with full dashboard access.

### Activity log

Collective creation and admin invitations are recorded in your fiscal host's activity log (**Settings > Activity Log**). You can filter by account to see events for a specific hosted collective, including when invites are sent and accepted.

{% hint style="info" %}
Collectives can still apply to join your host through the standard [application flow](collective-applications.md). Use **Create collective** when you are proactively setting up an account rather than reviewing an incoming application.
{% endhint %}

## More Actions

Click on the three dots to view details, view transactions, add funds, add agreements, or contact, freeze, or unhost the Collective.

### View Details

By default, **View Details** (or clicking a row) opens a side drawer with key information about the hosted Collective.

From the drawer, admins can see an overview of how long a Collective has been hosted, its balance, team members, transactions, and activities.

If you have the **Dashboard view of a hosted account profile** preview feature enabled, clicking a row opens a full-page profile instead of the drawer. The profile has tabs for **Overview**, **Accounts**, **Money Movements**, **Expected Funds**, **Agreements**, **Updates**, **About**, and **Activities**. See [Preview Features](../../advanced/preview-features.md).

#### Hosted account profile overview

When using the full-page profile, the **Overview** tab gives host admins a consolidated view of a hosted collective:

| Section | What it shows |
| ------- | ------------- |
| **Details** | Name, tags, social links, location, fee structure, expense types, and payout method visibility. Use the edit icon to update fee structure, expense types, or payout method visibility. |
| **Platform Activity** | Hosting status, applied and accepted dates, and first and latest financial interactions. |
| **About** | Description and collective admins. |
| **Financial summary** | Current balance, all-time received, and all-time disbursed. Click received or disbursed to open **Money Movements** filtered to that type. |
| **Balance chart** | Monthly balance, received, and spent over the account's lifetime. |
| **Contributions / Payouts** | Analytics with **By size**, **Over time**, and (for contributions) **By type** views. |
| **Recent Contributions / Recent Payouts** | The five most recent transactions, with a link to view all. |

From either view, Admins can also easily change a few key settings for the Collective:&#x20;

* **Fee Structure:** Allow the Collective to pay the default host fee, or set a custom fee structure for this specific Collective
* **Expense Type:** Select what expense types people can submit to this Collective
* **Payout method details:** Enable or disable Collective Admins ability to view sensitive payout method details of payees

#### Expense Types

Use the Global host settings or Enable or Disable Invoices, Reimbursements or Grants for an individual Collective.

#### Set Fee Structure

You will be prompted to either choose your global fee structure or to create a custom fee for this specific Collective.&#x20;

#### Show Payout Method Details

Fiscal Host admins can toggle whether admins of specific Collectives are able to view sensitive payout method details of payees by toggling on the option to "Show payout method details."

<figure><img src="../../.gitbook/assets/image (80).png" alt="A screenshot showing the &#x22;Show payout method details&#x22; toggle."><figcaption></figcaption></figure>



### Add Funds

To Add Funds you will need to fill in the required information:

* Source of the funds
* Tier that the funds belong to (if any)
* Description
* Effective date
* Memo, a private note only visible to fiscal host admins
* Gross amount
* Host fee
* Payment processor fee

### Add Agreements

To Add an Agreement you will need to fill in the required information:.

* Title of the agreement
* An optional agreement file
* An optional expiration date for the agreement
* An optional private note for fiscal host admins

### Contact Collective

Directly contact your Collectives using the contact button.



## Additional security measures

As an added security and compliance measure for Fiscal Hosts, their Admins can now freeze or unhost a collective. This may be useful for compliance reasons, violations of terms, or if a Collective wants to leave but hasn’t removed the Fiscal Host themselves already.

### Freezing a Collective

Freezing a Collective means temporarily limiting what a Collective (and their connected Projects & Events) can and cannot do on the platform.

Freezing a Collective will block all financial activity within that Collective. They will not be able to accept funds, pay out expenses, post updates, create new Events or Projects, or add new Team members under this Collective. However, they will still continue to receive recurring donations that were started before this freeze.

Contributions and expenses will be removed from the Collective's public profile, and admins will be informed of why the action was taken.

### Unhosting a Collective

We've also added the ability to unhost a Collective, which can be used to free a Collective to choose another host or to become an [Organization](../../organizations/organizations.md).

* This Fiscal Host will no longer manage money on behalf of the Collective.
* Any active recurring PayPal contributions or Virtual Cards will be cancelled.
* Unhosted Collectives can then apply to a different fiscal host or become an [Organization](../../organizations/organizations.md).
* When we trigger recurring contributions at the beginning of the month, valid Stripe configurations (through a Fiscal Host or via an Organization) will be charged.
* Stripe recurring contributions can be transferred to a new host. If the collective has a new host, they will continue as usual. If they don't, the contribution will be cancelled.

Before unhosting, a Collective's [balance must be zeroed](../../collectives/closing-a-collective/zero-collective-balance.md) by paying expenses, making contributions to other Collectives or gifting the balance to the host.

#### Steps to unhost a Collective (if they want to join another Fiscal Host)

1. The collective will make a one-time donation to their new Fiscal Host in the amount of the balance.
   1. Make sure "The payee is covering the fees" is checked when paying the Expense so the Collective can empty the balance precisely to the cent.
2. The Collective admin will need to update the collective's status on the platform to ‘unhost’ it from their current Fiscal Host.
3. The Collective admin will need to apply to the new Fiscal Host.
4. The new Fiscal Host will add them to their hosted Collectives and reallocate the balance via ‘add funds’ to the Collective.
