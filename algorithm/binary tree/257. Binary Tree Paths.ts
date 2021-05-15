// 输入:

//    1
//  /   \
// 2     3
//  \
//   5

// 输出: ["1->2->5", "1->3"]
function binaryTreePaths(root: TreeNode | null): string[] {
  let res = []
  let dfs = (arr, node) => {
    if(!node) return
    let newArr = arr.concat(node.val)
    if(!node.left && !node.right) return res.push(newArr.join('->'))
    dfs(newArr, node.left)
    dfs(newArr, node.right)
  }
  dfs([], root)
  return res
};