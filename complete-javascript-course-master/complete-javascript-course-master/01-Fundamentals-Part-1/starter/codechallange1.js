/////////////////////////////////
// Coding Challenge #1

/* 
Marks and Jhon are trying to compare their BMI(Body Mass Index), 
which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and Jhon's mass and height in
variables.
2. Calculate both their BMIs using the formula (you
can even implement both versions)
3. Create a boolean varaible 'markHighierBMI'
containing information about wheather Mark has
higher BMI than Jhon.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
Jhon weights 92 kg is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
Jhon weights 85 kg and is 1.76 m tall.


*/
// Solution: 

// const massMark = 78;
// const heightMark = 1.69;

// const massJhon = 92;
// const heightJhon = 1.95;

const massMark = 95;
const heightMark = 1.88;

const massJhon = 85;
const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);

const markHigherBMI = BMIMark > BMIJhon;

console.log(BMIMark, BMIJhon, markHigherBMI);