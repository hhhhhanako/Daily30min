function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity
  // dfs方法获取以node为起点的最大路径值
  let dfs = node => {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    maxSum = Math.max(maxSum, left + node.val, right + node.val, left + right + node.val)
    let res = Math.max(left, right) + node.val
    //最大路径为负数时，不如不选对应节点，路径值为0
    return res < 0 ? 0 : res
  }
  dfs(root)
  return maxSum
};