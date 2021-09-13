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
- I want to create an parenObj opening brackets as the key and closing brackets as the value
- Create a stack
- Loop over str
- if the first char in parenObj push the value into stack
- remove the element from the stack everytime the currentChar === closing bracket

 */
console.time(`time`);
let str = "([}}])";

const isValid = (str) => {
    if(str.length % 2 == 1) {
        return false;
    }
    let parenObj = {
        '(':')',
        '[':']',
        '{':'}',
    };
    let stack = [];

    for (let index = 0; index < str.length; index++) {
        let currentChar = str[index];
        let lastEleOfStack = stack[stack.length - 1];
    
        if (parenObj[currentChar]) {
            stack.push(parenObj[currentChar]);
        } else if (currentChar === lastEleOfStack) {
            stack.pop();
        } else {
            return false
        }
    }

    if (stack.length === 0) {
        return true;
    } else if (stack.length !== 0) {
        return false;
    }
    return null;
}

console.log(isValid(str));
console.timeEnd(`time`);