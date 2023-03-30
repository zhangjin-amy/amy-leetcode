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