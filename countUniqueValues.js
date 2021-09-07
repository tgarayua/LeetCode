/**
 * 
 * - create an i index var that starts wtih the first index of the array (let i = 0)
 * - loop over the rest of the arr using j as an index (let j = 1)
 *      -if arr[i] does not equal arr[j], increment by 1 and set arr[i] to arr[j]
 * - return i + 1;
 */
console.time(`Tom code`)
function countUniqueValues(arr) {
    let i = 0;
    let count = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            count++;
            i = j;
        }
    }
    return count + 1;
}

let arr = [1,1,2,3,3,4,4,4,6,7,7,8,9]
console.log(countUniqueValues(arr))

console.timeEnd(`Tom code`)