// Function to find the biggest of three numbers
function findBig(a, b, c) {
    // First check if a is greater than b
    if (a > b) {
        // if a is greater than b, now compare c with a
        if (c > a)
        return c;   // c is the biggest
        else
        return a;   // a is the biggest
    } else {
        // If 'b' is greater than or equal to 'a', compare 'c' with 'b'
        if (c > b)
        return c;   // c is the biggest
        else
        return b;   // b is the biggest
    }
}
// Call the function with values 10, 20, 30
let res = findBig(10, 20, 30);
// Print the result to the console
console.log(res);  // Output: 30