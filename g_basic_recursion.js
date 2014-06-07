// fn( prev, curr, index, arr )
var reduce = function(arr, fn, initValue) {
  return (function reduceIt(index, previousValue){
    if (index >= arr.length) return previousValue;

    var arrValue  = arr[index];
    var nextValue = fn(previousValue, arrValue, index, arr);
    var nextIndex = index + 1;

    return reduceIt(nextIndex, nextValue);
  })(0, initValue);
};

module.exports = reduce;
