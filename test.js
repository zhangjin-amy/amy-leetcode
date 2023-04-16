var mergeAlternately = function(word1, word2) {
  let result = '';
  const word1Arr = word1.split('');
  const word2Arr = word2.split('');
  while(word1Arr.length || word2Arr.length) {
      if (word1Arr.length && word2Arr.length) {
          result += word1Arr.shift();
          result += word2Arr.shift();
      } else if (word1Arr.length) {
          result += word1Arr.join('');
          return result;
      } else if (word2Arr.length) {
          result += word2Arr.join('');
          return result;
      }
  }
  return result;

};

console.log(mergeAlternately('ab', 'defyy'));