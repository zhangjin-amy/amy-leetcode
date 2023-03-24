// 实现call

const obj1 = {
  name: 'obj1',
  sayName(msg1, msg2) {
    console.log(`my name is ${this.name} ${msg1} ${msg2}`);
    return 'hello';
  }
}

const obj2 = {
  name: 'obj2'
}

// const res = obj1.sayName.call(obj2);
// console.log(res);

// 🔴传入的参数如果是null || undefined,会被忽略，此时绑定的是window
// 🔴由于每一个 Symbol 值都是不相等的，这意味着只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性
// 🔴call的返回值，是函数执行的结果
// 🔴因为可以不传入参数，这样写不能处理不传入第二个参数
Function.prototype.myCall_0 = function(context, ...args) {
  // 🔴这样写有可能会改写context的fn属性
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  // 🔴函数可能会有返回值
}

// 重新实现myCall
Function.prototype.myCall = function(context) {
  context = context === undefined || context === null ? window : Object(context);
  const fn = Symbol();
  context[fn] = this;
  // 🟢取context之外的参数
  const args = [...arguments].slice(1);
  const result = context[fn](...args);
  delete context[fn];
  return result;
}

// 手写apply
Function.prototype.myApply = function(context) {
  context = context === undefined || context === null ? window : Object(context);
  const fn = Symbol();
  context[fn] = this;
  const args = [...arguments][1];
  const result = context[fn](...args);
  delete context[fn];
  return result;
}



