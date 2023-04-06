/**
 * 实现简易Promise
 * 实现 resolve, reject, then功能，但不能实现异步
 * 
 * +可以在Promise中异步使用resolve
 * +🟢then实现链式调用
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {

  constructor(exector) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    exector(this.resolve, this.reject);
  }

  resolve = (res) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = res;
      this.onFulfilledCallbacks.length && this.onFulfilledCallbacks.forEach(callback => {
        callback(this.value);
      })
    }
    
  }

  reject= (err) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = err;
      this.onRejectedCallbacks.length && this.onRejectedCallbacks.forEach(callback => {
        callback(this.reason);
      })
    }
  }

  then = (onResolve = value => value, onReject = err => { throw new Error(err)}) => {
    const value = this.value;
    const reason = this.reason;
    if (this.status === FULFILLED) {
      const p2 = new Promise((resolve, reject) => {
        try {
          onResolve(value);
          resolve('hello');
        } catch(err) {
          reject(err);
        }
      })
      return p2;
    }

    if (this.status === REJECTED) {
      onReject(this.reason);
    }

    if (this.status === PENDING) {
      this.onFulfilledCallbacks.push(onResolve);
      this.onRejectedCallbacks.push(onReject);
    }
  }
}

const p1 = new myPromise((resolve, reject) => {
  resolve(1);
}).then(res => {
  console.log('then', res);
})

console.log(p1);
// .then(res => {
//   console.log('then2', res);
// })


// const p = new Promise((resolve, reject) => {
//   resolve('p');
// }).then(res => {
//   console.log('then', res);
//   return 88;
// })

// p.then(res => {
//   console.log('then2', res);
// })