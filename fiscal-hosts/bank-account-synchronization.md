---
description: >-
  Streamline your financial management by connecting bank accounts directly to
  Open Collective. Automatically import, synchronize, and reconcile bank
  transactions with Platform activity.
icon: money-bill-transfer
---

# Bank Account Synchronization

As a Fiscal Host, managing finances often means working with transactions that happen both on and off the Open Collective Platform. Whether it's paying for expenses directly from your bank account, receiving donations through other channels, or handling day-to-day operational costs, these off-platform activities are crucial parts of your financial picture.

Open Collective's Off-Platform Transactions feature bridges this gap by enabling you to connect your bank accounts directly to the Platform. This powerful integration automatically imports your bank transactions, helps you match them with existing Platform activity, and provides a complete view of your financial operations.

Open Collective supports Off-Platform Transactions across two major regions through partnerships with leading financial technology providers: Plaid (US) and GoCardless (Europe).

## Getting Started with Off-Platform Transactions

Before you can set up Off-Platform Transactions, make sure you have:

1. **Fiscal Host Status**: You must be set up as a Fiscal Host on Open Collective
2. **Feature Access**: Your account must have access to the Off-Platform Transactions feature (this may require a platform subscription upgrade)
3. **Administrative Permissions**: You need admin access to your Fiscal Host account
4. **Bank Account Access**: Valid credentials for the bank accounts you want to connect
5. **Supported Region**: Your bank must be located in a supported region (US or Europe)

### Step-by-Step Setup Guide

#### **Step 1: Access Connected Bank Accounts**

1. Log in to your Open Collective account
2. Navigate to your **Fiscal Host Dashboard**
3. Click **"Connected Bank Accounts"** in the left sidebar
4. You'll see a page showing any existing connections and a **"New Connection"** button

#### **Step 2: Start a New Connection**

1. Click the **"New Connection"** button in the top-right corner
2. You'll see a dialog asking you to choose your region:
   * **United States**: For U.S.-based banks (uses Plaid)
   * **Europe**: For European banks (uses GoCardless)

#### **Step 3A: Connecting a U.S. Bank Account (Plaid)**

1. Select **"United States"** in the region selection
2. You'll be redirected to Plaid Link, a secure connection interface
3. **Search for your bank**: Type your bank's name or browse the list
4. **Select your institution**: Click on your bank from the search results
5. **Enter your credentials**: Provide your online banking username and password
6. **Complete verification**: Follow any additional verification steps (SMS codes, security questions, etc.)
7. **Select accounts**: Choose which specific accounts you want to connect
8. **Authorize the connection**: Review permissions and confirm the connection

#### **Step 3B: Connecting a European Bank Account (GoCardless)**

1. Select **"Europe"** in the region selection
2. **Choose your country**: Select your bank's country from the list of 31 supported countries
3. **Select your bank**: Browse or search for your specific financial institution
4. **Review connection details**: See information about data access period and available transaction history
5. **Confirm connection**: Click **"Connect to \[Bank Name]"**
6. **Authenticate with your bank**: You'll be redirected to your bank's official website or mobile app
7. **Authorize Open Collective**: Grant permission for GoCardless to access your account data
8. **Return to Open Collective**: You'll be redirected back with a successful connection

#### **Step 4: Configure Your Connection**

Once connected, you can configure how your bank account integration works:

1. **Account Selection**: If your bank has multiple accounts, choose which ones to sync
2. **Sync Settings**: Configure how often you want transactions to be imported
3. **Assignment Rules**: Set up automatic assignment rules for certain types of transactions

## Working with Imported Transactions

### Understanding the Transaction Import Process

Once your bank account is connected, Open Collective will begin importing your transaction history:

**Initial Import**: The system will import historical transactions based on your provider's capabilities:

* **Plaid (US)**: Typically 24 months of transaction history
* **GoCardless (Europe)**: Varies by bank, typically 90 days to 24 months

**Ongoing Synchronization**: New transactions are imported automatically:

* **Plaid (US)**: Real-time updates via webhooks (usually within minutes)
* **GoCardless (Europe)**: Scheduled synchronization every 10 minutes

### Transaction Statuses

Every imported transaction has a status that indicates what needs to be done with it:

* **Pending**: Newly imported transactions that haven't been processed yet
* **Processed**: Transactions that have been successfully matched or categorized
* **Ignored**: Transactions you've marked as not relevant to your Open Collective operations
* **On Hold**: Transactions that need review before they can be processed

#### The Off-Platform Transactions Dashboard

To view and manage your imported transactions:

1. Go to your **Fiscal Host Dashboard**
2. Click **"Off-Platform Transactions"** in the left sidebar
3. You'll see a comprehensive view with:
   * **Summary statistics** showing counts of transactions by status
   * **Filter options** to find specific transactions
   * **Bulk action tools** for processing multiple transactions at once
   * **A detailed transaction list** with all imported data

## Troubleshooting Connection Issues

**Connection Fails to Sync**:

1. Check if your bank credentials have changed
2. Verify your bank account is still active
3. Try reconnecting using the **"Update Connection"** option
4. Contact support if issues persist

**Missing Transactions**:

1. Check if transactions fall within the supported date range
2. Verify the transaction amount meets minimum thresholds
3. Confirm the transaction has fully settled in your bank account
4. Try manually triggering a sync

**Duplicate Transactions**:

* The system automatically prevents duplicate imports
* If you see duplicates, they may be from different accounts or pending vs. settled transactions
* Use filters to identify and manage any apparent duplicates
