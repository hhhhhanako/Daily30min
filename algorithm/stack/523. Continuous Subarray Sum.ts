// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// 前缀和
// sum[j] - sum[i] = k * n => sum[j]和sum[i]除以k的余数相等
// 哈希表记录余数key第一次出现的下标
function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) return false
  let sum = 0
  let map = new Map()
  map.set(0, -1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    let res = sum % k
    if (map.has(res)) {
      let index = map.get(res)
      if (i - index > 1) return true
    } else {
      map.set(res, i)
    }
  }
  return false
};