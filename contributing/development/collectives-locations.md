---
description: How we deal with collective's addresses and countries
---

# Collective's locations

## GraphQL API

On the GraphQL side things are easy, you can just fetch `collective.location` and you'll get an object like:

```javascript
{
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    country: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    long: { type: GraphQLFloat },
}
```

## Database

On the database side things are organized this way:

* `geoLocationLatLong` =&gt; coordinates \(eg. `POINT (43.6515899 -70.29052239999999)`\)
* `countryISO` =&gt; two letters country code \(eg. `FR`, `BE`...etc\)
* `address` =&gt; postal address _normally_ without country \(eg. `12 opensource avenue, 7500 Paris`\) 
* `locationName` =&gt; a name for the location \(eg. `Google Headquarters`\)

