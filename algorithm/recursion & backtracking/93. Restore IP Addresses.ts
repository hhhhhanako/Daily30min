// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
function restoreIpAddresses(s: string): string[] {
  let res = []
  let dfs = (arr, str) => {
    if (arr.length === 4) {
      if (str == '') {
        res.push(arr.join('.'))
      }
      return false
    }
    for (let i = 1; i < 4; i++) {
      if (str.length < i) break
      let newStr = str.slice(0, i)
      if (newStr.length >= 2 && newStr[0] == '0') return
      if (newStr.length >= 3 && Number(newStr) > 255) return
      dfs(arr.concat(newStr), str.slice(i))


    }

  }
  dfs([], s)
  return res
};