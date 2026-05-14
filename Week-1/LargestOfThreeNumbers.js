//program to find largest of three numbers
//declare variables and assign values
let a = 65;
let b = 98;
let c = 78;
//check 1st condition if a is greater than b 
if (a > b) {
    //if true then check for 2nd condition
    if (c > a) //if c is greater than prints c 
        console.log(c);
    else //if 2nd condition failed then prints a
        console.log(a)
}
//if 1st cobdition false then else blocks executes
else {
    if (c > b)//check for 3rd contion 
        console.log(c); //if true prints c
    else //if 3rd condition failed then prints b
        console.log(b);

}