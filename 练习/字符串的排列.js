// 回溯的减枝，气死了

var permutation = function(s) {
  let result = [];
  
  const rangeS = s.split('').sort();

  // console.log('---r', rangeS);

  const length = s.length;
  
  function dfs(path, range, target) {
      // console.log('dfs', path, s);
      if (path.length === target) {
          result.push([...path].join(''));
          return;
      }

      for (let i = 0; i < range.length; i++) {
          if (i >= 1 && range[i] === range[i-1]) {
            continue;
          }
          path.push(range[i]);
          const _range = [...range];
          _range.splice(i, 1);
          dfs(path, _range, target);
          path.pop();
      }
  };

  dfs([], rangeS, length);
  return result;
};

console.log(permutation('abc'));