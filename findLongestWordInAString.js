function findLongestWord(str) {
  var words = str.split(" ");
  str = words[0];

  for(var i=0;i< words.length; i++){
    if(words[i].length >= str.length){
      str = words[i];
    }
  }
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
