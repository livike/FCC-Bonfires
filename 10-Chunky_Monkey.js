/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  // Break it up.
  new_arr = [];
  for (i=0; i<arr.length; i+= size){
    
    new_arr.push(arr.slice(i,i+size));
  }
  return new_arr;
}

chunk(["a", "b", "c", "d"], 2);

//TESTS
//chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunk([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
