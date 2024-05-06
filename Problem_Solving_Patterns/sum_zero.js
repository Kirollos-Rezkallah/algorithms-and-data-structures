//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
function sumZero(arr) {
  //create 2 variables to store in them the index
  let left = 0;
  let right = arr.length - 1;
  //do while loop to make sure that the left side will not be more than right side
  while (left < right) {
    //create a variable sum which is equal to sum of both elements
    let sum = arr[left] + arr[right];
    //check if the sum is equal to zero, return the array of both numbers
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    //if more than zero, means that left more, means decrement right
    else if (sum > 0) {
      right--;
    }
    //if less than zero, means that right is more, means increment left
    else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-3, -2, -1, 0, 1, 5, 6])); // [-1,1]
