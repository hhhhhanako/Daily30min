// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums: number[]): number[][] {
  const len = nums.length
  if (len === 1) {
    return [nums]
  }
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let used = nums[i]
    let rest = nums.slice(0, i).concat(nums.slice(i + 1, len))
    let arrs = permute(rest)
    arrs.forEach((item) => {
      res.push(item.concat(used))
    })
  }
  return res
}

function permute_2(nums: number[]): number[][] {
  let ret = []
  let vis = {}
  const builder = (arr) => {
    if (arr.length === nums.length) {
      ret.push(arr)
      return false
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i]) continue
      vis[i] = true
      arr.push(nums[i])
      builder(arr.slice())
      arr.pop()
      vis[i] = false
    }
  }
  builder([])
  return ret
}
