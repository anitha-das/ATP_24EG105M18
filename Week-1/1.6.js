// Function to find sum of array elements
function findSum(arr) {
    let sum = 0; // start with 0

    // loop  thriugh each elemnt of array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add each value to sum
    }

    return sum; // return total sum
}
//calling the function and storing result in the res variable
let res = findSum([10, 20, 30, 40, 50]);
console.log(res); // Output: 150