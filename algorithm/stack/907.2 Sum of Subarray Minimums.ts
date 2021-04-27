// https://leetcode-cn.com/problems/sum-of-subarray-minimums/
// [3, 1, 2, 4]
// 找每个位置左边第一个比其小的数的位置和右边第一个比其小的位置
// 第一种解法的快速解法 没看明白
// https://leetcode-cn.com/problems/sum-of-subarray-minimums/solution/guan-fang-er-jie-fa-javascript-xiang-jie-by-jack-1/
function sumSubarrayMins_Two(arr: number[]): number {
  // function sumSubarrayMins(arr) {
  const mod = 1e9 + 7
  let stack = []
  let tmp = 0,
    allCount = 0,
    sum = 0
  for (let i = 0; i < arr.length; i++) {
    allCount = 1
    while (stack.length && stack[stack.length - 1].val > arr[i]) {
      let { count, val } = stack.pop()
      tmp -= count * val
      allCount += count
    }

    tmp += allCount * arr[i]
    stack.push({
      val: arr[i],
      count: allCount,
    })

    sum += tmp

    sum %= mod
  }
  return sum
}
