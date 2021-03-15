// https://leetcode-cn.com/problems/sum-of-subarray-minimums/
// [3, 1, 2, 4]
// 找每个位置左边第一个比其小的数的位置和右边第一个比其小的位置
function sumSubarrayMins(arr: number[]): number {
// function sumSubarrayMins(arr) {
  const mod = 1e9 + 7
  let sum = 0
  let right = []
  let right_stack = new Array(arr.length).fill(arr.length)
  let left = []
  let left_stack = new Array(arr.length).fill(-1)
  for(let i = 0; i<arr.length; i++) {
    while(arr[i] <= arr[right[right.length - 1]] && right.length ){
      let index = right.pop()
      right_stack[index] = i
    }
    right.push(i)
  }

  for(let j = arr.length - 1; j > -1; j--){
    while(arr[j] < arr[left[left.length - 1]] && left.length) {
      let index = left.pop()
      left_stack[index] = j
    }
    left.push(j)
  }

  arr.forEach((item, index) => {
    sum += (index - right_stack[index]) * (left_stack[index] - index) * item
    sum %= mod
  })
  return sum
};