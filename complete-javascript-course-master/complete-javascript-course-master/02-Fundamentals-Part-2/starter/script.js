"use strict";
// Strict Mode: Learn to activate strict mode in JS start:
/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // interface keyword is reserved for strict mode
// const private = 521; // private keyword is reserved for strict mode
// const if = 23; // if is also reserved keyword in Normal and strict mode

*/
// Strict Mode: Learn to activate strict mode in JS End.

// Introduction to Fundamentals of Function in JavaScript: Start
/*
function logger(){
    console.log('My Name is Kunal.');
}
// Below line is known as invoking, calling or running the function in JS.
logger(); 

function fruitProcesor(apples, oranges){
    // console.log(apples, oranges);
    const juice  = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// to get the return value of function we can write following code 
const appleJuice = fruitProcesor(5,0);
console.log(appleJuice);
console.log(fruitProcesor(5,0));

const appleOrangeJuice = fruitProcesor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/

// Introduction to Fundamentals of Function in JavaScript: End

// Function Declaration VS Function Expression: Start
/*
// Function declaration

function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    return 2037 - birthYear //  return age;
}

const age1 = calcAge1(1997);
console.log(age1);

// Function Expression & Annoynomus function

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age1,age2);
*/

// Function Declaration VS Function Expression: End

// Arrow Function: Start

// Function Expression
/*
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); 

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(1991, 'Anand'));
console.log(yearUntilRetirement(1997, 'Rajan'));
*/

// Calling function inside function: Start

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcesor(apples, oranges){
//    const applePieces =  cutFruitPieces(apples);
//    const orangesPieces =  cutFruitPieces(oranges);

//     // console.log(apples, oranges);
//     const juice  = `Juice with ${applePieces} apple pieces and ${orangesPieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcesor(2,3));

// Calling function inside function: End

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else{
//         console.log(`${firstName} is already retired.`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearUntilRetirement(1991,'Anand'));
// console.log(yearUntilRetirement(1970,'Rajan'));

// Arrow Function: End

// Introduction to Arrays: Start
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// We can decalre array using two types:

// 1st type using Big bracket:

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// 2nd type: using the new Array() function

const y = new Array(1997, 1996, 1952);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['kunal', 'Anand'];

const kunal = ["Kunal", "Choudhary", 2021 - 1997, "Web Developer", friends];
console.log(kunal);
console.log(kunal.length);

// Excercise of Array:

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = new Array(1990, 1967, 2002, 2010, 2018);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

// Introduction to Arrays: End

*/

// Basic Array Operations(Methods): Starts
/*
const friends = ["Michael", "Steven", "Peter"];
// Add elements
console.log(friends);
console.log(friends.length);
const newlength = friends.push("Jay"); // Push function return the length of an array.
console.log(friends);
console.log(newlength);

friends.unshift("Jhon");
console.log(friends);

// Remove elements
friends.pop(); // Last element will be remove from array.
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove first elements from an Array.
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // include returns the Boolean and uses strict mode.
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log('You have friend called Steven.')
} else{
    console.log('Your Friend is not exists.')
}
// Basic Array Operations(Methods): End
*/

// Introduction to Objects: Start
/*
const kunalArray = [
    "Kunal",
    "Choudhary", 
    2021 - 1997, 
    "Web Developer",
    ['Jay', 'Rajan', 'Shivam']
];

const kunal = {
    firsrName: 'Kunal',
    lastName: 'Choudhary',
    age: 2021 - 1997,
    job: 'Web Developer',
    friends: ['Jay', 'Rajan', 'Shivam']
}

// The diffrence b/w Array and Obk=ject is that in an array we have to follow the
// order(index) of the array to get the data. But in Object we have all data with
// their respective label to get the data.

// Introduction to Objects: Ends

*/

// Dot vs. Bracket Notation: Starts
/*
const kunal = {
  firstName: "Kunal",
  lastName: "Choudhary",
  age: 2021 - 1997,
  job: "Web Developer",
  friends: ["Jay", "Rajan", "Shivam"],
};

console.log(kunal);

console.log(kunal.lastName);
console.log(kunal["lastName"]);

const nameKey = "Name";
console.log(kunal["first" + nameKey]);
console.log(kunal["last" + nameKey]);

// The main difference is that the dot operator is only retive the value
// But bracket is retive data as well as give the free hand to write any
// expressions.

// console.log(kunal.['last' + nameKey]); // This will not work.

const interestedIn = prompt(
  "What do you want know about Kunal? Choose between firstName,lastName, age and friends"
);
// console.log(kunal.interestedIn); // undefined
// console.log(kunal[interestedIn]);
if (kunal[interestedIn]) {
  console.log(kunal[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName, age and friends."
  );
}

kunal.location = "India";
kunal["instagram"] = "@KcDevelopers";
// console.log(kunal);

console.log(
  `${kunal.firstName} has ${kunal.friends.length} friends and his best friend is called ${kunal.friends[0]}.`
);
*/
// Dot vs. Bracket Notation: Ends

// Object Methods: Starts
/*
// if a function is attached with a Object is known as Method.
const kunal = {
  firstName: "Kunal",
  lastName: "Choudhary",
  birthYear: 1997,
  job: "Web Developer",
  friends: ["Jay", "Rajan", "Shivam"],
  hasDriverLicense: true,

  // calcAge: function(birthYear){
  //     return 2037 - birthYear;
  // }

  // calcAge: function(){
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    // console.log(this.age);
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "not"} driver license.`;
  },
};

console.log(kunal.calcAge());
console.log(kunal.age);
console.log(kunal.age);
console.log(kunal.age);

// Challenge

// Kunal is a 40 years old Web Developer, and he has not driver license.
console.log(kunal.getSummary());
*/
// Object Methods: Ends

// Iteration: The for Loop - Starts
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE

for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}`);
}
*/
// Iteration: The for Loop - Ends

// Looping Arrays, Breaking and Continuing - Starts
/*
const kunalArray = [
  "Kunal",
  "Choudhary", 
  2021 - 1997, 
  "Web Developer",
  ['Jay', 'Rajan', 'Shivam'],
  true
];

const types = [];

// console.log(kunalArray[0]);
// console.log(kunalArray[0]);
// ...
// console.log(kunalArray[4]);

for(let i = 0; i < kunalArray.length ; i++){

  // Reading from kunalArray
  console.log(kunalArray[i], typeof(kunalArray[i]));

  // Filling types array: Method 1
  // types[0] = 'string'
  // types[i] = typeof(kunalArray[i]);

  // Filling types array: Method 2
  types.push(typeof kunalArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020, 1997];
const ages = [];

for(let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < kunalArray.length ; i++){

  if(typeof kunalArray[i] !== 'string') continue;

  console.log(kunalArray[i], typeof(kunalArray[i]));
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < kunalArray.length ; i++){

  if(typeof kunalArray[i] !== 'number') continue;
  console.log(kunalArray[i], typeof(kunalArray[i]));
}

*/
// Looping Arrays, Breaking and Continuing - Ends

// Looping Backwards and Lopps in Loops - Starts
/*
const kunalArray = [
  "Kunal",
  "Choudhary", 
  2021 - 1997, 
  "Web Developer",
  ['Jay', 'Rajan', 'Shivam'],
  true
];

// 0,1,2,...,4
// 4,3,2...,0

for(let i = kunalArray.length - 1; i>=0; i--){
  console.log(i, kunalArray[i]);
}

for(let excersise = 1; excersise <= 3; excersise++){
  console.log(`----------- Starting Excercise ${excersise}`);

  for(let rep = 1; rep<=5; rep++){
    console.log(`Excersice ${excersise} : Lifting weights repitition ${rep}`);
  }
}
*/
// Looping Backwards and Lopps in Loops - Ends

// The while Loop - Starts
/*
// for(let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while(rep <= 10){
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...');
}
*/
// The while Loop - Ends