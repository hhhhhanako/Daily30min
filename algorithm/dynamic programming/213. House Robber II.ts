// 不能同时偷第一个房间和最后一个房间
// 比较nums.splice(1)和nums.splice(0,nums.lenth -1)哪个抢钱多
// dp[i]是前i+1个房间抢到最多的钱
function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    return Math.max(rob_two(nums.slice(1)), rob_two(nums.slice(0, nums.length - 1)))
};

function rob_two(nums: number[]): number {
  let len = nums.length
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[len - 1]
}
