---
description: >-
  Learn how to integrate notifications from Open Collective in your own chat or
  website using Webhooks
---

# Integrations

## Webhooks \(generic, Slack, Discord\)

Go to your settings, click on "Webhooks" then select the type and enter the URL for your webhook. The system will automatically detect Slack or [Discord's slack-compatible](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook) webhook URLs and will adapt the payloads for them.

See [this link](https://api.slack.com/messaging/webhooks#getting_started) to learn how to create a Slack webhook, or [this link](https://support.discord.com/hc/en-us/articles/228383668-Utiliser-les-Webhooks) to learn how to create a Discord webhook.

{% hint style="info" %}
When adding a discord webhook, make sure to use the [Slack-compatible](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook) URL \(ending with `/slack`\).
{% endhint %}

![](../.gitbook/assets/selection_002.png)

## Other chat integrations \(Mattermost, Gitter\)

For Mattermost or Gitter, first set up a webhook as described above, and then [send it to us](https://opencollective.com/support) and we'll add the hook to our platform.

## Twitter Integration

Connect your Twitter to automatically thank new backers who contribute to your Collective! To do so, go to your Collective page, click on the gear icon, and head to the **Connected Accounts** page.

![](../.gitbook/assets/collectives_integrations_connected-accounts.png)

![](../.gitbook/assets/connect-twitter.png)

