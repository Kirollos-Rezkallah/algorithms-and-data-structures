function charCount(str) {
  //Create an object
  let result = {};
  //Loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    //if char is a number/letter and
    if (/[a-z0-9]/.test(char)) {
      // check is key in object, add one on count
      if (result[char] > 0) {
        result[char]++;
        // if not add it to the object
      } else {
        result[char] = 1;
      }
    }
  }
  //Return object
  return result;
}

function charCount2(str) {
  //Create an object
  let result = {};
  //Loop over string for each character
  for (let char of str) {
    char = char.toLowerCase();
    //if char is a number/letter and
    if (/[a-z0-9]/.test(char)) {
      // check is key in object, add one on the count, if not, add it to the object
      result[char] = result[char] ? ++result[char] : 1;
    }
  }
  //Return object
  return result;
}

function charCount3(str) {
  //Create an object
  let result = {};
  //Loop over string for each character
  for (let char of str) {
    // check if char is a number/letter
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // check is key in object, add one on the count, if not, add it to the object
      result[char] = result[char] ? ++result[char] : 1;
    }
  }
  //Return object
  return result;
}

// function which checks if the character is alpha-numeric
function isAlphaNumeric(char) {
  let code = charCodeAt(0);
  if (
    !(code > 47 && code < 59) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  } else {
    return true;
  }
}
