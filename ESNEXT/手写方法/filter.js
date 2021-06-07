Array.prototype.filter = function (callbackFunc, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read property 'map' of null or undefined")
  }
  if (Object.prototype.toString.call(callbackFunc) !== '[object Function]') {
    throw new TypeError(callbackFunc + ' is not a function')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let index = 0
  const res = []
  for (let i = 0; i < len; i++) {
    if (i in O && callbackFunc.call(thisArg, O[i], i, O)) {
      res[index++] = O[i]
    }
  }
  return res
}
