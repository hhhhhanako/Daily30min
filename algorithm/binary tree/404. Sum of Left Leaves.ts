/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0
  let dfs = (node, isLeft = false) => {
    if (!node) return
    if (isLeft && !node.left && !node.right) return (sum += node.val)
    if (node.left) {
      dfs(node.left, true)
    }
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(root)
  return sum
}
