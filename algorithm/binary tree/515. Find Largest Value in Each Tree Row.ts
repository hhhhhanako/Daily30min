function largestValues(root: TreeNode | null): number[] {
  if (!root) return []
  let stack = []
  let res = []
  let max = -Infinity
  stack.push(root)
  while (stack.length) {
    let size = stack.length
    while (size > 0) {
      let cur = stack.shift()
      max = Math.max(cur.val, max)
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
      size--
    }
    res.push(max)
    max = -Infinity
  }
  return res
};