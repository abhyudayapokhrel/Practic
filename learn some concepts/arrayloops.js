let arr = [1, 2, 3, 4, 5];

for (const keys in arr) {
    console.log(keys);       // output: 0,1,2,3,4
}

arr.forEach((val)=>{
    console.log(val);    // output: 1,2,3,4,5
})

// for in interates over keys which forEach iterates over values