// let foo = new Foo()
// foo.__proto__ === Foo.prototype

function myInstanceOf(object, target) {
  if (typeof object !== 'object' || object === null) return false
  let proto = object.__proto__
  while (proto) {
    if (proto === target.prototype) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}
