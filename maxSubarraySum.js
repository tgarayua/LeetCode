/**
 * 
 * Break it down:
 * - set a var for the maxSum and for the tempSum
 * - if the array's length is smaller than the number return null
 * - create a for loop the requested amount of n times to create a subarray
 *      - the currentNumInSubarr is added to the maxSum var
 * - we set the tempSum to maxSum
 * - create a for loop that iterates over the arrays length
 *      - tempSum is set to the tempSum, subtracted by the first number in the subarray, plus the next number that is being added into the subarray
 *      - maxSum is set to the larger of the two var. Use Math.max(maxSum, tempSum)
 * - return maxSum
 */

const maxSubarraySum = (arr, num) => {
    // set a var for the maxSum and for the temp max sum
    let maxSum = 0;
    let tempSum = 0;

    // if the array's length is smaller than the number return null
    if (arr.length < num) return null;

    // create a for loop to create the subarray 
        // the currentNumInSubarr is added to the maxSum var
    for(let i = 0; i < num; i++) {
        let currentNumInSubarr = arr[i]
        maxSum += currentNumInSubarr;
    }

    // set tempSum = maxSum
    tempSum = maxSum;

    // for loop over the arrays length
        // tempSum is set to the tempSum subtracted by the first number in the subarray, plus the next number that is being added into the subarray
    for (let i = num; i < arr.length; i++) {

        // i = 3
        // tempSum = 17 - (5 - 3) + 5
        // tempSum = 17 - 2 + 5
        // tempSum = 20
        tempSum = tempSum - arr[i - num] + arr[i];

        // maxSum is set to the larger of the two var. Use Math.max(maxSum, tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    // return maxSum
    return maxSum;
};
//                 index = [0,1,2,3,4,5,6,7,8]
console.log(maxSubarraySum([2,6,9,5,1,8,5,6,3],3))