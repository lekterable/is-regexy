import isRegexy from '.'

describe('isRegexy', () => {
  it('should validate Regex object', () => {
    expect(isRegexy(new RegExp('development'))).toBe(true)
  })

  it('should validate Regex object with flag', () => {
    expect(isRegexy(new RegExp('development', 'i'))).toBe(true)
  })

  it('should validate Regex object with multiple flags', () => {
    expect(isRegexy(new RegExp('development', 'gi'))).toBe(true)
  })

  it('should validate Regex pattern', () => {
    expect(isRegexy(/development/)).toBe(true)
  })

  it('should validate Regex pattern with flag', () => {
    expect(isRegexy(/development/i)).toBe(true)
  })

  it('should validate Regex pattern with multiple flags', () => {
    expect(isRegexy(/development/gi)).toBe(true)
  })

  it('should validate non-Regex string', () => {
    expect(isRegexy('development')).toBe(false)
  })

  it('should validate Regex string', () => {
    expect(isRegexy('/development/')).toBe(true)
  })

  it('should validate complex Regex string', () => {
    expect(isRegexy('/(epic|feat|fix|chore)/DEV-\\d{4}/i')).toBe(true)
  })

  it('should validate Regex string with flag', () => {
    expect(isRegexy('/development/i')).toBe(true)
  })

  it('should validate Regex string with multiple flags', () => {
    expect(isRegexy('/development/ig')).toBe(true)
  })

  it('should validate Regex string with invalid flag', () => {
    expect(isRegexy('/development/x')).toBe(false)
  })
})
