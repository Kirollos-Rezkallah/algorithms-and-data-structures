function countUniqueValues(arr) {
  //assign 2 varibles left and right
  let left = 0;
  let right = left + 1;
  //loop over the array
  for (let i = 0; i < arr.length; i++) {
    //compare the left and right = if they are equal, shift right
    if (arr[left] === arr[right]) {
      right++;
    }
    //if they are different, shift left and set it equal to left, then continue
    else if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  //after finishing the loop, return left + 1
  return left;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
