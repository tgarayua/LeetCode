/*
Write a function to represent Floyed Triangle, given input is the number of rows of the Floyd triangle
Example if the number of rows is 3
Result:
1
2 3
4 5 6 *write a function that checks if two provided strings are ana*

:: create an empty string to store our numbers to create the triangle
:: create a var that is equal to 0 (we need to increment the number by 1 
    for as many times as it takes to meet the rows conditions)
::conditions = the row incriments by one diget
:: create a for loop that counts up to input
:: inside that loop create another counter loop that

break it down
- print out  a triangle with 
*/

let input = 3;

const floyedTriangle = (input) => {
    console.log(`-> input:`);
    console.log(`input:`, input);

    let row = [];
    let counter = 0;

    for (let i = 0; i < input; i++) {
        counter += 1;
    }
    console.log(``)

    return "end!"
};

console.log(floyedTriangle(input));