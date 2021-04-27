function isValid(s: string): boolean {
  if (s.length & 0) return false
  const left = ['(', '{', '[']
  const right = [')', '}', ']']
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (left.includes(item)) {
      stack.push(item)
    } else if (right.includes(item)) {
      let index = right.indexOf(item)
      if (stack[stack.length - 1] === left[index]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return !stack.length
}
