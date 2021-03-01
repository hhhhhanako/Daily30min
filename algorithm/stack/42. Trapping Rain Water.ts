//单调栈解法
//Input: height = [4,2,0,3,2,5]
//Output: 9

function trap(height: number[]): number {
  if (height.length < 3) return 0
  let index_stack = []
  let rain = 0
  for(let i = 0; i < height.length; i++) {
    while(height[i] > height[index_stack[index_stack.length - 1]] && index_stack.length) {
      let middle = index_stack.pop()
      if(index_stack.length < 1) break
      let left = index_stack[index_stack.length - 1]
      let right = i
      rain += (right - left - 1) * (Math.min(height[right], height[left])- height[middle])
    }
    index_stack.push(i)
  }
  return rain
};