---
description: >-
  If you are an admin, you can export selected Collective data from the Open
  Collective platform for use elsewhere.
icon: file-arrow-down
---

# Exporting Your Data

We offer the option to export and download certain data from your Collective and Collectives that your Fiscal Host supports for use outside the platform. Collective and fiscal host admins, as well as users with the Accountant role, can request and download exports for accounts they can access.

Accountants can request, view, download, and rename exports. Only admins can delete an export.

If you want to know how to export data to display on your website, go to the [Adding Embeds to your Website](../collectives/raising-money/adding-embeds-to-your-website.md) page.

### Export Transactions

Go to your Collective or Fiscal Host's Dashboard > Transactions and click "Export CSV" in the top right.

You can download a CSV file of all transactions or use the filters to choose which groups of transactions to download, like expenses or contributions.

By default, the platform will select the "Platform Default" export set, but if you'd like to add or remove filters and categories, click the drop down and then "New Preset."

#### Background (async) exports

Transaction exports are processed in the background for the following accounts:

* Collectives, Projects, and Events
* Organizations with money management enabled (fiscal hosts)

Background exports are available to admins and accountants of the account, of its parent account (for Projects and Events), or of its fiscal host. For these users, the export window shows a **Generate Export** button and lets you name the export. There is no 100,000-row limit on background exports.

Open the **Exports** section of your dashboard to check the status of an export and download completed files. You will also receive an email with a link to the export when it is ready.

Other accounts (for example, Organizations without money management and individual profiles) and other viewers keep the direct CSV download.

{% hint style="info" %}
If an export fails, the platform automatically retries it a limited number of times before marking it as failed.
{% endhint %}



### Export Contributors

Go to your Collective or Fiscal Host's Dashboard > Contributors and click "Export CSV" in the top right.



### Export Collectives

Go to your Collective or Fiscal Host's Dashboard > Collectives and click "Export CSV" in the top right.

By default, the platform will select the "Platform Default" export set, but if you'd like to add or remove fields like Name or Currency, click the drop down and then "New Preset."

### &#x20;Export data as JSON files

You can also export your data as a JSON file, which can be used with other applications. The information you download can be filtered by:

Options:

* All members (contributors of all types)
* Only users (individuals)
* Only organizations

Parameters:

* limit: number of members to return
* offset: number of members to skip (for paging)
* TierId: only return the members within a certain Tier. You can find the Tier ID by viewing the URL that comes up when you select a tier on your Collective page
