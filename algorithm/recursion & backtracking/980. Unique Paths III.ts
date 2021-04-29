// 在二维网格 grid 上，有 4 种类型的方格：

// 1 表示起始方格。且只有一个起始方格。
// 2 表示结束方格，且只有一个结束方格。
// 0 表示我们可以走过的空方格。
// -1 表示我们无法跨越的障碍。
// 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

// 每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。

function uniquePathsIII(grid: number[][]): number {
  let res = 0
  const m = grid.length
  const n = grid[0].length
  let sx, sy, step = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        sx = i
        sy = j
      } else if (grid[i][j] === 0) {
        step++
      }
    }
  }
  let dfs = (cx, cy, count) => {
    if (cx < 0 || cx >= m || cy < 0 || cy >= n || grid[cx][cy] === -1) return false
    if (grid[cx][cy] === 2) {
      return count === 0 ? (res++) : false
    }
    grid[cx][cy] = -1
    dfs(cx + 1, cy, count - 1)
    dfs(cx - 1, cy, count - 1)
    dfs(cx, cy + 1, count - 1)
    dfs(cx, cy - 1, count - 1)
    grid[cx][cy] = 0
  }
  dfs(sx, sy, step)
  return res
};