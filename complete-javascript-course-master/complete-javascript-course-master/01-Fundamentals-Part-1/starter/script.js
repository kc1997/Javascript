/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Kunal');
console.log(23);

let firstName = "Kunal";

console.log(firstName);

*/

// Data Types Start:
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Kunal');


javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);
*/

// Data Types End:

/*
// Vaiables let, const and var: Start
let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1990;
// console.log(birthYear);

// const job;

var job = "Web Developer";

job = 'Developer';

// Vaiables let, const and var: End

*/

/*

// Math Operators start:
const now = 2037;
const ageKunal = now - 1997;
const ageAnand = now - 2017;
console.log(ageKunal, ageAnand);

console.log(ageKunal * 2, ageKunal/10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Kunal";
const lastName = "Choudhary";
console.log(firstName + ' ' + lastName);

// Math Operators start:
*/

/*
// Assignment Operators start:
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x+1 = 101
x--; //x = x - 1 = 100
x--; //x = x - 1 = 99
console.log(x);
// Assignment Operators end:


/*
// Comparison Operator start:
console.log(ageKunal > ageAnand); // >, <, >=, <=
console.log(ageAnand > ageKunal);
console.log(ageAnand >= 18);

const isFullAge = ageAnand >= 18;
// console.log(isFullAge);

console.log(now - 1991 > now - 2018);

// Comparison Operator end:

*/

/*

// Operator Precidence
const now = 2037;
const ageKunal = now - 1997;
const ageAnand = now - 2017;

console.log(now - 1991 > now - 2018);

let x, y;

x = y;

x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const avgAge = (ageKunal + ageAnand) / 2;
console.log(ageKunal, ageAnand, avgAge);

*/

// Strings and Template Literals start
/*
const firstName = "Kunal";
const job = "Web Developer";
const birthYear = 1997;
const year = 2037;

const kunal =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(kunal);

const kunalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kunalNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple line \n\
');

console.log(`String with
multiple
line...
`);

// Strings and Template Literals end

*/

// Taking Decision: if-else statement start
/*
const age = 4;
// const isOldEnough = age >= 18;

if(age >= 18){
    console.log('Kunal can start his driving license 🚗');
}
else{
  const yearLeft = 18 - age;
  console.log(`Kunal is too young. Wait another ${yearLeft} years :)`);
}

const bithYear = 2021;

let century;
if(bithYear <= 2000){
 century = 20;
} else{
  century = 21;
}

console.log(century)

*/
// Taking Decision: if-else statement end


// Type Conversion and Coercion Start
// Type Conversion 
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Kunal'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type Coercion 
// console.log('I am ' + 23 + ' years old.');
// console.log('I am ' + '23' + ' years old.');
// console.log('23' - '10' - 3); //Automatic converts the string into numbers when we substract(Due to presendence)
// console.log('23' + '10' + 3); //Treats as String with + sign due to presendence
// console.log('23' * '2'); // Converts number into string
// console.log('23' / '2'); // Converts number into string
// console.log('23' > '18');

// // Guess the output task
// let n = '1' + 1;
// n = n-1;
// console.log(n);

// let x = '10' - '4' - '3' - 2 + '5';
// console.log(x);

// Type Conversion and Coercion End

// Truthy and Falsy values start

// 5 falsy values: 0, '', undifined, NaN and false

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean('Kunal'));
// console.log(Boolean({}));

// const money = 0;
// if(money){
//   console.log("Don't Spend money at all :)");
// } else{
//   console.log("You should get a job..");
// }

// let height; //Height is undefined
// if(height){
//   console.log("YAY! Height is defined.");
// }
// else{
//   console.log("Height is undefined.");
// }

// Truthy and Falsy values ends

// Equality Operators: == vs === start

// const age = '18';
// if(age === 18){
//   console.log("You just became an adult :D (strict)");
// }

// if(age == 18){
//   console.log("You just became an adult :D (loose)");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);2323
// // if(favourite == 23){
// //   console.log('Cool 23 is an amazing number! :D (loose)');
// // }

// if(favourite === 23){
//   console.log('Cool! 23 is an amazing number! :D (strict)');
// } else if(favourite === 7){
//   console.log('7 is also a cool number');
// } else if(favourite === 33){
//   console.log('33 is also a cool number');
// }
// else{
//   console.log('Number is not 23 or 7 or 33');
// }

// if(favourite !== 23){
//   console.log('Why not the 23.');
// }

// Equality Operators: == vs === end

// Logical Operators: Start 

/*

const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence); 

const shouldDrive = hasDriversLicence && hasGoodVision;

// if(shouldDrive){
//   console.log('Kunal is able to drive!');
// } else{
//   console.log('Someone else should drive...');
// }

const isTired = true; //C
console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if(hasDriversLicence && hasGoodVision && !isTired){
  console.log('Kunal is able to drive!');
} else{
  console.log('Someone else should drive...'); 
}
*/
// Logical Operators: End

// The switch statement: Start
/*
const day = 'sunday';

switch(day){
  case 'monday': //day === 'monday'
    console.log('Plan my course structure.');
    console.log('Go to office..');
    break;
  case 'tuesday':
    console.log('Prepare the theory videos.');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Work on the CivilGEO website.');
    break;
  case 'friday':
    console.log('Record the video..');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Watch the JavaScript videos and Learn how to code.');
    break;
  default:
    console.log('Not a valid day.')
}


if(day === 'monday'){
  console.log('Plan my course structure.');
  console.log('Go to office..');
}

else if (day === 'tuesday'){
  console.log('Prepare the theory videos.');
}

else if (day === 'wednesday' || day === 'thursday'){
  console.log('Work on the CivilGEO website.');
}

else if(day === 'friday'){
  console.log('Record the video..');
} 

else if(day === 'saturday' || day === 'sunday'){
  console.log('Watch the JavaScript videos and Learn how to code.');
}

else{
  console.log('Not a valid day.');
}
*/
// The switch statement: End

// The conditional(Ternary) operator: Start
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine.') :
console.log('I like to drink water.');

const drink = age >=18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age>=18){
  drink2 = 'wine';
} else{
  drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`);
*/
// The conditional(Ternary) operator: End
