// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

function solveNQueens(n: number): string[][] {
  let res = []
  let initVal = new Array(n).fill('.')
  let board = new Array(n).fill(initVal)
  let check = (x,y) => {
    for(let i=0; i< n; i++) {
      for(let j=0;j<n;j++) {
        if(board[i][j] === 'Q' && (j==y || x+y == i+j || x-y == i-j )) return true
      }
    }
    return false
  }
  let dfs = (arr, index) => {
    if(index === n) {
      // let 
    }
    for(let i = 0;i<n;i++) {

    }
  }
  dfs(board,0)
  return res
};