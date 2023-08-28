var array = [1,2,3,4];

loopOverArray(array);

function loopOverArray(array)
{
    var i,
    arrayCount = array.length;
    for( i = 0; i < arrayCount; i ++)
    {
        console.log(array[i]);
    }
}