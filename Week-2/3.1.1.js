/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    */
   const temperature=[32,35,28,40,38,30,42];
// 1. filter the elements above 35
let r1=temperature.filter((element)=> element>35)
console.log(r1);
//celsius to farhrenheit
let r2= temperature.map((element)=>((9*element)/5)+32)
console.log(r2)
//average of temperatures
let sum=temperature.reduce((acc,element)=>acc+element)
let avg=sum/temperature.length;
console.log(avg);
// Find the first eelement graeter than 40
let r3=temperature.find(element=> element>40)
console.log(r3);
// finding the index of 28
let r4=temperature.findIndex(element=>element==28)
console.log(r4);

