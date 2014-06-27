var repeat = function(operation, num) {
  if (num <= 0) return true;
  operation();
  repeat(operation, num-1);
};

module.exports = repeat;
