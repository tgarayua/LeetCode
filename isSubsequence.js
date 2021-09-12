/**
 * 
 * Problem:
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subseqence of the characcters in the second string. In other words the function should chceck whether the characters in the first string appear somewhere in the second string, without their order changing.
 * 
 * Examples
 * - isSubsequence("hello", "hello world") // true
 * - isSubsequence("sing", "sting") // true
 * - isSubsequence("abc", "abracadabra") // true
 * - isSubsequence("abc", "acb") // false (order matters)
 * 
 * Understand the problem
 * - summary: I want to take in the two strings see if the characters of str1 are present in the str2 in in sequential order from the first string. If str1 characters are present in that specific order return true, else false.
 * - the inputs are a str1 and str2
 * - the output should be true / false / null
 * - the output can be determined by the inputs
 * 
 * Psudo code
 * - we want to compare the firstCharOfStr1 to firstCharOfStr2 
 * - if firstCharOfStr1 === firstCharOfStr2, both indexes of str1 and str2 += 1; and remove the first char of str1
 * - if str1.length === 0 return true
 * - if firstCharOfStr1 !== firstCharOfStr2, the index of str2 ++
 * 
 */
console.time(`time`)

const isSubsequence = (str1, str2) => {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    for (let index = 0; index < str2Arr.length; index++) {
        let currentEleStr2Arr = str2Arr[index];
        let firstEleStr1Arr = str1Arr[0];
        if (currentEleStr2Arr === firstEleStr1Arr) {
            str1Arr.shift();
        }
    }
    if (str1Arr.length === 0) {
        return true;
    } else if (str1Arr.length !== 0) {
        return false;
    }
    return null;
}

console.log(isSubsequence("abc", "acb"))
console.timeEnd(`time`)