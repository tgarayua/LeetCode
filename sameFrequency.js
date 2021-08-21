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

const sameFrequency = (num1, num2) => {
    let num1ToStr = num1.toString()
    let num2ToStr = num2.toString()
    let diggetObj1 = {};
    let diggetObj2 = {};
    

    
    for (let i = 0; i < num1ToStr.length; i++) {
        let currentDigget = num1ToStr[i]

        diggetObj1[currentDigget] ? diggetObj1[currentDigget] += 1 : diggetObj1[currentDigget] = 1;
    }
    for (let i = 0; i < num2ToStr.length; i++) {
        let currentDigget = num2ToStr[i]

        !diggetObj1[currentDigget] ? false : diggetObj2[currentDigget] = 1;
    }
    console.log(diggetObj1 == diggetObj2)
    // return true;
};
let num1 = 34
let num2 = 34
console.log(sameFrequency(num1, num2))