console.log("connected");

const cat = {
  firstName: "Mittens",
  lastName: "Stevenson",
  favouriteColour: "blue",
};
// values can be accessed from objects in 2 ways;
//1st way = dot operator e.g. ~ cat.firstName
//2nd way = square brackets e.g. ~ console.log(cat["firstName"])

//using + to link (concatonate) string variable

console.log(
  "This is " +
    cat.firstName +
    " " +
    cat.lastName +
    ", and their favourite colour is " +
    cat.favouriteColour +
    "."
);

// ------TEMPLATE LITERALS------//

// using template string literals AKA string interpolation
// write the full string inside back ticks
// use variables e.g. cat.firstName directly inside back ticks using following: ${variable}, can use multi-line string inside backticks

console.log(
  `This is ${cat.firstName} ${cat.lastName} and their favourite colour is ${cat.favouriteColour}.`
);

//-----SQUARE BRACKET NOTATION----//

console.log(cat["firstName"]);

// when a property name contains spaces it needs to be inside quotes

// EXERCISE 5 //

const rectangle = {
  length: 10,
  width: 50,
};

const areaRectangle = rectangle["length"] * rectangle["width"];

console.log(`The area of the rectangle = ${areaRectangle}`);

// ${} (template literal)
// anything code (in this example the calculation) needs to be inside the ${}, otherwise the characters will be printed
console.log(
  `The area of the rectangle = ${rectangle["length"] * rectangle["width"]}`
);

//this is without the template literal (${})
console.log(
  `The area of the rectangle = rectangle["length"] * rectangle["width"]`
);

/// MODIFYING THE VALUE OF A PROPERTY

rectangle.length = 20;

console.log(
  `The area of the rectangle = ${rectangle["length"] * rectangle["width"]}`
);

//output = 1000 instead of original 500

//add new properties

rectangle.corners = 4;

console.log(rectangle); // output = {length: 20, width: 50, corners: 4}

// delete properties

delete rectangle.corners;

console.log(rectangle); // output = {length: 20, width: 50}

// EXERCISE 4 //

const person = {
  firstName: "Bob",
  lastName: "Stevenson",
  favouriteNumber: 7,
  favouriteDay: "Wednesday",
};

console.log(person);

person.favouriteFood = "pizza";

console.log(person);

delete person.favouriteDay;

person.favouriteNumber = person.favouriteNumber * 2;

console.log(person);
