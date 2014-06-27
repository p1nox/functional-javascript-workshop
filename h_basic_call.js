var duckCount = function() {
  var args = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];

  return args.filter(function(obj){
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
};

module.exports = duckCount;
