function permute(nums: number[]): number[][] {
    let ret = [];
    let vis = {};
    const builder = (arr) => {
        if (arr.length === nums.length) {
            ret.push(arr)
        }
        for (let i = 0; i < nums.length; i++) {
            if(vis[i]) continue
            vis[i] = true
            arr.push(nums[i])
            builder(arr.slice())
            arr.pop()
            vis[i] = false
        }
    };
    builder([])
    return ret
}