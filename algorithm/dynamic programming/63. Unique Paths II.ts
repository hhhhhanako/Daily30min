function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  // if(m )
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};


// 动态规划
// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//   let m = obstacleGrid.length
//   let n = obstacleGrid[0].length
//   let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
//   for (let i = 0; i < m; i++) {
//     if (obstacleGrid[i][0] === 1) break
//     dp[i][0] = 1
//   }
//   for (let j = 0; j < n; j++) {
//     if (obstacleGrid[0][j] === 1) break
//     dp[0][j] = 1
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (obstacleGrid[i][j] === 1) continue
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   return dp[m - 1][n - 1]
// };