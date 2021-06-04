// const sum = (x, y) => x + y
// const fn = currying(sum)
// fn(1)(2)
// 3
// 把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
const currying = fn => {
  let params = []
  const next = (...args) => {
    params = [...params, ...args]
    if(params.length < fn.length){
      return next
    } else {
      return fn.apply(fn,params)
    }
  }
  return next
}
