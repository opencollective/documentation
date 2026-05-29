---
description: >-
  Procedure and documentation about how to contribute to the Open Collective
  translations
icon: book-open-lines
---

# Translations

We use Crowdin to manage all our translations. You can join and contribute on: [https://translate.opencollective.com/](https://translate.opencollective.com/)

Quick tour

{% embed url="https://www.loom.com/share/467aeead7ed74128935a2b1e03bc9220" %}

### Adding a new language <a href="#adding-a-new-language" id="adding-a-new-language"></a>

To ask for a language to be added on Crowdin, feel free to [open a discussion](https://crowdin.com/project/opencollective/discussions). We always accept these requests, but please note that inactive languages will often be removed if there's no contribution.

### Format <a href="#format" id="format"></a>

#### Variables <a href="#variables" id="variables"></a>

Words between brackets are variables that meant to be replaced by dynamic values.

For example the string:

```
Hello {collectiveName}!
```

Will render as **`Hello Webpack!`** if the collective name is Webpack. You must never change the variable names.

#### Select <a href="#select" id="select"></a>

`select` is a special command that lets us render different texts conditionally. The base pattern is:

```
{myVariable, select, value1 {Rendered if myVariable=value1} other {Otherwise this}}
```

A classic example for that is the interval select:

```
{amount} {interval, select, month {monthly} year {yearly}}
```

Here `interval` is the variable with `month` and `year` as possible values. If amount is equal to `$5` and interval to `year`, the template above will be rendered to:

```
$5 yearly
```

Here again, don't change the variable name or the `select` keyword, only the replaced strings (`monthly` and `yearly` if we take the example above).
