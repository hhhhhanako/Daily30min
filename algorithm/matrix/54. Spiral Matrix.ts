function spiralOrder(matrix: number[][]): number[] {
  let ret = []
  if (!matrix.length) return ret
  let m = matrix.length
  let n = matrix[0].length
  let top = 0,
    left = 0,
    right = n - 1,
    bottom = m - 1
  let sum = m * n
  while (ret.length < sum) {
    //从左至右
    for (let i = left; i <= right; i++) {
      ret.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      ret.push(matrix[i][right])
    }
    right--
    if (ret.length == sum) break
    for (let i = right; i >= left; i--) {
      ret.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      ret.push(matrix[i][left])
    }
    left++
  }
  return ret
}
