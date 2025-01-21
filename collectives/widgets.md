# Buttons & Banners

## Donate Button

```
<script src="https://opencollective.com/:collectiveSlug/:verb/button.js" color="[white|blue]"></script>
```

Just replace `:collectiveSlug` with the slug of your Collective (e.g. webpack for [https://opencollective.com/webpack](https://opencollective.com/webpack)). The verb can either be "donate" or "contribute".

![](<../.gitbook/assets/Screen Shot 2019-01-24 at 2.48.23 PM.png>)

If you want to add a donate button to a blog post, you can load an image version of the logo and then link to the donate page of your collective.

```
<a href="https://opencollective.com/webpack/donate" target="_blank">
  <img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width=300 />
</a>
```

Result:

[![](https://opencollective.com/webpack/donate/button@2x.png?color=blue)](https://opencollective.com/webpack/donate)

Here is an [example](https://medium.com/open-collective/open-collective-donate-button-e7e6d5965b2c).

## Show Supporters & Sponsors

Use this script:

```
<script src="https://opencollective.com/:collectiveSlug/banner.js"></script>
```

where `:collectiveSlug` is the slug of your collective, e.g. `apex` for [https://opencollective.com/apex](https://opencollective.com/apex).

You can also add a style object (react style), e.g.

```
<script src='https://opencollective.com/:collectiveSlug/banner.js?style={"a":{"color":"red"},"h2":{"fontFamily":"Verdana","fontWeight":"normal","fontSize":"20px"}}'></script>
```

Note: make sure that your style object is parsable with `JSON.stringify`

**Example:**

* [https://www.spinacms.com/](https://www.spinacms.com/)

**How to customize?**

By default, it uses the default styling of your `h1` and `h2` on your page. You can target them with CSS to customize:

```
#opencollective-banner h1 {
  color: black;
}
```

## About the Copyright

The designs of these widget buttons are licensed by Open Collective under a [CC0 1.0 Universal license](https://creativecommons.org/publicdomain/zero/1.0/deed.en). Open Collective, the Open Collective Logo, are trademarks of Open Collective, Inc. and therefore they can’t be modified or used individually, for more info or request reach out to legal@opencollective.com

## Related:

* Website [badge](../financial-contributors/website-badge.md) showing the Collectives you back
* [Export SVGs](collective-settings/data-export.md) showing your supporters, sponsors, or contributors
