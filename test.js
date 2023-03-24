var reverseWords = function(s) {
  const sArr = s.split(' ');
  console.log('**', sArr);
  const formatsArr = sArr.filter(item => item !== '').reverse();
  return formatsArr.join(' ');
};

console.log(reverseWords('a b   c'));