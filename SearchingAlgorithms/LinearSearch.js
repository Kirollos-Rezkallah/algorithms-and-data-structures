function linearSearch(arr, value) {
  //Looping over the array
  for (let i = 0; i < arr.length; i++) {
    //Seaching for the element in the array, return index if found
    if (arr[i] === value) return i;
  }
  //Return -1 found if not found
  return -1;
}

linearSearch([11, 53, 29, 9, 5, 132, 42, 812, 32], 9); //3
linearSearch([11, 53, 29, 9, 5, 132, 42, 812, 32], 100); //-1
