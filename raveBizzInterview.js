let arr = ['a',"b","c","d"]

// How many unique arrays can you make out of this arr

//swap
for (let i = 0; i < arr.length; i++) {
    let firstEle = arr[0]
    arr[0] = arr[i]
    arr[i] = firstEle
};

i = 0; [a,b,c,d]
i = 1; [b,a,c,d]
i = 2; [c,a,b,d]
i = 3; [d,a,b,c]
