function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let res = []
  let queue = []
  let level = 0
  queue.push(root)
  while (queue.length) {
    res.push([]) // 初始化level位的数组
    let size = queue.length
    while (size--) { // 遍历level层的node
      let node = queue.shift()
      res[level].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
  }
  return res
};