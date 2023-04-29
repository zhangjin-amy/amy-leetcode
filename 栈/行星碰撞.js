var asteroidCollision = function(asteroids) {
  let result = [asteroids[0]];
  let i = 1;
  while(i < asteroids.length) {
      const cur = asteroids[i];
      if (result.length) {
            while(result.length) {
              const top = result[result.length - 1];
              if (top > 0 && cur < 0) {
                if (top + cur === 0) {
                  result.pop();
                  break;
                }
                if (top + cur > 0) {
                 break;
                }

                if (top + cur < 0) {
                  result.pop();
                  if (!result.length) {
                    result.push(cur);
                    break;
                  }
                }
              } else {
                result.push(cur);
                break;
              }
            }

      } else {
        result.push(cur);
      }
      i++;
  }
  return result;
};

console.log(asteroidCollision([1, -2, -2, -2]));
// console.log(asteroidCollision([8, -8, 1]));