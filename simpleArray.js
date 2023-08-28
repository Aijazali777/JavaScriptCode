var array = [1,2,3,4];

var i,
    arrayCount = array.length;

forLoopOverArray();
whileLoopOverArray();
doWhileLoopOverArray();

function forLoopOverArray()
{
    console.log("FOR Loop: ");
    for( i = 0; i < arrayCount; i ++)
    {
        console.log(array[i]);
    }
}

function whileLoopOverArray()
{
    console.log("\nWHILE Loop: ");
    i = 0;
    while(i < arrayCount)
    {
        console.log(array[i]);
        i++;
    }
}

function doWhileLoopOverArray()
{
    console.log("\nDO WHILE Loop: ");
    i = 0;
    do{
        console.log(array[i]);
        i++;
    }while(i < arrayCount);
}