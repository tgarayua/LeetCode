//  Find the 2nd largest and 2nd smallest number in two arrays of numbers
// // I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

let arr1 = [10,5,7,2,-8,4,1,24];
let arr2 = [8,23,29,25,40,-24,0,24];

const secondHighestAndSecondSmallest = (arr1, arr2) => {
    let combinedArr = arr1.concat(arr2);
    let sortedArr = combinedArr.sort(function (a,b) {return a - b});
    let secondToLastIndex = sortedArr.length - 2;

    for(let i = 0; i < sortedArr.length; i++) {
        return [sortedArr[1], sortedArr[secondToLastIndex]];
    }

    return null
};

console.log(secondHighestAndSecondSmallest(arr1, arr2));