// Input: stones = [31,26,33,21,40]
// Output: 5

// dfs 超过时间限制
// function lastStoneWeightII(stones: number[]): number {
//   let min = Infinity
//   let sum = (acc, cur,index) => {
//     acc+= cur
//     if(index === stones.length - 1){
//       acc >= 0 && (min = Math.min(acc, min))
//       return
//     } else {
//       index++
//       sum(acc, stones[index],index)
//       sum(acc, -stones[index],index)
//     }
//   }
//   sum(0, stones[0] ,0)
//   sum(0, -stones[0] ,0)
//   return min
// };

// 动态规划
// 数组元素均为正值
// sum为数组所有的元素和,neg为添加负号的元素和， (sum - neg) - neg <= 0 即 neg<= (sum/2)
// 题干转化为挑选数组的任意元素和小于sum/2的最大值
// dp[i][j]是前i个数中不大于j的最大值
// dp[i][j] = max(dp[i-1][j], dp[i-1][j-stones[i-1]]+ stones[i-1])
function lastStoneWeightII(stones: number[]): number {
  if (stones.length === 1) return stones[0]
  let sum = stones.reduce((a, b) => a + b)
  let max = Math.floor(sum / 2)
  let dp = new Array(max + 1).fill(0)
  for (let item of stones) {
    for (let j = max; j >= item; j--) {
      dp[j] = Math.max(dp[j], dp[j - item] + item)
    }
  }
  return sum - 2 * dp[max]
};