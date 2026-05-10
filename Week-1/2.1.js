//program to add the new employee object to the array
//employee variable is array of objects
const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];
//adding  an  emloyee to the array  using splice 
employees.splice(1,0,{eno:105,name:"Akshaya",marks:[100,99,98]});
//print the employees
console.log(employees);