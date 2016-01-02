function slasher(arr, howMany) {
  // it doesn't always pay to be first
  //Start the sub array from the remaining elements number and slice upt to the end of
  //the array
  return arr.splice(howMany,arr.length);
}

slasher([1, 2, 3], 2); //should return [3].
slasher([1, 2, 3], 0); //should return [1, 2, 3].
slasher([1, 2, 3], 9); //should return [].
slasher([1, 2, 3], 4); //should return [].
