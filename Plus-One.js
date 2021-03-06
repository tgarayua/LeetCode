/*
*************
** PROBLEM **
*************

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

*****************
** PSEUDO CODE **
*****************

1.Understand The Problem

- We are given a string as an input, we want to return the length of the last word in that string. If the string doesnt exist return 0

*****************

2. Explore Examples

- Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

- Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

- Example 3:
Input: digits = [0]
Output: [1]

*****************

3. Break It Down

- 


*****************
 */

const plusOne = () => {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if( digits[i] > 9 ){
            digits[i] = 0;
        } else{
            return digits;
        }
    }
    //console.log(digits.unshift(1))
    digits.unshift(1);
    return digits;
}

