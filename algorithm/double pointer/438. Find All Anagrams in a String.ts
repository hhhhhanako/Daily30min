// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// function findAnagrams(s: string, p: string): number[] {
//   let res = []
//   let left = 0
//   let right = p.length - 1
//   let makeCountMap = (str: string): object => {
//     let map = {}
//     for (let i = 0; i < str.length; i++) {
//       addCountMap(map, str[i])
//     }
//     return map
//   }
//   let addCountMap = (map, str) => {
//     if (map[str]) {
//       map[str]++
//     } else {
//       map[str] = 1
//     }
//   }
//   let targetMap = makeCountMap(p)
//   let windowMap = makeCountMap(s.substring(left, right + 1))
//   let judge = (target: object, window: object): boolean => {
//     for (let str in target) {
//       if (target[str] !== window[str]) return false
//     }
//     return true
//   }
//   while (right < s.length) {
//     if (judge(targetMap, windowMap)) {
//       res.push(left)
//     }
//     windowMap[s[left]]--
//     left++
//     right++
//     addCountMap(windowMap, s[right])
//   }
//   return res
// };

function findAnagrams(s: string, p: string): number[] {
  let vis = new Map()
  let window = new Map()
  let res = []
  let left = 0, right = 0
  let valid = 0
  for (let item of p) {
    vis.set(item, vis.has(item) ? vis.get(item) + 1 : 1)
  }
  while (right < s.length) {
    let cur = s[right]
    if (vis.has(cur)) {
      window.set(cur, window.has(cur) ? window.get(cur) + 1 : 1)
      if (window.get(cur) === vis.get(cur)) valid++
    }
    right++
    if (right - left >= p.length) {
      if (valid === vis.size) {
        res.push(left)
      }

      if (vis.has(s[left])) {
        if (window.get(s[left]) === vis.get(s[left])) valid--
        window.set(s[left], window.get(s[left]) - 1)
      }
      left++
    }
  }
  return res
};