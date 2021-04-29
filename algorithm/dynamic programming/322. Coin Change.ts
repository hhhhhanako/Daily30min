// Input: coins = [1,2,5], amount = 11
// Output: 3
// function coinChange(coins: number[], amount: number): number {
//   let dp = new Array(amount + 1).fill(Infinity)
//   dp[0] = 0
//   for (let i = 0; i < amount + 1; i++) {
//     for (let coin of coins) {
//       if (i - coin >= 0) {
//         dp[i] = Math.min(dp[i], dp[i - coin] + 1)
//       }
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount]
// };

function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i < amount + 1; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

function coinChange_two(coins: number[], amount: number): number {
  const cache = {}
  let makeChange = money => {
    if (!money) return []
    if(cache[money]) return cache[money]
    let min = [], newMin, newAmount
    for(let coin of coins) {
      newAmount = money - coin
      if(newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if(newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin)
      }
    }
    cache[money] = min
  }
  return makeChange(amount).length
};