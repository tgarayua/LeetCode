//  Find the 2nd largest and 2nd smallest number in two arrays of numbers
// // I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

let arr1 = [10,5,7,2,4,1,24];
let arr2 = [8,23,29,25,40,0,24];

const secondHighestAndSecondSmallest = () => {
    let combinedArray = arr1.concat(arr2);
    let tempHighestNum;
    let secondHighestNum;
    let tempSmallestNum;
    let secondSmallestNum;

    for (let number of combinedArray) {
        if (tempHighestNum === undefined) {
            tempHighestNum = number
        } else if (tempHighestNum < number) {
            secondHighestNum = tempHighestNum
            tempHighestNum = number
        } else if (tempSmallestNum === undefined) {
            tempSmallestNum = number
        } else if (tempSmallestNum > number) {
            secondSmallestNum = tempSmallestNum
            tempSmallestNum = number
        }
    }
    console.log(`Combined Array: ${combinedArray}`);
    console.log(`Second Highest Number: ${secondHighestNum}`);
    console.log(`Second Smallest Number: ${secondSmallestNum}`);
};

secondHighestAndSecondSmallest(arr1, arr2);