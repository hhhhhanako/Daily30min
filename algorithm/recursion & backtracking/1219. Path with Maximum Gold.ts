// 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

// 为了使收益最大化，矿工需要按以下规则来开采黄金：

// 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
// 矿工每次可以从当前位置向上下左右四个方向走。
// 每个单元格只能被开采（进入）一次。
// 不得开采（进入）黄金数目为 0 的单元格。
// 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。

function getMaximumGold(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  let res = 0
  let dfs = (x,y) => {
    if(x<0 || x>=m || y<0 || y>= n|| grid[x][y] === 0) return 0
    let tmp = grid[x][y]
    grid[x][y] = 0
    let result = Math.max(tmp+dfs(x+1,y), tmp+dfs(x-1,y), tmp+dfs(x,y-1), tmp+dfs(x,y+1))
    grid[x][y] = tmp
    return result
  }
  for(let i = 0;i<m;i++){
    for(let j =0;j<n;j++){
      res = Math.max(dfs(i,j),res)
    }
  }
  return res
};