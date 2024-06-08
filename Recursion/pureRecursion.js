//write a function that collects all odd numbers in an array recursively using pure recursion
function collectOddValues(arr) {
  //create an array to store odd numbers in
  let newArr = [];

  //base case
  if (arr.length === 0) {
    return newArr;
  }

  //check if the number is odd, push it to the array
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //different input using .concat() to keep the previews values
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
