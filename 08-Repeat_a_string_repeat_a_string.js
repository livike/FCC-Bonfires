/*Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  // repeat after me
  var final = "";
  if(num>0) {
    for(var i=0; i<num; i++) {
      final += str
    }
  }
  return final;
}

repeat("abc", 3);

//TESTS
//repeat("*", 3) should return "***".
//repeat("abc", 3) should return "abcabcabc".
//repeat("abc", 4) should return "abcabcabcabc".
//repeat("abc", 1) should return "abc".
//repeat("*", 8) should return "********".
//repeat("abc", -2) should return "".