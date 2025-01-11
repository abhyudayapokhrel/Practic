// getters  and setters

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // setters
    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        } else {
            console.error("Invalid first name");
        }
    }
// this._firstName is a private variable that can only be accessed within the class
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        } else {
            console.error("Invalid last name");
        }
    }
    set age (newAge){
        if (typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        } else {
            console.error("Invalid age");
        }
    }

    // getters
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }   

}

let  abhyudaya = new Person("Abhyudaya", "Pokhrel", 18);

console.log(abhyudaya.firstName);
console.log(abhyudaya.lastName);
console.log(abhyudaya.age);