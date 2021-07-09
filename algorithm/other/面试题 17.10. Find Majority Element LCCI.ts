// 要求时间复杂度O(N) 空间复杂度O(1)
// hash table 空间复杂度为O(N)
function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let max = Math.floor(nums.length / 2) + 1
  let index = 0
  let item = nums[0]
  let time = 0
  while (index < nums.length) {
    if (nums[index] === item) {
      time++
    } else {
      item = nums[index]
      time = 1
    }
    if (time >= max) {
      return nums[index]
    }
    index++
  }
  return -1
};