function subsetsWithDup(nums: number[]): number[][] {
  let res = []
  nums.sort((a, b) => a - b)
  let helper = (arr, start) => {
    res.push(arr)
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      helper(arr.concat(nums[i]), i + 1)
    }
  }
  helper([], 0)
  return res
}
