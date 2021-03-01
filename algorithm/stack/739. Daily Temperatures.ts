function dailyTemperatures(T: number[]): number[] {
  let index_stack = []
  let res = new Array(T.length).fill(0)
  for(let i = 0;i<T.length;i++) {
    while(T[i]>T[index_stack[index_stack.length - 1]] && index_stack.length){
      let index = index_stack.pop()
      res[index] = i - index
    }
    index_stack.push(i)
  }
  return res
};