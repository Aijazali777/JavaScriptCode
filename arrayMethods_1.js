// ###### 1) forEach() Method #########

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

// ###### 2) at() Method #########

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


// ###### 3) concat() Method #########

// The concat() method will concatenates (joins) two or more arrays
// The concat() method will return a new array, containing the joined arrays
// The concat() method does not change the existing arrays.

const fruits = ['Apple', 'Banana', 'Orange'];
const vegetables = ['Potato', 'Tomato'];
const items = fruits.concat(vegetables);
console.log("Concatination of two arrays = "+items);


// ###### 4) constructor Property #########

// The constructor property returns the function that created the Array prototype.
// For JavaScript Array the constructor property returns:
// function Array() { [native code] }

let text = fruits.constructor;
console.log("Constructor of the array "+text);
