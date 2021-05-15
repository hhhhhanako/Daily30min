function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let res = []
  let dfs = (arr, sum, node) => {
    if (!node) return
    let newArr = arr.concat(node.val)
    sum += node.val
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        return res.push(newArr)
      }
      return
    }

    dfs(newArr, sum, node.left)
    dfs(newArr, sum, node.right)
  }
  dfs([], 0, root)
  return res
};