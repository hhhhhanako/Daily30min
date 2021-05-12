function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (root.left && root.right) {
    return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
  }
  if (root.left) return minDepth(root.left) + 1
  if (root.right) return minDepth(root.right) + 1
  return 1
};