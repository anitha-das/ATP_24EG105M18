/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”*/

//program to demonstrate timer function
console.log("Exam Submitted Successfully"); //print first message
//after 2 seconds print evaluating message
setTimeout(() => {
    console.log("Evaluating answers");
}, 2000)
//after 4 seconds print result
setTimeout(() => {
    console.log("Result:Pass");
}, 4000)
