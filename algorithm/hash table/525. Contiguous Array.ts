// 前缀和+哈希表
// 将0视为-1 => 题目转化为和为0的最长子数组
// 哈希表记录和为key的最小下标
function findMaxLength(nums: number[]): number {
  let map = new Map()
  map.set(0, -1)
  let max = 0
  let pre = nums[0]
  for (let i = 1; i < nums.length; i++) {
    pre += nums[i] === 0 ? -1 : 1
    if (map.has(pre)) {
      max = Math.max(max, i - map.get(pre))
    } else {
      map.set(pre, i)
    }
  }

  return max
};