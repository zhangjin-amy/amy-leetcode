// https://leetcode.cn/problems/same-tree/

/**
 * 思路：相同的树，即两个树节点的值，左子树节点值，右子树节点值分别相等
 */

var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p !== null && q !== null) {
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
  }

  return false;
};