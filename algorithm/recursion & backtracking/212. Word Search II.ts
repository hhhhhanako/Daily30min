// 执行用时：5656 ms, 在所有 TypeScript 提交中击败了15.38%的用户
// 内存消耗：40.6 MB, 在所有 TypeScript 提交中击败了69.23%的用户
// 暴力DFS效果不理想
// TODO: 字典树
function findWords(board: string[][], words: string[]): string[] {
  const m = board.length
  const n = board[0].length
  let found = {}
  let res = []
  let dfs = (x, y, wordIndex, index) => {
    if (x < 0 || x >= m || y < 0 || y >= n || !board[x][y]) {
      return false
    }

    if (board[x][y] === words[wordIndex][index]) {
      if (index === words[wordIndex].length - 1) {
        res.push(words[wordIndex])
        found[wordIndex] = true
        return true
      } else {
        board[x][y] = ''
        let result = dfs(x + 1, y, wordIndex, index + 1) || dfs(x - 1, y, wordIndex, index + 1) || dfs(x, y - 1, wordIndex, index + 1) || dfs(x, y + 1, wordIndex, index + 1)
        board[x][y] = words[wordIndex][index]
        return result
      }
    }
    return false
  }
  for (let k = 0; k < words.length; k++) {
    for (let i = 0; i < m; i++) {
      if (found[k]) break
      for (let j = 0; j < n; j++) {
        if (found[k]) break
        if (board[i][j] === words[k][0]) {
          dfs(i, j, k, 0)
        }
      }
    }
  }

  return res
};