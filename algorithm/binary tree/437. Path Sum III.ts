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

// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0
  // 从指定节点开始的路径数
  let dfs = (node: TreeNode, num: number): number => {
    if (!node) return 0
    let rootPath = node.val === num ? 1 : 0
    let leftPath = dfs(node.left, num - node.val)
    let rightPath = dfs(node.right, num - node.val)
    return rootPath + leftPath + rightPath
  }
  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};
