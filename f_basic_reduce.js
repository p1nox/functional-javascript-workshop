var countWords = function(inputWords) {
  return inputWords.reduce(function(result, word) {
    result[word] = result[word]+1 || 1;
    return result;
  }, {});
};

module.exports = countWords;
