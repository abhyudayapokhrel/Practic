// takes callback functions
const promiseOne = new Promise ((resolve, reject)=>{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async Task Completed");
        resolve(); // now connected to 'then'
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Completed");
})

new Promise ((resolve, reject)=>{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async Task Completed");
        resolve(); // now connected to 'then'
    }, 1000);
}).then(function(){
    console.log("Async 2 Resolved");
})


const promiseThree = new Promise ((resolve, reject)=>{
    setTimeout(function(){
        resolve({username: "Abhyudaya", email:"pokhrelabhyudaya@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

