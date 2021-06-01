function binarySearch(array: number[], target: number): number {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midItem = array[mid]
    if (target < midItem) {
      right = mid - 1
    } else if (target > midItem) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}