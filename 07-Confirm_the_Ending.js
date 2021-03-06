/*Confirm the Ending
Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 var ending = str.slice(str.length-target.length)
  if(ending === target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n");

//TESTS
//end("Bastian", "n") should return true.
//end("Connor", "n") should return false.
//end("Walking on water and developing software from a specification //are easy if both are frozen", "specification") should return false.
//end("He has to give me a new name", "name") should return true.
//end("He has to give me a new name", "me") should return true.
//end("He has to give me a new name", "na") should return false.
//end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.