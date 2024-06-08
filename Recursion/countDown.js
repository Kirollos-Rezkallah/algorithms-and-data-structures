//Write a fucntion that prints countdown starting from the input until it reaches zero and prints "All done"! recursively
function countDown(num) {
  //Base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  //printing number
  console.log(num);
  //Different input
  num--;
  countDown(num);
}
