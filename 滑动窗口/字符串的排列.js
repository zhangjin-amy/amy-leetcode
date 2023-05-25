var checkInclusion = function(s1, s2) {
  // 即 s1的字母个数与s2某个子串一致呗
  const length1 = s1.length;
  const length2 = s2.length;

  if (length2 < length1) {
      return false;
  }

  let isValid = false;
  const map1 = new Map(),
      map2 = new Map();
  
  let left = 0,
      right = 0;

  for (let key of s1) {
      map1.set(key, map1.has(key) ? map1.get(key) + 1 : 1);
  }

  while(right < length2) {
      const curRight = s2[right];

      map2.set(curRight, map2.has(curRight) ? map2.get(curRight) + 1 : 1);

      while((!map1.get(curRight) || map2.get(curRight) > map1.get(curRight)) && left <= right) {
        const curLeft = s2[left];
        const newCount = map2.get(curLeft) - 1;
        if (newCount === 0) {
          map2.delete(curLeft);
        } else {
          map2.set(curLeft, newCount);
        }
        left++;
      }

      if (map2.size === map1.size && isSub(map1, map2)) {
        return true
      }

      
      right++;
      
  }

  function isSub(map1, map2) {

      let res = true;

      for (let [key, val] of map1.entries()) {

          if (!map2.has(key) || map2.get(key) !== val ) {
              res = false;
              break;
          }
      }

      return res;
  }

  return isValid;
};

// console.log(checkInclusion('hello', "ooolleoooleh"));
console.log(checkInclusion('ab', "ooollebaoooo"));