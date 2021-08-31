/* 
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

let str = "tat";

const validPalindrome = (str) => {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i]
        reverse += char
    }
    
    if(str === reverse) {
        return true
    } else {
        return false
    }
};

console.log(validPalindrome(str));