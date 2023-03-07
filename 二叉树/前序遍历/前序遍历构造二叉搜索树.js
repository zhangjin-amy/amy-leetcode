// https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  // 🟢二叉搜索树的中序遍历是有小到大排列的，变形为由前序和中序得到二叉树
  const inorder = [...preorder].sort((a, b) => a - b);

  const buildTree = function(preorder, inorder) {
      console.log(preorder, inorder);
      if (!preorder.length) {
          return null;
      }
      const root = preorder[0];
      const index = inorder.indexOf(root);
      const node = new TreeNode(root);

      const leftInorder = inorder.slice(0, index);
      const rightInorder = inorder.slice(index + 1);
      const leftPreorder = preorder.slice(1, index + 1);
      const rightPreorder = preorder.slice(index + 1);

      node.left = buildTree(leftPreorder, leftInorder);
      node.right = buildTree(rightPreorder, rightInorder);
      return node;
  };
  return buildTree(preorder, inorder);  
};