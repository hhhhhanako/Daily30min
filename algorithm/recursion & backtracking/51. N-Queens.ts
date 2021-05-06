// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

function solveNQueens(n: number): string[][] {
  let res = []
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }

  let check = (x, y) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'Q' && (j == y || x + y == i + j || x - y == i - j))
          return true
      }
    }
    return false
  }
  let dfs = (index) => {
    if (index === n) {
      let resArr = board.map((item) => item.join(''))
      return res.push(resArr)
    }
    for (let i = 0; i < n; i++) {
      if (check(index, i)) continue
      board[index][i] = 'Q'
      dfs(index + 1)
      board[index][i] = '.'
    }
  }
  dfs(0)
  return res
}
