// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function preorderTraversal(root: TreeNode | null): number[] {
  let res = []
  let traverse = (root: TreeNode | null) => {
    if(root == null) return 
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
    // 中序遍历
    // traverse(root.left)
    // res.push(root.val)
    // traverse(root.right)

    // 后序遍历
    // traverse(root.left)
    // traverse(root.right)
    // res.push(root.val)
  }
  traverse(root)
  return res
};
