// forEach() method calls a function for each element in an array.
// forEach() method is not executed for empty elements.

var myArray = [1, 2, 3, 4];
var sumOfArr = 0;
myArray.forEach(sumOfArray);
console.log("Sum: "+sumOfArr);

function sumOfArray(item)
{
    sumOfArr = sumOfArr +item;
}
