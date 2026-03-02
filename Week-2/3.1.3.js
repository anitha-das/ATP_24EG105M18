/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
    let marks = [78, 92, 35, 88, 40, 67];
    let r1=marks.filter(mark=>mark>=40)
    console.log(" marks>=40:",r1);
    let r2=marks.map(mark=>mark+5);
    console.log("marks with extra grace :",r2);
    let r3=marks.reduce((acc,mark)=> (mark>acc)?mark:acc);
    console.log("Highest marks is :",r3);
    let r4=marks.find((mark)=>mark<40)
    console.log("First mark  below 40 is:}",r4);
    let r5=marks.findIndex(mark=>mark==92);
    console.log("Index with marks 92 is :",r5);