const name = "tejas tripathi"
const age = 20

//this is kinda old way of doing it , would not recommend it
//console.log("hello, this is " + fullname + " and my age is " + age);


//In backticks there is a thing called interpolation , you can use variables directly in the string
console.log(`hello, this is ${fullname} and my age is ${age}`);

const gameName = new String("tejas tripathi"); //here String is a constructor function
console.log(gameName[0]);
console.log(gameName.__proto__); //this will give you the prototype of the object meaning the methods and properties of the object
console.log(gameName.toUpperCase());

//We can check multiple methods of a string object using the prototype (.__proto__)
console.log(String.prototype); //this will give you the prototype of the String object

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


