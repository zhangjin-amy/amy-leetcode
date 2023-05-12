// var dailyTemperatures = function(temperatures) {
//   // 暴力枚举
//   const length = temperatures.length;
//   const result = Array.from({ length });
//   result[length - 1] = 0;
//   for (let i = 0; i < length - 1; i++) {
//     const curTem = temperatures[i];
//     result[i] = 0;
//     for (let j = i + 1; j < length; j++) {
//       if (temperatures[j] > curTem) {
//         result[i] = j - i;
//         break;
//       }
//     }
//   }
//   return result;
// };


// 🔴g惯性思维
var dailyTemperatures1 = function(temperatures) {
  // 单调栈
  const length = temperatures.length;
  
  const result = Array.from({ length }, () => 0); // 结果数组

  const stack = [length - 1]; // 单调栈，维护索引

  for (let i = length - 2; i >= 0; i--) {
    const cur = temperatures[i];

    const topIndex = stack[stack.length - 1];
    const top = temperatures[topIndex];
    if (cur < top) {
      result[i] = topIndex - i;
    } else {
      stack.pop();
      while(stack.length) {
        const curTopIndex = stack[stack.length - 1];
        const curTop = temperatures[curTopIndex];
        if (cur > curTop) {
          stack.pop();
        } else {
          result[i] = curTopIndex - i;
          break;
        }
      }
    }
    stack.push(i);
  }
  return result;

};


var dailyTemperatures = function(temperatures) {
  // 优化单调栈
  const length = temperatures.length;
  
  const result = Array.from({ length }, () => 0); // 结果数组

  const stack = [length - 1]; // 单调栈，维护索引

  for (let i = length - 2; i >= 0; i--) {
    const cur = temperatures[i];

    // 🔴🔴关键，这里的判断条件应该是cur >= top(栈顶的元素) && stack.leng
    while(cur >= temperatures[stack.at(-1)] && stack.length) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack.at(-1) - i;
    }

    stack.push(i);
  }
  return result;

};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))