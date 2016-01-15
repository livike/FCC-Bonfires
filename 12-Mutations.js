/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


function mutation(arr) {
  var string1 = arr[0].toUpperCase();
  var string2 = arr[1].toUpperCase();
  var contains;
  
  for (i=0;i<string2.length; i++){
    if (string1.indexOf(string2[i]) === -1){
      return false;
    }
    
  }
    return true;
   
}

mutation(["hello", "hey"]);
//mutation(["hello", "hey"]) should return false.
//mutation(["hello", "Hello"]) should return true.
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
//mutation(["Mary", "Army"]) should return true.
//mutation(["Mary", "Aarmy"]) should return true.
//mutation(["Alien", "line"]) should return true.
//mutation(["floor", "for"]) should return true.
//mutation(["hello", "neo"]) should return false.
