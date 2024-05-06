function charCount(str) {
  //Create an object
  let result = {};
  //Loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if char is a number/letter and is key in object, add one on count
    if (result[char] > 0) {
      result[char]++;
    }
    //if char is a number/letter and is not key in onject, add it and set value to 1
    else {
      result[char] = 1;
    }
    //else, don't do anything
  }

  //Return object
  return result;
}
