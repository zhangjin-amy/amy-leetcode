// https://leetcode.cn/problems/permutations-ii/

/**
 * 思路：用过的位置。或者后值等于前值时过滤
 */

var permuteUnique = function(nums) {
  const length = nums.length;
  let result = [];
  let uses = Array.from({length}, () => false);
  if (length === 1) {
    result.push(nums);
    return result;
  }
  nums.sort((a, b) => a- b);
  dfs([]);
  return result;
  function dfs(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for(let i = 0; i < nums.length; i ++) {
      if (uses[i] || (!uses[i - 1] && nums[i] === nums[i-1])) {
        continue;
      }

      path.push(nums[i]);
      uses[i] = true;
      dfs(path);
      uses[i] = false;
      path.pop();
    }
  }
};