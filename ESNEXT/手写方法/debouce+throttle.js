// 防抖
// 高频事件fn在时间time秒后执行一次，如果time秒内再次触发fn，则重新开始计时
function myDebouce(fn, time) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}
// 立即执行版的防抖函数
// 立即执行fn，如果time秒内再次触发fn，则重新开始计时
function myImmediateDebounce(fn, time, immediate) {
  let timer
  return function () {
    if (immediate) {
      clearTimeout(timer)
      const startNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, time)
      if (startNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, time)
    }
  }
}

// 节流
// 高频事件fn在time内只执行一次
function myThrottle(fn, time) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
      }, time)
    }
  }
}
