const areThereDuplicates = (nums) => {
    let numsObj = {};

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        numsObj[currentNum] ? numsObj[currentNum] += 1 : numsObj[currentNum] = 1
        if (numsObj[currentNum] > 1) return true
    }
    return false
};

let nums = [1,2,3,4,5,6]

console.log(areThereDuplicates(nums))