/** PROBLEM
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

** PSEUDO CODE **

Understanding The Problem
- We want to return the index number of where the target integer exist
- If the target does not exist we need to find the index of where the target integer should be
- nums = [1,3,5,6]
- The output could be figured out by the input

Explore Examples


Break It Down
- we want to loop through our numbers array
- create an object with key value pairs; Key = number, Value = index
- We want to see if the Obj key === target
- If the target does not exist in the array of numbers we want to find the index of the key that is greater than the target


*/


const searchInsert = (nums, target) => {
    let numsObj = {};
    let result;
    
    for (let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] = i
        if(numsObj[target] === numsObj[nums[i]]) {
            result = numsObj[target]
        } else if (target > nums[i] && target < nums[i + 1]) {
            result = i + 1
        } else if (target > nums[i + 1]) {
            result = i + 2
        }
    }
    return result;
};

var nums = [1,3,5,6];
var target = 8;
console.log(searchInsert(nums, target));