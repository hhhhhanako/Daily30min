// 动态规划+优化版
function uniquePaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1
  let result = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      result[j] = result[j] + result[j-1]
    }
  }
  return result[n-1]
}

// 动态规划
// function uniquePaths(m: number, n: number): number {
//   if (m === 1 || n === 1) return 1
//   let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
//   for (let i = 0; i < m; i++) {
//     dp[i][0] = 1
//   }
//   for (let j = 0; j < n; j++) {
//     dp[0][j] = 1
//   }
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i-1][j] + dp[i][j-1]
//     }
//   }
//   return dp[m-1][n-1]
// };

// 超出时间限制
// function uniquePaths(m: number, n: number): number {
//   if (m === 1 || n === 1) return 1
//   if (m - 1 === 1) return 1 + uniquePaths(m, n - 1)
//   if (n - 1 === 1) return 1 + uniquePaths(m - 1, n)
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
// };


// 超出时间限制
// function uniquePaths(m: number, n: number): number {
//   if(m==1 && n==1) return 1
//   let start = [0, 0]
//   let sum = 0
//   let moveOn = (cur,step) => {
//     let next = []
//     next[0] = cur[0] +step[0]
//     next[1] = cur[1] +step[1]
//     if(next[0] > m-1) return false
//     if(next[1] > n-1) return false
//     if(next[0] == m - 1 && next[1] == n - 1) {
//       sum++
//       return false
//     }
//     moveOn(next,[0,1])
//     moveOn(next,[1,0])

//   }
//   moveOn(start,[0,1])
//   moveOn(start,[1,0])
//   return sum
// };