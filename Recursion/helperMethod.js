//write a function that collects all odd numbers in an array recursively using helper method
function collectOddValues(arr) {
  //creating array to store odds number in, outside of the recursive function
  let result = [];

  //create the recursive function
  function helper(helperInput) {
    //base case
    if (helperInput.length === 0) {
      return;
    }

    //check if the number is odd, push it to the array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    //different input
    helper(helperInput.slice(1)); //applying helper on all the array except the first item which is already done
  }

  //call the helper function
  helper(arr);

  //returning the stores collection of odd numbers
  return result;
}
