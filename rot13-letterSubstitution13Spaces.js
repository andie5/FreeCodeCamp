/**ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is a special case of the Caesar cipher, developed in ancient Rome

https://en.wikipedia.org/wiki/ROT13
*/
function rot13(str) { // LBH QVQ VG!

  var alphabet = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
              "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var uncodedStr = "";
  var len = str.length;

  for(var i = 0; i< len; i++){
    //The index of the character in the rot13 array
    var arrIndex = alphabet.indexOf(str.charAt(i));

    //If the character is not found
    if(arrIndex === -1){
      uncodedStr+= str.charAt(i);
    }
    else if(arrIndex < 13){ //if we are at the upper end of the alphabet - return the character 13 characters before that
      uncodedStr+= alphabet[arrIndex+13];
    }
    else{
      uncodedStr+= alphabet[arrIndex-13];
    }
  }

  return uncodedStr;
}

// Change the inputs below to test
/**
rot13("SERR PBQR PNZC");
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."*/
