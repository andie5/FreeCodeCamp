function truncate(str, num) {

  var suffix = "...";
  var lenStr = str.length;

  var truncatedStr = str.substr(0, num);
//If the truncating number is 3
  if(num<=3){
    return truncatedStr + suffix;
  }
  //If the truncating number is equal to the length of the string
  else if(num === lenStr){
    return truncatedStr;
  }
  //If the truncating number is more than the length of the string
  else if(num > lenStr){
    return str.substr(0, lenStr);
  }
  else{
    str = str.substr(0, num-3) + suffix;
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("A-tisket a-tasket A green and yellow basket", 11); //should return "A-tisket...".
truncate("Peter Piper picked a peck of pickled peppers", 14); //should return "Peter Piper...".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //should return "A-tisket a-tasket A green and yellow basket".
truncate("A-", 1); //should return "A...".
truncate("Absolutely Longer", 2);// should return "Ab...".
