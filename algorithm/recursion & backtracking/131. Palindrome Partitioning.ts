function partition(s: string): string[][] {
  let res = []
  let isPal = str => {
    if(str.length === 1) return true
    let half = Math.floor(str.length / 2)
    for (let i = 0; i <= half; i++) {
      if (str[i] !== str[str.length - 1 - i]) return false
    }
    return true
  }
  let dfs = (arr, str) => {
    if (!str) return res.push(arr)
    for (let i = 1; i <= str.length; i++) {
      let curStr = str.slice(0, i)
      if (isPal(curStr)) {
        dfs(arr.concat(curStr), str.slice(i))
      }
    }
  }
  dfs([], s)
  return res
};