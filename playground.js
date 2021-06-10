// /* Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 

// ::make and obj to keep track of the count with keys and values
// ::return the key(s) with the lowest value
// */

// // var countries = ["Cuba", "America", "Argentina", "Cuba", "America", "Chile", "Argentina", "America",]

// // const leastFrequent = (countries) => {

// //     var countryCount = {};

// //     for (let country of countries) {
// //         if (country in countryCount) {
// //             countryCount[country] += 1
// //         } else {
// //             countryCount[country] = 1
// //         };
// //     };

// //     var results = [];
// //     var tempLeastFrequent 

// //     for (let country in countryCount) {

// //         const currentCountryCount = countryCount[country]
// //         // console.log(currentCountryCount);

// //         if (tempLeastFrequent === undefined) {
// //             tempLeastFrequent = currentCountryCount
// //             results.push(country)
// //         } else if (tempLeastFrequent === currentCountryCount) {
// //             results.push(country)
// //         } else if (currentCountryCount < tempLeastFrequent) {
// //             tempLeastFrequent = currentCountryCount
// //             results = [country]
// //         }
// //     }

// //     return results

// //     // console.log(countryCount);
// // };

// // console.log(leastFrequent(countries));






// /* * Find the 2nd largest and 2nd smallest number in two arrays of numbers
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 

// ::combine both arrays into a single array
// ::loop through array and find the highest number
// ::loop through array and find the sencond highest number

// loop through array and find the smallest number
// loop through array and find the second smallest number


// var array1 = [10,5,7,2,4,1,24,40,99,100];
// var array2 = [8,23,29,25,40,24,4];

// const findSecondHighestAndSmallestNumber = (array1, array2) => {
//     var combinedArray = array1.concat(array2);
//     var tempHighestNum;
//     var secondHighestNum;
//     var tempLowestNum;
//     var secondLowestNum;

//     for (let number of combinedArray) {
//         if (tempHighestNum === undefined) {
//             tempHighestNum = number
//         } else if (tempHighestNum < number) {
//             secondHighestNum = tempHighestNum
//             tempHighestNum = number
//         } else if (tempLowestNum === undefined) {
//             tempLowestNum = number
//         } else if (tempLowestNum > number) {
//             secondLowestNum = tempLowestNum
//             tempLowestNum = number
//         }
//     }

//     console.log(`Second Highest Number: ${secondHighestNum}`);
//     console.log(`Second Lowest Number: ${secondLowestNum}`);
// }


// // findSecondHighestAndSmallestNumber(array1, array2);


// /* * Program to print elements of an string present on ODD position, along with the count of those elements in the entire string
// i.e abbloseckc - b:2,l:1,s:1,c:2

// ::create empty object for results (odd letter counts)
// ::loop over string and find the odd characters and add it to character count

// */

// // var str = "abbloseckc";

// // const oddCharacterCount = (str) => {
// //     var count = {};
// //     var oddCount = new Set();

// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] in count) {
// //             count[str[i]] += 1
// //         } else {
// //             count[str[i]] = 1
// //         } 
// //         if (i % 2 !== 0) {
// //             oddCount.add(str[i])
// //         }
// //     };

// //     for (const character of oddCount) {
// //         console.log(`${character}: ${count[character]}`)
// //     }
// // };

// // oddCharacterCount(str);

/* 
* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 3 2 1) = 24.

// */

// const firstFactorial = (num) => {
//     var total = 1;

//     if (num < 0)
//     return -1;
//     else if (num == 0)
//     return 1

//     for (let i = 1; i <= num; i++) {
//         console.log(`${total}:${i}`)
//         total *= i
//     }
//     return total
// };

// console.log(firstFactorial(7));

// /* * Program to print elements of an string present on ODD position, along with the count of those elements in the entire string
// i.e abbloseckc - b:2,l:1,s:1,c:2

// ::create empty object for results (odd letter counts)
// ::loop over string and find the odd characters and add it to character count

// */

// var str = "abbloseckc";

// const oddPostionCharacterCount = (str) => {

//     var oddObject = {};
//     let characterCount = new Set();

//     for (let character of str) {
//         if (character in oddObject) {
//             oddObject[character] += 1
//         } else {
//             oddObject[character] = 1
//         }
//     };

//     for(let i = 0; i < str.length; i++) {
//         if (i % 2 !== 0) {
//             characterCount.add(str[i])
//             console.log(characterCount)
//         }
//     }
    
//     for (let character of characterCount) {
//         console.log(`${character}: ${oddObject[character]}`)
//     }
// };

// oddPostionCharacterCount(str);

/* 
* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 3 2 1) = 24. 

::

*/

// const firstFactorial = (num) => {

//     var total = 1;

//     for (let counter = 1; counter <= num; counter++) {
//         total *= counter
//     };
//     return total
// };

// console.log(firstFactorial(7));

/*
Write a function to represent Floyed Triangle, given input is the number of rows of the Floyd triangle
Example if the number of rows is 3
Result:
1
2 3
4 5 6 *write a function that checks if two provided strings are ana*

:: create an empty string to store our numbers to create the triangle
:: create a var that is equal to 0 (we need to increment the number by 1 
    for as many times as it takes to meet the rows conditions)
::conditions = the row incriments by one diget
:: create a for loop that counts up to input
:: inside that loop create another counter loop that
*/

// const floyedTriangle = (input) => {
//     var num = 0;
//     var str = "";

//     for (let i = 1; i <= input; i++) {
//         console.log(`First index "for loop" : ${i}`);
//         console.log(`First num "for loop" : ${num}`);
//         console.log(`First string "for loop" : ${str}`);
//         for (let j = 1; j <= i; j++) {
//             str += ++num
//             str += j === i ? "\n" : " "
//             console.log(`Second num "for loop" : ${num}`);
//             console.log(`Second index (i) "for loop" : ${i}`);
//             console.log(`Second index (j) "for loop" : ${j}`);
//             console.log(`Second string "for loop" : ${str}`);
//             console.log(" ");
//         }
//     }
//     return str
// };

// console.log(floyedTriangle(5));

/* 
write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example
anagram('finder', 'Friend') --> true
anagram('hello', 'bye') --> false"

*/

// const anagramCheck = (string1, string2) => {
//     let str1 = string1.toLowerCase();
//     let str2 = string2.toLowerCase();
//     let obj1 = {};
//     let obj2 = {};

//     // populating the obj1
//     for (let letter of str1) {
//         if (letter in obj1) {
//             obj1[letter] += 1
//         } else {
//             obj1[letter] = 1
//         }
//     }

//     for (let letter of str2) {
//         if (letter in obj2) {
//             obj2[letter] += 1
//         } else {
//             obj2[letter] = 1
//         }
//     }

//     for (let letter in obj1) {
//         if (!obj2[letter]) {
//             return false
//         } else {
//             obj1[letter] -= 1
//         }
//     }
//     return true
// };


// console.log(anagramCheck("funny", "yanny"));

/* 
1- reverse a string (without using the reverse method)
*/

// const reverseString = (str) => {
//     let reversedStr = "";

//     // console.log(str.length)
//     for (let i = str.length - 1; i >= 0; --i) {
//         reversedStr += str[i]
//     }
//     return reversedStr;
// }

// console.log(reverseString("Ben MC"));


//--------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// You can return the answer in any order.

// const twoNumsSumTarget = () => {
//     let result = [];

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 result = [i, j]
//             }
//         }
//     };
//     return result;
// };

// let numbers = [2,11,7,15,];
// let target = 9;
// console.log(twoNumsSumTarget(numbers, target));

// -------------------------------------------------

/* 
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

// let str = "cap";

// const validPalindrome = () => {
//     let reversedStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log(str[i])
//         reversedStr += str[i]
//     } if (reversedStr === str) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(validPalindrome(str));

// Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 
/* 
- create a hash map
*/

// let countries = ["Argentina", "Cuba", "Chile", "Argentina", "Argentina", "Cuba", "Cuba", "Cuba", 'Chile','Chile', "USA", "USA"];

// const leastFrequent = () => {
//     let countryCount = {};
//     let result = [];
//     let tempLeastFrequent;

//     for (let country of countries) {
//         if (country in countryCount) {
//             countryCount[country] += 1
//         } else {
//             countryCount[country] = 1
//         }
//     };

//     for (let country in countryCount) {
//         if (tempLeastFrequent === undefined) {
//             tempLeastFrequent = countryCount[country]
//             result.push(country);
//         } else if (countryCount[country] === tempLeastFrequent) {
//             result.push(country);
//         } else if (countryCount[country] < tempLeastFrequent) {
//             result = [country]
//         }
//     }

//     console.log(result);
// };

// leastFrequent(countries);

/* Find the 2nd largest and 2nd smallest number in two arrays of numbers
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1 */

// let arr1 = [10,5,7,2,4,1,24];
// let arr2 = [8,23,29,25,40,0,24];

// const secondHighestAndSmallestNumber = () => {
//     let combinedArray = arr1.concat(arr2);
//     let highestNum;
//     let secondHighestNum;
//     let smallestNum;
//     let secondSmallestNum;

//     for (let i = 0; i < combinedArray.length; i++) {  
//             if (highestNum === undefined) {
//                 highestNum = combinedArray[i]
//             } else if (highestNum < combinedArray[i]) {
//                 secondHighestNum = highestNum
//                 highestNum = combinedArray[i]
//             } if (smallestNum === undefined) {
//                 smallestNum = combinedArray[i]
//             } else if (smallestNum > combinedArray[i]) {
//                 secondSmallestNum = smallestNum
//                 smallestNum = combinedArray[i]
//             }
//     }
//     console.log(`Highest Number: ${highestNum}`);
//     console.log(`Second Highest Number: ${secondHighestNum}`);
//     console.log(`Smallest Number: ${smallestNum}`);
//     console.log(`Second Smallest Number: ${secondSmallestNum}`);
// };

// secondHighestAndSmallestNumber(arr1, arr2);

// 4- given an array of integers find the number with longest repeating sequence.
//     findMostRepeated([2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]) = 1

// let numbers = [2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]

// const findMostRepeated = () => {
//     let currentNumber;
//     let counter = 0;
//     let item;

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i; j < numbers.length; j++) {
//             if (currentNumber === undefined) {
//                 currentNumber = numbers[i]
//             } else if (numbers[i] === numbers[j])
//             counter++;
//             if (currentNumber < counter) {
//                 currentNumber = counter
//                 item = numbers[i]
//             }
//         }
//         counter = 0;
//     }

//     console.log(item + " ( " + currentNumber + " times ) ");
// };

// findMostRepeated(numbers);

//------------------------------------------------------------

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// let nums = [2,11,15,7]
// let target = 9

// const twoSum = () => {
//     let indices = [];

//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i])
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 indices.push(i)
//             }
//         }
//     }

//     console.log(indices);
// };

// twoSum(nums, target);

//-------------------------------------------------------

/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

*/