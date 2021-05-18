// 和剑指offer28相同
// function isSymmetric(root: TreeNode | null): boolean {
//   let traverse = (node1, node2) => {
//     if(!node1 && !node2) return true
//     if(!node1 || !node2 || node1.val !== node2.val) return false
//     return traverse(node1.left, node2.right) && traverse(node1.right, node2.left)
//   }
//   return traverse(root.left, root.right)
// };