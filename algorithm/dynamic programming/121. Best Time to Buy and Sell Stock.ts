// 动态优化
// dp[i][j]是第i+1天持股状态为j时的收益（j===0 不持股 / j===1 持股）
// function maxProfit(prices: number[]): number {
//     const len = prices.length
//     let dp = new Array(len).fill(0).map(() => [0,0])
//     dp[0][0] = 0
//     dp[0][1] = -prices[0]
//     for(let i = 1;i<len;i++) {
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
//         dp[i][1] = Math.max(dp[i-1][1], -prices[i])
//     }
//     return dp[len-1][0]
// };

// 动态优化+降维优化
// dp[j]是第i+1天持股状态为j时的收益（j===0 不持股 / j===1 持股）
// function maxProfit(prices: number[]): number {
//     const len = prices.length
//     let dp = new Array(2).fill(0)
//     dp[0] = 0
//     dp[1] = -prices[0]
//     for(let i = 1;i<len;i++) {
//         dp[0] = Math.max(dp[0], dp[1] + prices[i])
//         dp[1] = Math.max(dp[1], -prices[i])
//     }
//     return dp[0]
// };

// 贪心
function maxProfit(prices: number[]): number {
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    max = Math.max(prices[i] - min, max)
  }
  return max
}
