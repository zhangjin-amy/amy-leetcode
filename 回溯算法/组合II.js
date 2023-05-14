

var combinationSum2 = function(candidates, target) { 
  // 对candidates进行排序
  candidates.sort((a, b) => a - b);

  // const isUsed = Array.from({ length }, () => false) // 哈？？好像不行
  let result = [];

  const dfs = function(path, sum, remain) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      if (i >= 1 && remain[i] === remain[i-1]) {
        continue;
      }
      if (sum + remain[i] <= target) {
        path.push(remain[i]);
        dfs(path, sum + remain[i], remain.slice().slice(i + 1));
        path.pop();
      }
    }
  };
  dfs([], 0, candidates);
  return result;
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));