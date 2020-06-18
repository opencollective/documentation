---
description: Helping you craft a nice contribution to our docs!
---

# Resources for documentarians

## How can I contribute to these docs?

### Addressing issues related to documentation

Read [all issues labeled `documentation`](https://github.com/opencollective/opencollective/issues?q=is%3Aissue+is%3Aopen+label%3Adocumentation) on opencollective/opencollective or [all issues on opencollective/documentation](https://github.com/opencollective/documentation/issues) and pick one to work on!

### Checking if a page needs to be updated

As of November of 2019, a release notes tool is in the works. Until it is ready, your best resource for checking if something has changed on Open Collective is reading [the recently closed issues](https://github.com/opencollective/opencollective/issues?q=is%3Aissue+is%3Aclosed) on the opencollective/opencollective repository and checking if something needs to be updated!

### Reviewing the current documentation

Did you find a typo, a broken link or image? Do you think that something could be explained better? Feel free to [edit pages and submit a pull request](suggesting-changes.md)!

## Suggested tools 

{% tabs %}
{% tab title="Linux" %}
## Screen capture

### Firefox Screenshots

Firefox offers [a built-in tool](https://support.mozilla.org/en-US/kb/firefox-screenshots) that can either capture a portion of the page or the whole page you're currently viewing.

### Flameshot

[Flameshot](https://flameshot.js.org) is open-source software that helps you take screenshots easily and edit them as soon as you take them.

### Shutter

If Flameshot doesn't work on your Linux installation, you may want to give [Shutter](https://launchpad.net/shutter) a shot. Shutter is also an open-source software focused on screen capture, but it isn't on active development. However, the editing tool for Shutter needs a few additional packages related to `GooCanvas`, a canvas widget for GTK+, to work. They should be installed in the following order: 

1. `libgoocanvas-common` \(translations\) 

2. `libgoocanvas3` \(shared library\) 

3. `libgoo-canvas-perl` \(Perl interface\)

Once you installed all of them, kill all running instances of Shutter \(using the `killall shutter` command\) and launch it again. The **Edit** option should become available as soon as you capture a new screenshot!

### Peek

[Peek](https://github.com/phw/peek) is open-source software that allows you to record portions of your screen and easily transform them into GIF, APNG, MP4, or WebM. 

{% hint style="warning" %}
You may stumble upon a few issues when using this software on Wayland.
{% endhint %}

## Extensions

### GoodTwitter

[GoodTwitter](https://github.com/ZusorCode/GoodTwitter) is an open-source extension to revert your current Twitter user interface to the old one. As of November of 2019, Twitter has unveiled their new interface and the embedding code they now offer doesn't work as intended on GitBook. To be able to embed tweets as seen on the [Sustainer Resources](../../financial-contributors/organizations/sustainer-resources.md) page, you will need to access the old UI.

GoodTwitter is available for [Google Chrome](https://chrome.google.com/webstore/detail/goodtwitter/jbanhionoclikdjnjlcmefiofgjimgca) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/goodtwitter/).
{% endtab %}

{% tab title="MacOS" %}
Do you have any suggestions of tools documentarians could use on this OS? Please edit this tab!
{% endtab %}

{% tab title="Windows" %}
Do you have any suggestions of tools documentarians could use on this OS? Please edit this tab!
{% endtab %}
{% endtabs %}

