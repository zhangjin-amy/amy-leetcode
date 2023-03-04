// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let result = [];

  const dfs = function(root, deep) {
      if (root !== null) {
          result[deep] = result[deep] ? result[deep] : [];
          // 🟢判断该层，是从后往前插入该值，还是从前往后插入该值
          const isRight = deep % 2 === 0;

          isRight ? result[deep].unshift(root.val) : result[deep].push(root.val);

          dfs(root.right, deep + 1);
          dfs(root.left, deep + 1);
      }
  };

  dfs(root, 0);
  return result;
};