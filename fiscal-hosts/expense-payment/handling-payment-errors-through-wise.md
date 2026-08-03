---
description: >-
  There may be times when an expense that is approved for payment on Open
  Collective encounters a problem with Wise. Here are some factors to consider.
icon: magnifying-glass-dollar
---

# Handling Payment Errors Through Wise

Sometimes an expense is approved by both the Collective and Fiscal Host admins, but does not get paid to the expense submitter.

Many of our Fiscal Hosts use a third-party payment processor called Wise for processing expense payments on Open Collective. This means that your private bank and credit card details are more secure. However, Wise carries out its own checks to ensure it is able to complete a transaction.

If Wise encounters a problem, it may post a message saying that the expense has not been paid due to a certain error. You should be able to find these messages by checking your Fiscal Host's Wise dashboard. [There are some examples on the Wise website of the types of errors that may appear.](https://cw.wise-sync.com/support/solutions/36000125935)

When a payment fails at the time you try to pay an expense through Wise, Open Collective also records an **Expense payment error** entry in the expense activity timeline. This entry is **only visible to Fiscal Host admins** — it is not shown to the expense submitter or Collective admins, and it does not trigger a notification to the payee. Open the expense from **Dashboard > Outgoing Money** and scroll to the activity section to see the error message and troubleshoot.

Alternatively, the expense submitter may contact the Fiscal Host independently to inform them that they have not yet received the funds.



### Insufficient Wise balance

Before creating a transfer on Wise, Open Collective checks that your connected Wise account holds enough funds in the payout currency. If the balance is too low, payment is blocked immediately with a message such as:

> Insufficient balance in USD to cover this expense amount, you need 101.14 USD and you currently have 50 USD. Please add funds to your Wise USD account.

In this case the expense **stays approved** (it is not marked as “Error”). Add funds to your Wise account and try paying again from **Dashboard > Outgoing Money > Pay Disbursements**.

### Resolving payment errors

For other payment-time failures (for example, invalid payout details or Wise API errors), the expense may be marked with the status “Error” due to an automated payment error. A host-only **Expense payment error** activity is added to the expense timeline with the details. You can also give an expense this status manually if you discover it has not been paid.

{% hint style="info" %}
If the expense submitter informs you independently that the expense has not been paid, you can manually change its status by clicking on the green “Paid” button to the right of the expense in question, and clicking “Mark as Unpaid”.
{% endhint %}

At this point, the Fiscal Host admin can either:

#### **Mark the expense as Incomplete**

As a Fiscal Host admin, you may wish to request more information or clarification from the expense submitter based on the error received, or in order to discover why the payment was not completed. You will have the option to add a comment to the expense submitter when you choose this option.

#### **Opt to Re-pay**

If you are happy with the information received, or simply wish to try again, you can choose to submit the expense for payment again.

#### **Reject the expense**

If the information you have received leads you to believe the expense is no longer suitable for payment, you can choose to reject it. The expense submitter will be informed and will have to resubmit the expense if they want it to be paid.

{% hint style="info" %}
There may be a number of reasons that an expense has not been paid into the expense submitter’s account. We recommend examining the issue on a case-by-case basis, and our [support team](http://opencollective.com/help) can also support you where appropriate.
{% endhint %}
