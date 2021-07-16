/* PROBLEM
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

** PSEUDO CODE **

Understanding The Problem
- I want to remove duplicate integers in an array of numbers
- the elements should only show once
- The input should only be an array of numbers
- The result should be an array of numbers without duplicates
- THe output can be determined by the input and I have enough info to solve this problem

Explore Examples
- if we have an array like [5,3,5,7,7] the output should be [5,3,7]
- if we have an array like [5,"hello",7,{},5] the output should be [5,7]
- if anything else is entered besides a number, return error

Break It Down
- we want to loop over array of nums
- remove duplicates 
 */


// const removeDuplicates = (nums) => {
//     let currentNum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === currentNum) {
//             nums.splice(i,1)
//             i--
//         } else {
//             currentNum = nums[i]
//         }
//     }
//     return nums
// };

var nums = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (nums) => {
    if (nums.length < 2) {
        return nums;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
            nums.push(undefined)
            i--;
        }
    }

    return nums;
};

console.log(removeDuplicates(nums));