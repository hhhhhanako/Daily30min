function numIslands(grid: string[][]): number {
  let m = grid.length
  let n = grid[0].length
  let res = 0
  let dfs = (i, j) => {
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return
    if (grid[i][j] !== '1') return
    grid[i][j] = '2'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++
        dfs(i, j)
      }
    }
  }
  return res
};