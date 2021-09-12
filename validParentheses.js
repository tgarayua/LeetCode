/** PROBLEM 
 * Given a string s containing just the currentCharacters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.



** PSEUDO CODE **

Understanding The Problem
- Summary: We want to look over a string and determin if the string has brackets that open and close in the correct order.  

- The input is a string
- The output should be true / false

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
- I want to create an parenObj
- Populate the obj
- Create a stack
- Loop over str
- if the first char in parenObj push the value into stack
- remove the element from the stack everytime the currentChar === closing bracket

 */

let str = "{[()]}"

const isValid = (str) => {
    console.log();
    console.log(`isValid = (str)`);
    console.log();

    console.log();
    console.log(`Input`);
    console.log(`- str:`, str);
    console.log();
    console.log(`str:`, str)
    let string = str.toString();
    console.log(`string:`, string)
    let parenObj = {
        '{':'}',
        '(':')',
        '[':']'
    };
    let stack = [];

    console.log(`Global Variables (before)`);
    console.log(`- string:`, str, ',', `parenObj:`, parenObj, ',', `stack:`, stack);
    console.log();

    console.log(`For loop Variables`)
    // if the first char in parenObj push the value into stack
    for (let index = 0; index < string.length; index++) {
        let currentChar = string[index];
    
        console.log(`- index:`, index,',', `string:`, string, ',', `currentChar:`, currentChar);
    
        for (let charKey in parenObj) {
            if (currentChar === charKey) {
                console.log(`If statement 1`)
                console.log(`stack (before):`, stack);

                stack.push(parenObj[charKey])

                console.log(`stack (after):`, stack);
                console.log();
            } else if (currentChar === stack[stack.length - 1]) {
                
                console.log(`If statement 2`)
                console.log(`stack (before)`, stack);
                stack.shift();
                console.log(`stack (after)`, stack);
            } else if (currentChar !== charKey) {
                return false
            }
        }
    }
    console.log();

    console.log(`Global Variables (after)`);
    console.log(`- string:`, str, ',', `parenObj:`, parenObj, ',', `stack:`, stack);
    console.log();

    if (stack.length === 0) {
        return true;
    } else if (stack.length !== 0) {
        return false;
    }

    return `end!`
};

console.log(isValid(str));