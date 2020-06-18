# Host Admin Manual

**Guide to managing Expenses for the Fiscal Hosts that Open Collective administrates.**

## Fiscal Hosts List <a id="docs-internal-guid-c63aa181-7fff-a12b-956a-0e66ccc70b1b"></a>

| Host | Paypal ID |
| :--- | :--- |
| [Open Source Collective](https://opencollective.com/opensourcecollective/collectives/expenses) 501\(c\)\(6\) | host+c6 |
| [Open Collective Host](https://opencollective.com/opencollective-host/collectives/expenses) c-corp | host |
| [Open Collective Foundation](https://opencollective.com/foundation/collectives/expenses) 501\(c\)\(3\) | host+c3 |
| [Open Collective Europe](https://opencollective.com/europe/collectives/expenses) | host+eu |
| [Open Collective Inc](https://opencollective.com/opencollectiveinc/collectives/expenses) \(internal\) | paypal |

## Expenses Payment Process

#### For expenses less than $2,000

1. Go to the dashboard of the host you want to process payments for.
2. Refill the Paypal pre-approval limit by clicking the button on the dashboard, logging into the correct Paypal for that host, and clicking “approve”. 
3. Return to the host dashboard.
4. Select the "ready to pay" filter.
5. Find an expense that has a green 'pay with paypal' button and is for less than $2,000. You can go one Collective at a time via the dropdown menu, or filter all by "approved".
6. Open the attached receipt or invoice and ensure it's [valid](../expenses-and-getting-paid/submitting-expenses.md#documentation-requirements).
7. Click the 'pay with paypal' button and pay the expense.

#### For expenses over $2,000

Paypal only allows pre-approval of $2,000 the pay via the API, so larger expenses have to be paid manually.

1. Find an expense for over $2,000 that has a green button and open it in its own tab.
2. Check the attached receipt or invoice and ensure it's [valid](../expenses-and-getting-paid/submitting-expenses.md#documentation-requirements).
3. Open Paypal in another tab and go to 'send or receive money' and choose 'friends or family'.
4. Put in the user's email address and the amount.
5. Set the currency to USD for sending and receiving.
6. Paste the URL of the expense as the note.
7. Complete the payment in Paypal.
8. Return to the expense page and click 'edit'.
9. Change the payment method to "other".
10. Save the expense and re-approve it.
11. Put the Paypal fee in the box, if any.
12. Click 'record as paid'.

**For people who can't use Paypal or who have request bank transfers:**  
Pay the expense via Transferwise or ACH and follow steps 8-12 above.

### Problems & Responses

If there is an issue with an expense, comment on it to notify the submitter. If you ask the user to do anything that requires them to edit the expense, you have to un-approve it first. To do this, edit the expense and make an insignificant change \(like adding a space in the description\), then save it. Don't click 'approve'. After they have made the change, you will need to approve the expense before paying it.

#### Invoice or receipt missing or invalid

In order to reimburse the expense you submitted, it must have a valid invoice or receipt. Click 'Edit' on this expense to upload a new file. If you need help, see: [info about submitting expenses](https://docs.opencollective.com/help/expenses/submitting-expenses).

#### Paypal address not provided

For the moment, we are only able to pay via Paypal. Please click 'edit' on your expense, select 'Paypal' from the dropdown menu, and input your Paypal email address.

_**Note:** if you switch the payment method to Paypal yourself, it will pull in the user's email address. However, we can't always assume that's the correct Paypal address._

#### Fees not covered

If you try to pay an expense totalling 100% of the Collective balance, you may get an error saying there is insufficient funds to cover fees. If the amount is small, edit the total down slightly to help it go through. If it's larger API fees will be high, so pay the expense manually and reduce the amount to cover fees.

**Tax form Required**

You should have received an email from HelloWorks requesting you fill out a tax form. We are not able to process this payment until we receive your form. Please find the email and follow the instructions. [More info.](https://docs.opencollective.com/help/expenses/tax-information#for-the-open-source-collective)

### Special Cases

#### Do not touch

* ‘Idonethis’ expenses
* ‘Maintainer.io’ expenses

#### European Bank Transfer Payments

Collectives in the Europe host can request payment via bank transfer \(all other hosts can only pay with Paypal\). Compile a list of bank transfer expenses and give to Xavier to action.

### Tax Forms

We have on file [W9](https://www.dropbox.com/home/Open%20Source%20Collective%20501c6/IRS/W9) or [W8-BEN/E](https://www.dropbox.com/home/Open%20Source%20Collective%20501c6/IRS/W8-BEN) forms for users, which are required if we’re paying out $600 or more to a person in a year. The Tax Forms bot will let them know to send theirs through to us via a comment on the expense. Make sure we have one on file before paying an invoice for someone who has earned $600 or more.

**Note:** this does not apply to expense reimbursements, only invoices.

## Adding Funds Manually

We have arrangements with several Collectives and Sponsors to accept funds outside the platform and add them manually.

| Host | Collective | Income | Notes |
| :--- | :--- | :--- | :--- |
| Foundation | SF Global Shapers | Eventbrite ticket sales |  |
| Foundation | Drupal Camp | T-shirts |  |
| OSC | Material-UI, BootstrapCDN | BuySellAds, CarbonAds | Go to [cashout](https://www.buysellads.com/sell/cashout), wait for Paypal payment, source = material-ui website |
| OSC | Webpack | Threadless |  |
| OSC | Material UI, BootstrapCDN, JSS | Consensys Codefund |  |
| OSC | Creative Tim | Avantgate | Report will come first, but wait for PayPal payment via 2Checkout |
| OSC | Nest | Valor Software | Transferwise |

### Process

1. Get email notification of payment \(different for each one\)
2. Confirm in Paypal or bank account
3. Go to host dashboard
4. Select Collective
5. Click add funds
6. Select funding source
7. Host fee 5%
8. 5% platform fee for OSC, 0% for Foundation

## Bank Transfers

Hosts can receive money directly on their bank account \(via bank transfer\) and then allocate those funds to a given collective via the dashboard.

Financial Contributors are able to choose 'Bank Transfer' as a payment method:

![](../.gitbook/assets/screen-shot-2020-03-09-at-3.08.08-pm%20%281%29.png)

The instructions for the wire transfer are sent to them via email with a unique transaction identifier. Once the money has been received in the Host's bank account, and admin of the Host will be able to mark the transaction as received in the Host Dashboard and the funds will be added to the collective's budget.

![](../.gitbook/assets/screen-shot-2020-03-09-at-3.12.59-pm.png)

To set up this option, please go to the host's profile settings in the Payment Methods tab.

## Adding Host Fees

Open Collective charges a 5% host fee to Collectives. These funds need to be added manually each month to the host's Collective so they can use them to pay expenses.

Process:

1. Get monthly report
2. Find host fees
3. Go to host dashboard
4. Select host's Collective
5. Click Add Funds
6. 0% host fee
7. Source is that host  

