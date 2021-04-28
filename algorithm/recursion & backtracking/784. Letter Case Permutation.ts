// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
function letterCasePermutation(S: string): string[] {
  let res = []
  let dfs = (str, i) => {
    if (i === S.length) {
      res.push(str)
      return false
    }
    if (/\d/.test(S[i])) {
      dfs(str + S[i], i + 1)
    } else {
      let upper = S[i].toUpperCase()
      let lower = S[i].toLowerCase()
      dfs(str + upper, i + 1)
      dfs(str + lower, i + 1)
    }
  }
  dfs('', 0)
  return res
};