var valueOne = 1;
var valueTwo = 2;
var tempValue;

//swapByUsingTempVariable();
swapWithoutUsingTempVariable()

function swapByUsingTempVariable()
{
    tempValue = valueOne;
    valueOne = valueTwo;
    valueTwo = tempValue;

    console.log("valueOne = "+valueOne+"\nvalueTwo = "+valueTwo);
}

function swapWithoutUsingTempVariable()
{
    valueOne = valueOne + valueTwo;
    valueTwo = valueOne - valueTwo;
    valueOne = valueOne - valueTwo;

    console.log("valueOne = "+valueOne+"\nvalueTwo = "+valueTwo);
}