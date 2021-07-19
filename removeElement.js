/** PROBLEM 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

** PSEUDO CODE **

Understanding The Problem
- We want to write a function that takes in an array of integers and a value. This function should remove the integers inside the nums array that === value. When the array gets mutated by rememoving the element that === value, the function must replace the element "_". This function shouldnt allocate extra space for another array. We need to modify the numbers array. The elements in the array can be returned in any order.
- The input we are taking in is the nums array
- The output should be the modified array
- We determin the output just by the inputs



Explore Examples
- Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

- Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).


Break It Down
- We are go create a modifidArr var
- We're going to create a for in loop to iterate over the nums array
- We will create a condition to determine if the element of the nums array === the value of the input
- if these values are true we will remove the element and subsitue the element for a "_"
- return modifiedArr


 */

var nums = [0,1,2,2,3,0,4,2]
var val = 2

const removeElement = (numsArr, valueInput) => {

    numsArr.forEach (function(number, index, numsArr) {
        if (number === valueInput) {
            numsArr.splice(index, 1, "_")
        }
    })

    return numsArr
};

console.log(removeElement(nums, val));