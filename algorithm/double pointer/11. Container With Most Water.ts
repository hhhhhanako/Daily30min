function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let res = 0
  while (l < r) {
    let sum
    if (height[l] < height[r]) {
      sum = height[l] * (r - l)
      l++
    } else {
      sum = height[r] * (r - l)
      r--
    }
    res = Math.max(res, sum)
  }
  return res
}
