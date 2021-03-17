// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
//找左边和右边第一个比自己小的位置
function largestRectangleArea(heights: number[]): number {
  let maxArea = 0
  let stack = []
  heights.push(0)
  heights.unshift(0)
  for(let i = 0; i< heights.length; i++) {
    while(heights[i] < heights[stack[stack.length - 1]] && heights.length){
      let index = stack.pop()
      let right = i
      let left = stack[stack.length -1]
      maxArea = Math.max(maxArea, heights[index]*(right-left-1))
    }
    stack.push(i)
  }
  return maxArea
};