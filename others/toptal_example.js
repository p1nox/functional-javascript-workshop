// # equilibrium index ---
//
// The equilibrium index of a sequence is an index such that the sum of elements at lower
// indexes is equal to the sum of elements at higher indexes. For example, in a sequence A:
// A[0]=-7 A[1]=1 A[2]=5 A[3]=2 A[4]=-4 A[5]=3 A[6]=0
// 3 is an equilibrium index, because:
// A[0]+A[1]+A[2]=A[4]+A[5]+A[6]
// 6 is also an equilibrium index, because:
// A[0]+A[1]+A[2]+A[3]+A[4]+A[5]=0

// (The sum of zero elements is zero) 7 is not an equilibrium index - because it is not a
// valid index of sequence A. If you still have doubts, here is a precise definition:
// The integer k is an equilibrium index of a sequence
// A[0],A[1]..,A[n-1] if and only if 0<= k and sum(A[0..(k-1)])=sum(A[(k+1)..(n-1)]).

// Assume the sum of zero elements is equal to zero.

// Write a function
// int equi(int A[], int n)
// that, given a sequence, returns its equilibrium index (any) or -1 if no equilibrium index
// exists. Assume that the sequence may be very long.
//
// boilerplate ---
// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');
// function solution(A) {
//   // write your code in JavaScript (ECMA-262, 5th edition)
// }

var sum = function(a, b){
  return a + b;
};

var solution = function(A) {
  var equilibrium = -1;
  var totalSum    = A.reduce(sum, 0);

  var leftSum = 0;

  A.every(function(el, i, a){
    var rightSum = totalSum - leftSum - el;

    if (leftSum === rightSum){
      equilibrium = i;
      return false;
    }
    leftSum += el;
    return true;
  });

  return equilibrium;
};

console.log( solution([-7, 1, 5, 2, -4, 3, 0]) );

// 100% performance in codibility
// https://codility.com/demo/results/demoXYJ9KP-BAX/
