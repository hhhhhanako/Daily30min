// Input: S = "qqe"
// Output: ["eqq","qeq","qqe"]
function permutation(S: string): string[] {
  let res = []
  let vis = {}
  const strArr = S.split('')
  strArr.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  let helper = (arr) => {
    if (arr.length === S.length) {
      res.push(arr.join(''))
      return false
    }
    for (let i = 0; i < S.length; i++) {
      if (vis[i]) continue
      if (i >= 1 && strArr[i] === strArr[i - 1] && !vis[i - 1]) continue
      vis[i] = true
      helper(arr.concat(strArr[i]))
      vis[i] = false
    }
  }
  helper([])
  return res
}

