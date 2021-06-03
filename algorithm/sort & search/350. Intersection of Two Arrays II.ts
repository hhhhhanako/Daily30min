// function intersect(nums1: number[], nums2: number[]): number[] {
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let i = 0, j = 0, long, short
//   if (nums1.length < nums2.length) {
//     long = nums2
//     short = nums1
//   } else {
//     long = nums1
//     short = nums2
//   }
//   let res = []
//   while (i < short.length && j < long.length) {
//     if (short[i] === long[j]) {
//       res.push(short[i])
//       i++
//       j++
//     } else if (short[i] < long[j]) {
//       i++
//     } else {
//       j++
//     }
//   }
//   return res
// };
// 哈希表
function intersect(nums1: number[], nums2: number[]): number[] {
  let res = [], long, short, map = new Map()
  if (nums1.length < nums2.length) {
    long = nums2
    short = nums1
  } else {
    long = nums1
    short = nums2
  }
  short.forEach(element => {
    map.set(element, map.has(element) ? map.get(element) + 1 : 1)
  });
  for (let i = 0; i < long.length; i++) {
    // 增加对size的判断 执行用时超过100%！
    if (!map.size) break
    if (map.has(long[i])) {
      let count = map.get(long[i])
      if (count > 0) {
        res.push(long[i])
        if (count === 1) {
          map.delete(long[i])
        } else {
          map.set(long[i], count - 1)
        }

      }
    }
  }
  return res
};
