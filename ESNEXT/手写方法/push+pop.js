Array.prototype.push = function (...items) {
  const O = Object(this)
  let len = this.length >>> 0
  let argsLen = items.length >>> 0
  let newLen = len + argsLen
  if (newLen > 2 ** 53 - 1) {
    throw new TypeError('over the max value')
  }
  for (let i = 0; i < argsLen; i++) {
    O[len+i] = items[i]
  }
  O.length = newLen
  return newLen
}

Array.prototype.pop = function() {
  const O = Object(this)
  let len = this.length >>> 0
  if(len === 0) {
    O.length = 0
    return undefined
  }
  len--
  let res = O[len]
  delete O[len]
  O.length = len
  return res
}