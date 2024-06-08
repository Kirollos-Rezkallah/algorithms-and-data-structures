//write a function that do factorial to the input recursively
function factorialR(num) {
  //base case
  if (num === 1) return 1;
  //different input
  return num * sumRange(num - 1);
}

factorialR(4);

//write a function that do factorial to the input iteratively
function factorialI(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

factorialI(4);
