function newOperator(constructorFunc, ...args) {
  if (typeof constructorFunc !== 'function') {
    throw new TypeError(
      'newOperator function the first param must be a function'
    )
  }
  let obj = Object.create(constructorFunc.prototype)
  let res = constructorFunc.apply(obj, args)
  let isObject = typeof res === 'object' && res !== null
  let isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
