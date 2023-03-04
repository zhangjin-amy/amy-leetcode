// https://leetcode.cn/problems/average-of-levels-in-binary-tree/


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
var averageOfLevels = function(root) {
  let result = [];

  const dfs = function(root, deep) {
      if (root !== null) {
          result[deep] = result[deep] === undefined ? [0, 0] : result[deep];
          // 🟢比方法二在时间上更占优势
          result[deep][0] += root.val;
          result[deep][1] += 1;

          dfs(root.left, deep + 1);
          dfs(root.right, deep + 1);        
      }
  };

  dfs(root, 0);

  return result.map(item => item[0] / item[1]);
  
};

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
var averageOfLevels = function(root) {
  let result = [];

  const dfs = function(root, deep) {
      if (root !== null) {
          result[deep] = result[deep] ? result[deep] : [];
          result[deep].push(root.val);

          dfs(root.left, deep + 1);
          dfs(root.right, deep + 1);        
      }
  };

  dfs(root, 0);

  return result.map(item => {
      let sum = 0;
      for (let value of item) {
          sum += value;
      }

      return sum / item.length;
  })
  
};