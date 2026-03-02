/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//filtering the transactions with type credit
let r1=transactions.filter((trans)=> trans.type=="credit");
console.log(r1);
//only extract transaction amounts
let r2=transactions.map((trans)=>trans.amount);
console.log(r2);
// to calculate total since transactions has object so default should be 0
let r3=transactions.reduce((acc,trans)=>acc+trans.amount,0);
console.log("Total account balance:",r3);
//
let r4=transactions.find((trans)=>trans.type="debit");
console.log(r4);
//find index of transaction with amount 10000
let r5=transactions.findIndex((trans)=> trans.amount==10000);
console.log("Index:",r5);


