// 新建left和right储存，空间复杂度高
// function quickSort(array: number[]): number[] {
//   if (array.length < 2) return array
//   let left = []
//   let right = []
//   let target = array[0]
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < target) {
//       left.push(array[i])
//     } else {
//       right.push(array[i])
//     }
//   }
//   return quickSort(left).concat(target).concat(quickSort(right))
// }

// 不使用额外储存空间
function quickSort(array: number[]) {
  let sort = (array: number[], left: number, right: number) => {
    if (left >= right) return
    let target = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
      while (array[i] < target) {
        i++
      }
      while (array[j] > target) {
        j--
      }
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]]
        i++
        j--
      }
    }
    sort(array, left, i - 1)
    sort(array, i, right)
  }
  sort(array, 0, array.length - 1)
  return array
}