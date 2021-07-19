/** PROBLEM 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.



** PSEUDO CODE **

Understanding The Problem
- Summary: We want to create a function that takes in a string. The string will take be a combination of brackets, curly brackets and parenthases. The braket has to be closed by the same type of brackets and the brakets must close in the correct order.
- inputs are strings containg a variety of brakets.
- the output should be either true or false
- The output can be dertermined by the inputs



Explore Examples
- Example 1:
Input: s = "()"
Output: true

- Example 2:
Input: s = "()[]{}"
Output: true

- Example 3:
Input: s = "(]"
Output: false

- Example 4:
Input: s = "([)]"
Output: false

-Example 5:
Input: s = "{[()]}"
Output: true


Break It Down
- We're going to create 3 objects for each type of bracket
- were going to set 3 diffrent checkers that each are responsible to checking if the brackets are present in correct order




 */

var s = "()[]{}"

const isValid = (str) => {
    if (str.length % 2) return false;
    var bracketObj = {
        '(':')',
        '{':'}',
        '[':']'
    };

    var heap = [];

    for(let char of str) {
        if(bracketObj[char]) {
            heap.push(bracketObj[char])
        } else {
            if(heap.pop() !== char) return false;
        }
    }
    return (!heap.length)
};

console.log(isValid(s))