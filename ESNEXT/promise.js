const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }
  // init status
  status = PENDING
  value = null
  reason = null
  onFulfilledCallback = []
  onRejectedCallback = []

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }
  then = (onFulfilled, onRejected) => {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw new Error(reason)
          }
    const nextPromise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        try {
          queueMicrotask(() => {
            const res = onFulfilled(this.value)
            resolvePromise(nextPromise, res, resolve, reject)
          })
        } catch (e) {
          reject(e)
        }
      } else if (this.status === REJECTED) {
        try {
          queueMicrotask(() => {
            const res = onRejected(this.reason)
            resolvePromise(nextPromise, res, resolve, reject)
          })
        } catch (e) {
          reject(e)
        }
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(() => {
          try {
            queueMicrotask(() => {
              const res = onFulfilled(this.value)
              resolvePromise(nextPromise, res, resolve, reject)
            })
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallback.push(() => {
          try {
            queueMicrotask(() => {
              const res = onRejected(this.reason)
              resolvePromise(nextPromise, res, resolve, reject)
            })
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return nextPromise
  }
  static resolve(parameter){
    if(parameter instanceof MyPromise) {
      return parameter
    }
    return new MyPromise((resolve, reject) => {
      resolve(parameter)
    })
  }

  static reject(parameter) {
    return new MyPromise((resolve, reject) => {
      reject(parameter)
    })
  }
}
function resolvePromise(self, val, resolve, reject) {
  // resolve的返回值等于promise本身，则报错
  if (self === val) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    )
  }
  if (val instanceof MyPromise) {
    val.then(resolve, reject)
  } else {
    resolve(val)
  }
}

MyPromise.prototype.all = arr => {
  if(!Array.isArray(arr)) throw new Error('parameter is not array')
  return new MyPromise((resolve, reject) => {
    resArr = []
    let count = 0
    for(let [item, i] in arr) {
      new MyPromise.resolve(item).then(val => {
        count++
        resArr[i] = val
        if(count === arr.length) resolve(resArr)
      }, err =>{
        reject(err)
      })
    }
  })
}
