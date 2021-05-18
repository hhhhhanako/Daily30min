// 从顶到底 暴力遍历
function isBalanced(root: TreeNode | null): boolean {
  if(!root) return true
  let getDeep = node => {
    if(!node) return 0
    return Math.max(getDeep(node.left), getDeep(node.right)) + 1
  }
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getDeep(root.left) - getDeep(root.right)) <= 1
};


// 从底到顶 
// function isBalanced(root: TreeNode | null): boolean {
//   if (!root) return true
//   let getDeep = node => {
//     if (!node) return 0
//     let left = getDeep(node.left)
//     if (left === -1) return -1
//     let right = getDeep(node.right)
//     if (right === -1) return -1
//     if (Math.abs(right - left) > 1) return -1
//     return Math.max(getDeep(node.left), getDeep(node.right)) + 1
//   }
//   return getDeep(root) !== -1
// };