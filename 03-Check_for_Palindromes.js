/*Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
 
  var straight = str.replace(/[^A-Za-z0-9]/g, '');
  
  straight = straight.toLowerCase();
  var array = straight.split('');
  reverted = array.reverse().join('');
  
  if (straight === reverted){
    return true;}
  else {
    return false;
  }
}



palindrome("0_0 (: /-\ :) 0-0");

//TEST
//palindrome("eye") should return true.
////palindrome("race car") should return true.
//palindrome("not a palindrome") should return false.
//palindrome("A man, a plan, a canal. Panama") should return true.
////palindrome("never odd or even") should return true.
//palindrome("nope") should return false.
//palindrome("almostomla") should return false.
//palindrome("My age is 0, 0 si ega ym.") should return true.
//palindrome("1 eye for of 1 eye.") should return false.
//palindrome("0_0 (: /-\ :) 0-0") should return true.
