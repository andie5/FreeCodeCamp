function palindrome(str) {

   str = str.toLowerCase().replace(/[^a-z0-9]+/g,"");

   // This code also works
   /**var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;*/

   var reversedStr = str.split("").reverse().join("");

  if (str === reversedStr){
    return true;
  }
  else{
    return false;
  }
}



palindrome("eye");
