// 创建一个事件管理器对象，来管理发布者和订阅者
const eventManager = {
  events: {},
  // 订阅
  subscribe: function(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  },
  // 取消
  unsubscribe: function(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb !== callback
      );
    }
  },
  // 发布
  publish: function(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => cb(data));
    }
  }
};