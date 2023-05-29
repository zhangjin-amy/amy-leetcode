var minWindow = function(s, t) {
  const lengthS = s.length,
        lengthT = t.length;

  if (lengthS < lengthT) {
    return '';
  }

  let left = 0,
    right = 0,
    mapS = new Map(),
    mapT = new Map(),
    resStr = '';

  // 先完成mapT
  for (let itemT of t) {
    mapT.set(itemT, mapT.has(itemT) ? mapT.get(itemT) + 1 : 1);
  }

  while(right < lengthS) {
    const curRight = s[right];

    // left肯定是第一个满足条件的
    while(!mapT.has(s[left]) && left <= right) {
      left++;
    }

    if (mapT.has(curRight)) {
      mapS.set(curRight, mapS.has(curRight) ? mapS.get(curRight) + 1 : 1);
    }

    if (mapS.size === mapT.size && isSub(mapT, mapS)) {
      // 更新resStr
      if (resStr === '' || right - left + 1 < resStr.length) {
        resStr = s.slice(left, right + 1);
      }

      // 更新left
      const curLeft = s[left];
      const newCount = mapS.get(curLeft) - 1;
      if (newCount === 0) {
        mapS.delete(curLeft);
      } else {
        mapS.set(curLeft, newCount);
      }
      left++;

    }

    right++;
  }

  return resStr;
};


function isSub(map1, map2) {
  for (let [key, val] of map1.entries()) {
    if (map2.get(key) < val) {
      return false;
    }
  }

  return true;
}

// console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow('bba', 'ab'))