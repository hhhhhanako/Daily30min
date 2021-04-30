// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

// 说明：

// 所有数字都是正整数。
// 解集不能包含重复的组合。 

function combinationSum3(k: number, n: number): number[][] {
  let res = []
  let dfs = (arr, start, sum) => {
    if (sum >= n) {
      if (sum === n && arr.length === k) res.push(arr)
      return false
    }
    for (let i = start + 1; i < 10; i++) {
      dfs(arr.concat(i), i, sum + i)
    }

  }
  dfs([], 0, 0)
  return res
};