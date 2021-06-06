'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Destructuring Arrays: Starts

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before ES6
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // Before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 enhanced
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your decilious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// SETS: Starts

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]); // define a SETS
console.log(orderSet); // display SETS in console

console.log(new Set('Kunal')); // Seperation of an string in sets
console.log(new Set()); // display SETS in console

console.log(orderSet.size);

console.log(orderSet.has('Pizza')); // to check wheather element is exist or not(rerturn as Boolean value)
console.log(orderSet.has('Bread')); // to check wheather element is exist or not(rerturn as Boolean value)

orderSet.add('Garlic Bread'); // to add an element
orderSet.add('Garlic Bread'); // check add same element again
orderSet.delete('Risotto'); // to delete a particular element
// orderSet.clear(); // clear all the elements from SETS
console.log(orderSet); // display SETS in console
// console.log(orderSet[0]); // undefined

//Iterate the SETS
for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; // Array of all staff 
// convert Array into an SETS
// const staffUnique = new Set(staff); 

// Create array into SETS by enclosing  [], and unpack converted arrays using spread operator convert SETS into Array
const staffUnique = [...new Set(staff)]; 
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('KunalChoudhary').size);

// SETS: Ends

// Looping Objects: Object Keys, Values and Entries(Starts)
/*
// property NAME
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are Open on ${properties.length} days:`;

for (const day of properties){
  openStr+= `${day}, `;
}

console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire Object

const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
// Looping Objects: Object Keys, Values and Entries(Ends)

// Optional Chaining(?.): Starts
/*
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// WITHOUT optionl chaning
// console.log(restaurant.openingHours.mon.open);

// WITH optionl chaning
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example 
const days =  ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for(const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'closed'; // getting closed on sat due to 0 hours
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // Resolve using NULLISH Colacing operator
  console.log(`On ${day}, we open at ${open}`);
  // const close = restaurant.openingHours[day]?.close;
  // console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist!');

// Arrays
const users = [
  {name: 'Kunal',email: 'in.kunalchoudhary@gmail.com'}
];
console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('User array empty');

// if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// console.log(restaurant.openingHours.mon.open);
*/
// Optional Chaining(?.): Ends

// Looping Arrays: The for-of Loop (Starts)
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/
// Looping Arrays: The for-of Loop: (Ends)
/*
// The Nullish and Coalescing Operator(??): Starts
restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10
console.log(guest);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
// The Nullish and Coalescing Operator(??): Starts
/*
////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('---- OR ----');
// Use ANY data types , return ANY data types, short-circuting
console.log(3 || 'Kunal');
console.log('' || 'Kunal');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests: 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);

console.log('---- AND ----');
console.log(0 && 'Kunal');
console.log(7 && 'Kunal');

console.log('Hello' && 23 && null && 'Kunal');

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// Short Circuiting (&& and ||)
*/
/*
///////////////////////////////////////////
// Rest Patterns and Parameters

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
// Spread Operator: Starts

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iteratbles: arrays, strings, maps, sets. NOT objects

const str = 'Kunal';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Choudhary`);

// Real-world example
const ingredients = [
// prompt('Let\'s make pasta! Ingredients 1?'), 
// prompt('Ingredients 2?'), 
// prompt('Ingredients 3?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects 
const newReasturant = {foundedIn: 1980, ...restaurant, founder: 'Hariharan'};
console.log(newReasturant);

const restaurantCopy  = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Spread Operator: Ends
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});



// Destructuring Objects: Starts

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
// let c = 888;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// Destructuring Objects: Ends
*/

// Destructuring Arrays: Starts
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main,secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);

// console.log(starter, mainCourse);

console.log(restaurant.order(2, 0));

// Nested destructring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
// Destructuring Arrays: Ends
