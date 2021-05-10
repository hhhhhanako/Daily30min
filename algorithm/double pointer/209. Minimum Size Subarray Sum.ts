// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function minSubArrayLen(target: number, nums: number[]): number {
  let res = Infinity
  let l = 0
  let r = 0
  let sum = 0
  while (r < nums.length) {
    sum += nums[r]
    while (sum >= target) {
      res = Math.min(res, r - l + 1)
      sum -= nums[l]
      l++
    }
    r++
  }
  return res === Infinity ? 0 : res
}
