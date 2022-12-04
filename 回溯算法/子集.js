// https://leetcode.cn/problems/subsets/

/**
 * 回溯算法
 * 思路：目标数组的长度不固定，可以遍历目标数组可能的长度
 */

/**
 * 这个是错的
 */
var subsets0 = function(nums) {
  const length = nums.length;
  let result = [[]]
  if (length === 1) {
    result.push(nums);
    return result;
  }
  for(let len = 1; len <= length; len++) {
    for (let i = 0; i < length; i++) {
      /**
       * 没有考虑不连续的情况
       * 比如nums=[1,2,3] 可能的子集为[1, 3]
       */
      const j = len + i - 1;
      if (j > length - 1) {
        break;
      }
      const curSub = nums.slice(i, j + 1);
      result.push(curSub);
    }
  }
  return result;
}

// 一种解法
var subsets1 = function(nums) {
  const length = nums.length;
  let result = [[]]
  if (length === 1) {
    result.push(nums);
    return result;
  }
  for (let len = 1; len <= length; len++) {
    dfs(nums, [], len, 0);
  }
  return result;

  /**
   * 
   * @param {array} nums 可选的数组
   * @param {array} path 当前的数组
   * @param {*} len 需要的长度
   * @param {*} i 起始位置
   */
  function dfs(nums, path, len, start){
    if(path.length === len) {
      result.push([...path]);
      return;
    }

    for(let i = start; i < nums.length; i++) {
      if(path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(nums, path, len, i + 1);
      path.pop()
    }
  }
  
}

console.log(subsets([1,2,3]))