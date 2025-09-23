---
description: >-
  You can showcase your Collective contributors and invite donations by
  displaying buttons and information from your profile to your own website.
icon: badge-dollar
---

# Adding Donation Buttons, Badges and Banners

There are a number of ways to display your Collective information on your own site, including buttons and banners.

### Accessing widgets and badges from your settings

A selection of badges and widgets are available for you to edit and customize from the “Export” section of your Collective’s “Settings” menu.

You can find:

* a script to add a banner widget for your Collective to your site
* a script to export images showing your contributors in each of your tiers

<figure><img src="../../.gitbook/assets/image (69).png" alt="Screenshot of different Contributor widgets as featured on the docusaurus Github."><figcaption><p>Screenshot of different Contributor widgets as featured on the <a href="https://github.com/facebook/docusaurus#readme">docusaurus Github.</a></p></figcaption></figure>

### Adding donate buttons

To place a donate button on your website, add this script:

{% code overflow="wrap" %}
```html
<script src="https://opencollective.com/YOURCOLLECTIVE /VERB/button.js" color="[white|blue]"></script>
```
{% endcode %}

Replace `YOURCOLLECTIVE` with the handle you selected for your collective URL.&#x20;

You will also need to replace `VERB` with the action you want to invite your reader to complete (for example, use “donate” if you want the button to say “Donate to our Collective” or “contribute” if you want it to say “Contribute to our Collective”.

To add your donate button to a blog post, use this script to load an image of the logo with a link to your collective’s “contribute” page.

For example:

{% code overflow="wrap" %}
```html
<img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width=300 />
```
{% endcode %}

{% code overflow="wrap" %}
```html
<a href="https://opencollective.com/webpack/donate" target="_blank">
<img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width=300 />
</a>
```
{% endcode %}

### Displaying supporters and sponsors

Showing a list of sponsors can be a good way to recognize those who have supported you. To do this, add this script:

{% code overflow="wrap" %}
```html
<script src="https://opencollective.com/YOURCOLLECTIVE /banner.js"></script>

```
{% endcode %}

Remember to replace `YOURCOLLECTIVE`  with your Collective’s handle

You can also style how your display looks by using this script template (in React style). If you alter this example script, remember that your version must still be parsable with JSON.stringify.

{% code overflow="wrap" %}
```html
<script src='https://opencollective.com/YOURCOLLECTIVE /banner.js?style={"a":{"color":"red"},"h2":{"fontFamily":"Verdana","fontWeight":"normal","fontSize":"20px"}}'></script>
```
{% endcode %}

This script will use the default `h1` and `h2` tags that you have set on your website, but you can edit them with a command such as the one below:

```css
#opencollective-banner h1 {
  color: black;
}
```

An example of a styled banner can be found on the [Spina site](https://spinacms.com/).

<figure><img src="../../.gitbook/assets/image (70).png" alt="Screenshot of Open Collection contributions embedded on the Spina website."><figcaption><p>Screenshot of Open Collection contributions embedded on the <a href="https://spinacms.com/">Spina website</a>.</p></figcaption></figure>

{% hint style="warning" %}
Open Collective and the Open Collective logo are trademarks of Open Collective, Inc. They cannot be modified or used individually. For more information or any requests, contact [legal@opencollective.com](mailto:legal@opencollective.com)Our button designs are licensed by Open Collective under a Creative Commons Attribution-Share-Alike 4.0 Unported license (CC-BY-SA).
{% endhint %}

### Creating a contributor badge

You can create a badge in an SVG format showing the number of financial contributors to your Collective. You can adapt the script to change the label and color:

{% code overflow="wrap" %}
```html
https://opencollective.com/collective/tiers/backers/badge.svg?label=Backers&color=brightgreen
```
{% endcode %}

### Creating a contributor image

You can also create an SVG image showing all the profile icons of your financial contributors.

Here is an example code that you can adapt to suit your needs:

{% code overflow="wrap" %}
```html
<object type="image/svg+xml" data="https://opencollective.com/collective/tiers/backers.svg?avatarHeight=36&width=600"></object> 
```
{% endcode %}

You can edit the script based on a range of parameters:

| **Parameter**  | **Description**                                      | **default** |
| -------------- | ---------------------------------------------------- | ----------- |
| `width`        | width of the image                                   | <p><br></p> |
| `height`       | height of the image                                  | <p><br></p> |
| `limit`        | max number of members to show                        | (unlimited) |
| `avatarHeight` | max height of each avatar / logo                     | <p><br></p> |
| `button`       | show "become a backer/sponsor" button                | true        |
| `format`       | format of the image (replace .svg with .png or .jpg) | <p><br></p> |

{% code overflow="wrap" %}
```html
<script src="https://opencollective.com/YOURCOLLECTIVE /VERB/button.js" color="[white|blue]"></script>
```
{% endcode %}

