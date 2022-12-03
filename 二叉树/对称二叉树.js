// https://leetcode.cn/problems/symmetric-tree/


/**
 * 思路：若是轴对称二叉树，需要满足
 * 节点值相同
 *  -没有子节点（ok）
 *  -有子节点
 *    左子节点===右子节点 && 右子节点===左子节点
 *      
 */
 var isSymmetric = function(root) {
  
  function isSubSymmetric(n1, n2) {
      if (n1 === null && n2 === null) {
          return true;
      }

      if (n1 !== null && n2 !== null) {
          if (n1.val === n2.val) {
              return isSubSymmetric(n1.left, n2.right) && isSubSymmetric(n1.right, n2.left);
          } else {
              return false;
          }
      }

      return false;
  }

  return isSubSymmetric(root.left, root.right);
};