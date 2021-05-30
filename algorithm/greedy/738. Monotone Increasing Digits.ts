// Input: n = 23,333,322
// Output: 22,999,999
function monotoneIncreasingDigits(n: number): number {
  if (n <= 9) return n
  let arr = (n + '').split('').map(item => Number(item))
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arr[i - 1]--
      for (let j = i; j < arr.length; j++) {
        arr[j] = 9
      }
      while (i - 2 >= 0 && arr[i - 2] > arr[i - 1]) {
        arr[i - 2]--
        arr[i - 1] = 9
        i--
      }
      break
    }
  }
  return Number(arr.join(''))
};