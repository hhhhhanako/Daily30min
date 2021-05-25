function findContentChildren(g: number[], s: number[]): number {
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  let res = 0
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    while (j < s.length && s[j] < g[i]) {
      j++
    }
    if (j < s.length) res++
  }
  return res
};