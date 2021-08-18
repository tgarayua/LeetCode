/* 
- loop over array
- find the compliment by subtracting the number from the goal
- if compliment is present return the indinces
- if compliment is not present add number to an obj

*/

array = [2,7,11,15]
goal = 9

const twoSum = (array, goal) => {
    numsObj = {};

    for (let i = 0; i < array.length; i++) {
        let currentNumber = [array[i]]
        let difference = goal - currentNumber

        if (difference in numsObj) {
            return [numsObj[difference], i]
        } else {
            numsObj[currentNumber] = i
        }
    }
    return null
};

console.log(twoSum(array, goal));