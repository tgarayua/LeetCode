/**
 * - we want to return the index of the target in the array
 */

const binarySearch = (arr, target) => {
    let min = 0;
    let max = arr.length - 1;
    console.log(`Max: ${max}`)

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentNum = arr[middle]
        console.log(`Middle: ${middle}`)
        console.log(`Current Num: ${currentNum}`)
        
        
        if (arr[middle] < target) {
            min = middle + 1;
        } else if (arr[middle] > target) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

};

let arr = [3,4,5,6,7,8,9,10,11]
let target = 8

console.log(binarySearch(arr, target))