// 数组扁平化
// let arr = [1, 2, [3, 4], [5, [6, 7]]]

function flatten_o(arr) {
  let res = []
  let dfs = ary => {
    for(let i = 0; i<ary.length; i++){
      if(Array.isArray(ary[i])){
        dfs(ary[i])
      } else {
        res.push(ary[i])
      }
    }  
  }
  dfs(arr)
  return res
}

// reduce优化版
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

// ES6: 可以决定扁平化多少层
arr.flatten(Infinity)

// 会重复遍历 性能较差
function flatten_while(arr) {
  while(arr.some(Array.isArray)){
    arr = [].concat(...arr)
  }
  return arr
}
