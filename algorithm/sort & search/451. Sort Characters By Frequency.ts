function frequencySort(s: string): string {
  let map = new Map()
  let arr = []
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    map.set(str, map.has(str) ? map.get(str) + 1 : 1)
  }
  let strArr = [...map.keys()]
  strArr.sort((a, b) => map.get(a) - map.get(b))
  for (let a of strArr) {
    let f = map.get(a)
    arr.push(new Array(f).fill(a).join(''))
  }
  return arr.join('')
};