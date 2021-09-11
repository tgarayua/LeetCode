/**
 * 
    Break it Down:
    - We want to take the sum of a pair
    - we want to see if the sum of the pair equals the avg input
 */
const averagePair = (arr, avg) => {
    console.log(`-> Inputs <-`);
    console.log(`arr:`, arr, `avg:`, avg);
    let sum = 0;
    
    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index];
        let nextNum = arr[index + 1];
        let sumAvg = sum / 2;

        sum = currentNum + nextNum;

        if (sumAvg === avg) {
            return true;
        }
    }
    return false;
};

console.log(averagePair([1,3,3,5,6,7,10,12,19], 15.5))



// let currentNum = arr[index];
//         let nextNum = arr[index + 1];

//         console.log(`index:`, index, `currentNum:`, currentNum, `nextNum:`, nextNum)