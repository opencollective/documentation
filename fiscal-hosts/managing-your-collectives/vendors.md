---
description: >-
  Need to attribute contributions or expenses to external entities that don’t
  want to use Open Collective? Set up a list of vendors specific to your Fiscal
  Host.
icon: briefcase-blank
---

# Vendors

A vendor represents an external entity which Fiscal Hosts can attribute contributions or expenses to. By default, vendors have no public profile and are only able to be created and edited by Fiscal Host Admins.

{% hint style="info" %}
**New:** Vendors can now optionally enable a **Contributor Profile** to showcase their activity on the platform as contributors to collectives. This is disabled by default and can be enabled when creating or editing a vendor.
{% endhint %}

Navigate to your Fiscal Host Dashboard and select Vendors.

## Review Existing Vendors

The Vendors page has three tabs: **Managed Vendors**, **Platform Organizations** and **Archived Vendors**.

The **Platform Organizations** tab lists the Organizations on the platform that have interacted with your Fiscal Host or your hosted Collectives, for example by contributing or by submitting expenses. You can transform some of them into Vendors and contribute to a cleaner platform: open an Organization and click "Convert to Vendor". This button is only available when the Organization has only transacted with your Fiscal Host and all of its admins are also admins of your Fiscal Host. Once converted, the Organization is no longer accessible to its admins as an Organization and no longer has a public profile.

## Create a Vendor

You can create a Vendor by clicking on “Create vendor”

<figure><img src="../../.gitbook/assets/image (59).png" alt="Screenshot of Vendor settings featuring the &#x22;Create Vendor +&#x22; button."><figcaption></figcaption></figure>

You will then be prompted to provide the following Vendor information:

- Image (optional)
- Vendor's Name
- Vendor's Legal Name (optional)
- Contributor Profile (optional)
  - When enabled, the vendor will have a public profile page displaying their contributions to collectives
  - When disabled (default), the vendor has no public presence and only appears in host admin views
- Visibility
  - Where can this vendor be used? Only in relation to your Fiscal Host, in relation to your Fiscal Host and hosted Collectives (default), or only with selected accounts
  - Who can attribute financial activities to this vendor? Your host default (see [below](#enable-other-expense-submitters-to-submit-expenses-on-behalf-of-vendors)), only your Fiscal Host admins, your Fiscal Host admins and Collective admins, or all expense submitters
- Tax Form (optional)
  - Tax Form URL (optional)
- Tax Identification
  - Identification System (optional)
  - ID Number (optional)
- Contact Name (optional)
- Contact's email (optional)
- Mailing Address (optional)
- Payout method (optional)
- Notes (optional)

<details>

<summary>Screenshot of Create Vendor modal</summary>

<figure><img src="../../.gitbook/assets/image (60).png" alt="Screenshot of the &#x22;Create Vendor&#x22; modal. "><figcaption></figcaption></figure>

</details>

{% hint style="warning" %}
Automatic tax form collection is not active by default for Vendors. When creating a Vendor this information needs to be manually provided.
{% endhint %}

## Edit and Update a Vendor

Click on an existing Vendor to open its details page, which displays the current Vendor information and activity.

<figure><img src="../../.gitbook/assets/image (63).png" alt="Screenshot of &#x22;Update Vendor&#x22; side bar view."><figcaption></figcaption></figure>

To edit the Vendor details, click on More Actions > Edit (or on the three dots at the end of the Vendor's row in the list, then Edit).

When you are done editing, click “Update vendor.”

If your fiscal host requires [two-factor authentication for admins](../../advanced/security-for-accounts/two-factor-authentication.md#enforce-2fa-for-all-admins), you will be prompted for a 2FA code when adding or updating a vendor payout method.

### Archive/Unarchive a Vendor

Click on the three dots to the right of Vendor and then select "Archive Vendor".

<figure><img src="../../.gitbook/assets/image (62).png" alt="Screenshot of Vendor view with Archive option shown."><figcaption></figcaption></figure>

You can view all archived Vendors in the "Archived Vendors" tab. Within this view, you can unarchive Vendors with "Unarchive Vendor".

<figure><img src="../../.gitbook/assets/image (64).png" alt="Screenshot of Archived Vendor settings with Unarchive option showing. "><figcaption></figcaption></figure>

## Assign Contributions to Vendors

When creating contributions (through either added funds or pending contributions) you can attribute the contribution to a Vendor by typing in the Vendor's name.&#x20;

<figure><img src="../../.gitbook/assets/image (65).png" alt="Screenshot of Create Expected Funds modal showing the option to type to search for or create new Vendor."><figcaption></figcaption></figure>

You can also create a new Vendor by simply entering a Vendor name and clicking Create Vendor.

You can add additional Vendor information via the Vendor settings in your Fiscal Host dashboard.

## Vendor availability

By default, expense submitters can only select vendors that are available for the Collective they are expensing. Fiscal Host admins can always select any vendor on their host, regardless of which Collective the expense is for.

This helps host admins manage cross-Collective vendor relationships and process expenses that involve vendors shared across multiple hosted accounts.

## Submit an Expense on Behalf of a Vendor

In order to use vendors for expense submission a payment method must be included in the vendor profile.&#x20;

Once submitting an expense you can attribute it to a selected Vendor by searching for the Vendor's name.&#x20;

<figure><img src="../../.gitbook/assets/image (66).png" alt="Screenshot showing the ability to submit an expense on behalf of a Vendor. "><figcaption></figcaption></figure>

You will not be prompted for a payment method. The payment method that is listed for the Vendor in the Vendor settings will be used to process the payment.

## Enable Other Expense Submitters to Submit Expenses on Behalf of Vendors

By default, only Fiscal Host admins are able to submit expenses to Vendors. However, you can enable other people to also submit expenses to your Vendors.&#x20;

To enable this, go to the Fiscal Host Dashboard > Settings > Policies. In the **Vendors** section, choose who can attribute financial activities to vendors: only your Fiscal Host admins, your Fiscal Host admins and Collective admins, or anybody.

This is the default for all your Vendors. You can override it for a specific Vendor in its Visibility settings, and limit where it can be used.

### Creating vendors inline

Fiscal host admins can create vendors without leaving the expense or expected funds flow:

- **Expense submission:** On the **Who is getting paid** step, select **A vendor** and type a new name in the picker. Choose **Create vendor: {name}** to create and select a vendor scoped to that collective.
- **Add Funds / Expected Funds:** In the contributor or source picker, type a new vendor name and choose **Create vendor: {name}**.

Non-host submitters (when the vendor policy is enabled) can search and select existing vendors but cannot create new ones inline. Use **Dashboard > Vendors** to manage the vendor directory.

<figure><img src="../../.gitbook/assets/image (67).png" alt="Screenshot of Fiscal Host Policy settings, showing the ability to allow all users to submit expenses on behalf of Vendors."><figcaption></figcaption></figure>

{% hint style="info" %}
Vendors may not always have a payment method attached. To payout an expense, this payment information will need to be added by a Fiscal Host admin.
{% endhint %}
