// Input: nums = [1,2,2,4]
// Output: [2,3]
// function findErrorNums(nums: number[]): number[] {
//   nums.sort((a,b)=>a-b)
//   let dul, los
//   let v = 1
//   for(let i = 0; i< nums.length; i++){
//     if(nums[i] === v) {
//       v++
//     } else if(nums[i] > v) {
//       los = v
//       v+=2
//     } else {
//       dul = nums[i]
//     }
//     if(dul && los) break
//   }
//   return [dul, los]
// };
function findErrorNums(nums: number[]): number[] {
  let arr = new Array(2)
  let map = new Map()
  for (let num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.get(i)) {
      arr[1] = i
    } else if (map.get(i) === 2) {
      arr[0] = i
    }
    if (arr[0] && arr[1]) break
  }
  return arr
};