// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

function isLongPressedName(name: string, typed: string): boolean {
  // 完全一致直接返回true
  if (name === typed) return true
  let i = 0
  let j = 0
  let res = false
  while (typed[j] === name[i]) {
    // 跳出循环条件：
    // typed和name同时遍历结束：true
    // typed遍历结束时name还未遍历结束： 结束循环 res=false
    if (j === typed.length) {
      if (i === name.length) return true
      break
    }
    j++ // 遍历typed下一位
    // typed下一位和name的下一位是否相同 优先级高于 typed下一位和name的当前位是否相同
    // 前者代表未长按且相同 后者代表长按后相同
    // 不相同则会在下一次判断循环条件时跳出 返回false
    if (typed[j] === name[i + 1]) i++
  }
  return res
};