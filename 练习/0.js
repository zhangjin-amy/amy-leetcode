[
  {
    a: 1, b: 2
  },
  {
    a: 3, b: 4
  }
]

[
  [a, b],
  [1, 3]
  [2, 4]
]

var jsonToMatrix = function(arr) {
  const set = new Set(),
    map = new Map(),
    row = arr.length + 1,
    res = [];

  function setData(prevKey, map, data) {
    for (let key in data) {
      if (data[key] === null || typeof data[key] !== 'object') {
        set.add(prevKey + key);
        map.set(prevKey + key, data[key]);
      } else {
        setData(prevKey + key + '.', map, data[key])
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const subMap = new Map();
    setData('', subMap, arr[i]);
    map.set(i, subMap);
  }

  res[0] = [...set.keys()].sort();

  for (let i = 1; i < row; i++) {
    const subMap = map.get(i - 1);
    res[i] = res[0].map(item => {
      return subMap.has(item) ? subMap.get(item) : '';
    })
  }

  return res;
};