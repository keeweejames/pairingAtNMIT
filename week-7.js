/* Create a function that takes two strings and retern either true or false depending on whether the total
 number of characters in the first string is equal to the total number of characters in the second string */

 // Example: compare("AB", "CD") -> true

function compare(name1, name2,) {
    return name1.length === name2.length 
}

console.log(compare("AB","CD")) 

/* Write a function that takes an array of elements and returns only the numbers in the array
and console log the result in an array */

// Example: onlyNumbers([1,2,3,"Az",[],"Cayatoc"]) -> [1,2,3] 

const onlyNumbers = arr => arr.filter(Number.isInteger) // ES6 (updated version of JavaScript)
console.log(onlyNumbers([1,2,3,"Az",[],"Cayatoc"])) 

/* Write a function that converts an object to an array.
Example: objectToArray({a: "Az", b:12}) -> [["a", "Az"],["b", 12]]
*/

function objectToArray(obj) {
    var arr = []
    for (var i in obj) {
        arr.push([i,obj[i]])
    }
    return arr
}

console.log(objectToArray({a: "Az", b:12, c: true }))

// Create a function that takes an array of arrays and returns a single new array with largest numbers of each.
// Example: findMaxNumbers([1,2,3],[4,5,6],[7,8,9]]) -> [3,6,9]

function largest(arr){

    var newLargest = [];

    for (let index = 0; index < arr.length; index++) {
        var largestNumber = 0;
       for (let index2 = 0; index2 < arr[index].length; index2++) {
           if (arr[index][index2] > largestNumber) {
               largestNumber = arr[index][index2]
           }
       }
        newLargest.push(largestNumber);
    }
   return newLargest
}

console.log(largest([[1, 99, 5],[5, 100, 7],[12, 3, 24]]));
