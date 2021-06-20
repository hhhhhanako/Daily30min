// 防抖
// 高频事件fn在时间time秒后执行一次，如果time秒内再次触发fn，则重新开始计时
function myDebouce(fn, time) {
  let timer
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time);
  }
}

// 节流
// 高频事件fn在time内只执行一次
function myThrottle(fn, time){
  let timer
  return function(...args) {
    if(!timer) {
      setTimeout(() => {
        timer = null
        fn.apply(this, args)
      }, time);
    }
  }

}