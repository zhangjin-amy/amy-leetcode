// https://leetcode.cn/problems/n-ary-tree-level-order-traversal/description/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];

  const dfs = function(root, deep) {
      if (root !== null) {

          // 🟩 不要一味的追求简写， [].push 的返回值是[]的新长度
          if (!result[deep]) {
              result[deep] = [];
          }

          result[deep].push(root.val);

          const children = root.children;

          if (children !== null) {
              //  遍历children
              for (let i in children) {
                  dfs(children[i], deep + 1);
              }
          }
      }
  };

  dfs(root, 0)
  return result;
};