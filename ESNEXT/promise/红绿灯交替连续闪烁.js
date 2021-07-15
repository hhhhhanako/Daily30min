// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

const light = (callback, time) =>
  new Promise((r) => {
    setTimeout(() => {
      callback()
      r()
    }, time)
  })

const step = () => {
  Promise.resolve()
    .then(() => light(red, 3000))
    .then(() => light(green, 2000))
    .then(() => light(yellow, 1000))
    .then(step)
}
step()
