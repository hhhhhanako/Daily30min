// dp[i][j]是前i个数中和为j的最小组合数
// dp[i][j] = min(dp[i-1][j], dp[i-1][j-nums[i-1]])
// nums为[1,4,9...]
// target为n
function numSquares(n: number): number {
  let num = 1
  let dp = new Array(n+1).fill(Infinity)
  dp[0] = 0
  while(num**2 <= n) {
    for(let i = num**2; i<=n ;i++){
      dp[i] = Math.min(dp[i], dp[i-num**2] + 1)
    }
    num++
  }
  return dp[n]
};