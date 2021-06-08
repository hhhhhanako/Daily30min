// 浅拷贝手段
// 数组
// const new = target.slice()
// const new = target.concat()
// const new = [...target]
// 对象
// const new = Object.assign({}, target)

function shallowCopy(target) {
  if (typeof target === 'object' && target !== null) {
    let res = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        res[key] = target[key]
      }
    }
    return res
  } else {
    return target
  }
}
// 深拷贝
// 简易方案: const new = JSON.parse(JSON.stringify(target))
function deepCopy(target) {
  if (typeof target === 'object' && target !== null) {
    let res = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        res[key] = deepCopy(target[key])
      }
    }
    return res
  } else {
    return target
  }
}
// 缺陷：
// 1、无法拷贝循环引用 如:a.prop = a
// 2、无法拷贝特殊对象，如Date、Math
// 3、无法拷贝函数

// 优化:用weakMap记录已拷贝的对象
function deepCopy(target, map = new WeakMap()) {
  if (map.has(target)) {
    return map.get(target)
  }
  if (typeof target === 'object' && target !== null) {
    let res = Array.isArray(target) ? [] : {}
    map.set(target, res)
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        res[key] = deepCopy(target[key], map)
      }
    }
    return res
  } else {
    return target
  }
}
