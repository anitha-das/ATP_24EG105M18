//program to find smallest 
//declare array with marks
let marks = [90, 78, 65, 98];
//declare small and set to 1st value of array
let small = marks[0];
//loop to find smallest
for (let i = 1; i < marks.length; i++) {
    //check for the smaller value and modify the small
    if (marks[i] < small)
        small = marks[i];
}
//print small
console.log(small);