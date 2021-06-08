class MinStack {
  stack: number[]
  minStack: number[]
  constructor() {
    this.minStack = [Infinity]
    this.stack = []
  }

  push(val: number): void {
    this.stack.push(val)
    this.minStack.push(Math.min(val, this.getMin()))
  }

  pop(): void {
    if (!this.stack.length) return
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    if (!this.stack.length) return
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    if (!this.stack.length) return
    return this.minStack[this.minStack.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/