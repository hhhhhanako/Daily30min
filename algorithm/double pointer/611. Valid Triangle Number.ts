// nums[L]+nums[R]<nums[i]
function triangleNumber(nums: number[]): number {
  if (nums.length < 3) return 0
  nums.sort((a,b)=>a-b)
  let count = 0
  for (let i = nums.length - 1; i >= 2; i--) {
    let L = 0
    let R = i -1
    while(L<R){
      if(nums[L]+nums[R]>nums[i]){
        count+= R-L
        R--
      } else {
        L++
      }
    }
    
  }
  return count
};