const score = 400
const balance = new Number(500.27)

// console.log(score);

// console.log(balance);
//console.log(balance.length); // undefined, Number object does not have length property, so we can
//convert to string first and then check the length of the balance

//  console.log(balance.toString());
//  console.log(balance.toString().length);
//  console.log(balance.toFixed(4));
 

// console.log(typeof balance.toString());
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));



//********************   MATH   ********************************* */

// console.log(Math);
// console.log(Math.PI);      // 3.141592653589793  (a property of Math object)
// console.log(Math.sqrt(16)); // 4  (a method of Math object)
// console.log(Math.random()); // random number between 0 and 1

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


