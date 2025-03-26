fetch('https://api.github.com/users/abhyudayapokhrel')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));