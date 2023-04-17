class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`my name is ${this.name}`);
  }
}

// const person1 = new Person('amy');
// console.log(person1);



class Person1 {
  constructor(executor) {
    this.age = 18;
    executor(this.sayName);
  }

  sayName  = () => {
    console.log(`my name is , my age is ${this.age}`);
  }
}

const person1 = new Person1(function(fn) {
  fn();
});
console.log(person1);