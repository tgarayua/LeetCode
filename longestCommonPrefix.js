/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

** PSEUDO CODE **

Understanding The Problem
- we want to find the longest common prefix for each string in the arrays
- If there is no common prefix return ""

Explore Examples
- ["flower","flow","flight"] should return "fl"
- ["dog","racecar","car"] should return ""


Break It Down
- loop through each string in the array
- for every string loop through each character and see if they match up with other strings

 */

var strs = ["flower","flow","flight"]
// var strs = ["dog","racecar","car"]

const longestCommonPrefix = (strs) => {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]
        
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }
    return prefix
}

console.log(longestCommonPrefix(strs))