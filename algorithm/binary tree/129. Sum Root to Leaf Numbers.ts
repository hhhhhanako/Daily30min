function sumNumbers(root: TreeNode | null): number {
  let sum = 0
  let dfs = (numStr, node) => {
    if (!node) return
    const newStr = numStr + node.val
    if (!node.left && !node.right) {
      return sum += Number(newStr)
    }
    if (node.left) dfs(newStr, node.left)
    if (node.right) dfs(newStr, node.right)
  }
  dfs('', root)
  return sum
};