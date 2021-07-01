// 完全背包求具体方案
function largestNumber(cost: number[], target: number): string {
  let dp = new Array(target + 1).fill(-Infinity)
  dp[0] = 0
  for (let i = 0; i < 9; i++) {
    for (let j = cost[i]; j <= target; j++) {
      dp[j] = Math.max(dp[j], dp[j - cost[i]] + 1)
    }
  }
  if (dp[target] < 0) {
    return '0'
  }
  let res = ''
  for(let i =8, j =target;i>=0;i--){
    while(j>=cost[i] && dp[j] === dp[j-cost[i]]+1){
      res = res + (i+1)
      j-=cost[i]
    }
  }
  return res
};