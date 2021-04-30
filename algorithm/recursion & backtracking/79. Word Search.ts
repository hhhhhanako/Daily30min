// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  let res = false
  let dfs = (x, y, index) => {
    if (x < 0 || x >= m || y < 0 || y >= n || !board[x][y]) {
      return false
    }
    if (board[x][y] === word[index]) {
      if (index === word.length - 1) {
        return true
      } else {
        board[x][y] = ''
        let result = dfs(x + 1, y, index + 1) || dfs(x - 1, y, index + 1) || dfs(x, y - 1, index + 1) || dfs(x, y + 1, index + 1)
        board[x][y] = word[index]
        return result
      }
    }
    return false
  }
  for (let i = 0; i < m; i++) {
    if (res) break
    for (let j = 0; j < n; j++) {
      if (res) break
      if (board[i][j] === word[0]) {
        res = dfs(i, j, 0)
      }
    }
  }
  return res
};