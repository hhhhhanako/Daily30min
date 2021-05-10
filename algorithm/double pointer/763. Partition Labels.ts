// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
function partitionLabels(s: string): number[] {
  let res = []
  let map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }
  // map记录了s中每个字符的最大位置
  let max = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    max = Math.max(max, map[s[i]])
    // i和max相等时，代表i以内的字母没有最远距离超过max的，即题意
    if (i === max) {
      let d = i - start + 1
      start = i + 1
      res.push(d)
    }
  }
  return res
}
