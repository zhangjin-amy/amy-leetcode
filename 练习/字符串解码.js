var decodeString = function(s) {
  const stackNum = []; //倍数栈
  const stackStr = []; // 字符串栈

  let num = 0; // 若倍数>10，需要做拼接
  let result = ''; //最后结果

  for (let char of s) {
    if (!isNaN(char)) {
      // 是数字
      num = num * 10 + parseInt(char);
    } else if (char === '[') {
      // num 入栈
      stackNum.push(num);
      num = 0;

      // result 入栈
      stackStr.push(result);
      result = '';

    } else if (char === ']') {
      // 作拼接
      const repeatNum = stackNum.pop();
      result = stackStr.pop() + result.repeat(repeatNum)
    } else {
      // 字母
      result += char;
    }
  }

  return result;
};

console.log(decodeString('3[a2[c]]'))


