fun();

function fun()
{
    let array = [2,3,5,9,6,7, 11,21,12,1];
    let i = 0;
        arrayCount = array.length;
        max = array[i];

    findLargestNumberUsingForLoop(array, i, arrayCount, max);
    findLargestNumberUsingWhileLoop(array, i, arrayCount, max);
    findLargestNumberUsingDoWhileLoop(array, i, arrayCount, max);
}

function findLargestNumberUsingForLoop(array, i, arrayCount, max)
{
    for(i = 0; i < arrayCount; i++)
    {
        if(max < array[i])
            max = array[i];
    }

    console.log("It's For Loop:\nLargest Number is "+max);
}

function findLargestNumberUsingWhileLoop(array, i, arrayCount, max)
{
    max = array[0]
    while(i < arrayCount)
    {
        if(max < array[i])
        {
            max = array[i]
        }
        
        i++;
    }

    console.log("It's While Loop:\nLargest Number is "+max);
}

function findLargestNumberUsingDoWhileLoop(array, i, arrayCount, max)
{
    max = array[0];
    do
    {
        if(max < array[i])
            max = array[i];
        i++;
    }while(i < arrayCount)

    console.log("It's Do While Loop:\nLargest Number is "+max);
}