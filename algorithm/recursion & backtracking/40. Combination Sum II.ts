// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 不可重复使用数字，结果解集内不重复

function combinationSum2(candidates: number[], target: number): number[][] {
  let res = []
  candidates.sort((a, b) => a - b)
  let dfs = (arr, start, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(arr)
      }
      return false
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      dfs(arr.concat(candidates[i]), i + 1, sum + candidates[i])
    }


  }
  dfs([], 0, 0)
  return res

};