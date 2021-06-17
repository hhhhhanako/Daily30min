// 不同顺序视为不同组合
function combinationSum4(nums: number[], target: number): number {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let j = 1; j <= target; j++) {
    for (let num of nums) {
      if (j >= num) dp[j] += dp[j - num]
    }
  }
  return dp[target]
};