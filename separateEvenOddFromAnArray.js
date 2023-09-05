let myOddArray = [];
let myEvenArray = [];
let myArray = [1,3,4,5,2,7,8];
let j = 0, k=0;

for(let i = 0; i < myArray.length; i++)
{
    if(myArray[i]%2 == 0)
    {
        myEvenArray[j] = myArray[i];
        j++
    }
    else
    {
        myOddArray[k] = myArray[i];
        k++;
    }
}

myOddArray.sort();
for(let i = 0; i < myOddArray.length; i++)
    console.log("myOddArray: "+myOddArray[i]);

console.log("\n*********************************************************\n")

myEvenArray.sort();
for(let i = 0; i < myEvenArray.length; i++)
    console.log("myEvenArray: "+myEvenArray[i]);