// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums: number[], target: number): number[] {
  let res = []
  let map = new Map()
  nums.forEach((item, index) => {
    map.set(item, index)
  })
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      let j = map.get(target - nums[i])
      if (j === i) continue
      res = [j, i]
      break
    }
  }
  return res
};