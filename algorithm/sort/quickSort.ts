

function quickSort(array: number[]): number[] {
  if (array.length < 2) return array
  let left = []
  let right = []
  let target = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(target).concat(quickSort(right))
}