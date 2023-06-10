var exchange = function(nums) {
  const n = nums.length;
  const res = new Array(n).fill(0);
  let left = 0, right = n - 1;
  for (const num of nums) {
      if (num % 2 === 1) {
          res[left++] = num;
      } else {
          res[right--] = num;
      }
  }
  return res;
};

console.log(exchange([1, 2, 3, 4]))