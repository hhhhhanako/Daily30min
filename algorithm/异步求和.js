// 提供一个异步 add 方法如下，需要实现一个 await sum(...args) 函数：

function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b)
  }, 1000)
}

// 先实现两个数相加的函数
async function sumTwo(a, b) {
  return await new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
}
// 串联异步求和
// async function sum(...args) {
//   if(args.length === 0) return 0
//   if(args.length === 1) return args[0]
//   return await sum(await sumTwo(args[0], args[1]), ...(args.splice(2)))
// }

// 并发
async function sum(...args) {
  let len = args.length
  if (len === 1) return args[0]
  let promiseArr = []
  for (let i = 0; i < len - 1; i += 2) {
    promiseArr.push(sumTwo(args[i], args[i + 1]))
  }
  if(len % 2) promiseArr.push(sumTwo(args[len-1], 0))
  return sum(...await Promise.all(promiseArr))
}

console.time('sum')
let res = await sum(1, 4, 6, 9, 2, 4, 8, 12, 20)
console.timeEnd('sum')
// 串联：8000ms+
// 并联：4000ms+

(
  // 用法
  async () => {
    const result1 = await sum(1, 4, 6, 9, 2, 4, 8, 12, 20)
    const result2 = await sum(3, 4, 9)
    const result3 = await sum(5, 9, 11, 4, 2)
    console.log([result1, result2, result3])
  }
)()
