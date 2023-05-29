var checkInclusion = function(s1, s2) {

  const length1 = s1.length,
      length2 = s2.length;

  let needMap = new Map(),
      needType = 0;

  let isSub = false;
  let left = 0,
    right = 0;

  // 初始化needMap和needType
  for(let val of s1) {
    if (needMap.has(val)) {
      needMap.set(val, needMap.get(val) + 1);
    } else {
      needMap.set(val, 1);
      needType += 1;
    }
  }

  while(right < length2) {
    const curRight = s2[right];
    while((!needMap.has(curRight) || right - left + 1 > length1) && left <= right) {
      // 更新left
      const curLeft = s2[left];
      if (needMap.has(curLeft)) {
        // needCount+1
        const curCount = needMap.get(curLeft);
        if (curCount === 0) {
          needType += 1;
        }
        needMap.set(curLeft, curCount + 1);
      }
      left++;
    }

    const curCount = needMap.get(curRight);
    if (curCount - 1 === 0) {
      needType -= 1;
    }
    needMap.set(curRight, curCount -1);

    // 符合条件
    if (right - left + 1 === length1 && needType === 0) {
      isSub = true;
      break;
    }
    right++;
  }

  return isSub;

}

console.log(checkInclusion('adc', "dcda"));