// dp[i]是前i+1个房间抢到最多的钱
function rob(nums: number[]): number {
  let len = nums.length
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[len - 1]
}
