console.log("Connected to the console");

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//FOR LOOPS

// e.g. for (let i = 0; i < 5; i++){ }
// initialExpression;conditionExpression;incrementExpression)
// i = index (usually zero)

//initialExpression: let i = 0 ---- this is executed once before the loop begins, sets index variable to 0
//needs to be let as is keeps changing

//Exercise 2

console.log("----exercise 2----");

for (let i = 11; i > 0; i--) {
  console.log(i);
}

// -- = decrement down by 1
// ++ = increment up by 1

//Exercise 3

console.log("----exercise 3----");

const myWord = "responsiveness";

for (let i = 0; i < myWord.length; i++) {
  console.log(myWord[i]);
}

//Exercise 4

console.log("----exercise 4----");
const foods = ["salad", "pie", "pickles", "scones"];

for (let i = 0; i < foods.length; i++) {
  console.log(`I like ${foods[i]}`);
}

// FOR OF LOOPS
// loop iterates over the elements of an array

console.log("_____FOR OF LOOPS____");

const cars = ["tesla", "honda", "aldi"];

for (const car of cars) {
  console.log(car);
}

//Exercise 5

console.log("Exercise 5");

const someFoods = ["salad", "pie", "pickles", "scones"];

for (let food of someFoods) {
  console.log(`I like ${food}`);
}

//PROMPTS
// =    prompt()

//  example  //

//message is an optional message which is displayed to the user
// default string is the default value of the input box

//prompt returns a string, even if you enter another data type

// Exercise 6

// parseInt(prompt("string"))
// parseInt = Integer, makes it a number

console.log("-----Exercise 6-----");

//const age = parseInt(prompt("Enter your age"));
// console.log(typeof age);

// if (isNaN(age)) {
//   console.log("Please enter a number!");
// } else if (parseInt(age) >= 18) {
//   console.log("You CAN vote!");
// } else {
//   console.log("No voting for you :(");
// }

// while loops
//take a guess game

// let guess;
// const secretNumber = 3;
// while (guess != secretNumber) {
//   guess = prompt("What's your guess!");
//   console.log(`You guessed ${guess}`);
//   if (guess == secretNumber) console.log("You guessed correct!");
// }

// Breaks and Continuations

//breaks in while loops

let x = 0;
while (true) {
  if (x === 3) {
    console.log("x is now 3");
  }
  if (x === 10) {
    console.log("x is now 10");
  }
  if (x === 15) {
    console.log("x is now 15");
    break;
  }
  x++;
}

// Exercise 7

console.log("-----Exercise 7-----");
const string = "Hell@ the#e";

// index stating at 0, when i is less then length of string, incrememnt by 1
// if string[i] equal to "symbol" OR string[i] equal to "symbol" (continued to include all symbols), then console.log error message and BREAK out of loop.
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
  if (
    string[i] == "@" ||
    string[i] == "!" ||
    string[i] == "#" ||
    string[i] == "$"
  ) {
    console.log("ERROR!");
    break;
  }
}

// for in loop = iterates over the properties of an object

console.log("For In Loops--------------");

const student = {
  name: "Rob",
  age: 5,
  isAdmin: true,
};

for (const key in student) {
  console.log(key);
}
console.log(student.name);
console.log(student["name"]);

//Exercise 9

const user = {
  name: "John",
  age: 50,
  isAdmin: true,
};

for (const key in user) {
  if (key === "age") {
    console.log(user["age"]);
    break;
  }
  console.log(key);
}
