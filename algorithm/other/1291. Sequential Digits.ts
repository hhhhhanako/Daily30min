// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
function sequentialDigits(low: number, high: number): number[] {
  let res = []
    let lowLen = low.toString().length
    let highLen = high.toString().length
    for(let i=lowLen;i<=highLen;i++){
        for(let j=1;j<=10-i;j++){
            let str = ''
            let num = j
            str += num
            let k = i-1
            while(k--){
                num++
                str += num
            }
            let ans = parseInt(str)
            if(ans>=low && ans<=high){
                res.push(ans)
            }
        }
    }
    return res   
};
// function sequentialDigits(low, high){
// function sequentialDigits(low: number, high: number): number[] {
//   let numArr = ['1','2','3','4','5','6','7','8','9']
//   let low_length = String(low).length
//   let high_length = String(high).length
//   let first = Math.floor(low/Math.pow(10,low_length-1))
//   let ret = []
//   let num
//   for(let len = low_length; len <= high_length; len++) {
//     for(;first+len<=10;first++) {
//       num = Number(numArr.slice(first-1,first+len - 1).join(''))
//       if(num > high) break
//       if(num >= low) ret.push(num)
//     }
//     if(num > high) break
//     first = 1
//   }
//   return ret
// };

