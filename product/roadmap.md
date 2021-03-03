---
description: >-
  We'll be updating our Product Roadmap periodically. You'll also find below
  guidelines for prioritizing features and projects as well as a template for
  new projects.
---

# Roadmap

### Open Collective Roadmap: May - June \(short Q2\)

This \(short\) Quarter is all about shedding complexity: in our offer, in our codebase, in our UI.

Offer:  
COVID-19 has given us an opportunity to position ourselves in a new vertical that has similar requirements than the Open Source one: Crisis Responders. Meaning similar in the sense that they need a turn-key solution that includes a platform to fundraise and disburse funds paired with a fiscal host that can act as the custodian of the funds. We’ve struggled to replicate this outside of the FOSS ecosystem, but now we are seeing it again.

To make sure we support as many groups as possible in this vertical, we’ve waived our fees until June, we are hiring someone to manage the Open Collective Foundation \(501c3 that’s doing the fiscal hosting in the US\) and relaunched it with a focus on COVID-19. From the new collectives in march 175 are COVID-19 related initiatives.

The growth driven by COVID-19 Relief groups is an opportunity for us to focus our efforts on growing a new segment of collectives with a **First Party Host** \(this is a host we own, as opposed to a third party host, a legal entity that uses Open Collective Platform\). This is important for us, because we are providing a complete solution ourselves: Tax deductible fiscal sponsorship as a service paired with a transparent open finances platform.

## Projects

### Host Dashboard Design

Project Issue: [\#2896](https://github.com/opencollective/opencollective/issues/2896)  
Project owner: [@piamancini](https://github.com/piamancini)  
Design Owner: [@Memo-Es](https://github.com/Memo-Es)  
Status: Wireframes: shipped, UI design: in process.  
Goal: Design in components that can be implemented in phases.

### Host Dashboard Implementation

Project owner: [@piamancini](https://github.com/piamancini)  
Technical owner: [@Betree](https://github.com/Betree)  
Implementation Specs Issue: **needed**  
Component Deliverables:

* Expense List
* Pay
* Filtering for Host Dashboard

### Design Proposal for Contribution Flow Iteration

Goal is to lower the barriers for donors to give:  
User related Issues: [\#3067](https://github.com/opencollective/opencollective/issues/3067) and [\#2228](https://github.com/opencollective/opencollective/issues/2228)  
Project owner: [@piamancini](https://github.com/piamancini)  
Design owner: [@Memo-Es](https://github.com/Memo-Es)  
Project Issue: [\#3164](https://github.com/opencollective/opencollective/issues/3164)

### PayPal Payout API Upgrade

We're currently using [Paypal Adaptive Payments](https://developer.paypal.com/docs/classic/adaptive-payments/integration-guide/APIntro)  
PayPal introduced a Payout API that provides the following benefits over adaptive payments:  
Payout limit is $20,000 USD  
For payouts made through the API, it’s just $0.25 USD per U.S. transaction.  
For international payments, the fee is 2% of the payment amount to each recipient \(up to a maximum of $20\)  
Project Owner [@kewitz](https://github.com/kewitz)  
Project Issue: [\#3131](https://github.com/opencollective/opencollective/issues/3131)  
Related Issues: [\#2274](https://github.com/opencollective/opencollective/issues/2274) and [\#2258](https://github.com/opencollective/opencollective/issues/2258)

### Collective Page Enhancements

Improving and simplifying Collective Page  
Project Owner: [@Betree](https://github.com/Betree)  
Project Issue: [\#3136](https://github.com/opencollective/opencollective/issues/3136)

### Subscriptions Management Revamp

Simplifying how donors manage their subscriptions  
Project Owner: [@sbinlondon](https://github.com/sbinlondon)  
Project Issue: [\#3137](https://github.com/opencollective/opencollective/issues/3137)  
Figma Designs: [here](https://www.figma.com/file/ZQBMWhnGGtRWeIZknFW1eP/%5BOC.com%5D-Production-Ready-%E2%9C%85?node-id=3572%3A0)

### 2FA

Project Owner: [@znarf](https://github.com/znarf)  
Project Issue: **needed**  
[Related Issues](https://github.com/opencollective/opencollective/issues?q=is%3Aissue+2FA)

### API Metrics

Project Owner: [@znarf](https://github.com/znarf)  
Project Issue: **needed**

### Fees on Top

Project Issue: [\#3105](https://github.com/opencollective/opencollective/issues/3105)  
Since we are waiving our fees for COVID collectives we are setting up a path for donors to give platform fees on top of their donation.  
Project Owner: [@piamancini](https://github.com/piamancini)  
Technical Owner [@sbinlondon](https://github.com/sbinlondon)  
Status: MVP merged

### Secondary Priorities on Roadmap:

Stretch Goal: Update old static pages from new design \(Design owner [@Memo-Es](https://github.com/Memo-Es), Project owner [@piamancini](https://github.com/piamancini) \) [\#3176](https://github.com/opencollective/opencollective/issues/3176)  
Small Improvements \([@znarf](https://github.com/znarf)\):

* Killing host Collectives
* Collective to collective across hosts \(spec\)
* Pledges issue \(Ben\)

### Biz Dev Deliverables

\(Biz Dev\) Update OCF Board / Compliance \([@piamancini](https://github.com/piamancini)\)  
\(Biz Dev\) Update Ford / Sloane Proposal \([@piamancini](https://github.com/piamancini)\)  
\(Biz Dev\) Sign OSC Agreement with John Hopkins \(Alyssa\)  
\(Biz Dev\) Push Github Sponsors \([@alanna](https://github.com/alanna)\)  
\(Biz Dev\) Grow the COVID-19 groups for OCF \(Kayla\)

## **Key questions for prioritization**

**This is what we ask ourselves to decide what gets done and what doesn't.**

* Does this serve our mission? 
* Will this make us financially sustainable within a year?
* Is it feasible to build and maintain with our team and runway?
* Can this make us move faster?
* Does this increase quality and not technical debt?
* Will this bring us more Collective and financial contributors?
* Is this already solved elsewhere or is it our unique contribution?
* Can we measure the success of  this?

## Template for new projects

* Github issue
  * explain the feature. 
  * Link to other opened issues or data. 
  * Include details below.
* Kickoff
  * Organize a special meeting or on a scheduled one. 
* Project owner. 
  * Role: Facilitator, decision-maker, producer. 
  * It's ultimately responsible for \(needs to do or organize who does\)
    * Delivery 
    * Q&A
    * Docs & Comms 
    * Post-ship plan for maintenance 
* Success metric\(s\)
* Timeframe - kickoff and delivery, main milestones / roadmap

