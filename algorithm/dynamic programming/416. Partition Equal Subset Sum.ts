// 背包问题
// dp[i][j]是前i个数字中是否有和为j的组合 true/false
function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((a, b) => a + b)
  if (sum % 2) return false
  let target = sum / 2
  let dp = new Array(target + 1).fill(0)
  dp[0] = true
  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j-num]
    }
  }
  return dp[target]
};