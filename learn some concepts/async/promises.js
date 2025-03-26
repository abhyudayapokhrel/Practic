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

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username: "Abhyudaya", email:"pokhrelabhyudaya@gmail.com"})
        }else{
            reject('ERROR ')
        }
    }, 1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username)=>{console.log(username);})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log('Promise is either resolved or rejected'))

