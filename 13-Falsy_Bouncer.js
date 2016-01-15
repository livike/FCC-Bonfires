/*Falsy Bouncer
Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(value){
    var x = Boolean(value);
    return x !== false;
  }); 

}
//TESTS
//bouncer([7, "ate", "", false, 9]);
//bouncer([7, "ate", "", false, 9]) //should return [7, "ate", 9].
//bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]) //should return [].