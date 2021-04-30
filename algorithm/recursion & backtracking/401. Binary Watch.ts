// 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。
// 输出的顺序没有要求。
// 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
// 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
// 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。

function readBinaryWatch(turnedOn: number): string[] {
  let res = []
  let raw = new Array(10).fill(0)
  let compute = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * Math.pow(2, arr.length - i - 1)
    }
    return sum
  }
  let dfs = (num, arr, start) => {
    if (num == 0) {
      let hours = compute(arr.slice(0, 4))
      let minutes = compute(arr.slice(4))
      if (hours > 11 || minutes > 59) return
      return res.push(`${hours}:${minutes < 10 ? `0${minutes}` : minutes}`)
    }
    for (let i = start; i <= 10 - num; i++) {
      arr[i] = 1
      dfs(num - 1, arr, i + 1)
      arr[i] = 0
    }
  }
  dfs(turnedOn, raw, 0)
  return res
};