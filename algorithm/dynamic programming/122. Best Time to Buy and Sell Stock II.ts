// 贪心
function maxProfit(prices: number[]): number {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1]
    }
  }
  return res
}

// 动态优化+降维优化
// function maxProfit(prices: number[]): number {
//   const len = prices.length
//   let dp = new Array(2)
//   dp[0] = 0
//   dp[1] = -prices[0]
//   for (let i = 1; i < len; i++) {
//     dp[0] = Math.max(dp[0], dp[1] + prices[i])
//     dp[1] = Math.max(dp[1], dp[0] - prices[i])
//   }
//   return dp[0]
// }
