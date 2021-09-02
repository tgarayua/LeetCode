/**
 * 
 * Break it down:
 * - set a var for the maxSum and for the tempSum
 * - if the array's length is smaller than the number return null
 * - create a for loop the requested amount of n times to create a subarray
 *      - the currentNumInSubarr is added to the maxSum var
 * - we set the tempSum to maxSum
 * - create a for loop that iterates over the arrays length
 *      - tempSum is set to tempSum subtracted by the first number in the subarray, plus the next number that is being added into the subarray
 *      - maxSum is set to the larger of the two var. Use Math.max(maxSum, tempSum)
 * - return maxSum
 */

const maxSubarraySum = (arr, num) => {
    
};
//                 index = [0,1,2,3,4,5,6,7,8]
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))