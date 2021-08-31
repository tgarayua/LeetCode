/** PROBLEM 
 * Given a string s containing just the currentCharacters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.



** PSEUDO CODE **

Understanding The Problem
- Summary: We want to create a function that takes in a string. The string will take be a combination of brackets, curly brackets and parenthases. The braket has to be closed by the same type of brackets and the brakets must close in the correct order.

- Define a stack which is an array.
- Loop through each element in a given string.
- If the element is an opening bracket (‘(‘ or ‘{‘ or ‘[‘), push it onto the stack.
- If the element is a closing bracket (‘)‘ or ‘}‘ or ‘]‘), pop off the last element from the stack only if matches with the encountered closing bracket and keep iterating through the string. If the closing bracket does not match with the opening bracket placed on top of the stack, break out of the loop and return false because the parentheses in the string are not balanced.
- If the stack is empty after completely iterating over the string, return true because the parentheses in the string are balanced and you have a valid string.



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


-Grind beans
-set up cup
-Pour espresso
-steam milk
-pour latte

 */

let str = "{[()]}"

const isValid = (str) => {
    let bracketObj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    let stack = [];

    for (let currentChar of str) {
        let currentValue = bracketObj[currentChar];
        console.log(`currentChar:`, currentChar,`currentValue:`, bracketObj[currentChar]);
        
        if (currentValue) {
            stack.push(currentValue);
            console.log(`hit`,stack)
        } else if (stack.pop() !== currentChar) {
            return false;
        };
    };

    return !stack.length;
};

console.log(isValid(str));