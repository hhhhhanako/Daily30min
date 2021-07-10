// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

// 前缀和+哈希表
function numSubarraysWithSum(nums: number[], goal: number): number {
  let map = new Map()
  let count = 0
  let sum = 0
  for (let num of nums) {
    map.set(sum, (map.get(sum) || 0) + 1)
    sum += num
    count += map.get(sum - goal) || 0
  }
  return count
};