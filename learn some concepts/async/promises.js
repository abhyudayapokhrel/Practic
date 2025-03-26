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


// Async Await in JS

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error= true;
        if(!error){
            resolve({username: "JavaScript", email:"js@js.com"})
        }else{
            reject('ERROR ')
        }
    }, 1000)
})

 // consumed by async await this time rather than .then

 async function consumedPromiseFive() {
    try{
    const response = await promiseFive;
    console.log(response)
    }
    catch(error){
        console.log(error)
    }
 }

 consumedPromiseFive();


 async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log("E:", error);
    }
 }

 getAllUsers();

// same in .then format would be:

// fetch returns promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console/log(data)
})
.catch((error)=> console.log(error))

