// https://leetcode.cn/problems/second-largest-digit-in-a-string/

/**
 * 思路：尽量减少遍历次数，善用上一次的结果
 */

var secondHighest = function(s) {
  let result = -1;
  let maxNum = -1;
  const length = s.length;
  for (let i = 0; i < length; i++) {
      const curS = parseInt(s[i]);
      if (isNaN(curS)) {
          continue;
      }
      if (curS > maxNum) {
          result = maxNum;
          maxNum = curS;
      }
      if (curS > result && curS < maxNum){
         result = curS;
      }
  }
  return result;
};

console.log(secondHighest('aaa1111'));