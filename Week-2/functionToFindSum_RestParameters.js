//function to find sum using rest parameters
function findSum(...a)
{
    //add all values using reduce
    return a.reduce((acc,a)=>acc+a)
}
//calling function and storing result
let res=findSum(10,20,30);
console.log(res); //print sum