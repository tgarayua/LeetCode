/**
 * 
    Break it Down:
    - We want to take the sum of a pair
    - we want to see if the sum of the pair equals the avg input
 */
const averagePair = (arr, avg) => {
    let sum = 0

    console.log(typeof )

    for (let i = 0; i < arr.length - 1; i++) {
        let currentSum = arr[i] + arr[i + 1]
        
        if ((currentSum / 2) == avg) {
            return true;
        }
    }
    return false;
};

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))