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
- create a fucnction that loops over our strings
- create a character obj



 */


const validAnagram = (str1, str2) => {
    //checks both strings to make sure they're the same length
    if (str1.length !== str2.length) return false;

    // sort the variable and makes each varable compareable
    var str1Char = [];
    var str2Char = [];
    str1Char = str1.split('').sort().join();
    str2Char = str2.split('').sort().join();

    // conditions to make sure that the function is an anagram
    if (str1Char === str2Char) return true;

    return false
}

console.log(validAnagram("car", "cat"));