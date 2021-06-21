function intersection(nums1: number[], nums2: number[]): number[] {
  let res = []
  let map = new Map()
  nums1.forEach(item => {
    map.set(item, 1)
  })
  nums2.forEach(item => {
    if (map.has(item)) {
      res.push(item)
      map.delete(item)
    }
  })
  return res
};