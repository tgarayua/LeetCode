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

const isPalindrome = (num) => {
    let str = num.toString()

    for (let i = 0; i < str.length; i++){
        
        if (str[i] !== str[str.length - i - 1]){
            return false
        }
    }
   return true
        // if (numStr[number] === numStr[numStr.length -1])
  
}

const num = 3194613
console.log(isPalindrome(num))
// isPalindrome(num)