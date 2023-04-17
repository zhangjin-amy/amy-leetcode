/**
 * new 的作用
 * 1. 创建一个对象
 * 2. this绑定到这个对象
 * 3. 判断返回值
 */


Function.prototype.myNew = function(...args) {
  const obj = Object.create(this.prototype);
  const result = this.call(obj, ...args);
  return typeof result === 'object' ? result : obj;
}

function Person(name) {
  this.name = name;
}

// const p1 = new Person('amy');
// console.log(p1);

const p2 = Person.myNew('bob');
console.log(p2)