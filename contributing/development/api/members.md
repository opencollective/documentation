# Members

## Get list of members

We have a [UI for exporting](https://docs.opencollective.com/help/collectives/data-export) CSV or JSON data if you prefer.

`GET https://opencollective.com/:collective/members/[all|users|organizations].json`

E.g. [https://opencollective.com/webpack/members/organizations.json](https://opencollective.com/webpack/members/organizations.json)

```text
[
  {
    "MemberId": 8764,
"createdAt": "2017-11-03 09:36",
"type": "ORGANIZATION",
"role": "BACKER",
"tier": "Backer",
"isActive": true,
"totalAmountDonated": 2,
"currency": "USD",
"lastTransactionAt": "2017-11-03 09:36",
"lastTransactionAmount": 2,
"profile": "https://opencollective.com/freegames661",
"name": "Freegames66",
"description": null,
"image": null,
"email": null,
"twitterHandle": "freegames66",
"website": "http://www.freegames66.com"
},
  ...
]
``` 

