// Function to search element in array
function searchElement(arr, search) {
    let i;

    // loop through array
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            return i; // return index if found
        }
    }

    // if not found
    if (i == arr.length)
        return "Not found";
}

// calling the function and storing result in res
let res = searchElement([10, 20, 30], 50);

console.log(res); // Output: Not found