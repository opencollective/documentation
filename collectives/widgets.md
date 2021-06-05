# Buttons & Banners

## Donate Button

```text
<script src="https://opencollective.com/:collectiveSlug/:verb/button.js" color="[white|blue]"></script>
```

Just replace `:collectiveSlug` with the slug of your Collective \(e.g. webpack for [https://opencollective.com/webpack](https://opencollective.com/webpack)\). The verb can either be "donate" or "contribute".

![](../.gitbook/assets/screen-shot-2019-01-24-at-2.48.23-pm.png)

If you want to add a donate button to a blog post, you can load an image version of the logo and then link to the donate page of your collective.

```text
<a href="https://opencollective.com/webpack/donate" target="_blank">
  <img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width=300 />
</a>
```

Result:

[![](https://opencollective.com/webpack/donate/button@2x.png?color=blue)](https://opencollective.com/webpack/donate)

Here is an [example](https://medium.com/open-collective/open-collective-donate-button-e7e6d5965b2c).

## Show Backers & Sponsors

Use this script:

```text
<script src="https://opencollective.com/:collectiveSlug/banner.js"></script>
```

where `:collectiveSlug` is the slug of your collective, e.g. `apex` for [https://opencollective.com/apex](https://opencollective.com/apex).

You can also add a style object \(react style\), e.g.

```text
<script src='https://opencollective.com/:collectiveSlug/banner.js?style={"a":{"color":"red"},"h2":{"fontFamily":"Verdana","fontWeight":"normal","fontSize":"20px"}}'></script>
```

Note: make sure that your style object is parsable with `JSON.stringify`

**Example:**

* [https://www.spinacms.com/](https://www.spinacms.com/)

**How to customize?**

By default, it uses the default styling of your `h1` and `h2` on your page. You can target them with CSS to customize:

```text
#opencollective-banner h1 {
  color: black;
}
```

## Show Events

```text
<script src="https://opencollective.com/:collectiveSlug/events.js" width="500"></script>
```

Example:

![](../.gitbook/assets/screen-shot-2019-01-24-at-2.50.59-pm.png)

## Related:

* Website [badge](../financial-contributors/website-badge.md) showing the Collectives you back
* [Export SVGs](data-export.md) showing your backers, sponsors, or contributors

