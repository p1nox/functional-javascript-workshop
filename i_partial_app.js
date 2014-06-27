var logger = function(namespace) {
  return function(){
    var messages = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];

    console.log.apply(console, [namespace].concat(messages));
  };
};

module.exports = logger;
