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