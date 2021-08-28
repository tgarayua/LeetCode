/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 
*/

// const reversedInteger = (nums) => {
//     var myArr = String(nums).split("").map((nums)=>{
//         return Number(nums)
//     })
//     let reversed = myArr.reverse()
//     let result = reversed.join('')
//     console.log(result)
//     return result

// };

// reversedInteger(456)

const reverse = nums => {
    console.log(`input:`, nums)
    if (nums < [-231, 231 - 1], then return 0.)
    let numsStr = nums.toString();
    let reversedInteger = "";

    for (let i = numsStr.length - 1; i >= 0; i--) {
        let currentNum = numsStr[i]
        reversedInteger += currentNum
        if (currentNum === "-") {
            reversedInteger = reversedInteger.slice(0,reversedInteger.length - 1)
            reversedInteger = reversedInteger.replace (/^/,'-')
        }
    }
    console.log(`reversedInteger:`, reversedInteger)

    return  reversedInteger
}

console.log(reverse(-1238787))
