'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     console.log(firstName);

//     function printAge(){
//         let output = `${firstName} You are ${age} year old, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var milenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName  = 'Steven';

//             // Reasigining outer scope's variable 

//             const output = 'NEW OUTPUT!';

//             const str = `Oh, and you're a Milenial, ${firstName}`;
//             console.log(str);

//             function add(a,b){
//                 return a + b;
//             }


//             // console.log(add(2,3));
//         }
//         // console.log(str);
//         console.log(milenial);
//         // console.log(add(2,3));
//         console.log(output);
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Kunal';
// calcAge(1991);
// // console.log(age);
// // printAge();

// const myName = 'Kunal';

// Temporal Dead Zone (TDZ), LET AND CONST & Functions

// if(myName === 'Kunal'){
//     console.log(`${myName} is a ${job}`);
//     const age = 2037 - 2021;
//     console.log(age);
//     console.log(x);
// }

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Kunal';
// let job = 'Developer';
// const year = 1997;

// Function

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b){
//     return a+b;
// }

// const addExpr  = function (a, b){
//     return a+b;
// }

// var addExpr  = function (a, b){
//     return a+b;
// }

// const addArrow = (a,b) => a+b;

// var addArrow = (a,b) => a+b;

// Example

// console.log(undefined);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// var x = 1;

// let y = 2;

// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This keyword in Practice: Start

// console.log(this);

// const calAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this);
// };

// calAge(1997);

// const calAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     // console.log(this);
// };

// calAgeArrow(1997);

// const kunal = {
//     year: 1997,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };

// kunal.calcAge();

// const amit = {
//     year: 2019,
// };

// amit.calcAge = kunal.calcAge;

// amit.calcAge();

// const f = kunal.calcAge;
// f();

// This keyword in Practice: Ends

// Regular Functions VS Arrow Functions: Starts

// var firstName  = 'Amit';

// const kunal = {
//     firstName: 'Kunal',
//     year: 1991,
//     calcAge: function(){
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // const self = this; // self or that
//         // const isVinit = function (){
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996);
//         // };

//         // Solution 2

//         const isVinit = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };

//         isVinit();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`)
//     },
// };

// kunal.greet();
// kunal.calcAge();

// // Arguments Keywords

// const addExpr  = function (a, b){
//     console.log(arguments);
//     return a+b;
// }

// addExpr(2,5,18,10);

// var addArrow = (a, b) => {
//     console.log(arguments); // Arguments is a reserved keywords in JavaScript
//     return a + b;
// };

// addArrow(2, 5, 85);

// Regular Functions VS Arrow Functions: Ends

// Peimitive VS Obejcts (PRIMITIVE VS REFERENCE TYPES) : Starts

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Kunal',
//     age: 30,
// }

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

// Peimitive VS Obejcts (PRIMITIVE VS REFERENCE TYPES) : Ends


// Peimitive VS Obejcts in Practice: Starts


// Primitive types

// let lastName = 'Choudhary';
// let oldLastName = lastName;
// lastName = 'Jha';
// console.log(lastName, oldLastName);

// Reference types

// const sita = {
//     firstName: 'Sita',
//     lastName: 'Jha',
//     age: 27,
// };

// const marriedSita = sita;

// marriedSita.lastName = 'Mishra';

// console.log('Before Marriage: ', sita);
// console.log('After Marriage: ', marriedSita);

// marriedSita = {};

// copying objects

// const sita2 = {
//     firstName: 'Sita',
//     lastName: 'Jha',
//     age: 27,
//     family: ['Sohan', 'Raman'],
// };

// const sitaCopy = Object.assign({}, sita2);

// sitaCopy.lastName = 'Mishra';

// sitaCopy.family.push('Mary');
// sitaCopy.family.push('John');

// console.log('Before Marriage: ', sita2);
// console.log('After Marriage: ', sitaCopy);

// Peimitive VS Obejcts in Practice: Ends

