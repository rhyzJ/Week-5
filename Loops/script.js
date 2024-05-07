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

const age = parseInt(prompt("Enter your age"));
console.log(typeof age);

if (isNaN(age)) {
  console.log("Please enter a number!");
} else if (parseInt(age) >= 18) {
  console.log("You CAN vote!");
} else {
  console.log("No voting for you :(");
}

