var generateParenthesis = function(n) {
  if (n === 1) {
    return ['()'];
  }

  let result = [];
  let arr = Array.from({
    length: 2 * n
  }, (_item, i) => i < n ? '(' : ')');

  dfs([], arr);
  function dfs(path, remain) {
    // console.log(path, remain);
    if (path.length === 2 * n) {
      // console.log('--', path, isValid(path));
    }
    if (path.length === 2 * n && isValid(path)) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      // 去重
      if (i > 0 && remain[i] === remain[i-1]) {
        continue;
      }
      path.push(remain[i]);
      let newRemain = [...remain];
      newRemain.splice(i, 1);
      dfs(path, newRemain);
      path.pop();
    }
  }

  // 判断是否是正确的括号
  function isValid(path) {
    let leftArr = [];
    for (let i = 0; i < path.length; i++) {
      if (path[i] === '(') {
        leftArr.push('(');
      } else if (path[i] === ')') {
        if (leftArr.length) {
          leftArr.shift();
        } else {
          return false;
        }
      }
    }

    return leftArr.length === 0;
  }

  return result;

};

console.log(generateParenthesis(3));


// function isValid(path) {
//   let leftArr = [];
//   for (let i = 0; i < path.length; i++) {
//     if (path[i] === '(') {
//       leftArr.push('(');
//     } else if (path[i] === ')') {
//       if (leftArr.length) {
//         leftArr.shift();
//       } else {
//         return false;
//       }
//     }
//   }

//   return leftArr.length === 0;
// }

// console.log(isValid(['(', '(', ')', ')']))

