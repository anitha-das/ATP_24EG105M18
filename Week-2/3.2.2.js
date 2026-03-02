/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran" */
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let r1=students.filter((stdnt)=>stdnt.marks>=40);
console.log(r1);
// adding a grade fiels according to the marks
let r2=students.map((stdnt)=>{
   if(stdnt.marks>=90)
    stdnt.grade='A';
  else if(stdnt.marks>=75)
    stdnt.grade='B';
  else if(stdnt.marks>=60)
    stdnt.grade='C';
  else
    stdnt.grade='D'
  return stdnt;
})
console.log(r2);
//to calculate avg
let sum= students.reduce((acc,stdnt)=>acc+stdnt.marks,0);
let avg=sum/students.length;
console.log("Average:",avg);
//to find the student who scored 92
let r4=students.find((stdnt)=>stdnt.marks=92);
console.log(r4);
//to find index of Kiran
let r5=students.findIndex((stdnt)=>stdnt.name=="Kiran");
console.log(r5)

