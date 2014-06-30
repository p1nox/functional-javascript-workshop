// get the unique lowest number from the array A
// uniqueNumber([1, 4, 3, 3, 1, 2]) === 4

var solution = (function() {
  'use strict';

  return function(A){
    var uniqueNumbers = [];
    var uniqueFlags   = {};

    A.forEach(function(el, index){
      if ( uniqueFlags[el] ){
        uniqueFlags[el] = false;
      }
      else {
        uniqueFlags[el] = true;
        uniqueNumbers.push(el);
      }
    });

    var uniqueNumber = -1;
    uniqueNumbers.every(function(el, index){
      if ( uniqueFlags[el] ){
        uniqueNumber = el;
        return false;
      }
      return true;
    });

    return uniqueNumber;
  };

}).call(this);

console.log(solution([1, 4, 3, 3, 1, 2]));
