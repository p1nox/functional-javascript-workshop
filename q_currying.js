var curryN = function(fn, n) {
  n = n || fn.length;

  var currying = function(prevArgs){
    return function(arg){
      var args = prevArgs.concat(arg);

      if (args.length >= n) return fn.apply(fn, args);
      return currying(args);
    };
  };

  return currying([]);
};

module.exports = curryN;
