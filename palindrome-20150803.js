
/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global String Object
String.split()
Array.reverse()
Array.join()*/


function palindrome(str) {

  var origStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');

 // var reversedStr = str.replace(/\s+/g, '').toLowerCase();
  var reversedStr = origStr.split('').reverse().join('');

  if (reversedStr == origStr){
    return true;
  }
  else {
    return false;
  }

}



palindrome("eye");
