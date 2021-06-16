function minPathSum(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let dp = new Array(n)
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += grid[0][i]
    dp[i] = sum
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[j] = j === 0 ? dp[j] + grid[i][j] : Math.min(dp[j - 1], dp[j]) + grid[i][j]
    }
  }
  return dp[n - 1]
};