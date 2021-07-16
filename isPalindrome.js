/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

** PSEUDO CODE **

Understanding The Problem
- We cant to create a function that takes in an integer and returns true if the number is the same backwards

Explore Examples


Break It Down

 */

var nums = 121

const isPalindrome = (nums) => {
    let str = nums.toString()
    let reversedStr = nums.toString().split('').reverse().join('')

    if (str === reversedStr) {
        return true
    }
    return false
}

console.log(isPalindrome(nums))