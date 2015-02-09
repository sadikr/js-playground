/**
 * Created by sadikr on 1/26/2015.
 */
/**
* Most languages have a built in sort method that will sort an array of strings alphabetically.
* Demonstrate how to sort an array of strings by the length of each string, shortest strings
* first.
**/
var arrStr = ['ab', 'abcdefgh', '1 abcd', '2 abcdefgh 1 abcd'];
arrStr.sort(function(a,b){
    return b.length - a.length;
});
console.log(arrStr);