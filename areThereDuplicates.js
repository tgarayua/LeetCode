console.time("My code")
// let arr = [1,2,3,4,5,6,7,8,9,7]; // output: false
let arr = ['a','d','a','c','b','e','f','g','h','i','j','k','l','m','n','o','p','q','r','x','y','z','y'] // output: true

const areThereDuplicates = (arr) => {
    console.log(`-> Input <-`);
    console.log(`arr:`, arr);

    let sortedArr = arr.sort()
    let currentIndex = 0;
    let nextIndex = currentIndex + 1;
    
    for (let i = 0; i < sortedArr.length; i++) {
        let currentEleOfArr = sortedArr[currentIndex];
        let nextEleOfArr = sortedArr[nextIndex];

        if (currentEleOfArr !== nextEleOfArr) {
            currentIndex++;
            nextIndex++;
        } else if (currentEleOfArr === nextEleOfArr) {
            return true;
        }

        console.log(`i:`, i, `sortedArr:`, sortedArr, `currentIndex:`, currentIndex, `nextIndex:`, nextIndex, `currentEleOfArr:`, currentEleOfArr, `nextEleOfArr:`, nextEleOfArr);    // for loop over arr array
    }
    


    return false;
}

console.log(areThereDuplicates(arr));
console.timeEnd("My code")