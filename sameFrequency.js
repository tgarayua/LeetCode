/**
 * write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of diggets.

your solution MUST have the following complexities:

Time O(N)

Sample Input:
1 - sameFrequency(182,281) // true
2 - sameFrequency(34,14) // false
1 - sameFrequency(3589578,5879385) // true
1 - sameFrequency(22,222) // false

Break It Down:
- turn integers into strings
- check and see if num1.length === num2.length, if not retrun false
- create num1Obj and num2Obj to store the currenNum as the key and its frequency as the value
- loop for num1
    - if num1Obj[currentNum] present, increment, otherwise set num1Obj[currentNum] = 1
- loop for num2
    - if num2Obj[currentNum] present, increment, otherwise set num2Obj[currentNum] = 1
 */

let num1 = 22
let num2 = 222

const sameFrequency = (input1, input2) => {
    let str1 = input1.toString();
    let str2 = input2.toString();
    if (str1.length !== str2.length) return false
    let countObj = {};

    for (let i = 0; i < str1.length; i++) {
        let currentNum = str1[i];
        countObj[currentNum] ? countObj[currentNum] += 1 : countObj[currentNum] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let currentNum = str2[i]
        if (countObj[currentNum]) {
            countObj[currentNum] -= 1;
        }
    }

    for (number in countObj) {
        if (countObj[number] !== 0) {
            return false;
        } else {
            return true;
        }
    }
    
    return null;
};
console.log(sameFrequency(3589578,5849385))