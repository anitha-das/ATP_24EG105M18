//Write a function that receives any no of args and return their sum

function findSum(...a)
{
    return a.reduce((acc,a)=>acc+a)
}
let res=findSum(10,20,30);
console.log(res);