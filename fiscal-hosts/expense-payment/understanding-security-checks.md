---
description: >-
  When an expense is submitted to Open Collective, we carry out automated checks
  to identify potential concerns.
icon: shield-check
---

# Understanding Security Checks

We want to make sure that Fiscal Hosts are confident an expense is accurate and complete before approving it.

This is why we carry out some automated Security Checks for factors you may want to keep in mind during the approval process.

You can find the results of these checks by clicking the shield icon on the bottom right of any expense.

<figure><img src="../../.gitbook/assets/image (44).png" alt="Example of security check details pop up."><figcaption><p>Example of security check details pop up.</p></figcaption></figure>

{% hint style="warning" %}
Our Security Checks are based on checks that experienced Fiscal Hosts commonly make as part of their due diligence process. They are designed as a guideline only, and should only be used to inform your own personal verification process. We do not provide conclusive advice on whether to accept or reject individual expenses.
{% endhint %}

### How do our security checks work?

Our Security Checks are designed to spot errors, missing information, and details that Fiscal Host admins may want to be aware of.

These categories have been selected following discussions with Fiscal Hosts, and many have been created based on the activity we have seen before on the platform.&#x20;

When you click on the shield icon for the expense, it will display only the checks that are relevant to that expense, in one of four colors:

**Blue:** This detail is for information only

**Green:** This detail highlights information about the expense which may be a sign it is trustworthy (ie. The submitter is a Collective admin, or has already been paid in the past by this Collective)

**Yellow:** This indicates a warning, or a message that the admin should be aware of when deciding to pay

**Red:** This indicates an alert, or information the admin should resolve or address before deciding whether to pay

{% hint style="info" %}
Red indicators are warnings, not blocks. Fiscal Host admins can still proceed with processing payments even if a red security check is applied to an expense.
{% endhint %}

### Legal document checks

If the Fiscal Host processing an expense requires US tax forms, the payee's most recent received tax form (W-9, W-8BEN or W-8BEN-E) is compared with the payee's account details. These checks appear under the **Legal Document** scope and flag:

* **Name mismatch:** neither the individual nor the entity name on the tax form matches the payee's legal name (or display name if no legal name is set).
* **Address mismatch:** the city or postal code on the tax form differs from the payee's address. Street addresses are not compared.
* **Country mismatch:** the country on the tax form differs from the payee's country.

If the expense is paid to a bank account, the tax form is also compared with the bank account's holder name, address (city and postal code), and country.

These checks are warnings only. They never block payment, and the check details never show tax ID numbers. A field is only compared when it is filled in on both sides. Tax forms collected through the legacy HelloWorks / Dropbox Forms system and documents with no form data submitted on Open Collective (such as manually uploaded files) are not checked.
