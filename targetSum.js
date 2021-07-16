// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// You can return the answer in any order.

let numbers = [2,11,15,7]; 
let target = 9;

const twoNumsSumTarget = () => {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                result = [i, j]
            }
        }
    };
    return result;
};

let numbers = [2,11,7,15,];
let target = 9;
console.log(twoNumsSumTarget(numbers, target));
