var closeStrings = function(word1, word2) {
  const length1 = word1.length;
  const length2 = word2.length;

  if (length1 !== length2) {
      return false;
  }

  let map1 = new Map();
  let map2 = new Map();

  for (let item of word1) {
      map1.set(item, map1.has(item) ? map1.get(item) + 1 : 1);
  }
  for (let item of word2) {
      map2.set(item, map2.has(item) ? map2.get(item) + 1 : 1);
  }

  // 确保字符都相同
  let set1Value = new Set();
  let arr1Count = [];

  let set2Value = new Set();
  let arr2Count = [];

  for (let [value, count] of map1.entries()) {
      set1Value.add(value);
      arr1Count.push(count);
  }

  for (let [value, count] of map2.entries()) {
      set2Value.add(value);
      arr2Count.push(count);
  }

  console.log(set1Value, arr1Count, set2Value, arr2Count);

  const valueIsOk = [...set1Value].sort((a, b) => a.localeCompare(b)).join('') === [...set2Value].sort((a, b) => a.localeCompare(b)).join('');

  console.log(valueIsOk, [...set1Value].sort((a, b) => a - b).join(''), [...set2Value].sort((a, b) => a - b).join(''));

  const countIsOk = arr1Count.sort((a, b) => a - b).join('') === arr2Count.sort((a, b) => a - b).join('');

  console.log(countIsOk, arr1Count.sort((a, b) => a - b).join(''), arr2Count.sort((a, b) => a - b).join(''));

  return valueIsOk && countIsOk;

};


console.log(closeStrings('abc', 'cba'));