var combinationSum3 = function(k, n) {
  // 特殊情况
  const remain = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const max = remain.reduce((acc, cur) => acc + cur);
  const min = 1 + 2 + 3;
  if (n > max || n < min ) {
      return [];
  }
  let result = [];
  const dfs = function(path, curSum, remain) {
      if (curSum === n && path.length === k) {
          result.push([...path]);
          return;
      }

      if (path.length > k || curSum > n) {
        return;
      }

      for (let i = 0; i < remain.length; i++) {
          const _curSum = curSum + remain[i];
          if (_curSum <= n) {
              path.push(remain[i]);
              dfs(path, _curSum, remain.slice(i + 1));
              path.pop();
          }
          // path.push(remain[i]);
          // dfs(path, curSum + remain[i], remain.slice(i + 1));
          // path.pop();
      }
  };
  dfs([], 0, remain);
  return result;
};


console.log(combinationSum3(3, 7));


// var combinationSum3 = function(k, n) {
//   // 特殊情况
//   const remain = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = [];
//   const dfs = function(path, remain) {
//       if (path.length === k) {
//           result.push([...path]);
//           return;
//       }

//       for (let i = 0; i < remain.length; i++) {
//         path.push(remain[i]);
//         dfs(path, remain.slice(i + 1));
//         path.pop();   
//       }
//   };
//   dfs([], remain);
//   return result;
// };


console.log(combinationSum3(3, 7));