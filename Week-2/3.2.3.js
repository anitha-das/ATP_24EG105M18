/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/
    const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//Filtering the employee of department IT
let r1=employees.filter((emp)=>emp.department=="IT");
console.log(r1);
//Adding net salary to each employee
let r2=employees.map((emp)=>
  {
    emp.netSalary=emp.salary+(10*emp.salary)/100;
    return emp;
  })
  console.log(r2);
  //total salary
  let r3=employees.reduce((acc,emp)=>acc+emp.salary,0);
  console.log(r3);
  //find employee with 30000
  let r4=employees.find((emp)=>emp.salary=30000)
  console.log(r4);
  //find index of employee "Neha"
  let r5=employees.findIndex((emp)=>emp.name=="Neha");
  console.log(r5);
    