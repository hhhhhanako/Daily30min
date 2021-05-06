// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  let check = (x, y, value) => {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] === value || board[i][y] === value) return true
    }
    let xx = Math.floor(x / 3) * 3
    let yy = Math.floor(y / 3) * 3
    for (let i = xx; i < xx + 3; i++) {
      for (let j = yy; j < yy + 3; j++) {
        if (board[i][j] === value) return true
      }
    }
    return false
  }
  let nextPos = (x, y) => {
    return y === 8 ? [x + 1, 0] : [x, y + 1]
  }
  let dfs = (x?, y?) => {
    if (x > 8 || y > 8) return true
    if (board[x][y] !== '.') return dfs(...nextPos(x, y))
    for (let value = 1; value < 10; value++) {
      if (check(x, y, String(value))) continue
      board[x][y] = String(value)
      if (dfs(...nextPos(x, y))) return true
      board[x][y] = "."
    }
  }
  dfs(0, 0)
};

// function solveSudoku(board: string[][]): void {
//   let visX = {}
//   let visY = {}
//   let visV = {}
//   let check = (x, y, value) => {
//     let xx = Math.floor(x / 3)
//     let yy = Math.floor(y / 3)
//     if ((visX[x] && visX[x][value]) || (visY[y] && visY[y][value]) || (visV[xx * 3 + yy + 1] && visV[xx * 3 + yy + 1][value])) return true
//     for (let i = 0; i < 9; i++) {
//       if()
//       if (board[x][i] === value || board[i][y] === value) return true
//     }

//     for (let i = 3 * xx; i < 3 * xx + 3; i++) {
//       for (let j = 3 * yy; j < 3 * yy + 3; j++) {
//         if (board[i][j] === value) return true
//       }
//     }
//     return false
//   }
//   let nextPos = (x, y) => {
//     return y === 8 ? [x + 1, 0] : [x, y + 1]
//   }
//   let dfs = (x?, y?) => {
//     if (x > 8 || y > 8) return true
//     if (board[x][y] !== '.') return dfs(...nextPos(x, y))
//     for (let value = 1; value < 10; value++) {
//       if (check(x, y, String(value))) continue
//       board[x][y] = String(value)
//       if (dfs(...nextPos(x, y))) return true
//       board[x][y] = "."
//     }
//   }
//   dfs(0, 0)
// };
