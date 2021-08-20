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

const sameFrequency = (nums1, nums2) => {
    let num1ToStr = nums1.toString()
    let num2ToStr = nums2.toString()
    if (num1ToStr.length !== num2ToStr.length) return false;

    let numsObj = {};
    
    for (let i = 0; i < num1ToStr.length; i++) {
        let currentNum = num1ToStr[i]
        numsObj[currentNum] ? numsObj[currentNum] += 1 : numsObj[currentNum] = 1;
        console.log(numsObj)
    }
    for (let i = 0; i < num2ToStr.length; i++) {
        let currentNum = num2ToStr[i]
        // if the current number is not in the object then return false, otherwise decriment the current number's frequency
        if(!numsObj[currentNum]) {
            console.log(numsObj)
            return false
        } else {
            numsObj[currentNum] -= 1;
        }
    }
    return true
};
console.log(sameFrequency(3589578,5879385))