/**
 * Problem
 * - Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * 
 * Examples
 * - maxSubarraySum([100, 200, 300, 400], 2) // 700
 * - maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
 * 
 * Understand the Problem
 * - We want to find the maxSum within the numsArr. Sum of the arr can only be as long as the num input. In example 1 the sum is can be only the sume of the two elelments in the array 300 + 400 = 700. 700 will be the maxSum
 * the inputs in example 1 are an numsArr = [100, 200, 300, 400] and the subarrayLength = 2
 * the ouput should be maxSum of the numsArr
 * 
 * Pseudo Code
 * - we want to find the sum of the first 3 integers in numsArr
 * - we want to set tempSum = maxSum
 * - loop over at the index of subarrayLength (3)
 * - tempSum = tempSum + nextNum - firstNum
 * - maxSum = Math.max(maxSum, tempSum), this sets maxSum to the larger value (itself or the new tempSum)
 * - return the maxSum
 */

console.time(`time`);
const maxSubarraySum = (numsArr, subarrayLength) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let index = 0; index < subarrayLength; index++) {
        let currentNum = numsArr[index];
        maxSum += currentNum;
    }
    tempSum = maxSum;
    for (let index = subarrayLength; index < numsArr.length; index++) {
        let nextNum = numsArr[index];
        let firstNum = numsArr[index - subarrayLength];
        tempSum = tempSum + nextNum - firstNum;
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.timeEnd(`time`)