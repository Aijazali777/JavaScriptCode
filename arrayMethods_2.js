let myArray = ["Apple", "Mango", "Orange"];

console.log("Shift method: removes first element from array!");
myArray.shift();
for(let i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

console.log("\n**********************************************\n");

console.log("Unshift method: adds an element to the first index in array!");
myArray.unshift("Banana");
for(let i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

console.log("\n**********************************************\n");

console.log("Push method: adds an element to the last index in array!");
myArray.push("Grapes");
for(let i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

console.log("\n**********************************************\n");

console.log("Pop method: removes last element from array!");
myArray.pop();
for(let i = 0; i < myArray.length; i++)
    console.log(myArray[i]);


// The slice() method returns selected elements from an array, as a new array.
// The slice() method does not change original array
console.log("\n**********************************************\n");

console.log("Slice method: returns selected elements from array!");
let slicedMyArray = myArray.slice();
for(let i = 0; i < slicedMyArray.length; i++)
    console.log(slicedMyArray[i]);

console.log("Slice method: returns selected elements from '1' index to '2' index array!");
slicedMyArray = myArray.slice(1,2);
for(let i = 0; i < slicedMyArray.length; i++)
    console.log(slicedMyArray[i]);   
