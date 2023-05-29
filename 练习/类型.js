function objDiff(obj1, obj2){
  let res = {};
  if (Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2)) {
    return [obj1, obj2];
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // 都是对象
    for (let key in obj1) {
      if (key in obj2) {
        const diff = objDiff(obj1[key], obj2[key]);

        if (diff !== undefined) {
          res[key] = diff;
        }
      }
    }

    return res;
  } else if (obj1 !== obj2) {
    return [obj1, obj2];
  }
}