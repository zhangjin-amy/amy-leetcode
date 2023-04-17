let obj = {
  name: 'obj',
  sayName(p1, p2) {
    console.log(this.name, p1, p2);
  }
}

let obj1 = {
  name: 'bob'
}


Function.prototype.myCall = function(context, ...args) {
  // 🟢🟢🟢
  if (typeof this !== 'function') {
    throw new Error('err, this is of a function');
  }
  const fn = new Symbol();
  context = context === undefined || context === null ? window : context;
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  // 🟢🟢🟢 返回值
  return result;

}

Function.prototype.myApply = function(context, args) {
  /// 同上
  if (typeof this !== 'function') {
    throw new Error('err, this is of a function');
  }
  const fn = Symbol();
  context = context === null || context === undefined ? window : context;
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  // 🟢🟢🟢 返回值
  return result;
}

Function.prototype.bind = function(context) {
  if (typeof this !== 'function') {
    throw new Error('err, this is of a function');
  }
  const fn = Symbol('');
  context = context === undefined || context === nulal ? window : context;
  context[fn] = this;

  return function(...args) {
    context[fn](...args);
  }
}


let sayName = obj.sayName.bind(obj1);

sayName();

