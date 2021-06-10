// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// dp[i][j]为只使用前i种硬币有多少种和为j的解法
// dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]

function change(amount: number, coins: number[]): number {
  coins.sort((a, b) => a - b)
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
};