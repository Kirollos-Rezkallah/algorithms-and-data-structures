function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // indexOf returns -1 if the element is not found in the array
    if (correctIndex === -1) {
      return false;
    }
    // removes the element from the array if found
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); //true
console.log(same([1, 2, 3], [1, 4, 6])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
