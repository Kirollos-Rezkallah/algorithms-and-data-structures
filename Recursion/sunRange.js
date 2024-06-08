//write a function that do factorial adding instead of multiplying recursively
function sumRange(num) {
  //base case
  if (num === 1) return 1;
  //different input
  return num + sumRange(num - 1);
}

//same idea can be done using this formula
// [n(n+1)]/2 and n is called triangular number
