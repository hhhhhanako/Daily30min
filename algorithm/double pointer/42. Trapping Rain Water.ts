// 运算结果没单调栈好
function trap(height: number[]): number {
  const len = height.length
  let res = 0
  let l = 0
  let r = len - 1
  let leftMaxHeight = 0
  let rightMaxHeight = 0
  while (l < r) {
    if (height[l] < height[r]) {
      leftMaxHeight = Math.max(leftMaxHeight, height[l])
      res += leftMaxHeight - height[l]
      l++
    } else {
      rightMaxHeight = Math.max(rightMaxHeight, height[r])
      res += rightMaxHeight - height[r]
      r--
    }
  }
  return res
}
