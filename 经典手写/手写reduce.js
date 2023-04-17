let arr = [1, 2, 3, 4, 5];

const num = arr.reduce((total, cur) => {
  return total + cur;
})



Array.prototype.myReduce = function(fn, initialVal) {
  const arr = this;
  let total = initialVal === undefined || initialVal === null ? arr[0] : initialVal;

  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i], i, arr);
  }
  return total;
}

const numMyReduce = arr.myReduce((total, cur) => {
  return total + cur;
}, 9)


console.log(numMyReduce);