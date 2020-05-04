# is-regexy ![npm](https://img.shields.io/npm/v/is-regexy) ![Travis (.org)](https://img.shields.io/travis/lekterable/is-regexy) [![codecov](https://codecov.io/gh/lekterable/is-regexy/branch/master/graph/badge.svg)](https://codecov.io/gh/lekterable/is-regexy) [![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg?style=flat-square)](https://github.com/lekterable/perfekt)

A very simple library for checking if given value (Regex object OR string) could be a valid regular expression.

Useful when we want to allow users to pass regex patterns as user input.

## Example

```js
const isRegex = require('is-regex') // CommonJS
// OR
import isRegex from 'is-regex' // ES modules

isRegex('foo') // false

isRegex(/foo/) // true
isRegex(new RegExp('foo')) // true
isRegex('/foo/') // true
isRegex('/foo/ig') // true
isRegexy('/(epic|feat|fix|chore)/DEV-\\d{4}/i') //true
```

## License

[MIT](LICENSE)
