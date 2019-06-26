Architecture Overview
---------------------

This page provides the architecture overview of Open Collective. In Open Collective
every entity is a collective and can be accessed publicly via their unique slug.

## Orders

An Order is the intent to give or withdraw money from a Collective. It is created by a UserId on behalf of a collective (which can be their own UserCollective or any other Collective that they are a member of).

## Members

A Member connects a User to a Collective. It can have multiple roles (one role per row):

## Transactions

A Transaction records money moving from one Collective to another Collective.


**Note**: The Collective currency might be different than the Host Currency
(both for the source "From" and the recipient "To"). The fxrate only takes into
account the conversion between ToCollectiveCurrency to ToHostId.
