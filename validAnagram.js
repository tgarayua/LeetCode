/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

 * ** PSEUDO CODE **

Understanding The Problem
- Create a function that takes two strings and check to see if the string lengths are the same if not return false
- Were going to check if the a-z of string 1 is the same as the z-a of string 2
- 


Explore Examples
-anagram, nagaram // true
- cat, car // false



Break It Down
- check to see if both strings are the same length
- create a letterObj to store the letters and the frequency
- create a for loop for the first string
    - if the current letter exist, increment, otherwise set to 1
- create a for loop for the second string
    - if we can't find the current letter or the current letter is zero then it's not an anagram


 */


const validAnagram = (word1, word2) => {
    // check to see if both strings are the same length
    if (word1.length !== word2.length) {
        return false;
    }

    // create a letterObj to store the letters and the frequency
    let letterObj = {};
    
    // create a for loop for the first string
    for (let i = 0; i < word1.length; i++) {
        let currentLetter = word1[i]

        // if the current letter exist in letterObj, increment, otherwise set to 1
        letterObj[currentLetter] ? letterObj[currentLetter] += 1 : letterObj[currentLetter] = 1;
    }

    // create a for loop for the second string
    for (let i = 0; i < word2.length; i++) {
        let currentLetter = word2[i]

        // if we can't find the current letter or the current letter is zero then it's not an anagram
        if (!letterObj[currentLetter]|| currentLetter === 0) {
            return false;
        }
    }

    return true;
};

console.log(validAnagram("car", "rac"));