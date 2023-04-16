/**
 * 简单的电话号码组合问题
 * 求出【'a', 'b', 'c'】和 【'd', 'e', 'f'】的组合
 * // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
 */

function getGroup(group) {

  let result = [];
  dfs([], group, 0);

  function dfs(path, remain, curIndex) {
    if (path.length === group.length) {
      result.push(path.join(''));
    }
    if (curIndex >= remain.length) {
      return;
    }

    for (let j = 0; j < remain[curIndex].length; j++) {
      path.push(remain[curIndex][j]);
      dfs(path, remain, curIndex+1);
      path.pop();
    }
  }
  return result;
}

console.log(getGroup([['a', 'b', 'c'], ['d', 'e', 'f']]));