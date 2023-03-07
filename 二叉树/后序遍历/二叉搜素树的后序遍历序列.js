
// https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/description/
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  if (!postorder.length) {
      return true;
  }

  const root = postorder.pop();
  const findIndex = postorder.findIndex(item => item > root);
  const leftPostOrder = findIndex === -1 ? postorder : postorder.slice(0, findIndex);
  const rightPostOrder = findIndex === -1 ? [] : postorder.slice(findIndex);


  //🟢所有的左子树节点都要小于根节点，所有的右子树节点都要大于根节点
  if (leftPostOrder.some(item => item >= root) || rightPostOrder.some(item => item <= root )) {
      return false;
  }

  return verifyPostorder(leftPostOrder) && verifyPostorder(rightPostOrder);
};