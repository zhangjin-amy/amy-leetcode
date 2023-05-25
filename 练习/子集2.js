// var subsetsWithDup = function(nums) {
//   const length = nums.length;
//   let result = [[]];

//   function dfs() {

//   };

//   dfs();

//   return result;
// };

var subsetsWithDup = function(nums) {
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
          if (path === 1) {
            path.pop();
          }
      }
  };

  for (let count = 1; count <= length; count++) {
      dfs([], nums, count)
  }

  return result;
};

console.log(subsetsWithDup([1, 1, 1]))