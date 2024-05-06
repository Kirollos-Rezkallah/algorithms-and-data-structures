//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//==============================================================================================

function validAnagram(str1, str2) {
  //check if the length of the 2 strings are equal, if not return false
  if (str1.length !== str2.length) {
    return false;
  }
  //create 2 objects to store the values
  const first = {};
  const second = {};
  //loop over the first string and store the letters, and add one if it is found
  for (let x of str1) {
    if (x in first) {
      first[x] += 1;
    } else {
      first[x] = 1;
    }
  }
  //loop over the second string and store the letters
  for (let y of str2) {
    if (y in second) {
      second[y] += 1;
    } else {
      second[y] = 1;
    }
  }
  //loop over the first object using for in
  for (let letter in first) {
    //check if the letter is not in the second object, return false
    if (!(letter in second)) {
      return false;
    }
    //check if the frequency of the letter is not equal to the frequency in the second object, return false
    if (first[letter] !== second[letter]) {
      return false;
    }
  }
  //return true after looping
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
