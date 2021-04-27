function combine(n: number, k: number): number[][] {
  let res = []
  let dfs = (arr, start) => {
    if (arr.length === k) {
      res.push(arr)
      return false
    }
    for (let i = start; i <= n; i++) {
      arr.push(i)
      dfs(arr.slice(), i + 1)
      arr.pop()
    }
  }
  dfs([], 1)
  return res
}
