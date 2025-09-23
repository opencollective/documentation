---
description: >-
  You can embed selected pages from your Open Collective fundraising pages on
  your own website using embed links.
icon: globe-pointer
---

# Adding Embeds to your Website

Using embeds, you can place selected information from your Open Collective page on your own website, encouraging donations and building your community.

### Adding a Contribute embed on your website

You can place an embed on your website that looks just like the Open Collective “Contribute To…” page. This can help you receive donations in a more streamlined way.

We recommend giving the widget space to look its best. Ideally the full page height and width.

Parameters can be used to customize the UI. See URL Parameters.&#x20;

### Embed the default tier

Use this script to add the default tier embed. Just replace `COLLECTIVE-SLUG`  with your handle to personalize it.

{% code overflow="wrap" %}
```html
<iframe src="https://opencollective.com/embed/COLLECTIVE-SLUG/donate" style="width: 100%; min-height: 100vh;"></iframe>
```
{% endcode %}

For example, if you collective is [https://opencollective.com/webpack](https://opencollective.com/webpack) then the embed would be,&#x20;

{% code overflow="wrap" %}
```html
<iframe src="https://opencollective.com/embed/webpack/donate" style="width: 100%; min-height: 100vh;"></iframe>
```
{% endcode %}

### Embed a specific tier

To do this, you’ll need to find the Tier’s ID. Go to your profile page, click the tier you want in the “Contribute” section, and check the URL.

It should look something like this: `https://opencollective.com/COLLECTIVE-SLUG``/contribute/TIER_SLUG-TIER_ID/checkout`

Take this ID, and insert it into the script, making sure to add “embed” in the URL, and remove “/checkout”.&#x20;

{% code overflow="wrap" %}
```html
<iframe src="https://opencollective.com/embed/YOURCOLLECTIVE /contribute/TIER_SLUG-TIER_ID" 
style="width: 100%; min-height: 100vh;"></iframe>
```
{% endcode %}

### Embed an Event ticket

You can also embed an Event ticket using a process similar to the one for tiers.

Find the URL of the Event you want to embed, For example:&#x20;

[https://opencollective.com/mautic/events/mautic-conference-europe-4da0de72/order/32898](https://opencollective.com/mautic/events/mautic-conference-europe-4da0de72/order/32898)

edit it to add “embed” as above, and insert into the embed script.

{% code overflow="wrap" %}
```html
<iframe 
src=https://opencollective.com/embed/mautic-conference-europe-4da0de72/contribute/general-access-ticket-32898
style=”width: 100%; min-height: 100vh;”> </iframe>
```
{% endcode %}
