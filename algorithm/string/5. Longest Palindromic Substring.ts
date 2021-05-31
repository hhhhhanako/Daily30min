// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

//扩散中心法
function longestPalindrome(s: string): string {
  if (s.length < 2) return s
  let res = ''
  let helper = (m, n) => {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    //回文字符串为m+1到n-1
    if (res.length < n - m - 1) {
      res = s.slice(m + 1, n)
    }
  }
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  return res
};
