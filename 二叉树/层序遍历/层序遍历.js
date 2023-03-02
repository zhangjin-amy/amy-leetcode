
// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
var levelOrder = function(root) {
  let result = [];

  const dfs = function(root, deep) {

      // 🟢判断当前节点是否存在
      if (!root) {
          return null;
      }

      if (!result[deep]) {
          result[deep] = [];
      }
      result[deep].push(root.val);
      dfs(root.left, deep + 1);
      dfs(root.right, deep + 1);
  }
  dfs(root, 0);

  return result;
};