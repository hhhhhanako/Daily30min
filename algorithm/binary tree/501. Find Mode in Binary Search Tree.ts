// Input: root = [1,null,2,2]
// Output: [2]

// 二叉搜索树的中序遍历是单调递增（或相同）数列
function findMode(root: TreeNode | null): number[] {
  if(!root) return []
  let res = []
  let count = 0 
  let value = null
  let maxCount = 0
  let update = node => {
    if(node.val == value) {
      count++
    } else {
      value = node.val
      count = 1
    }
    if(count === maxCount) {
      res.push(value)
    }
    if(count > maxCount) {
      maxCount = count
      res = []
      res.push(value)
    }
  }
  let traverse = node => {
    if(!node) return
    traverse(node.left)
    update(node)
    traverse(node.right)
  }
  traverse(root)
  return res
};