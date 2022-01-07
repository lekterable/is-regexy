import isRegex from 'is-regex'

const isRegexy = (input: string | RegExp) =>
  isRegex(input) || /^\/.*\/[gimsuy]*$/.test(input)

export default isRegexy
