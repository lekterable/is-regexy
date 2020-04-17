const isRegex = require('is-regex')

module.exports = input => isRegex(input) || /^\/.*\/[gimsuy]*$/.test(input)
