// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

function checkInclusion(s1: string, s2: string): boolean {
  let need = new Map()
  let window = new Map()
  let left = 0, right = 0
  let valid = 0
  for (let s of s1) {
    need.set(s, need.has(s) ? need.get(s) + 1 : 1)
  }
  while (right < s2.length) {
    let c = s2[right]
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if (window.get(c) === need.get(c)) valid++
    }
    right++
    if (right - left >= s1.length) {
      if (valid === need.size) return true
      let cur = s2[left]
      if (need.has(cur)) {
        if (window.get(cur) === need.get(cur)) valid--
        window.set(cur, window.get(cur) - 1)
      }

      left++
    }
  }
  return false
};