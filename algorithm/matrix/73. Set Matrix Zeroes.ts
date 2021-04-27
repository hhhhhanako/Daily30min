/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (Object.is(matrix[i][j], 0)) {
        for (let k = 0; k < matrix.length; k++) {
          if (!Object.is(matrix[k][j], 0)) matrix[k][j] = -0
        }
        for (let k = 0; k < matrix[0].length; k++) {
          if (!Object.is(matrix[i][k], 0)) matrix[i][k] = -0
        }
      }
    }
  }
}
