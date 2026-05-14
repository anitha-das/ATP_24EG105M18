//program to find the sum of marks
//declare array with marks
let marks=[90,78,65,98]; 
//declare sum and set to 0
let sum=0;
//loop to add all marks
for(let i=0;i<marks.length;i++)
{
    //add each mark to sum
    sum+=marks[i];
}
//print the total sum
console.log(sum);