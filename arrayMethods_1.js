// forEach() method calls a function for each element in an array.
// forEach() method is not executed for empty elements.

var myArray = [1, 2, 3, 4];
var sumOfArr = 0;
myArray.forEach(sumOfArray);
console.log("Sum Of Array = "+sumOfArr);

function sumOfArray(item)
{
    sumOfArr = sumOfArr +item;
}

// The at() method returns an indexed element from an array.

const myFruits = ['Apple', 'Banana', 'Orange', 'Grape'];
let index = 2;

let fruit = myFruits.at(index);
console.log("Fruit available at index ("+index+") is "+fruit);

// The default index (0) will return first element of the array
fruit = myFruits.at();
console.log("Fruit available at first index (default)  is "+fruit);

// The index -1 will return last element of the array
fruit = myFruits.at(-1);
console.log("Fruit available at last index (-1) is "+fruit);