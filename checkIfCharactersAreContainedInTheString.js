function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  var searchStr = arr[0];
  var matchingStr = arr[1];
  var charsFound = 0;


  for(var i=0; i< matchingStr.length; i++){
    for(var j=0; j< searchStr.length; j++){
      //Use a regular expr here
      if(matchingStr.charAt(i) === searchStr.charAt(j)){
        charsFound += 1;
      }
    }
  }

  if(charsFound === matchingStr.length){
      return true;
  }
  else{
    return false;
  }
}

//mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
