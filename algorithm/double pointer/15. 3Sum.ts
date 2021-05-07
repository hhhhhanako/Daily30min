// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
function threeSum(nums: number[]): number[][] {
  let len = nums.length
  if (len < 3) return []
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        res.push([].concat(nums[i], nums[L], nums[R]))
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      } else if (sum > 0) {
        R--
      } else {
        L++
      }
    }
  }
  return res
};