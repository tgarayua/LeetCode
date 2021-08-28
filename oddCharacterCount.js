/* * Program to print elements of an string present on ODD position, along with the count of those elements in the entire string
// i.e abbloseckc - b:2,l:1,s:1,c:2

// ::create empty object for results (odd letter counts)
// ::loop over string and find the odd characters and add it to character count

 */

let str = "abbloseckc"

const oddCharacterCount = (str) => {
    console.log(`str:`, str)
    oddCountObj = {};

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        if (i % 2 === 1 ) {
            oddCountObj[currentChar] = 0;
        }
    }

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        if (currentChar in oddCountObj) {
            oddCountObj[currentChar] += 1;
        }
    }

    return oddCountObj
};

console.log(oddCharacterCount(str))