// 属于二叉树的层次遍历题
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  let res = []
  let queue = []
  let level = 0
  queue.push(root)
  while (queue.length) {
    let right = null // 初始化level层的最右值
    let size = queue.length
    while (size--) { // 遍历level层的node
      let node = queue.shift()
      right = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(right)
    level++
  }
  return res
};