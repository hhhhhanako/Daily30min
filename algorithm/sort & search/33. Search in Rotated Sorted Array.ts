// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// 二分查找
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    if (nums[left] <= nums[mid]) {
      // 左段是升序
      if (target < nums[mid] && target >= nums[left]) {
        right = mid
      } else {
        left = mid + 1
      }
    } else {
      // 右段是升序
      if (target > nums[mid] && target <= nums[right]) {
        left = mid
      } else {
        right = mid - 1
      }

    }
  }
  return -1
};