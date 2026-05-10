//program to update the marks of employee named sneha
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//change marks of sneha from  95 to 75
//employees[2].marks[2]=75;
//using splice method to delete one mark and add the the marks 75 at 2nd index
employees[2].marks.splice(2,1,75);
//print the employees
console.log(employees);