function invertTree(root: TreeNode | null): TreeNode | null {
  let exchange = node => {
    if (!node) return
    let tmp = node.left
    node.left = node.right
    node.right = tmp
    exchange(node.left)
    exchange(node.right)
  }
  exchange(root)
  return root
};