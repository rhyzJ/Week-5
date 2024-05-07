console.log("connected");

//----ARRAYS----//
// can contain any data type

const favouriteFoods = [
  "tofu",
  "feta",
  "sushi",
  "avocado",
  "pineapple",
  "boba",
];

console.log(favouriteFoods);

//arrays are count from zero, 0 - 1 - 2 - 3
console.log(favouriteFoods[2]);

//changing an element in an array

favouriteFoods[5] = "cheese";

console.log(favouriteFoods[5]); //prints cheese instead of boba

//to find the number of elements

console.log(favouriteFoods.length);

// EXERCISE 2

const numbers = [10, 20, 30, 40, 50];

const total = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

console.log(total / numbers.length);

// push() method
// used if you want to add a new value/elements to the end of your array

const fruits = ["lemon", "kiwi", "lime"];
console.log(fruits); //no pineapple

fruits.push("pineapple"); //adds pineapple to the end of the array
console.log(fruits); //shows pineapple added to the end

// EXERCISE 3

const favouriteRecipe = {
  title: "pancakes",
  servings: 4,
  ingredients: ["lemons", "sugar", "flour", "baking powder", "eggs"],
};
console.log(favouriteRecipe);
console.log(favouriteRecipe.ingredients.length);

favouriteRecipe.ingredients.push("lime");
console.log(favouriteRecipe);
