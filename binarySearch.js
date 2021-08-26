/**
 * - Problem: 
 *      Take in an orderd list of numbers and target (increasing or decreasing)
 *      Divide and concour
 *      
 * - Break it down:
 *      var for the begining, middle and end
 */

const binarySearch = (arr, target) => {
    let min = 0; // first index
    let max = arr.length - 1; //last index

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentNum = arr[middle]
        // console.log(`middle: ${middle}`)
        // console.log(`CurrentNum: ${currentNum}`)
        if(currentNum < target) {
            min = middle + 1;
        } else if (currentNum > target) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
};

let arr = [3,4,5,6,7,8,9,10,11]
let target = 8

console.log(binarySearch(arr, target))