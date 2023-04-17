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
    // 状态转为成功的回调
    this.onFulfilledCallbacks = [];
    // 状态转为失败的回调
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

  /**
   * 重点改造异步问题
   * 创建成功回调队列和失败回调队列
   * Promise的状态一旦改变，依次执行队列中的函数
   */
  then = (onFulfilled, onRejected) => {
    // 判断onFulfilled, onRejected是否是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    // 异步，
    if (this.state === PENGDING) {
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      });
    }

    if (this.state === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.state === REJECTED) {
      onRejected(this.reason);
    }
  }
}

const p1 = new MyPromise(function(resolve, reject){
  setTimeout(() => {
    resolve('async hello');
  }, 300)
})

p1.then(res => {
  console.log('success', res);
})

p1.then(res => {
  console.log('success2', res);
})

