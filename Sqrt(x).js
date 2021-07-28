/*
*************
** PROBLEM **
*************

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

*****************
** PSEUDO CODE **
*****************

1.Understand The Problem

- We are given a non negative integer input. We need to create a function that returns the square root of the input. The input should return the integer without the decimal.

*****************

2. Explore Examples

- Example 1:
Input: x = 4
Output: 2

- Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

*****************

3. Break It Down

- Take the input and multiply it by itself

*****************
 */

let x = 8;

var mySqrt = function(x) {
    let i = 0;
    while (i*i < x) i++;
    
    if (i*i != x) i--
    return i
};

console.log(mySqrt(x))
