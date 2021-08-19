/**
 * Good if you have an array of numbers that are sorted.
 * 
 * - you have two pointers, i and j
 * - you can move them inwards
 */

let nums = [-4,-3,-2,0,4,10]

const sumZero = (nums) => {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let sum = nums[left] + nums[right]

        if (sum === 0) {
            return [nums[left], nums[right]]
        } else if (sum > 0) {
            right --
        } else {
            left ++
        }
    }
}

console.log(sumZero(nums))