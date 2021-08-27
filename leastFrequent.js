/* 
- Problem:

Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 

// ::make and obj to keep track of the count with keys and values
// ::return the key(s) with the lowest value 

- Understand The Problem
    - I want to count the countries in the array and return the countries that appeared the least
    - The input is an array holding a list of countries
    - the output should be an array with the least frequent countries
    - the output can be determined from the input

- Break It Down
    - make an obj to keep track of the countries count
    - return the key that shows up the least
*/

let arr = ["Argentina", "Cuba", "Chile", "Argentina", "Cuba", "USA", "Japan", "Japan", "India"]

const leastFrequent = (arr) => {
    let frequencyObj = {};
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let country = arr[i]
        frequencyObj[country] ? frequencyObj[country] += 1 : frequencyObj[country] = 1;
    }

    let keys = Object.values(frequencyObj)
    let min = keys.sort(function(a,b) {return a-b})
    let minValue = min[0]

    for (let country in frequencyObj)
    if (frequencyObj[country] === minValue) {
        result.push(country)
    }

    return result
}

console.log(leastFrequent(arr))