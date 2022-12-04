// https://leetcode.cn/problems/permutations/

/**
 * 思路：回溯
 */

 var permute = function(nums) {
  const length = nums.length;
  let result = [];
  if (nums.length === 1) {
      result.push(nums);
      return result;
  }
  dfs(length, [], nums);
  return result;
  /**
   * 
   * @param {number} length 目标数组的长度
   * @param {array} path 目标数组
   * @param {array} choice 当前可选择数组
   * @returns 
   */
  function dfs(length, path, choice) {
      if (path.length === length) {
          result.push([...path]);
          return;
      }

      for (let i = 0; i < choice.length; i++) {
          const temp = [...choice];
          path.push(choice[i]);
          temp.splice(i, 1);
          dfs(length, path, temp);
          path.pop();
      }
  }
}