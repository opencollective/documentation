---
description: >-
  Open Collective features a robust export feature that allows you to create
  your own export templates that feature the categories that are important for
  your own accounting systems.
---

# Exporting Transactions

From your transactions you can export a CSV file that can be used to further process transactions for your reporting and accounting needs.

To download a CSV of your transactions click on the "**Export CSV"** button in the top right hand corner.&#x20;

If you have applied any filters on the transactions page these will be applied to the export set. At the bottom left corner of the export screen you will see a confirmation of the number of transactions included in that set.&#x20;

You then have an option to decide which fields you would like to export. The “Platform Default” export is a selection of fields created to answer typical reporting and accounting needs. So it may be a good starting point. If it is, simply click “Export CSV” and your export file will begin to download.

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-27 at 13.25.50.png" alt="A screenshot of the Export Transactions pop up module. In the top left is the title Export Transactions, while in the top right there is an exit button. Below that there is the title &#x22;Selected export set&#x22; above a module for selecting what export set to use, in this case it is set to &#x22;Platform Default.&#x22; Below that is a section labeled &#x22;Selected fields for export (24 out of 61),&#x22; below which is a subtitle that reads &#x22;Fields will be exported in the order they&#x27;re displayed in below. Drag and drop them to reorder them.&#x22; Below that is a field with 24 drag-and-droppable properties, such as &#x22;Effective Date &#x26; Time,&#x22; &#x22;Transaction ID,&#x22; and &#x22;Description.&#x22; Below that there is a toggle for the option &#x22;Export taxes and payment processor fees as columns.&#x22; In the final section of the pop up, there is text that displays the number of rows being exported and buttons to &#x22;Export Sample&#x22; and &#x22;Export CSV.&#x22;"><figcaption></figcaption></figure>

{% hint style="info" %}
**Platform Legacy Export (pre 2024)**\
\
At the beginning of 2024 we made some changes to the ledger that effect the transaction export. This included a shift from representing payment processor fees as fields of transactions to [representing them as separate transactions](https://docs.opencollective.com/help/product/ledger#separate-payment-processor-fees-and-taxes\\). If you require backwards compatibility with the exports that were generated before we introduced these changes:

1. Select the export set “Legacy Platform Export (Pre-2024)”
2. Make sure that the option “Export taxes and payment processor fees as columns” is turned on.
{% endhint %}

### New Preset&#x20;

You can further customize the export set by selecting which fields will be exported and in what order. For this select “New Preset.”

<figure><img src="../../.gitbook/assets/3d7738f30539c71cc32e60cb4d15342d96ec8a71787afe3622560311a4ff3e2f8c9a9d80ff0d073dca4a92d4d9435243d74422c660dc3e7a215ffc0ac61e586cd3c75b03b0d67ab75c1fe033c650b63ac347e08456b3b3ab4771dcaaa2481b48afd617e2.avif" alt="A screenshot of the module for selecting an export set after being clicked. There is a drop down menu featuring three options: Platform Default, Legacy Platform Export Set (Pre-2024), and a highlight option for &#x22;New Preset.&#x22;"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-27 at 13.30.37.png" alt="A screen shot of the New Preset menu. At the top on the left there is the title &#x22;Export Transactions,&#x22; and on the right an exit button. Below that, there is a text box to enter the &#x22;Set name.&#x22; Below that, there is a field for selecting the properties to include in the exported transaction set. On the left, there are a list of field categories, featuring options like &#x22;Transaction,&#x22; &#x22;Account,&#x22; and &#x22;Contribution.&#x22; On the right, there is a list of properties to select from within the selected category of options (in this case &#x22;Transactions.&#x22;) Some of the included properties are &#x22;Date &#x26; Time,&#x22; &#x22;Transaction ID,&#x22; and &#x22;Description.&#x22; Every property has a checkbox, and there is also a checkbox to &#x22;Select All.&#x22; Below that, there is a field featuring the title &#x22;Selected fields for export&#x22; and the subtitle &#x22;Fields will be exported in the order they&#x27;re displayed in below. Drag and drop them to reorder them.&#x22; In the field, there is a field with 24 drag-and-droppable properties, such as &#x22;Effective Date &#x26; Time,&#x22; &#x22;Transaction ID,&#x22; and &#x22;Description.&#x22; Below that there is a toggle for the option &#x22;Export taxes and payment processor fees as columns.&#x22; In the final section of the pop up, there is text that displays the number of rows being exported and buttons to &#x22;Save Preset,&#x22; &#x22;Export Sample,&#x22; and &#x22;Export CSV.&#x22;"><figcaption></figcaption></figure>

Presets are shared within your organization so when defining a New Preset, ensure you give it a meaningful name so that your fellow admins will be able to recognize and utilize it.

Select your desired fields in the '**Available fields**' section.

Reorder your selected fields in the '**Selected fields for export**' section.

You are also able to clear the selection to start your preset from scratch

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-27 at 13.41.16.png" alt="A screenshot of the menu for creating a new transaction export set. It is identical to the menu in the above image, except none of the properties are selected."><figcaption></figcaption></figure>

**Save and Export your Preset**&#x20;

You have the option to save the preset, this will make it available to all admins of your Collective/Fiscal Host.&#x20;

Export a Sample to test the data set before committing and downloading the full CSV via **Export CSV.**
