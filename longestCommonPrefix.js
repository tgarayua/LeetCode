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
- I want to iterate through each word and if the letters exist through each

 */



/* 

biscuit
bisexual
bicycle

- look at the first letter of each word
- notice if the first letter is the same
- go through the rest of the word until the letters do not match

- create a matching prefix var
- look at the first char of the first string
- look at the first char of all the other strings
- if the char doesnt match the word return matching prefix
- if the char does match then prefix += current char
- keep going until it no longer matches


*/

var strs = ["flowir","flowar","flowsr", "flowdr"]

const longestCommonPrefix = (strs) => {
    console.log(`input:`, strs)
    let prefixObj = {};
    let prefix = ""
    
    for (let i = 0; i < strs.length; i++) {
        let currentWord =  strs[i];
        for (let j = 0; j < currentWord.length; j++) {
            let char = currentWord[j];
            prefixObj[char] ? prefixObj[char] += 1 : prefixObj[char] = 1;
        }
    }

    for (let char in prefixObj) {
        prefixObj[char] -= strs.length
        if (prefixObj[char] !== 0) {
            return prefix
        } else {
            prefix += char
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(strs));
