

/*
Seek and destroy
Provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/

var numsToFilter;

function destroyer(arr) {
   
  var args = Array.from(arguments);
  var howManyNums = args.length - 1;
  numsToFilter = args.slice(1);
  
  return (arr.filter(removeNums));
}

function removeNums(n){
   return (numsToFilter.indexOf(n) === -1);   
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);