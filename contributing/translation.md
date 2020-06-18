---
description: >-
  Procedure and documentation about how to contribute to the Open Collective
  translations
---

# Translation

{% hint style="info" %}
We use Crowdin to manage all our translations. You can join and contribute on: [https://crowdin.com/project/opencollective/](https://crowdin.com/project/opencollective/)
{% endhint %}

## Adding a new language

To ask for a language to be added on Crowdin, feel free to open a discussion on [https://crowdin.com/project/opencollective/discussions](https://crowdin.com/project/opencollective/discussions). We always accept these requests, but please note that inactives languages will often been removed if there's no contribution.

## Format

### Variables

Words between brackets are variables that meant to be replaced by dynamic values.

For example the string:

```text
Hello {collectiveName}!
```

Will render as **`Hello Webpack!`** if the collective name is Webpack. You must never change the variable names.

### Select

`select` is a special command that lets us render different texts conditionally. The base pattern is:

```text
{myVariable, select, value1 {Rendered if myVariable=value1} other {Otherwise this}}
```

A classic example for that is the interval select:

```text
{amount} {interval, select, month {monthly} year {yearly}}
```

Here `interval` is the variable with `month` and `year` as possible values. If amount is equal to `$5` and interval to `year`, the template above will be rendered to:

```text
$5 yearly
```

Here again, don't change the variable name or the `select` keyword, only the replaced strings \(`monthly` and `yearly` if we take the example above\).

