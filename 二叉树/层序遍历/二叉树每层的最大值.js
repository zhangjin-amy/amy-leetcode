// https://leetcode.cn/problems/hPov7L/


var largestValues = function(root) {
  let result = [];

  const dfs = function(root, deep) {

      // 🟢判断当前节点是否存在
      if (!root) {
          return null;
      }

      // 🟢每次取该deep层的当前遍历到的最大值
      result[deep] = result[deep] === undefined ? root.val : Math.max(result[deep], root.val);

      dfs(root.left, deep + 1);
      dfs(root.right, deep + 1);
  }
  dfs(root, 0);

  return result;
};