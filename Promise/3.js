/**
 * 实现简易的Promise
 * 第三步：解决then链式调用问题
 */

/**
 * 实现简易的Promise
 * 第二步：解决异步问题
 */

const PENGDING = 'pengding',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.state = PENGDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    if (this.state === PENGDING) {
      this.state = FULFILLED;
      this.value = value;
      if (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.forEach(callback => callback());
      }
      
    }
  }

  reject = (reason) => {
    if (this.state === PENGDING) {
      this.state = REJECTED;
      this.reason = reason;
      if (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.forEach(callback => callback())
      }
    }
  }

  then = (onFulfilled, onRejected) => {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === PENGDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch(err) {
              reject(err);
            }
          })
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch(err) {
              reject(err);
            }
          })
        });
      }
  
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        })
      }
  
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch(err) {
            reject(err)
          }
        })
      }
      
    });
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new Error('chaning cycle'));
  }

  let called = false;
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let then = x.then;
    if (typeof then === 'function') {
      try {
        then.call(x, y => {
          if (called) {
            return;
          }
          called = true;
          resolve(promise2, y, resolve, reject);
        }, r => {
          if (called) {
            return;
          }
          called = true;
          reject(r);
        })
      } catch(err) {
        if (called) {
          return;
        }
        called = true;
        reject(err);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

const p1 = new MyPromise(function(resolve, reject){
  setTimeout(() => {
    resolve('async hello');
  }, 300)
})

// p1.then(res => {
//   console.log('success', res);
// }).then(res => {
//   console.log('then2', res);
// })

p1.then(1).then(res => console.log('success', res));


