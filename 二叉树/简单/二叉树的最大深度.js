
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
      return 0;
  }
  let maxDeep = 1;
  const dfs = function(root, deep) {
      if (root !== null) {
          // 🟢防止左子树 和 右子树 重复计算深度
          maxDeep = Math.max(maxDeep, deep);
          dfs(root.left, deep + 1);
          dfs(root.right, deep + 1);
      }
  };
  dfs(root, 1);
  return maxDeep;
};