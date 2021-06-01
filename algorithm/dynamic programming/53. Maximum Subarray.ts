// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// dp[i]代表以i结尾的最大子串和
// dp[i] = max(dp[i-1]+nums[i], nums[i])
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let sum = nums[0]
  let max = sum
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    max = Math.max(max, sum)
  }
  return max
};