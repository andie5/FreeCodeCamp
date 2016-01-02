function largestOfFour(arr) {
  var highestNumsArr = []; // New array with the highest numbers from each sub array
  for(var i = 0; i< arr.length; i++){
    var currentHighest = 0; //Store the current highest in each sub array
     for(var j = 0; j< arr[i].length; j++){
       if(arr[i][j] >= currentHighest){
         currentHighest = arr[i][j];
         console.log(currentHighest);
       }
     }
    highestNumsArr[i] = currentHighest;
  }
  arr = highestNumsArr;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
