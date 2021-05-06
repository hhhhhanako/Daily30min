// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
function generateParenthesis(n: number): string[] {
  let res = []
  let dfs = (str, left, right) => {
    if (str.length === n * 2) return res.push(str)
    if (left > 0) dfs(str + '(', left - 1, right)
    if (right > 0 && right > left) dfs(str + ')', left, right - 1)

  }
  dfs('', n, n)
  return res
};