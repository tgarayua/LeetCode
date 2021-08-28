/* 
* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 3 2 1) = 24.

// */

let num = 6;

const firstFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log(firstFactorial(num))