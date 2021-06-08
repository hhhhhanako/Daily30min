// 思路:
// 1、把方法设为对应对象的属性
// 2、执行该方法
// 3、删除该属性

// Function.call = (thisArgs, arg1, arg2...){}
Function.prototype.call = function (thisArgs, ...args) {
  thisArgs = thisArgs || window
  const _symbol = Symbol('key')
  content[_symbol] = this
  const res = content[_symbol](...args)
  delete content[_symbol]
  return res
}

Function.prototype.apply = function (thisArgs, args) {
  thisArgs = thisArgs || window
  const _symbol = Symbol('key')
  content[_symbol] = this
  const res = content[_symbol](...args)
  delete content[_symbol]
  return res
}

// 对于普通函数，绑定this指向
// 对于构造函数，要保证原函数的原型对象上的属性不能丢失
Function.prototype.bind = function (thisArgs, ...args) {
  let self = this
  let res = function () {
    return self.call(
      this instanceof self ? this : thisArgs,
      ...args,
      ...arguments
    )
  }
  res.prototype = Object.create(self.prototype)
  return res
}
