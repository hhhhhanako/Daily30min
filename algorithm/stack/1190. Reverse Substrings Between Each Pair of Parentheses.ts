// https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/
// Input: s = "a(bcdefghijkl(mno)p)q"
// Output: "a p mno lkjihgfedcb q"

// Input: (u(love)i)"
// Output: "iloveu"
// 内存消耗+速度击败100%！

function reverseParentheses(s: string): string {
  // function reverseParentheses(s){
  let strArr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      strArr.push([])
    } else if (s[i] === ')') {
      let last = strArr.pop()
      !strArr.length && strArr.push([])
      strArr[strArr.length - 1] = strArr[strArr.length - 1].concat(
        last.reverse()
      )
    } else {
      !strArr.length && strArr.push([])
      strArr[strArr.length - 1].push(s[i])
    }
  }
  return strArr[0].join('')
}
