var nextGreaterElement = function(nums1, nums2) {
  // 先利用单调栈找出nums2每个下标对应的下一个更大元素
  const l2 = nums2.length,
        l1 = nums1.length,
        res2 = Array.from({ length: l2 }, () => -1),
        res1 = Array.from({ length: l1 });

  const stack = [nums2.at(-1)];

  for (let i = l2 - 2; i >=0; i--) {
      while(nums2[i] >= stack.at(-1) && stack.length) {
          stack.pop();
      }

      if (stack.length) {
          res2[i] = stack.at(-1);
      }

      stack.push(nums2[i]);
  }

  // 遍历nums1
  for (let i = 0; i < nums1.length; i++) {
      const keyInNums2 = nums2.indexOf(nums1[i]);
      res1[i] = res2[keyInNums2];
  }

    return res1;
  
 }


 console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));