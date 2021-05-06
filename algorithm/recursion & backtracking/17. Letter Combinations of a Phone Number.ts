function letterCombinations(digits: string): string[] {
  if(!digits) return []
  let res = []
  const dict = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let dfs = str => {
    if (str.length === digits.length) return res.push(str)
    let arr = dict[digits[str.length]]
    for (let i = 0; i < arr.length; i++) {
      dfs(str + arr[i])
    }
  }
  dfs('')
  return res
};