var compress = function(chars) {
  let conNum = 1;
  let start = 0;
  let i = 1;
  while(i < chars.length) {
      if (chars[i - 1] === chars[i]) {
          conNum++;
          i++;
          if (i === chars.length) {
            chars.splice(start + 1, conNum - 1, ...conNum.toString().split(''));
          }
      } else {
          chars.splice(start + 1, conNum - 1, ...conNum.toString().split(''));
          const curI = i;
          i = start + conNum + 1;
          start = curI;
          conNum = 1;
      }
  }
  return chars.length;
};

console.log(compress(["a","a","b","b","c","c","c"]))