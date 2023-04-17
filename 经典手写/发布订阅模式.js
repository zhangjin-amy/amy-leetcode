class Event {
  constructor() {
    this.subs = [];
  }

  on = (eventName, fn) => {
    if (!this.subs[eventName]) {
      this.subs[eventName] = [];
    }
    this.subs[eventName].push(fn);
  }

  publish = (eventName, data) => {
    let callbacks = this.subs[eventName];
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(data);
      });
    }
  }

  off = (eventName, fn) => {
    let callbacks = this.subs[eventName];
    if (!callbacks) {
      return false;
    }

    if (!fn) {
      // 清除全部
      callbacks && (callbacks.length = 0);
    }

    for (let i = 0; i < callbacks.length; i++) {
      if (callbacks[i] === fn || callbacks[i].fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
  }

  once = (eventName, fn) => {
    let onceOn = (...args) => {
      fn.call(this, ...args);
      this.off(eventName, fn)
    }

    onceOn.fn = fn;
    this.on(eventName, onceOn);
  }
}

function fn1(param) {
  console.log('fn1', param);
}

function fn2(param) {
  console.log('fn2', param);
}

function fn3(param) {
  console.log('fn3', param);
}

const event1 = new Event();
event1.on('study', fn1);
event1.on('study', fn2);
event1.once('study', fn3);

event1.publish('study', 'math');
event1.publish('study', 'yuwen')
event1.off('study', fn1);

event1.publish('study', 'english');
console.log(event1.subs);
