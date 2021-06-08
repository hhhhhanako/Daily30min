// 中心扩散法 和第五题类似
function countSubstrings(s: string): number {
  let count = 0
  let helper = (m, n) => {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      count++
      m--
      n++
    }
  }
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  return count
};