function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    if (!root.left && !root.right) {
      root = null
    } else if (!root.left) {
      // 无左节点，用本节点的右节点代替当前节点
      root = root.right
    } else if (!root.right) {
      // 无右节点，用本节点的左节点代替当前节点
      root = root.left
    } else {
      // 左右节点均存在，用本节点的后继节点代替当前节点
      let successor = root.right
      while (successor.left) {
        successor = successor.left
      }
      root.val = successor.val
      root.right = deleteNode(root.right, successor.val)
    }
  }
  return root
};