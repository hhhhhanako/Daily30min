// 使用Promise实现每隔1秒输出1,2,3
// 顺序执行异步事件
Promise.resolve()
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(1))
      }, 1000)
    })
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(2))
      }, 1000)
    })
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(3))
      }, 1000)
    })
  })
// 用reduce简写如下
let arr = [1, 2, 3]
arr.reduce((pre, cur) => 
  pre.then(
    () =>
      new Promise((r) =>
        setTimeout(() => {
          r(console.log(cur))
        }, 1000)
      )
  )
, Promise.resolve())
