---
description: This page describes how to set up charging local taxes
---

# Local Tax Support

In certain countries or regions, Fiscal Hosts are required to collect local taxes—for example, VAT in the EU.

Please contact support@opencollective.com if you need Collectives under your umbrella to charge taxes. We will work with you to conform to you local legislation.

## VAT

{% hint style="warning" %}
VAT will only apply if the collective creates a `SERVICE` or `PRODUCT` tier and for events.
{% endhint %}

Once VAT is setup for a collective, we will start asking the country of residency and an optional VAT number to everyone who order tiers or tickets from the collective. We will apply the VAT rules accordingly:

* Charge VAT from the country of the event if it's an event
* Don't charge VAT if a VAT number is provided
* Don't charge VAT if it's another EU country
* VAT percentage depends on the country where the collective is

### Enable VAT at the host level

If the host is the one supposed to collect VAT \(most common case\) then you can enable it by going to the Edit section \(`https://opencollective.com/{my_host}/edit`\) and setting your country to an European country. The form will then sak for a VAT number.

![](https://github.com/opencollective/documentation/tree/9c7705ddda60c1a19c1dc0cd6d5ff3039a405710/.gitbook/assets/image%20%2820%29.png)

Your host is now ready to start accepting VAT. You still need to enable it on a per-collective basis by setting a country and a "VAT setting" for the collective in the collective edit page \(`https://opencollective.com/{the_collective}/edit`\):

![](../.gitbook/assets/image%20%2810%29.png)

### Enable VAT at the collective level

If the collective has a VAT number and should be responsible for collecting VAT itself, you can enable that by following the exact same steps than before, except that you'll choose the option `Use my own VAT number` on the last step.

![](../.gitbook/assets/image%20%289%29%20%281%29.png)

