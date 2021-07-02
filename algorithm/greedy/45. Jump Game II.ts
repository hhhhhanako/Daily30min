// 有点BFS的意思
function jump(nums: number[]): number {
  let begin = 0
  let end = 0
  let step = 0
  while (end < nums.length - 1) {
    let far = end
    for (let i = begin; i <= end; i++) {
      far = Math.max(far, i + nums[i])
    }
    step++
    begin = end + 1
    end = far
  }
  return step
};