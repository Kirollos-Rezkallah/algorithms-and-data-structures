function same(arr1, arr2) {
  //check if the length is different, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //loop over the first array
  for (let i of arr1) {
    //set variable to false, this variable works as switch or indicator
    let foundSquare = false;
    //loop over the second array
    for (let j = 0; j < arr2.length; j++) {
      // compare if the i squared is equal to j, if true, remove the element, set varibale to true to continue loop and break the current loop
      if (i ** 2 === arr2[j]) {
        arr2.splice(j, 1);
        foundSquare = true;
        break;
      }
    }
    //after finishing the second loop ONLY, if varibale is still equal to false, return false
    if (!foundSquare) {
      return false;
    }
  }
  //after finishing the first loop, return true
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); //true
console.log(same([1, 2, 3], [1, 4, 6])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
