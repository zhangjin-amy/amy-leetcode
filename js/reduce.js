const arr = [5, 3, 1, 7, 8, 1, 3];

const getMaxVal = function() {
  return arr.reduce((max, cur) => {
    return Math.max(max, cur);
  })
}

const setArr = function() {
  return arr.reduce((total, cur) => {
    if (total.indexOf(cur) === -1) {
      total.push(cur);
    }
    return total;
  }, [])
}

const str = '(())'
// 验证括号是否合法
const isValid = function(str) {
  const arr = str.split('');

  const isPerfect = arr.reduce((total, cur) => {
    if (cur === '('){
      total += 1;
    }
    if (cur === ')') {
      total -= 1;
    }
    return total;
  }, 0)
  return isPerfect === 0;
}

// console.log(getMaxVal(arr));
// console.log(setArr());
// console.log(isValid(str));
console.log(isValid('(()))'));