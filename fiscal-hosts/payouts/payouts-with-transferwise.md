---
description: Instructions on how to safely connect to TransferWise.
---

# Payouts with TransferWise

{% hint style="info" %}
This feature is currently in **Beta** test, [read more about it here](payouts-with-transferwise.md#the-beta-test).
{% endhint %}

For hosts that are using TransferWise, this integration can be used to automate expense payment by providing a one-click solution for paying expenses.

After connecting your TransferWise account, users submitting new expenses will have access to a structured form for providing a valid bank account information and you will be able to pay those expenses automatically with the _Pay with TransferWise_ button.

## Fees

#### What are the fees involved?

The fees are charged by TransferWise and its value will vary with the currencies being and value being transferred. You can read more about [TransferWise fees here](https://transferwise.com/help/13/understanding-fees-and-rates/2522717/how-do-you-determine-your-fees).

#### Who pays these fees?

These fees are paid by the collective the expense was submitted for. This means that transactions in TransferWise will display the fees but that value will also be deducted from the collective balance in our platform as _payment processor fee_.

![An expense submitted to Open Collective Engineering paid using TransferWise.](../../.gitbook/assets/image%20%2817%29.png)

## The Beta test

We're currently testing this feature with the help of selected Host collectives.

If you're interested in testing this feature, please reach out through support@opencollective.com. If you're already testing the feature and wish to leave the test, you can also send an email to support.

## Limitations

* Payments through TransferWise require a borderless account.
* Payments should respect amount of funds you have accounted for in the platform.
  * You can't pay expenses if the budget accounted in the collective is not enough to cover the transfer expenses.
* The host is still responsible for managing funds in TransferWise.
  * Transfers are funded with your host currency.
    * If your host is using USD, we're funding all your transfers with your USD balance.

## Connecting TransferWise

TransferWise is currently in beta test, if you're interested in testing this feature, please reach out through support@opencollective.com.

If you're already in the beta test group, you can follow these instructions:

1. Open TransferWise website and log in into your borderless account;
2. Go to your settings menu in TransferWise;

   ![](../../.gitbook/assets/transferwise_settings.png)

3. Select _API tokens_ and then _Add new token:_  ![](../../.gitbook/assets/image%20%2831%29.png) 
   * Name this token after Open Collective, this way you'll always remember where this is being used.
   * Set the token permission to _Full access_, we'll need that to create and fund transactions for your expenses.
   * As a **security measure**, make sure you whitelist the IPs `54.173.229.200` and `54.175.230.252`. ![](../../.gitbook/assets/transferwise_token.png)
   * Click on _Create token_ and then on _Reveal key_ and __**Copy the API key** you generated.
4. Now, open a new tab and go to [Open Collective](https://www.opencollective.com).
5. Open your Host collective settings page and click in the _Sending Money_ option in the menu.   ![](../../.gitbook/assets/kapture-2020-05-13-at-10.15.15.gif)   ![](../../.gitbook/assets/kapture-2020-05-13-at-10.33.41.gif) 
6. Paste the _API Token_ you created in the TransferWise field and click connect;

   ![](../../.gitbook/assets/transferwise_connect.gif)

7. Now, back in TransferWise settings!
8. Select _Webhooks_ and then _Create a new webhook_:  ![](../../.gitbook/assets/kapture-2020-05-13-at-10.35.47.gif) 
   * Name this webhook after Open Collective.
   * Point it to our URL `https://api.opencollective.com/webhooks/transferwise`.
   * Select _Transfer update events_ events.
   * Click on _Create webhook._

     ![](../../.gitbook/assets/transferwise_webhook.png)
9. Done! Now all your hosted collectives will be able to submit Bank Transfer expenses compatible with TransferWise and you'll be able to pay for it with one click.
   * Notice that this option will only be available for new expenses, expenses created before these steps are not structured as required by TransferWise and will need to be edited or recreated by the payee.

## Reducing Risks

In order to reduce risks related to having an active API token that is able to create and fund transactions, we strongly suggest you to:

1. White list our fixed IPs when creating your API token.
2. Keep just enough balance in TransferWise to pay your expenses.
   * This can be achieved by calculating the amount needed for the current payment cycle and transferring it beforehand.

## Troubleshooting

* `Unable to fund transfer`
  * You don't have enough funds in your host's currency balance. Please add funds and try again.

