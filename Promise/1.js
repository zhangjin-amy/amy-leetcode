/**
 * 实现简易Promise
 * 实现 resolve, reject, then功能，但不能实现异步
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {

  constructor(exector) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    exector(this.resolve, this.reject);
  }

  resolve = (res) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = res;
    }
    
    
  }

  reject= (err) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = err;
    }
  }

  then = (resolveCallback, rejectCallback) => {
    if (this.status === FULFILLED) {
      resolveCallback(this.value);
    }

    if (this.status === REJECTED) {
      resolveCallback(this.reason);
    }
  }
}

const p1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 0)
  // resolve(1);
}).then(res => {
  console.log('then', res);
})