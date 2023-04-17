/**
 * 实现简易的Promise
 * 第一步：实现then方法(不能解决异步问题)
 */

const PENGDING = 'pengding',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.state = PENGDING;
    this.value = null;
    this.reason = null;
    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    if (this.state === PENGDING) {
      this.state = FULFILLED;
      this.value = value;
    }
  }

  reject = (reason) => {
    if (this.state === PENGDING) {
      this.state = REJECTED;
      this.reason = reason;
    }
  }

  then = (onFulfilled, onRejected) => {
    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
  }
}

const p1 = new MyPromise(function(resolve, reject){
  resolve('hello')
})

p1.then(res => {
  console.log('success', res);
})


const p2 = new MyPromise(function(resolve, reject){
  reject('err');
})

p2.then(res => {
  console.log(res);
}, (err) => {
  console.log('error', err)
})
