// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * 快慢指针
 * 注意⚠️：慢指针不能简单的在重复项基础上加1
 */
var lengthOfLongestSubstring = function(s) {
  const length = s.length;
  if (length <= 1) {
      return length;
  }
  if (length === 2) {
      return s[0] === s[1] ? 1 : 2;
  }

  let i = 0;
  let j = 0;
  let maxLen = 0;
  let strMap = new Map();
  for (i; i < length; i++) {
      const curS = s[i];
      if (strMap.has(curS)) {
        const preCurSIndex = strMap.get(curS) + 1;
        j = Math.max(preCurSIndex, j);
      }
      strMap.set(curS, i);
      maxLen = Math.max(maxLen, i - j + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('abba'))