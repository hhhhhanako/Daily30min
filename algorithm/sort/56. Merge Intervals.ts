// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Input: intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
// Output: [[1,10]]
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) return intervals
  // 先排序
  intervals.sort((a, b) => a[0] - b[0])
  let merge = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let pre = merge[merge.length - 1]
    if(intervals[i][0] > pre[1]) {
      merge.push(intervals[i])
    } else {
      merge[merge.length - 1][1] = Math.max(pre[1], intervals[i][1])
    }
  }
  return merge
};
