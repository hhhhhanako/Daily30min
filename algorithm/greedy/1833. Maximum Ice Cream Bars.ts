//dp
// function maxIceCream(costs: number[], coins: number): number {
//   let dp = new Array(coins+1).fill(-Infinity)
//   dp[0] = 0
//   for(let cost of costs) {
//     for(let j = coins; j>= cost;j--){
//       dp[j] = Math.max(dp[j], dp[j-cost]+1)
//     }
//   }
//   return dp[coins]<0 ? 0:dp[coins]
// };
//贪心
function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b)
  let sum = 0
  let i = 0
  while (sum <= coins) {
    sum += costs[i]
    i++
  }
  return i - 1
};