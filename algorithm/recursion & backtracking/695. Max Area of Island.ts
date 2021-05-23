function maxAreaOfIsland(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let max = 0
  let dfs = (i, j) => {
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || grid[i][j] !== 1) return 0
    grid[i][j] = 2
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(dfs(i, j), max)
      }
    }
  }
  return max
};