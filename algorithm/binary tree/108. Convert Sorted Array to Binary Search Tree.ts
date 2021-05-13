// 输出高度平衡二叉树
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (start, end) => {
    if (start > end) return null
    const middle = Math.floor((end + start) / 2)
    const root = new TreeNode(nums[middle])
    root.left = helper(start, middle - 1)
    root.right = helper(middle + 1, end)
    return root
  }
  return helper(0, nums.length - 1)
}
