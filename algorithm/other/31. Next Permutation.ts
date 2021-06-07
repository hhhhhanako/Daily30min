function nextPermutation(nums: number[]): void {
  let last = nums.length - 1
  let i = last, j = last
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--
  }
  if (i > 0) {
    while (j >= i && nums[j] <= nums[i - 1]) {
      j--
    }
    [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]]
  }

  let left = i
  let right = last
  while (right > left) {
    [nums[right], nums[left]] = [nums[left], nums[right]]
    right--
    left++
  }
};