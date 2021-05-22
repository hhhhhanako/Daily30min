// 从矩阵的左下角开始查找，如果当前值大于target，向上查找，如果当前值小于target，向右查找
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length
  let n = matrix[0].length
  let row = m - 1
  let col = 0
  let res = false
  while (col < n && row >= 0) {
    if (matrix[row][col] > target) {
      row--
    } else if (matrix[row][col] < target) {
      col++
    } else {
      res = true
      break
    }
  }
  return res
};