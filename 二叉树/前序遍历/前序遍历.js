// https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) {
      return [];
  }
  let result = [];
  const dfs = function(root) {
      if (root === null) {
          return;
      }

      result.push(root.val);
      dfs(root.left);
      dfs(root.right);
  };

  dfs(root);
  return result;
};