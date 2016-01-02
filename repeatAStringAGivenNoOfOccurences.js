function repeat(str, num) {
  if (num <= 0){
    str = "";
  }
  else{
    var repeatingStr = str;
    //Repeat 1 less than the number provided because you already have the string once
    for(var i=0; i<num-1; i++){
      str += repeatingStr;
    }
  }
  return str;
}

repeat("abc", 3);
repeat("abc", 3); //should return "abcabcabc".
repeat("abc", 4); //should return "abcabcabcabc".
repeat("abc", 1); //should return "abc".
repeat("*", 8); //should return "********".
repeat("abc", -2); //should return "".
