/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  
  var toremove;
  
  function remover(value,index, array){
    return value !== toremove; 
  }
  //for each of two arguments, remove the value from first argument (array) if the same value
  for (i=1;i<arguments.length; i++){
    //store the current argument in the variable to use in filter function
    toremove = arguments[i];
    //filter the array for the current argument
    arr = arr.filter(remover);
  }
  return arr;
}
//TESTS
//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
//destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
//destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
//destroyer([2, 3, 2, 3], 2, 3) //should return [].
//destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].

