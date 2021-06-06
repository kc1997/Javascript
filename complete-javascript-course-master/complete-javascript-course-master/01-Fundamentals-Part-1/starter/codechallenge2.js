// Coding challenge #2

/*

Use the BMI example from the challange #1, and the code you already wrote,
and improve it.

1. Print a nice output to the console, saying who has
the higher BMI. The message can be either "Mark's BMI
is higher than Jhon's!" or Jhon's BMI is higher than
Mark's!"

2. Use a template string to include the BMI values
in the outputs. Example: "Marks BMI (28.3) is higher than Jhon's (23.9)!"

HINT: Use an if/else statement

*/

const massMark = 78;
const heightMark = 1.69;

const massJhon = 92;
const heightJhon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;

// const massJhon = 85;
// const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
// console.log(BMIMark);
const BMIJhon = massJhon / (heightJhon * heightJhon);
// console.log(BMIJhon);

if(BMIJhon > BMIMark){
    console.log(`Jhon's BMI (${BMIJhon}) is higher than Mark's BMI (${BMIMark})`);
} else{
    console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJhon})`);
}