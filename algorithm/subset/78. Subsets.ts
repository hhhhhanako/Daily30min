// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function subsets(nums: number[]): number[][] {
    let res = []
    let helper = (arr, start) => {
        res.push(arr)
        for (let i = start; i < nums.length; i++) {
            helper(arr.concat(nums[i]), i + 1)
        }
    }
    helper([], 0)
    return res
};