// https://leetcode.cn/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 因为可以得到每层遍历后的数组，所以本题可变形为求每层成为有序数组的最小操作数，将每层最小操作数相加即可
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
  let result = [];
  let minSum = 0;

  const dfs = function(root, deep) {

      // 判断当前节点是否存在
      if (!root) {
          return null;
      }

      if (!result[deep]) {
          result[deep] = [];
      }
      result[deep].push(root.val);
      dfs(root.left, deep + 1);
      dfs(root.right, deep + 1);
  }
  dfs(root, 0);

  // 使每一层有序
  for (let item of result) {
    // item是每一层的数组
    // 🟢[].sort会改变原数组，要保存一份原数组的备份
    const sourceItem = [...item];
    const sortItem = item.sort((a, b) => a - b);

    for (let i = 0; i < sourceItem.length; i++) {
      if (sourceItem[i] !== sortItem[i]) {
        // 交换顺序
        const targetIndex = sourceItem.indexOf(sortItem[i]);

        // 交换顺序
        [sourceItem[i], sourceItem[targetIndex]] = [sourceItem[targetIndex], sourceItem[i]];
        minSum += 1;
      }
    }
  }

  return minSum;
};