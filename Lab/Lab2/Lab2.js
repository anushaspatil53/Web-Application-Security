// Variables 
// --------------------------------------------------------
// Declare variables for the following:
//   Your full name.
//   Your age.

console.log("Hello world!");

console.log("Variables");
let name = "Anusha S P"
console.log(name);
var age = 24
console.log(age);

// Declare four variables without assigning values
var a,b,c,d  
// Declare four variables with assigning values
a="Hi "
b="Welcome"
c="to"
d="Websecurity"
console.log(a,b,c,d);
// Declare variables to store your first name, last name, marital status, country and age in multiple lines
// let first_name 
// let last_name 
// let marital_status
// let country
// let age
// Declare variables to store your first name, last name, marital status, country and age in a single line
var first_name, last_name, marital_status, country, age
// Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to browser console.
// Output:

// ```sh
// I am 25 years old.
// You are 30 years old.

// ``
var _myAge_=25
var _yourAge_=30
console.log("I am",_myAge_,"years old.\nYou are",_yourAge_,"years old.");


// Constant 
// ------------------------------------------------------------------------------
// Declare a variable using var, let, and const, and log their initial values to the console.
var varValue = "A"
let letValue = "hello"
const constValue = "6"
console.log("Before Reasigning");
console.log("var Variable:",varValue);
console.log("let Variable:",letValue);
console.log("const Variable:",constValue);

// Try reassigning values to each variable.
console.log("After Reasigning");
varValue="B"
console.log("var Variable:",varValue);
letValue="How are you"
console.log("let Variable:",letValue);
// constValue = "99"
// console.log("const Variable:",constValue);


// Data Types
// --------------------------------------------------------------------------
// Declare variables and assign string, boolean, undefined and null data types
// Whether you are a student (true/false).

// Log the values and their types to the console using typeof.
console.log("Data Types");
let pet = "Cat"
let isAnimal = true
let ownerName
let species = null
console.log("pet", pet, " and Type of Variable:", typeof(pet)); // String
console.log("Is Animal:", isAnimal, " and Type of Variable:", typeof(isAnimal)); // Boolean
console.log("ownerName:", ownerName, " and Type of Variable:", typeof(ownerName)); // Undefined
console.log("species:", species, "and Type of Variable", typeof (species)); // Null (typeof returns 'object')


// Comments
// --------------------------------------------------------------------
// Write a single line comment which says, _comments can make code readable_
// Write a multiline comment which says, _comments can make code readable, easy to use__and informative_

// Single line Comment
/* Multiline Comment
comments can make code readable,
easy to use,
and informative*/


/*Type Conversion
----------------------------------------------------------
Declare a variable price with the value "100".
Convert price to a number and log the result.
Convert price back to a string and log the result.*/
let money = "100"  //string
let moneyNumber = Number(money)  //number
console.log("Money: ",typeof(money),"Datatype of moneyNumber: ",typeof(moneyNumber))


/*Template Literals
------------------------------------------------------------
Create variables for your first name, last name, and favorite programming language.
Use template literals to display: Hi, I'm [first name] [last name], and my favorite language is [language].
Hint : \n \t */
let firstName = "Anusha"
let lastName = "Patil"
let favoriteLanguage = "Javascript"
let message = `Hi, I'm ${firstName} ${lastName}, \n and \t my favorite language is ${favoriteLanguage}`;
console.log(message);


/*Booleans
---------------------------------------------------------------------
Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===.
   Which are true or which are false ?
   1. 4 > 3
   1. 4 >= 3
   1. 4 < 3
   1. 4 <= 3
   1. 4 == 4
   1. 4 === 4
   1. 4 != 4
   1. 4 !== 4
   1. 4 != '4'
   1. 4 == '4'
   1. 4 === '4'*/
console.log("Booleans")
console.log("A truthy value is any value that is considered true when evaluated in a Boolean context.")
console.log(1);          // Number 1 is truthy
console.log("Hello");    // Non-empty string is truthy
console.log([1, 2, 3]);  // Non-empty array is truthy
console.log("A falsy value is one that is considered false when evaluated in a Boolean context.")
console.log(0);        // Zero is falsy
console.log("");       // Empty string is falsy
console.log(null);     // Null is falsy
console.log("Comparison Operators and Their Evaluation")
console.log("4>3",4>3) //true
console.log("4>=3",4>3) //true
console.log("4<3",4<3) //false
console.log("4<=3",4<=3) //false
console.log("4==4",4==4) //true
console.log("4===4",4===4) //true
console.log("4!=4",4!=4) //false
console.log("4!==4",4!==4) //false
console.log("4!='4'",4!='4') //false
console.log("4=='4'",4=='4') //true
console.log("4==='4'",4==='4') //false


/*Logical Operators
------------------------------------------------------------------------------
Which are true or which are false ?

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4') */
console.log("Logical Operators")
console.log("4 > 3 && 10 < 12",4 > 3 && 10 < 12); // true
console.log("4 > 3 && 10 > 12",4 > 3 && 10 > 12); // false
console.log("4 > 3 || 10 < 12",4 > 3 || 10 < 12); // true
console.log("4 > 3 || 10 > 12",4 > 3 || 10 > 12); // true
console.log("!(4 > 3)",!(4 > 3)); // false
console.log("!(4 < 3)",!(4 < 3)); // true
console.log("!(false)",!(false)); // true
console.log("!(4 > 3 && 10 < 12)",!(4 > 3 && 10 < 12)); // false
console.log("!(4 > 3 && 10 > 12)",!(4 > 3 && 10 > 12)); // true
console.log("!(4 === '4')",!(4 === '4')); // true