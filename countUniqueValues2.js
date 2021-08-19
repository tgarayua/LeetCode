const countUniqueValues = (arr) => {
    
    if (arr.length === 0) return 0

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        let currentNum = arr[j]
        if (currentNum !== arr[i]) {
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(arr)
    return i + 1;
}

console.log(countUniqueValues([1,1,1,2,2,2,2,3,4,5,5,5,5,6]))