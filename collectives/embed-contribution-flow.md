---
description: To integrate a "Contribute" option directly on your website
---

# Embed contribution flow

{% hint style="warning" %}
This feature is currently in a beta-test phase and must be activated manually. If you want to join, send us a message on [Slack](https://slack.opencollective.com) \(\#﻿embed-contribution-flow channel\)
{% endhint %}

The embed contribution flow is a way to integrate Open Collective on your own website. Visitors will be able to contribute directly, by simply providing an email address.

![Embedded contribution on the third party website of an initiative](../.gitbook/assets/image%20%284%29.png)

## General considerations

* The widget will look better if it has some space, ideally the full page height
* By default, the theme of your profile \(defined by your primary color\) will be used. If you rather want to use the default Open Collective theme, you can add `?useTheme=false` to the URL.

## Embed the default tier \(Donate\)

The simplest way to embed the contribution flow is by using the `/donate` URL \(e.g. [https://opencollective.com/babel/donate](https://opencollective.com/babel/donate)\). Just replace `COLLECTIVE_SLUG` by your collective slug below:

```markup
<iframe src="https://opencollective.com/embed/COLLECTIVE_SLUG/donate" />
```

## Embed a specific tier

To embed a specific tier, you'll need to know its ID. For that, go to your profile page, click on "Contribute" for the tier you want to embed then check the URL. It should look like `https://opencollective.com/COLLECTIVE_SLUG/contribute/TIER_SLUG-TIER_ID/checkout`

From this URL, you can deduct the embedded one \(prefix with `embed` and removes `/checkout`\):

```markup
<iframe src="https://opencollective.com/embed/COLLECTIVE_SLUG/contribute/TIER_SLUG-TIER_ID" />
```

