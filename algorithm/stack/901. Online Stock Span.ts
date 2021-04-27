//https://leetcode-cn.com/problems/online-stock-span/
// [100, 80, 60, 70, 60, 75, 85]
// [1, 1, 1, 2, 1, 4, 6]

// [28],[14],[28],[35],[46],[53],[66],[80],[87],[88]
// [1,1,3,4,5,6,7,8,9,10]
class StockSpanner {
  spans: any
  stockPrices: any
  constructor(array: any) {
    this.spans = []
    this.stockPrices = []
  }

  next(price: number): number {
    if (this.stockPrices.length < 1) {
      this.spans.push(1)
      this.stockPrices.push(price)
      return 1
    }
    let index = this.stockPrices.length - 1
    let number = 0
    while (price >= this.stockPrices[index] && index >= 0) {
      number += this.spans[index]
      index -= this.spans[index]
    }
    number++
    this.stockPrices.push(price)
    this.spans.push(number)
    return number
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
