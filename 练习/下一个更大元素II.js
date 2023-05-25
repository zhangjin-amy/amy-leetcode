
var nextGreaterElements = function(nums) {
  const length = nums.length;

  const ans = Array.from({ length: 2 * length }, () => -1);
  const stack = [];
  stack[0] = length - 1;

  for (let i = 2 * length - 2; i >= 0; i--) {
    const index = i >= length ? i - length : i;
    while(stack.length && nums[index] >= nums[stack.at(-1)]) {
      stack.pop();
    }

    if (stack.length) {
      ans[i] = nums[stack.at(-1)];
    }

    stack.push(index);
  }


  return ans.slice(0, length);
}

console.log(nextGreaterElements([1, 2, 1]))