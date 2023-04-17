function myFlat(arr, deepth = 1) {
  if (deepth > 0) {
    return arr.reduce(function(pre, cur){
      return pre.concat(Array.isArray(cur) ? myFlat(cur, deepth - 1) : cur);
    }, [])
  }
  return arr;
}

console.log(myFlat([4, [1, 2], [3, 4, [5, 6, 7]]]))