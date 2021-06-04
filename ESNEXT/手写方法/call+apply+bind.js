// 思路:
// 1、把方法设为对应对象的属性
// 2、执行该方法
// 3、删除该属性

// Function.call = (thisArgs, arg1, arg2...){}
const _call = (...args) => {
  let [content, ...other] = args
  content = content? Object(content): window
  const _symbol = Symbol('key')
  content[_symbol] = this
  const res = content[_symbol](...other)
  delete content[_symbol]
  return res
}

const _apply = (...args) => {
  let [content, ...other] = args
  content = content? Object(content) : window
  const _symbol = Symbol('key')
  content[_symbol] = this
  let res
} 