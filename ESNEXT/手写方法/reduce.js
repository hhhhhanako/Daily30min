Array.prototype.reduce = function (callbackFunc, fisrtArg) {
  if (this == null) {
    throw new TypeError("Cannot read property 'map' of null or undefined")
  }
  if (Object.prototype.toString.call(callbackFunc) !== '[object Function]') {
    throw new TypeError(callbackFunc + ' is not a function')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let k = 0
  let accumulator = fisrtArg
  if (accumulator === undefined) {
    while (k < len) {
      if (k in O) {
        accumulator = O[k]
        k++
        break
      }
      k++
    }
  }
  if (k === len && accumulator === undefined) {
    throw new Error('Each element of the array is empty')
  }
  while (k < len) {
    if(k in O){
      accumulator = callbackFunc.call(undefined, accumulator, O[k], k, O)
    }
    k++
  }
  return accumulator
}
