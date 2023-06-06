const Single = (
  function() {
    let instance = null;
    return function(name) {
      if (!instance) {
        this.name = name;
        instance = this;
      }
      return instance;
    }
  }
)();


const s1 = new Single('a');
const s2 = new Single('b');

console.log(s1 === s2, s1.name, s2.name)