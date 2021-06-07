// 数组元素均为正值
// sum为数组所有的元素和,neg为添加负号的元素和， (sum - neg) - neg = target => neg = (sum - target) / 2
// 题干转化为挑选数组的任意元素和为neg的方法数
// dp[i][j]代表前i个数中和为j的组合数 题目需要dp[nums.length][neg]
// dp[i][j] = dp[i-1][j]+(dp[i-1][j-nums[i-1]]) 括号内当j>nums[i-1]才存在

// 时间复杂度N(length * neg)
// function findTargetSumWays(nums: number[], target: number): number {
//   let sum = nums.reduce((a, b) => a + b)
//   let neg = (sum - target) / 2
//   if (neg < 0 || neg % 1 !== 0) return 0
//   let n = nums.length
//   let dp = new Array(n + 1).fill(0).map(item => new Array(neg + 1).fill(0))
//   dp[0][0] = 1
//   for (let i = 1; i <= n; i++) {
//     let num = nums[i - 1]
//     for (let j = 0; j <= neg; j++) {
//       dp[i][j] = dp[i - 1][j]
//       if (j >= num) {
//         dp[i][j] += dp[i - 1][j - num]
//       }
//     }
//   }
//   return dp[n][neg]
// };

// 降维N(neg) 减少空间复杂度
// dp[j] = dp[j-1] + (dp[j- nums[i-1]]) 括号内当j>nums[i-1]才存在
function findTargetSumWays(nums: number[], target: number): number {
  let sum = nums.reduce((a, b) => a + b)
  let neg = (sum - target) / 2
  if (neg < 0 || neg % 1 !== 0) return 0
  let n = nums.length
  let dp = new Array(neg + 1).fill(0)
  dp[0] = 1
  for (let num of nums) {
    for(let j= neg; j>=num; j--){
      dp[j] += dp[j-num] 
    } 
  }
  return dp[neg]
};