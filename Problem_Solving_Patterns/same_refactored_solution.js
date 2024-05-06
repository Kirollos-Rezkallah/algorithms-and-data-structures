function same(arr1, arr2) {
  //check if the length of the arrays are not equal, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //create 2 objects to store elements of the arrays with the frequency
  const obj1 = {};
  const obj2 = {};
  //loop over the first array
  for (let x of arr1) {
    //add the value as key to the object and if it is there increment one to the value
    if (obj1[x] !== null && obj1[x] !== undefined) {
      obj1[x] += 1;
    } else {
      obj1[x] = 1;
    }
  }
  //loop over the second array
  for (let y of arr2) {
    //add the value as key to the object and if it is there increment one to the value
    if (obj2[y] !== null && obj2[y] !== undefined) {
      obj2[y] += 1;
    } else {
      obj2[y] = 1;
    }
  }
  //loop over the first object using 'for in'
  for (let key in obj1) {
    //check if the key squared is not in the second object, return false
    if (!(key ** 2 in obj2)) {
      return false;
    }
    //check the frequency by comparing the values of the keys in the objects
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }
  //return true after looping
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); //true
console.log(same([1, 2, 3], [1, 4, 6])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
