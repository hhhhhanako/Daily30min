function generateMatrix(n: number): number[][] {
    let ret = []
    for(let i =0 ;i<n;i++) ret.push([])
    let top = 0, left = 0, right = n -1, bottom = n - 1
    let num = 1
    while(num <= n*n) {
        //从左至右
        for(let i =left;i<=right;i++) {
            ret[top][i] = num++
        }
        top++
        for(let i =top;i<=bottom;i++) {
            ret[i][right] = num++
        }
        right--
        for(let i =right;i>=left;i--) {
            ret[bottom][i] = num++
        }
        bottom--
        for(let i =bottom;i>=top;i--) {
            ret[i][left] = num ++
        }
        left++

    }
    return ret
};