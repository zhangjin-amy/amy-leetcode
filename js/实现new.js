/**
 * new 的作用
 * 新建一个对象obj；
 * 对象obj.__proto__ = 构造函数.prototype
 * 执行构造函数方法；
 * 返回这个对象（函数如果没有返回值，就返回这个对象）
 */

// 自己实现一个new
// new 接收构造函数和初始值

function myNew(fn, ...args) {
  //🟢构造函数创建的实例可以共享原型对象的属性和方法
  const obj = new Object(fn.prototype);
  const res = fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log( `my name is ${this.name}`);
}

const p1 = myNew(Person, 'amya');
p1.sayName();

