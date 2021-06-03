// 子类构造函数example
function SubType() {

}
// 父类构造函数example
function SuperType() {

}

// 方案一：借助原型链
SubType.prototype = new SuperType()
// 缺点：多个子类的实例对象共用一个原型对象，对原型对象的引用类型进行更改会影响其他子类

// 方案二：借助构造函数
function SubType() {
  SuperType.call(this)
}
// 缺点：只能继承父类的方法和属性，不能继承父类的原型链

// 方案三：组合方法（方案一和方案二的结合）
function SubType() {
  SuperType.call(this)
}
SubType.prototype = new SuperType()
// 缺点：子类的实例对象和原型对象上有两份相同的属性

// 方案四：
function SubType() {
  SuperType.call(this)
}
SubType.prototype = SuperType.prototype
// 缺点：子类的实例对象的构造函数是SuperType

// 方案五：寄生组合继承(ES6的extends实际也是)
function SubType() {
  SuperType.call(this)
}
SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType
// const example = Object.create(obj) 即 example.__proto__ = obj
// 以下函数与Object.create(obj)一致

// funtion createObj(obj) {
//   let F = ()=>{}
//   F.prototype = obj
//   return new F()
// }

// ES5和ES6实现继承的不同：
// ES5：先创建子类的实例对象，再通过Super.call(this)在子类的实例对象上执行父类的构造函数
// ES6：先执行父类的构造函数来创建实例对象，在用子类的构造函数去修改对应的实例对象，所以要先执行super方法再使用this