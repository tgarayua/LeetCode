//given an array of sorted integers and a target value
//return where in array the target value is (its index value)

const search = (array,val) => {
    console.log(`-> Inputs <-`);
    console.log(`array:`, array, `val:`, val);

    let firstIndex = 0;
    let lastIndex = array.length - 1;
    
    console.log(`-> Before <-`);
    // console.log(`firstIndex:`, firstIndex, `lastIndex:`, lastIndex, `middleIndex:`, middleIndex, `val:`, val);
    // console.log(`firstValue:`, firstValue, `lastValue:`, lastValue, `middleValue:`, middleValue, `val:`, val);
    
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        let middleValue = array[middleIndex];
        console.log(`-> While Loop <-`);
        if (middleValue > val) {
            console.log(`-> if statement 1 <-`);
            lastIndex = middleIndex - 1;
        } else if (middleValue < val) {
            console.log(`-> if statement 2 <-`);
            firstIndex = middleIndex + 1;
        } else if (middleValue === val) {
            console.log(`-> if statement 3 <-`);
            return middleIndex
        }
    }
    console.log(`-> After <-`);
    //     console.log(`firstIndex:`, firstIndex, `lastIndex:`, lastIndex, `middleIndex:`, middleIndex, `val:`, val)
    // console.log(`firstValue:`, firstValue, `lastValue:`, lastValue, `middleValue:`, middleValue, `val:`, val)

    console.log(`-> Global Variable <-`);
    // console.log(`firstIndex:`, firstIndex, `lastIndex:`, lastIndex, `middleIndex:`, middleIndex, `val:`, val)
    // console.log(`firstValue:`, firstValue, `lastValue:`, lastValue, `middleValue:`, middleValue, `val:`, val)

    return false;
}

const array = [1,6,7,8,9,10,11]
const val = 10
console.log(search(array,val))