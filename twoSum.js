/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]



Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

- Understand the problem
    - I want to take stock of all my nums inside the array. Take the number in the array and subtract if from the goal. if another number in the array adds up to the goal i will return those specific indexs
    -the inputs are:
        - array of numbers
        - the goal/sum target
    - the ouput is:
        - a single array with the two indexs
    - the output can be determined by the inputs
    -

- Break it Down
    - I want to make a numsobj
    - loop over the array
        - if the current num is inside the numsObj ++, else numsObj = 1
        - if the current number and the diffrenct sum up to the goal return both indexs
 */

array = [2,7,11,15]
goal = 9

const twoSum = (array, goal) => {
    console.log(`inputs:`, array, goal)
    let numsObj = {};

    for(let i = 0; i < array.length; i++) {
        let currentNum = array[i]
        let difference = goal - currentNum
        if(difference in numsObj) {
            return [numsObj[difference], i]
        }
        numsObj[currentNum] = i;
    }
    return null
}

console.log(twoSum(array, goal));