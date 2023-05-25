var trap = function(height) {
  const length = height.length;
  const stack = [];
  stack[0] = 0;
  let res = 0;

  for (let i = 1; i < length; i++) {
    // console.log('--debug', i, height[i], stack);
    while(height[i] >= height[stack.at(-1)] && stack.length) {
      const top = stack.pop();
      if (stack.length) {
        // 可以接雨水
        const curTop = stack.at(-1);
        curHeight = Math.min(height[curTop], height[i]) - height[top];
        curWidth = i - curTop - 1;
        // console.log(i, width, height);
        res += curHeight * curWidth;
      }
    }

    stack.push(i);
  }

  return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))