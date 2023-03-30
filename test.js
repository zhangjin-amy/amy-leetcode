// var partition = function(s) {
//   const length = s.length;
//   if (length === 1) {
//       return [s.split('')];
//   }

//   if (length === 2) {
//       return s[0] === s[1] ? [s.split(''), [s]] : [s.split('')]; 
//   }
// };

var partition = function(s) {
  let result = [];

  dfs(s.length, [], s);
  function dfs(count, path, remain) {

    if (path.join('').length === count) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < remain.length; i++) {
      const curStr = remain.slice(0, i+1);
      if (!isValid(curStr)) {
        continue;
      } else {
        path.push(curStr);
      }

      dfs(count, path, remain.slice(i + 1));
      path.pop();
    }
  }

  function isValid(str) {
    return str === str.split('').reverse().join('');
  }

  return result;
};


console.log(partition('google'));
