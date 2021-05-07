function threeSumClosest(nums: number[], target: number): number {
  let len = nums.length
  let res = Infinity
  let min = Infinity
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum == target) return target
      sum > target ? R-- : L++
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
    }
  }
  return res
};