/*
*************
** PROBLEM **
*************

Given two binary strings a and b, return their sum as a binary string.

*****************
** PSEUDO CODE **
*****************

1.Understand The Problem

- We want to take two input from string a and string b. We want to create a function the returns the sum in a binary string.

*****************

2. Explore Examples

- Example 1:
Input: a = "11", b = "1"
Output: "100"

- Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

*****************

3. Break It Down

- 


*****************
 */

var a = "11", b = "1"

const addBinary = (strA, strB) => {
    var strAValue = parseInt(strA);
    var strBValue = parseInt(strB);
    valueObj = {
        0:0,
        1:1,
        10:2,
        11:3,
        100:4,
        101:5,
        110:6,
        111:7,
        1000:8,
        1010:10,
        10000:16,
        10100:20
    }
    
    for (let key in valueObj) {
        if (key === strA) {
            strAValue = key
        }
    };
    
    
    for (let key in valueObj) {
        if (key === strB) {
            strBValue = key
        }
    };
    var sumValue = strAValue + strBValue
    console.log(strBValue)
};

addBinary(a,b)