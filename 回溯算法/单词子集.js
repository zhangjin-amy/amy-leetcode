var wordSubsets = function(words1, words2) {
  let result = [];
  let words1Obj = Array.from({ length: words1.length }, () => ({}));
  let words2Obj = Array.from({ length: words2.length }, () => ({}));

  for (let i = 0; i < words1.length; i++) {
    const curWord = words1[i];
    for (let s = 0; s < curWord.length; s++) {
      const curStr = curWord[s];
      words1Obj[i][curStr] = words1Obj[i][curStr] ? words1Obj[i][curStr] + 1 : 1;
    }
  }

  for (let i = 0; i < words2.length; i++) {
    // 这存在优化的空间
    const curWord = words2[i];
    for (let s = 0; s < curWord.length; s++) {
      const curStr = curWord[s];
      words2Obj[i][curStr] = words2Obj[i][curStr] ? words2Obj[i][curStr] + 1 : 1;
    }
  }

  let words2Map = words2Obj[0];
  for (let i = 1; i < words2Obj.length; i++) {
    for(let key of Object.keys(words2Obj[i])) {
      words2Map[key] = words2Map[key] ? Math.max(words2Obj[i][key], words2Map[key]) : words2Obj[i][key];
    }
  }

 for (let i = 0; i < words1Obj.length; i++) {
  if (isSub(words1Obj[i], words2Map)) {
    result.push(words1[i]);
  }
 }

  function isSub(map1, map2) {
    let isOk = true;
    for (let key of Object.keys(map2)) {
      if (!map1[key] || map2[key] > map1[key]) {
        isOk = false;
        break;
      }
    }
    return isOk;
  }

  return result;

};

// 判断word2是否是word1的子集


const res = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lo","eo"]);
console.log(res);

// wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lo","eo"]);