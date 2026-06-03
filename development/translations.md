---
description: >-
  Procedure and documentation about how to contribute to the Open Collective
  translations
icon: book-open-lines
---

# Translations

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
