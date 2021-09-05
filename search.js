//given an array of sorted integers and a target value
//return where in array the target value is (its index value)

console.time(`test 1`)

const search = (array,val) => {
    console.log(`-> Inputs <-`);
    console.log(`array:`, array, `val:`, val);

    let firstIndex = 0;
    let lastIndex = array.length - 1;

    while (firstIndex !== lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        let firstValue = array[firstIndex];
        let middleValue = array[middleIndex]
        let lastValue = array[lastIndex]
    
        if (firstValue === val) {
            return firstIndex;
        } else if (middleValue === val) {
            return middleIndex;
        } else if (lastValue === val) {
            return lastIndex;
        } else if (middleValue < val) {
            firstIndex = middleIndex;
        } else if (middleValue > val) {
            lastIndex = middleIndex;
        }
        
        console.log(`firstValue:`, firstValue, `middleValue:`, middleValue, `lastValue:`, lastValue, `val:`, val);
        console.log(`firstIndex:`, firstIndex, `middleIndex:`, middleIndex, `lastIndex:`, lastIndex, `val:`, val);
    }
    
    return null;
}

const array = [1,6,7,8,9,10,11,12]
const val = 
console.log(search(array,val))

console.timeEnd(`test 1`)