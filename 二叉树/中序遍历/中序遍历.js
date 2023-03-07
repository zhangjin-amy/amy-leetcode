// https://leetcode.cn/problems/binary-tree-inorder-traversal/

/**
 * 思路：
 * 中序遍历，即对于异棵子树，按照左节点值，父节点值，右节点值入栈
 * 采用递归的方式，依次遍历左子树，节点，右子树
 */

var inorderTraversal = function(root) {
  let result = [];
  function dfs(root) {
    if (root === null) {
      return;
    }
    if (root.left) {
      dfs(root.left);
    }
    result.push(root.val);
    if (root.right) {
      dfs(root.right);
    }
  }
  dfs(root);
  return result;
};