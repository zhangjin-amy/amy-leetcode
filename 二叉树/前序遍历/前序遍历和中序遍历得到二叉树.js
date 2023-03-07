
// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder.length) {
      return null;
  }

  // 🟢由前序可以给定根，在中序中找到根，可以确定所有的左子树，和右子树
  const rootVal = preorder[0];
  const node = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const rightPreorder = preorder.slice(rootIndex + 1);

  node.left = buildTree(leftPreorder, leftInorder);
  node.right = buildTree(rightPreorder, rightInorder);
  return node;

};