const text = `
- 章节一
  - 标题一
  - 标题二
    - 子标题三
- 章节二
  - 标题一
  - 标题二
`

class Node {
  constructor({ value, level, parent }) {
    this.value = value
    this.level = level
    this.children = []
    this.parent = parent
    // hint: 也可在数据结构中增加 this.parent 节点辅助解析
  }
}

// 假设一个level为0的node
// 根据level的值顺着pre的parent找父节点

const parseTree = (text) => {
  const textArr = [...text.matchAll(/^([^\S\n]*)\-\s(\S*)$/gm)]
  const head = new Node({ value: null, level: 0 })
  const dfs = (pre, curItem) => {
    if (!curItem) return
    const cur = new Node({
      value: curItem[2],
      level: curItem[1].length / 2 + 1,
    })
    let par = pre
    while (par.level >= cur.level) {
      par = par.parent
    }
    par.children.push(cur)
    cur.parent = par
    dfs(cur, textArr.shift())
  }
  dfs(head, textArr.shift())
  return head.children
}

const tree = parseTree(text)
// answer:
// [ Node { value: "章节一", children: [ Node, Node ], level: 1 },
//   Node { value: "章节二", children: [ Node, Node ], level: 1 } ]
