/*
*************
** PROBLEM **
*************
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*****************
** PSEUDO CODE **
*****************

1.Understand The Problem

- Summeray: We want to create a funtion that returns the index of the first occurrence of a needle in haystack, or -1 if needle is not part of haystack. We will return 0 when needle is an empty.
- The inputs are:
    1. the haystack is the string
    2. The needle is the series of characters that we are looking for within the string
- The oput is the string's index where the needle
- The oput can be determined by the input, if the input is an empty string "" then return 0

*****************

2. Explore Examples
- Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

- Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

- Example 3:
Input: haystack = "", needle = ""
Output: 0

*****************

3. Break It Down
- Loop over string
- Check if needle is in string
- if the needle is in the string were going to find the index of the first character of the needle

*****************
 */

var haystack = "hello", needle = "zhwq"


const strStr = (haystack, needle) => {
    if (needle === "") return 0;

    if(haystack.includes(needle)) {
        return haystack.indexOf(needle)
    }

    return -1;
};

console.log(strStr(haystack, needle));