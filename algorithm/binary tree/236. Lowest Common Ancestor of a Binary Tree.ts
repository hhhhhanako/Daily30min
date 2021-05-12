function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root || root == p || root == q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p,q)
  // left和right任一为null，代表p和q均在不为null的那边
  if(!left) return right
  if(!right) return left
  // left和right均不为null，代表p和q分别在root的两个子树里，当前root就是最近祖先
  return root
};