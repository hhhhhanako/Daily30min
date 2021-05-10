// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

function repeatedSubstringPattern(s: string): boolean {
  return (s+s).indexOf(s, 1) !== s.length
};
