// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
function sortColors(nums: number[]): void {
  let i = 0
  let L = 0
  let R = nums.length - 1
  while (i <= R) {
    while (nums[i] === 2 && i < R) {
      [nums[i], nums[R]] = [nums[R], nums[i]]
      R--
    }
    while (nums[i] === 0 && L < i) {
      [nums[i], nums[L]] = [nums[L], nums[i]]
      L++
    }
    i++
  }
};

function sortColors_two(nums: number[]): void {
  let n0 = 0
  let n1 = 0
  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i]
    nums[i] = 2
    if (tmp < 2) nums[n1++] = 1
    if (tmp < 1) nums[n0++] = 0
  }
};