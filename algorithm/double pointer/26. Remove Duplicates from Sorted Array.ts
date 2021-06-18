function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length
  let slow = 1
  let fast = 1
  while (fast < nums.length) {
    if (nums[fast] > nums[fast-1]) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  nums.splice(slow)
  return slow
};