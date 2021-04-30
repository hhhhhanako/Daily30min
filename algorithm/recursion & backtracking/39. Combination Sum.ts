// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
function combinationSum(candidates: number[], target: number): number[][] {
  let res = []
  let dfs = (arr, start, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(arr)
      }
      return false
    }

    for (let i = start; i < candidates.length; i++) {
      dfs(arr.concat(candidates[i]), i, sum + candidates[i])

    }


  }
  dfs([], 0, 0)
  return res
};