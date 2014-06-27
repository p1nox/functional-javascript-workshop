var Spy = function(target, method) {
  var spy = { count: 0 };
  var originalTarget = target[method];

  target[method] = function(){
    spy.count++;
    return originalTarget.apply(this, arguments);
  };

  return spy;
};

module.exports = Spy;
