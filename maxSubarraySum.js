/**
 * 
 * Break it down:
 * - set a var for the maxSum and for the tempSum
 * - if the array's length is smaller than the number return null
 * - create a for loop the requested amount of n times to create a subarray
 *      - the firstEleOfSubarrInSubarr is added to the maxSum var
 * - we set the tempSum to maxSum
 * - create a for loop that iterates over the arrays length
 *      - tempSum is set to tempSum subtracted by the first number in the subarray, plus the next number that is being added into the subarray
 *      - maxSum is set to the larger of the two var. Use Math.max(maxSum, tempSum)
 * - return maxSum
 */

const maxSubarraySum = (arr, num) => {
    console.log(`-> Inputs <-`);
    console.log(`arr:`, arr, `num:`, num);
    
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;

    console.log(`-> For Loop Variables <-`)
    for (let i = num; i < arr.length; i++) {
        let nextEle = arr[i];
        let firstEle = arr[i - num];
        tempSum = tempSum - firstEle + nextEle;
        maxSum = Math.max(maxSum, tempSum);

        console.log(`i:`, i,`firstEleOfSubarr:`, firstEleOfSubarr, `nextEle:`, nextEle, `tempSum:`, tempSum, `maxSum:`, maxSum)
    }

    console.log(`-> Global Variables <-`)
    console.log(`maxSum:`, maxSum, `tempSum:`, tempSum);

    return maxSum;
};
//                 index = [0,1,2,3,4,5,6,7,8]
console.log(maxSubarraySum([2,6,9,3,1,8,5,6,3],3))