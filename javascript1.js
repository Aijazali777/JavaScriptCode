var valueOne = 1;
var valueTwo = 2;
var tempValue;

swapByUsingTempVariable();

function swapByUsingTempVariable()
{
    tempValue = valueOne;
    valueOne = valueTwo;
    valueTwo = tempValue;

    console.log("valueOne = "+valueOne+"\nvalueTwo = "+valueTwo);
}