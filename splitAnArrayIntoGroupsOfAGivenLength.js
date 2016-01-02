function chunk(arr, size) {
  var newMultiArray = [];
  var index = 0;


  //Solution A - this works but involves more code, solution B is shorter
  //The 1st 2 lines of code I needed in both
  /*var counter = Math.floor(arr.length/size);

  while(index<counter){
    //Start at the index and create a new array with each item up until the 2nd parameter
    // e.g. 0,2 will give you a new array with index 0 and 1
    tempArr = arr.slice(index,index+size);
    newMultiArray.push(tempArr);
    //Move the index along to the next group
    index += size;
  }
  //We have reached the last part of the array where using the size could exceed the length
  // of the array
  tempArr = arr.slice(index,arr.length);
  newMultiArray.push(tempArr);*/
/*
********************************************************************************
*/
  //Solution B - from stack overflow
  while(arr.length){
    //The splice() method adds/removes items to/from an array, and returns the removed item(s).
    tempArr = arr.splice(index,size);
    newMultiArray.push(tempArr);
  }


  return newMultiArray;
}

chunk(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]].
