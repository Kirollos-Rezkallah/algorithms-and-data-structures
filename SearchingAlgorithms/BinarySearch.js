function binarySearch(arr, value) {
  //Create 2 pointers one in the beginning and another in the end
  let left = 0;
  let right = arr.length - 1; //-1 because it is for index and it starts at 0
  let middle = Math.floor((left + right) / 2);
  //Write a loop that make sure we will end this check, if we didn't find the value
  while (left <= right) {
    if (arr[middle] === value) return middle;
    else if (arr[middle] > value) right = middle - 1;
    else if (arr[middle] < value) left = middle + 1;
    middle = Math.floor((left + right) / 2); //reassign the middle on the new values
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); //6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); //7
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 59)); //7
