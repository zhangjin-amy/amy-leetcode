// https://leetcode.cn/problems/verify-preorder-serialization-of-a-binary-tree/description/
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  // 槽位法
  // 初始只有一个槽位
  // 遇到空节点，槽位-1
  // 遇到非空节点，槽位-1 + 2；
  // 过程中，只要遇到栈顶为0，则出栈

  //🟢字符串转数组，以param作为分割
  const preorderArr = preorder.split(',');
  if (preorderArr.length % 2 === 0) {
      return false;
  }
  let stack = [1];
  for (let i = 0; i < preorderArr.length; i++) {
      if (!stack.length) {
          return false;
      }

      stack[0] = preorderArr[i] === '#' ? stack[0] -1 : stack[0] + 1;

      if (stack[0] === 0) {
          stack.pop();
      }
  }
  return stack.length === 0;
  
};


// 🟢不就是把栈改为计数嘛
var isValidSerialization = function(preorder) {
  // 槽位法
  // 初始只有一个槽位
  // 遇到空节点，槽位-1
  // 遇到非空节点，槽位-1 + 2；
  // 过程中，只要遇到栈顶为0，则出栈

  const preorderArr = preorder.split(',');
  if (preorderArr.length % 2 === 0) {
      return false;
  }
  let stack = 1;
  for (let i = 0; i < preorderArr.length; i++) {
      if (stack <= 0){
          return false;
      }

      stack = preorderArr[i] === '#' ? stack -1 : stack + 1;
  }
  return stack === 0;
  
};