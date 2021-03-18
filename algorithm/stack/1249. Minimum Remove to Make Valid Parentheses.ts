// https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/
// 输入：s = "lee(t(c)o)de)"
// 输出："lee(t(c)o)de"
function minRemoveToMakeValid(s: string): string {
// function minRemoveToMakeValid(s){
  let strArr = [...s]
  let stack = []
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] === '(') {
      stack.push(i)
    } else if(strArr[i] === ')') {
      if(stack.length) {
        stack.pop()
      } else {
        delete strArr[i]
      }
    }
  }
  stack.forEach(item => {
    delete strArr[item]
  })
  let ret = strArr.filter(item => {return item !== undefined})

  return ret.join('')
  // return {stack, ret: ret.join(''), strArr}
};