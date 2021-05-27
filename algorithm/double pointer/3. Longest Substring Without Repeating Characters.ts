// Input: s = "abba"
// Output: 2
// Explanation: The answer is "ab", with the length of 2.

// Input: s = "pwwkew"
// Output: 3

function lengthOfLongestSubstring(s: string): number {
  // 记录某字母是s的第几个数
  let vis = {}
  let max = 0
  let left = 0
  let right = 0
  while (right < s.length) {
    if (vis[s[right]] && vis[s[right]] >= left + 1) {
      max = Math.max(max, right - left)
      left = vis[s[right]]
    }
    vis[s[right]] = right + 1 //避免出现0值
    right++
  }
  return Math.max(max, right - left)
};
