/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var array = str.split(" ");
  var arrtmp = Array();
  
  for (i = 0; i < array.length; i++){
    capWord = array[i].toLowerCase();
    capWord = capWord[0].toUpperCase() + capWord.substring(1);
    arrtmp.push(capWord);
  }
  
  return arrtmp.join(" ");
}

titleCase("I'm a little tea pot");

//TESTS
//titleCase("I'm a little tea pot") should return a string.
//titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
//titleCase("sHoRt AnD sToUt") should return "Short And Stout".
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".