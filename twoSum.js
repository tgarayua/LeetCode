array = [2,7,11,15]
goal = 9

const twoSum = () => {
    let numberMap = new Map();

    for (let i = 0; i < array.length; i++) {
        el = array[i]
        
        if(numberMap.has(goal - el))
            return [i, numberMap.get(goal - el)];
        else numberMap.set(el, i)
    }
    console.log(goal)
    return [];
};

twoSum(array, goal);