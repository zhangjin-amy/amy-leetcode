var subarraysDivByK = function(nums, k) {
  let pre = 0;
  let ans = 0;
  const map = new Map();
  map.set(0, 1);

  for (let num of nums) {
      pre += num;

      let oldPre = pre % k;

      if (oldPre < 0) {
        oldPre += k;
      }

      if (map.has(oldPre)) {
          ans += map.get(oldPre);
      }

      map.set(oldPre, map.has(oldPre) ? map.get(oldPre) + 1 : 1);
  }

  return ans;
};


console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))