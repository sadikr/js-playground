/**
 * Created by sadikr on 1/26/2015.
 */
/*
*
* Write a function that takes an array of integers and returns that array rotated by N positions
*
* For example, if N=2, given the input array [1, 2, 3, 4, 5, 6]
* the function should return [5, 6, 1, 2, 3, 4]
* */


var arr =[1, 2, 3, 4, 5, 6],
    n=2;

/*
* method : rotateArray
* @param : arr {array}
* @param : n {number}
*
* @returns : arr {array}
* */
function rotateArray(arr, n){
    for( var i=n; i > 0; i--){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArray(arr,n));