//----- Exercise #1
/*
Write a function that parses through the below object and displays 
all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))
console.log(Object.values(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = function(hair_color, weight){
        console.log(`My name is ${'this.name'}, I am ${'this.age'}
        and have ${hair_color} and weigh ${weight} pounds`);

        return 'returned value'
    }
}
let peep = new Person('Blair', 32)
console.log(peep.printInfo('purple', 'unknown'))
// Create another arrow function for the addAge method that takes a single parameter

// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function bigWord(){
    const words = 'some awesome words here';
    if(words > 10) {
        result = 'big words';
    }else{
        result = 'small numbers'
    }

}
console.log(bigWord)
//CODEWARS #1
//Summation
//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.

function summation(num) {
    return num * (num + 1) / 2
  }


//CODEWARS #2
function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }