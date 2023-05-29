function curry(fn) {
  return function curried(...args) {
      if (args.length >= fn.length) { // 满足原函数的要求
          return fn.apply(this, args)
      } else {
          return function(...newArgs) { // 不满足原函数的要求
              return curried.apply(this, args.concat(newArgs))
          }
      }
  };
};

function fn(a, b , c) {
  return a + b + c
}

const cu = curry(fn);

console.log(cu(3, 4, 5))