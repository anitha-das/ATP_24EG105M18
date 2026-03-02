let marks=[90,78,65,98];
let small=marks[0];
for(let i=0;i<marks.length;i++)
{
    if(marks[i]<small)
        small=marks[i];
}
console.log(small);