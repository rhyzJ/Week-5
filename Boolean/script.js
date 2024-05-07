console.log("Connected");

console.log(Boolean("Hello World")); //true ~ value = true
console.log(Boolean(" ")); //true ~ a space is still a value
console.log(Boolean("")); //false ~ an empty string is is not a value = false
console.log(Boolean("0")); //false ~ 0 is the only number that is fals
console.log(Boolean("15")); //true ~ any number other than 0 is true
console.log(Boolean("-15")); //true ~ a negative number is still a value

console.log(Boolean("undefined")); //false = empty value
console.log(Boolean("null")); //false = empty value
console.log(Boolean("NaN")); //false = empty value

// == ~ equal to (not strict to type e.g. 13 == "13" will be true even though number & string)
// === ~ strict equality: equal value and type (strict to type, will check data type as well e.g. 13 === "13" will be false)
// != ~ not equal (not strict to type e.g. 13 != "13" will be true even though number & string)
// !== ~ strict equality: not equal value or type  (strict to type, will check data type as well e.g. 13 !== "13" will be false)
// > ~ greater than
// < ~ less than

console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(2 != "3"); //true

console.log(10 == "10"); //true
console.log(10 != "10"); //false

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 === "10"); // false

const isTrue = true;
const isFalse = false;

//  not operator: ! basically adds a not in front of the value
console.log(!isTrue); //output: false (negative true gives false)
console.log(!isFalse); //output: true (negative false gives true)

//  another not operator example with a variable

console.log("hello"); //will be a string
console.log(!"hello"); //forced to be a boolean and will be false

//  Logical Operators

//    AND = && ~ we can use this operaor to  check if all conditions are true
//    OR = || ~ we can use the OR operaor to chck if at least one condition is true

const b1 = !false; //true
const b2 = true && true; //false
const b3 = true || false; //true
const b4 = 123 === "456"; //false
