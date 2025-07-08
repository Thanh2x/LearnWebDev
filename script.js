let bestNamingConvention = "CamelCase";
const myAge = 21;
var isHungry = true;
let favQuote = 'She said "go again"';

console.log(typeof (1 - "NaN"));

console.log(favQuote[0]);
console.log(favQuote.length);
console.log(bestNamingConvention + " " + favQuote);

let message = "what is up";

console.log(message.toUpperCase());

let extraSpaces = "    wahat     is up    ";

console.log(extraSpaces.trim());

let myPet = "bobby";

console.log(myPet.indexOf('b'));
console.log(myPet.indexOf('bby'));
console.log(myPet.indexOf("$"));
console.log(myPet.slice(0, 3));
console.log(myPet.slice(-1));

let replaceMessage = "replace me replace";

console.log(replaceMessage.replace('replace', 'haha'));

while (replaceMessage.indexOf("replace") != -1) {
    replaceMessage = replaceMessage.replace("replace", "haha");
    console.log(replaceMessage);
}

let myName = "Thanh";

console.log(`Your name is ${myName} and you are ${myAge} years old`);

let conceptOfExplicitNothing = null;

let conceptOfUndefinedVariable;

console.log(Math.floor(Math.random() * 10) + 1);

console.log(1 == '1');
console.log(1 === '1');
console.warn("UH OH WARNING");
alert("HELLO THERE");
// prompt("Please enter a number");

let myNumber = "101";
let myInt = parseInt(myNumber);

console.log(typeof (myInt));

let myAgeTest = '21';

if (myAgeTest >= 21) {
    console.log(`Congrats! since you are ${myAge} years old, you are legally able to drink!`);
}
else {
    console.log(`Congrats!, you are too young to be drinking!`);
}
//  false == 0 == NaN = undefined == "" == null

let userInput = prompt("Enter a number from 1 to 3");

if (userInput) {
    console.log(userInput);
}

let userInputNum = parseInt(userInput);

switch (userInputNum) {
    case 1: {
        console.log("Rock");
        break;
    }
    case 2: {
        console.log("Paper");
        break;
    }
    case 3: {
        console.log("Sciccors");
        break;
    }
    default: {
        break;
    }
}

let myFavoriteFruits = ["Apple", "Banana", "Pineapple"];
let mixedArray = [true, false, 2132, "cat", null];

console.log(typeof (myFavoriteFruits[0]));

let myNums = [3, 4, 5];

console.log(myNums.pop());
myNums.push(5);
console.log(myNums);
console.log(myNums.shift());
myNums.unshift(1, 2, 3);
console.log(myNums);

let firstArr = [1, 2, 3];
let secArr = [4, 5, 6];

let combinedArr = firstArr.concat(secArr);

if (combinedArr.includes(1)) {
    console.log("it does include a 1");
}

let mySlice = firstArr.slice(0, 2);

console.log(mySlice);

let unsortedArr = [5, 1230, 32, 4];

console.log(unsortedArr);

unsortedArr.sort();

// it sorts by coverting the numbers into strings and then compares the strings, which is bad

console.log(unsortedArr);

const constArr = [1, 2, 3];

let newArr = [1, 2];

// constArr = newArr is not allowed

// This is allowed
constArr.push(1);

console.log(constArr);

const twoDimensionalArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(twoDimensionalArrays);
console.log(`The second element in row 2 is ${twoDimensionalArrays[1][1]}`);

let myObject = {
    name: "thanh",
    age: 21,
    "major": "Computer Science",
    tags: ["funny", "Smart", "Ambitious"],
    nestedObject: {
        name: "Son",
        age: 21,
        favoriteChild: true
    },
    1999: 2003
}

console.log(myObject["major"]);

if (myObject.nestedObject.favoriteChild === true) {
    console.log(`My favorite child is my ${myObject.nestedObject.name} and he is ${myObject.nestedObject.age}`);
}

let myArray = [1, 2, 3, 4, 5];

// All keys are converted to strings
console.log(myArray["length"]);

let myYear = 1999;

console.log(myObject[myYear]);

// Adding a new property to an object
myObject.newPropertyName = "bob";
// or myObject["newPropertyName"] = "bob";

console.log(myObject);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let num = 0;

while (num < 3) {
    console.log("What's up");
    num++;
}

// let randomNum = Math.floor(Math.random() * 2) + 1;

// while (true) {
//     let userInput = prompt("Enter a 1 or 2");
//     if (parseInt(userInput) === randomNum) {
//         console.log("Nice");
//         break;
//     }
// }

let iterableArray = ["bob", "bobby", "bobbay"];

for (const iterator of iterableArray) {
    console.log(iterator);
}

const studentTestScores = {
    thanh: 99,
    bin: 99,
    nhi: 99,
    mom: 100,
    dad: 99,
    nested: {
        nestednested: [1, 2, 3]
    }
}

for (let key in studentTestScores) {
    console.log(key);
}

let nameKeys = Object.keys(studentTestScores);
let scoreValues = Object.values(studentTestScores);
let objectEntries = Object.entries(studentTestScores);

console.log(nameKeys);
console.log(scoreValues);
console.log(objectEntries);

let student = {
    greeting: function () { console.log("HELLO"); }
}

student.greeting();


function rollDice(num) {

    return Math.floor(Math.random() * num) + 1;
}

console.log(`Rolling a 20 sided dice, we got ${rollDice(20)}`);

function populatePerson(name, age, major) {
    return {
        name: name,
        age: age,
        major: major
    }
}

let me = populatePerson("Thanh", 21, "CS");

// Lexical scope
function outer() {
    let heroes = ["batman", "superman", "spiderman"];

    function inner() {
        for (superHeroes of heroes) {
            console.log(superHeroes);
        }
    }

    inner();
}

outer();

const myFunctionExpression = function (num) {
    console.log("Your number is ", num);
}

myFunctionExpression(2);

// Higher order function;
function callThrice(func) {
    func();
    func();
    func();
}

callThrice(myFunctionExpression);

callThrice(outer);

function makeRandomFunction() {
    let num = Math.random();
    if (num > 0.5) {
        return function () {
            console.log("You got the upper half of the function");
        };
    }
    else {
        return function () {
            console.log("You got the lower half of the function");
        };
    }
}

let mysteryFunction = makeRandomFunction();

mysteryFunction();

// Making your own function with return statements

function rangeChecker(min, max) {
    return function (num) {
        if (num >= min && num <= max) {
            return true;
        }
        else {
            return false;
        }
    }
}

const isUnderAge = rangeChecker(0, 18);

console.log(isUnderAge(17));

// Defining methods

let myMathObject = {
    PI: 3.14,
    add: function (x, y) {
        return x + y;
    },
    pow: function (x) {
        return x * x;
    },
    multiple(x, y) {
        return x * y;
    },
    // printWrong() {
    // console.log(PI)
    // };
    printRight() {
        console.log(this.PI);
    }
}

console.log(myMathObject.pow(4));

console.log(Object.keys(myMathObject));
console.log(Object.values(myMathObject)[3](7, 9));

const myCat = {
    name: "Mickey",
    hello: function () {
        console.log(`${this.name} says hello!`);
        console.log(`${name} says hello two`);
    }
}

myCat.hello();

let helloFunction = myCat.hello;

helloFunction();

try {
    hello.toUpperCase();
}
catch {
    console.error("There has been an error");
    console.log("There has beeen an error");
}

// Call back functions, basically functions passed as arguements to other functions so they could call it

const evenNums = [2, 4, 6, 8, 10];

function printEl(element) {
    console.log(element);
}

// evenNums.forEach(printEl);

evenNums.forEach(function (el) {
    console.log(el);
})

// Map is similar to forEach, where it calls the function passed in for each element but it returns a new array of elements isntead of modifying it.
// Make sure you need to use the return.
let doubleEvenNums = evenNums.map(function (el) {
    // Each return statement is a new element for the newly created array
    return el * 2;
})

function square1(num) {

    return num * num;

}

function makeSquare() {

    return function (num) {

        return num * num;

    };

}

// let square2 = makeSquare();
// Declaring variables using the var keyword in the top level(global scope) creats a property for the window object which has that var name
var square2 = makeSquare();
// type of is an unary operator???
console.log(typeof square1); // "function"
console.log(typeof square2); // "function"

// Arrow functions
let myArrowFunction = (num) => {
    return num * num;
}

console.log(myArrowFunction(9));

const rollRandomDice = () => (Math.floor(Math.random() * 10 + 1));

console.log("Hello!");


// Settimeout waits some amount of miliseconds before excuting the passed in function, 

// setTimeout(() => {
//     console.log("are you still there?");
// }, 2000);

// var counter = 0;

// const id = setInterval(() => {
//     console.log(`${counter}`);
//     counter++;
//     if (counter === 5) {
//         clearInterval(id);
//     }
// }, 1000);

// arrayObject.filter();

let unfilteredArr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 11, 12];

let filteredArr = unfilteredArr.filter((el) => {
    return el % 2 === 0;
});

console.log(filteredArr);

// array.forEach() loops for every single element but doensn't return anything
// array.map() loops for every single element and create a new array and it is required that it returns a element each time
// array.filter() loops for every single element but only creates a new array with the element that passes.

// You can treat a named function like an object, or even variable referecing a funciton(even arrow functions) and to add new property to a function use the dot operator
rollRandomDice.description = "rolls a random number from 1 - 10";

console.log(rollRandomDice.description);

const myObject1 = {
    value: 42,
    test: function () {
        // Regular function loses the 'this' context
        setTimeout(function () {
            // 'this' here is the window object, so this.value is undefined
            console.log(this.value); // undefined
        }, 1000);

        // Arrow function inherits 'this' from its parent (the 'test' method)
        setTimeout(() => {
            // 'this' here is myObject, so this.value is 42
            console.log(this.value); // 42
        }, 2000);
    }
};

myObject1.test();

// Some returns true if some of the element within an array passes the "call back function" filter
// Every return true if all the element passes the filter
// Reduce returns a single value, it takes 2 argument, one for the recursivariable, and the currElement
let words = ["bob", "Skew", "capps", "BB"]

if (words.some(word => word.length > 2)) {
    console.log("Some words are greater than 2");
}

if (!words.every(word => word.length >= 3)) {
    console.log("Not all word are greater than 3");
}

let prices = [1, 23, 55, 2, 4];

let maxPrice = prices.reduce((maxPriceSoFar, currPrice) => {
    console.log(`${maxPriceSoFar}, and ${currPrice}`);
    if (maxPriceSoFar > currPrice) {
        return maxPriceSoFar;
    }
    else {
        return currPrice;
    }
});

console.log(maxPrice);

// recursion reduce

function findMaxPrice(arr, currAcum, currIndex) {
    if (currIndex == arr.length) {
        return currAcum;
    }
    let accumlator = currAcum;
    if (accumlator < arr[currIndex]) {
        accumlator = arr[currIndex];
    }
    return findMaxPrice(arr, accumlator, currIndex + 1);
}

let myVerOfReduce = findMaxPrice(prices, prices[0], 0);

console.log(myVerOfReduce);

// Default arguments
// Old way

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides + 1);
// }

// New way 

function rollDie(numSides = 6) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides + 1);
}

function greet(name = "Thanh", msg) {
    console.log(`Hey ${name}, ${msg}`);
}

greet(1, "what");

// Spread, you can spread arguements
let someRandomNums = [1, 3, 412, 2];
// Basically passes in, 1,3,412,2, so like
// console.log(Math.max(1, 3, 412, 2));
// Spread can be used with iterables
console.log(Math.max(...someRandomNums));
console.log(..."Hello");

// Spread with arrays

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

// Copying and combining arrays using the spread operator
const allPets = [...cats, ...dogs];
console.log(allPets);

// Spread with object copies the properties from one object to another

const deline = {
    legs: 4,
    isFurry: true
}

const canine = {
    family: 'Caninae',
    isFurry: false
}


const combinedPet = {
    ...deline,
    ...canine,
    legs: 5,
    isDumb: false
}

console.log(combinedPet);

// Rest
// Inside to everying NAMED function, there is an array-like object called arguemnts, however, you can't do something like push or pop for it
// You can access the length of the arguments 
function sum() {
    console.log(arguments);

    total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sum(1, 3, 5));

// Using rest for arguments, the variable contains all the values that is passed in inside an actual array

function sum2(...nums) {
    return nums.reduce((accum, curr) => accum + curr);
}

console.log(sum2(1, 3, 5));

// You can mix and match with actual arguments

function raceResults(firstPlace, secondPlace, thirdPlace, ...everyoneElse) {
    console.log(`Congrats to ${firstPlace} for first place`);
    console.log(`Congrats to ${secondPlace} for second place`);
    console.log(`Congrats to ${thirdPlace} for third place`);

    for (let i = 0; i < everyoneElse.length; i++) {
        console.log(`Congrats to ${everyoneElse[i]} for participating`);
    }
}

raceResults("Thanh", "Bin", "Nhi", "bob", "BBOBY");

// Destructuring

const scores = [123123, 1231353436, 6586, 3457567];

const [higherScore, silverScore, ...restOfScore] = scores;

console.log(higherScore);
console.log(silverScore);