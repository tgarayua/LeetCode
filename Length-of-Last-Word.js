/*
*************
** PROBLEM **
*************
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

*****************
** PSEUDO CODE **
*****************

1.Understand The Problem

- We are given a string as an input, we want to return the length of the last word in that string. If the string doesnt exist return 0

*****************

2. Explore Examples

- Example 1:
Input: s = "Hello World"
Output: 5

- Example 2:
Input: s = " "
Output: 0

*****************

3. Break It Down

- We want to find a way to split the string into words (array?)
- find the last word in the array
- loop over the word and find the count


*****************
 */

var s = "b   a    "

const lengthOfLastWord = (s) => {    
    let splitString = s.split("")
    let lastWordCount = 0

    let indexForLastString = splitString.length -1

    for (let i = indexForLastString; i>=0; i --){
        if (s[indexForLastString] === ' ') {
            indexForLastString--
        }
    }
    
    for (let i = indexForLastString; i >= 0; i--){
            if (splitString[i] !== ' ') {
                lastWordCount += 1
            } else if (splitString[i] === ' '){
                return lastWordCount
            }
    }
    return lastWordCount
}

console.log(lengthOfLastWord(s));