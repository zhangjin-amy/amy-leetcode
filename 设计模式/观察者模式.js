// 目标类
class Subject {
  constructor() {
    this.observers = []; // 观察者列表
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === observer) {
        this.observers.splice(i, 1);
        break;
      }
    }
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }
}


// 观察者类
class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`目标通知我更新, 我是${this.name}`);
  }
}

const o1 = new Observer('amy');
const o2 = new Observer('bob');

const subject = new Subject();
subject.add(o1);
subject.add(o2);

subject.notify();

subject.remove(o1);
subject.notify();
