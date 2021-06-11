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
    const limit = Number.MAX_SAFE_INTEGER;
    const k = nums < 0 ? -1 : 1;
    const n = Number(String(Math.abs(nums)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

console.log(reverse(90071992547409))
