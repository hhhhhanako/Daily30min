// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// 递归 时间超限
// function climbStairs(n: number): number {
//     if(n === 1) return 1
//     if(n === 2) return 2
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

// 动态规划
function climbStairs(n: number): number {
    let num = new Array(n)
    num[0] = 1
    num[1] = 2
    for(let i = 2; i< n; i++){
        num[i] = num[i -1]+ num[i-2]
    }
    return num[n - 1]
};