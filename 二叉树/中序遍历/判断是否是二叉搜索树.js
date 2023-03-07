// https://leetcode.cn/problems/validate-binary-search-tree/


// 🔴错误做法，没有考虑右子树中有小于根节点值的可能
// var isValidBST = function(root) {
//   if (root === null) {
//     return true;
//   }

//   if (root.left === null) {
//     return root.right === null ? true : root.val < root.right.val && isValidBST(root.right)
//   }

//   if (root.right === null) {
//     return root.left === null ? true : root.left.val < root.val && isValidBST(root.left);
//   }

//   if (root.left !== null && root.right !== null) {
//     return root.left.val < root.val && root.val < root.right.val && isValidBST(root.left) && isValidBST(root.right);
//   } 
// }

var isValidBST = function (root) {
  // 中序遍历，得到的值应该是升序的

  if (root === true) {
    return true;
  }
  try {

    const result = [];
    const dfs = function (root) {
      if (root !== null) {
        dfs(root.left);
        console.log(result, root.val);
        if (result.length > 0 && result.at(-1) >= root.val) {
          throw new Error('false');
        } else {
          result.push(root.val);
          dfs(root.right);
        }

      }
    };

    dfs(root);
    return true;
  } catch (err) {
    return false;
  }
}

var isValidBST = function (root) {
  // 递归的方法，依次给定当前节点的最大最小值范围
  const helper = function(root, lower, upper) {
      if (root === null) {
          return true;
      }
      if (root.val <= lower || root.val >= upper) {
          return false;
      }

      return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
  };
  
  return helper(root, -Infinity, Infinity);
}


