var getShortMessages = function(messages) {
  return messages.filter(function(value){
    return value.message.length < 50;
  }).map(function(value){
    return value.message;
  });
};

module.exports = getShortMessages;
