var permute = function(nums) {
  let result = [];
  const dfs = function(path, remain) {
      if (path.length === nums.length) {
          result.push([...path]);
          return;
      }
      for (let i = 0; i < remain.length; i++) {
          path.push(remain[i]);
          const newRemain = [...remain];
          newRemain.splice(i, 1);
          dfs(path, newRemain);
          path.pop();
      }
  };
  dfs([], nums);
  return result;
};

const res = permute([1, 2, 3]);
console.log(res);