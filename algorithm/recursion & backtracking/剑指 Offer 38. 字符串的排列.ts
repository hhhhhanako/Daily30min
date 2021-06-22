// 和08.08题目相同 复习
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
function permutation(s: string): string[] {
  let strArr = s.split('')
  let visit = {}
  let res = []
  strArr.sort()
  let dfs = str => {
    if (str.length === s.length) {
      return res.push(str)
    }
    for (let i = 0; i < s.length; i++) {
      if (visit[i]) continue
      if (i >= 1 && strArr[i - 1] === strArr[i] && !visit[i - 1]) continue
      visit[i] = true
      dfs(str + strArr[i])
      visit[i] = false
    }
  }
  dfs('')
  return res
};
