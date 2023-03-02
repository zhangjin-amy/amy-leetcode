// https://leetcode.cn/problems/largest-local-values-in-a-matrix/description/
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
// var largestLocal = function(grid) {
//   const n = grid.length;
//   const result = Array.from({ length: n - 2 }, () => Array.from(
//       { length: n - 2 }, () => 0
//   ));

//   for (let i = 0; i < n - 2; i++) {
//       for (let j = 0; j < n - 2; j++) {
//           let x = i,
//               y = j;
//           /**
//            * 🔴是错误的，每次会使xy同时+1，应该像最外层循环一样
//            */
//           while(x < i + 3 && y < j + 3) {
//               console.log('ijxy', i, j, x, y)
//               result[i][j] = Math.max(result[i][j], grid[x][y]);
//               x++;
//               y++;
//           }
//       }
//   }

//   return result;
// };


var largestLocal = function(grid) {
  const n = grid.length;
  const result = Array.from({ length: n - 2 }, () => Array.from(
      { length: n - 2 }, () => 0
  ));

  for (let i = 0; i < n - 2; i++) {
      for (let j = 0; j < n - 2; j++) {
        for　(let x = i; x < i + 3; x++) {
          for (let y = j; y < j + 3; y++) {
            result[i][j] = Math.max(result[i][j], grid[x][y])
          }
        }
      }
  }

  return result;
};