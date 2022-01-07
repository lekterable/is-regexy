# is-regexy [![npm](https://img.shields.io/npm/v/is-regexy)](https://www.npmjs.com/package/is-regexy) [![build](https://img.shields.io/travis/lekterable/is-regexy)](https://travis-ci.com/github/lekterable/is-regexy) [![codecov](https://codecov.io/gh/lekterable/is-regexy/branch/master/graph/badge.svg)](https://codecov.io/gh/lekterable/is-regexy) [![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg?style=flat-square)](https://github.com/lekterable/perfekt)

A very simple library for checking if a given value (Regex object OR string) is a valid regular expression.

Useful when you want to allow users to pass regex patterns as input.

## Example

```js
const isRegexy = require('is-regexy') // CommonJS
// OR
import isRegexy from 'is-regexy' // ES modules

isRegexy('foo') // false

isRegexy(/foo/) // true
isRegexy(new RegExp('foo')) // true
isRegexy('/foo/') // true
isRegexy('/foo/ig') // true
isRegexy('/(epic|feat|fix|chore)/DEV-\\d{4}/i') //true
```

## License

[MIT](LICENSE)
