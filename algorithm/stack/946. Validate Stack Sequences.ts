function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let newStack = []
  for (let item of pushed) {
    newStack.push(item)
    while (newStack.length && popped[0] === newStack[newStack.length - 1]) {
      newStack.pop()
      popped.shift()
    }
  }
  return !popped.length
}
