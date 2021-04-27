function permuteUnique(nums: number[]): number[][] {
  let ret = []
  let vis = {}
  nums.sort((a, b) => a - b)
  const builder = (arr) => {
    if (arr.length === nums.length) {
      ret.push(arr)
      return false
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i]) continue
      if (i >= 1 && nums[i] === nums[i - 1] && !vis[i - 1]) continue
      vis[i] = true
      builder(arr.concat(nums[i]))
      vis[i] = false
    }
  }
  builder([])
  return ret
}
