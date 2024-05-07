console.log("Connected");

//if Statement

if (1 === 1) {
  console.log("The condition is true");
}

let age = 18;
if (age >= 18) {
  console.log("You can drink");
}

//else statement

if (age >= 18) {
  //greater than or equal to
  console.log("You can drink alcohol in NZ");
} else {
  console.log("You cannot drink alcohol in NZ");
}

//exercise to practice if & else
let digit = 0;
if (digit > 0) {
  console.log("This number is postive");
} else if (digit === 0) {
  //else if when the age/variable can be exaclty right
  console.log("This number is zero");
} else {
  console.log("This is not a number");
}

//exercise 2

const myString = "apple";
if (myString[0] === "a") {
  console.log("True");
} else {
  console.log("False");
}

// Ternary Operator
// often used as a shorthand for if-else statement
// first part is the condition ~ either true or false
// ? section ~ anything after the question mrk will execute as true
// : section ~ anything after the : will execute as false

//Exercise for ternary operator

const word = "1234567891";
console.log(word);
word.length > 10
  ? console.log("the word is long")
  : console.log("the world is not long. It is short!");

// The AND operator &&

const isSunny = true;
const temperature = 28;

if (isSunny && temperature > 25) {
  console.log("It's a hot and sunny day");
} else {
  console.log("its not hot and sunny");
}

//the if statements body will only be executed if both conditions are true
// if either condition is calse, the else block will be executed

// the OR operator ||

const hasPremiumSub = false;
const hasFreeTrial = true;

if (hasPremiumSub || hasFreeTrial) {
  console.log("You have access to premium con");
}

//Exercise && and ||

const customerAge = 65;
const hasPremiumMember = true;
const hasCouponCode = true;

//************ >= is more than or equal to

if (
  customerAge >= 65 &&
  (hasPremiumMember === true || hasCouponCode === true)
) {
  console.log("You are eligible for a special offer");
} else {
  console.log("You are not eligible for the special offer");
}

//Switch = allows you to check a single value against multiple possible cases and execute different code blocks based on the matching case. (uses strict comparison)

const fruit = "banana";

switch (fruit) {
  case "orange": //if (fruit === "orange")
    console.log("The fruit is an orange");
    break; // break tells java to exit the switch if the condition is met.

  case "strawberry": //if (fruit === "strawberry")
    console.log("The fruit is a strawberry");
    break;

  case "banana": //if (fruit === "banana")
    console.log("The fruit is a banana");
    break;

  default:
    console.log("fruit not found");
}

//exercise

let dayOfWeek = "sunday";

switch (dayOfWeek) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Aww man, today is a workday :(");
    break; // break tells java to exit the switch if the condition is met.

  case "saturday":
  case "sunday":
    console.log("Woohoo today is the weekend");
    break;

  default:
    console.log("Day of the week not found");
}
