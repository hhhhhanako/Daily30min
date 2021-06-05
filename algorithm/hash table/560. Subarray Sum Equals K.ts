// 前缀和+哈希表
// k = sum[j] - sum[i-1] => sum[i-1] = sum[j] - k (i<=j)
// 哈希表记录的是sum值为key的子数组count数
function subarraySum(nums: number[], k: number): number {
  let count = 0
  let hash = new Map()
  hash.set(0, 1)
  let pre = 0
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i]
    if (hash.has(pre - k)) {
      count += hash.get(pre - k)
    }
    hash.set(pre, hash.has(pre) ? hash.get(pre) + 1 : 1)
  }
  return count
};