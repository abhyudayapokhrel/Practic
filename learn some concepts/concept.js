'use strict';

// concepts of array methods
// 1. forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

// objects in  js

let person= {};
person.name = 'John';   
person.lastName = 'Doe';   
person.age = 50;

console.table(person);


// event bubbling in js
// events are in 3 phases: catching, target, bubbling
// eventcapturing: from Root to target
// event bubbling: from target to root
// event target: the element that triggered the event

//example:
// Parent element event listener
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent DIV Clicked");
  }, true);  // Capturing phase (true)
  
  // Child element event listener
  document.getElementById("child").addEventListener("click", function() {
    console.log("Button Clicked");
  });
  
  // Parent event listener in bubbling phase
  document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent DIV Bubbling");
  }, false);  // Bubbling phase (false)
  

// oop in javascript

// 1. constructor function
 // arrow function cannot be used as constructor function because it does not have its own this keyword
  const Person = function(firstName, birthYear) {

    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // methods
    // never create a method inside a constructor function, because it will be created in every object
    // this.calcAge = function() {
    //   console.log(2037 - this.birthYear);
    // };
  };

  const Housing = function(type, location, price) { 
    this.type = type;
    this.location = location;
    this.price = price;

    console.log(
      `This ${this.type} is located in ${this.location} and costs ${this.price}`
    );
  };

  const BABAKILLA = new Housing('apartment', 'Lalitpur', 2000000);

  const john = new Person('Ram', 1961);

  new Person('John', 1990);

  // first New() is  created, an empty object is created  
  // then function is called, this = {} i.e empty object
  // {} is linked to prototype
  // function automatically returns the object


  // prortotype
  // every function in js has a property called prototype
  Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
  };

  Person.prototype.species = `Homo Sapiens`;

  console.log(john.__proto__);
  console.log(john.prototype); // undefined
  console.log(john.species);

  john.calcAge();

  console.log(john.__proto__ === Person.prototype); // true

  console.log(Person.prototype.isPrototypeOf(john)); // true

  // we can put new methods in prototype
  let arr1 = [7,7,3,2,1,3,1,6];

  Array.prototype.unique = function() {
    return [...new Set(this)];
  };

  console.log(arr1.unique());


  Array.prototype.great = function() {
    return this.filter((el, i, arr) => el > arr[i+1]);
  };

  console.log(arr1.great());

  // but the above method is not recommended because it can cause problems in future updates of js or libraries that we use in our project

  // es6 classes
  // class expression
  const PersonCl = class {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }
  };

  const jessica = new PersonCl('Jessica', 1996);

  console.log(jessica);

  // class declaration

  class PersonCl1 {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    }

    calcAge() {
      console.log(2037 - this.birthYear);
    }

    greet() {
      console.log(`Hey ${this.firstName}`);
    }
  }

  const jessica1 = new PersonCl1('Jessica', 1996);

  console.log(jessica1);

  console.log(jessica1.calcAge()); 
  console.log(jessica1.greet());

  console.log(jessica1.__proto__ === PersonCl1.prototype); // true


  // us vanity number plate check function

  // conditions;
  // 1. the number plate should be 5-7 characters long
  // 2. the first 3 characters should be alphabets
  // 3. the last 4 characters should be numbers
  // 4. the number plate should be in uppercase

  const checkVanityNumberPlate = function(numberPlate) {
  
    if (numberPlate.length <5 || numberPlate.length > 7) {
      return false;
    }

    const letters = /^[A-Za-z]+$/;
    
    if (!numberPlate.slice(0,3).match(letters)) {
      return false;
    }

    const numbers = /^[0-9]+$/;

    if (!numberPlate.slice(-4).match(numbers)) {
      return false;
    }

    return numberPlate === numberPlate.toUpperCase();

  };

  console.log(checkVanityNumberPlate('ABC1234'));


  // inheritance between classes
  // constructor function
  const Person1 = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  Person1.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
  };

  const Student = function(firstName, birthYear, course) {
    Person1.call(this, firstName, birthYear);
    this.course = course;
  };

  Student.prototype = Object.create(Person1.prototype);
  Student.prototype.constructor = Student;


  // getters and setters

  class Person2 {
    constructor(name) {
      if (name.includes(' ')) {
        this._fullName = name;
      } else {
        alert(`${name} is not a full name`);
      }
    }
  
    set fullName(name) {
      if (name.includes(' ')) {
        this._fullName = name;
      } else {
        alert(`${name} is not a full name`);
      }
    }
  
    get fullName() {
      return this._fullName;
    }
  }
  
  let abhyudaya = new Person2('Abhyudaya Pokhrel');
  console.log(abhyudaya.fullName); // Output: Abhyudaya Pokhrel
  
  abhyudaya.fullName = 'John Doe';
  console.log(abhyudaya.fullName); // Output: John Doe
  
  abhyudaya.fullName = 'John'; // Alert: John is not a full name

  // this should be used to avoid infinite loops in the code now we can use this.fullName instead of this._fullName because


  // static and inherit methods.

  class Person3 {
    constructor(name) {
      this.name = name;
    }
  
    static hey() {
      console.log('Hey there 👋');
    }
  }

  // in above code hey() is a static method, it is not inherited by the objects created by the class but can be called by the class itself like Person3.hey()

  
  // inheritance within classes
  // 1. by constructor function
  
  const Person4 =  function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  Person4.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
  }

  const Student1 = function(firstName, birthYear, course) {
    // Person4.(firstName, birthYear); this will not work because it will create a new object and the properties of the object will not be inherited as this keyword will point to the new object

    // so we have to manually set the this keyword to the object that we want to inherit by call method and passing 1st argument as this and rest of the arguments as the arguments of the parent class
    Person4.call(this, firstName, birthYear);
    this.course = course;
  }

  // exactly here:
  Student1.prototype = Object.create(Person4.prototype);
  // before adding any method to the prototype we have to set the constructor property of the prototype to the constructor function of the child class

  Student1.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
  };

  const shyam = new Student1('Shyam', 1990, 'Computer Science');

  shyam.calcAge();// calcAge is inherited from Person4

  Student1.prototype.constructor = Student1;  // this is done to set the constructor property of the prototype to the constructor function of the child class
  
  
    // coding challange 2:
  
    // 1. Re-create challenge 1, but this time using an ES6 class (call it 'CarCl')
    // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
    // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
    // 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
  
    class CarCl{
      constructor(make, speed){
        this.make = make;
        this.speed = speed;
      }
      
      accerlate(){
        this.speed +=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
  
      brake(){
        this.speed -=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
  
      get speedUS(){
        return this.speed / 1.6;
      }
  
      set speedUS(speed){
        this.speed = speed * 1.6;
      }
    }
  
  
    const ford = new CarCl('Ford', 120);
    console.log(ford.speedUS);
    ford.accerlate();
  
  

  // coding challange 3

  // 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
  // 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
  // 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going
  // at 140 km/h, with a charge of 22%'
  // 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
  // you 'accelerate'! Hint: Review the definiton of polymorphism 
  // 😉
  // Test data:
  // Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
  

  // class EV extends CarCl{

  // }

  const EV = function(make, speed, charge){
    CarCl.call(this, make, speed);
    this.charge = charge;
  };

  // link prototypes:
  EV.prototype = Object.create(CarCl.prototype);

  EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
  }

EV.prototype.accerlate = function(){
  this.speed +=20;
  this.charge -=1;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

  const tesla = new EV('Tesla', 120, 23);
  tesla.chargeBattery(90);

  tesla.brake();
  tesla.accerlate(); // it's own accelerate method is called because of polymorphism -- child class overwrites the parent class method

  //ES6  method

  class StudentCl2 extends PersonCl1 {
    constructor(firstName, birthYear, course) {
      super(firstName, birthYear);// this should be called first or else 'this' keyword will not work
      this.course = course;
    }
  
    introduce() {
      console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
    }
  } 