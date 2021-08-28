/* 
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

let str = "pap";

const validPalindrome = (str) => {
    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {
        let currentChar = str[i]
        reverse += currentChar
    }

    if (reverse === str) {
        return true;
    }

    return false;
};

console.log(validPalindrome(str));