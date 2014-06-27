var arrayMap = function(arr, fn) {
  return arr.reduce(function(result, item, index, array){
    return result.concat(fn(item, index, array));
  }, []);
};

module.exports = arrayMap;
