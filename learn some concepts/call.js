 function setUsername(username){

// let complex db calls
    this.username = username;
    console.log("called");
    
 }

 function createUser (username, email, password){
    setUsername.call(this, username); // holds reference before it is removed from call stack
    // "this" passed in call gives their own context rather than using another function's. 
    this.email = email;
    this.password = password;
 }

 const abhyudaya = new createUser("abhyudaya", "pokhrelabhyudaya@gmail.com", "********");
 comsole.log(abhyudaya);