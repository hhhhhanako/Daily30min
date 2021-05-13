function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root) return 0 
    let res = 0
    let diameter = node => {
        let left = node.left? diameter(node.left) : 0
        let right = node.right? diameter(node.right) : 0
        res = Math.max(res, left+right)
        return Math.max(left,right) +1
    }
    diameter(root)
    return res
};