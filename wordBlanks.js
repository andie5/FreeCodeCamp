
/**We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks".
You will create an (optionally humorous) "Fill in the Blanks" style sentence.*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result = "The "+ myNoun + " is "+ myVerb + " very " + myAdjective + " but " +myAdverb+ ". ";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

/**wordBlanks("","","","") should return a string.
wordBlanks("dog", "big", "ran", "quickly") should contain all of the passed words separated by non-word characters (and any additional words in your madlib).
wordBlanks("cat", "little", "hit", "slowly") should contain all of the passed words separated by non-word characters (and any additional words in your madlib).*/
