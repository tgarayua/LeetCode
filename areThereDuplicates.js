
// let nums = [1,2,3,4,5,6,7,8,9]; // output: false
let nums = [1,2,3,4,5,6,7,8,8,8]; // output: true

const areThereDuplicates = (nums) => {
    console.log(`-> Input <-`);
    console.log(`nums:`, nums);

    let freqObj = {};

    // console.log(`-> for loop variables <-`);    // for loop over nums array
    for (let index = 0; index < nums.length; index++) {
        let currentNum = nums[index];

        freqObj[currentNum] ? freqObj[currentNum] += 1 : freqObj[currentNum] = 1;

        if (freqObj[currentNum] >= 2) {
            return true;
        }
    
        // console.log(`index:`, index, `currentNum:`, currentNum); // for loop variables
    }
    console.log(`freqObj:`, freqObj)

    return false;
}

console.log(areThereDuplicates(nums));