
# ember-export-sass-variables

[![Build Status](https://semaphoreci.com/api/v1/munstrocity/ember-export-sass-variables/branches/master/badge.svg)](https://semaphoreci.com/munstrocity/ember-export-sass-variables)

Export your SASS variables and access them through a utility. This addon supports any format and uses the built in node-sass functionality to parse the variables.

## Methods

`export (utilName: String, contents: any)`

The export method is used in your SASS file to tell the compiler what name the utility file is, and what variables to export inside.

## Usage
Two parts: Define a sass export and import the utility that matches the name of the export.

```css
$export: export('red', (
  colors: $colors,
  themes: $themes
));
```

```js
import styles from 'ember-export-sass-variables/utils/colors';
```

## Installation
`ember install ember-export-sass-variables`

## Credits

Thanks to these projects, I would not have been able to create this:

- https://github.com/Punk-UnDeaD/node-sass-export
- https://github.com/davidpett/ember-cli-sass-variables
