// https://leetcode.cn/problems/restore-ip-addresses/

/**
 * 思路
 * 找出可以插入.的位置 
 */
var restoreIpAddresses = function(s) {
  const length = s.length;

  let result = [];
  dfs([], 0, []);
  return result;

  function dfs(path, start) {
    const len = path.length;
      if (len === 3) {
          // 判断最后一个地址是否合法
          if(isValid(s.slice(path[len - 1] + 1))) {
            result.push([...path]);
          }
          return;
      }

      for (let i = start; i < length; i++) {
          const curS = s.slice(start, i + 1);
          if (!isValid(curS)) {
              continue;
          }
          path.push(i);
          dfs(path, i + 1);
          path.pop();
      }
  }

  function isValid(str) {
      if(!str) {
        return false;
      }
      if(str[0] === '0' && str.length !== 1) {
          return false;
      }
      if (parseInt(str) > 255) {
          return false;
      }
      return true;
  }
};

// console.log(restoreIpAddresses("25525511135"))
// console.log(restoreIpAddresses("0000"))
console.log(restoreIpAddresses("101023"))