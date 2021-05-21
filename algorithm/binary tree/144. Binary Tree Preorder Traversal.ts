// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
// 递归实现
// function preorderTraversal(root: TreeNode | null): number[] {
//   let res = []
//   let traverse = (root: TreeNode | null) => {
//     if(root == null) return 
//     res.push(root.val)
//     traverse(root.left)
//     traverse(root.right)
//     // 中序遍历
//     // traverse(root.left)
//     // res.push(root.val)
//     // traverse(root.right)

//     // 后序遍历
//     // traverse(root.left)
//     // traverse(root.right)
//     // res.push(root.val)
//   }
//   traverse(root)
//   return res
// };

// 非递归 前序遍历
function preorderTraversal(root: TreeNode | null): number[] {
  let res = []
  let stack = []
  let cur = root
  while (cur || stack.length) {
    // 针对任一node均查找最深处的左叶子 前序遍历：找节点的过程中先push进res
    while (cur) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
};

// 非递归 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
  let res = []
  let stack = []
  let cur = root
  while (cur || stack.length) {
    // 针对任一node均查找最深处的左叶子 中序遍历：先push找到的左叶子
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
};

// 非递归 后序遍历
function postorderTraversal(root: TreeNode | null): number[] {
  let res = []
  let stack = []
  let cur = root
  let visit = null // 新增一个节点记录上个访问的节点
  while (cur || stack.length) {
    // 查左叶子和中序遍历一致
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    // 先不要pop
    cur = stack[stack.length - 1]
    if (!cur.right || cur.right === visit) {
      cur = stack.pop()
      res.push(cur.val)
      visit = cur
      cur = null
    } else {
      cur = cur.right
    }

  }
  return res
};