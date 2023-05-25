var subsets = function(nums) {
  let result = [[]];
  const length = nums.length;

  function dfs (path, remain, target) {
      if (path.length === target) {
          result.push([...path]);
          return;
      }

      for (let i = 0; i < remain.length; i++) {
          if (i >= 1 && remain[i - 1] === remain[i]) {
            continue;
          }
          path.push(remain[i]);
          dfs(path, remain.slice(i + 1), target);
          path.pop();
      }
  };

  for (let count = 1; count <= length; count++) {
      dfs([], nums, count)
  }

  return result;
};

console.log(subsets([1, 2, 2]))