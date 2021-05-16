// function sumNumbers(root: TreeNode | null): number {
//   let sum = 0
//   let dfs = (numStr, node) => {
//     if (!node) return
//     const newStr = numStr + node.val
//     if (!node.left && !node.right) {
//       return sum += Number(newStr)
//     }
//     if (node.left) dfs(newStr, node.left)
//     if (node.right) dfs(newStr, node.right)
//   }
//   dfs('', root)
//   return sum
// };

function sumNumbers(root: TreeNode | null): number {
  let sum = 0
  let dfs = (num, node) => {
    if (!node) return
    const newNum = num * 10 + node.val
    if (!node.left && !node.right) {
      return sum += newNum
    }
    if (node.left) dfs(newNum, node.left)
    if (node.right) dfs(newNum, node.right)
  }
  dfs(0, root)
  return sum
};