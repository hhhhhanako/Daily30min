function divingBoard(shorter: number, longer: number, k: number): number[] {
  let arr = []
  if(!k) return arr
  if(longer == shorter) {
    arr.push(k * shorter)
    return arr
  }
  for(let i = 0; i <= k; i++) {
    let sum = k*shorter + i*(longer-shorter)
    arr.push(sum)
  }
  return arr
};