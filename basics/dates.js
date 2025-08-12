//Dates
let myDate = new Date (); // Date is a built-in object in JavaScript which represents date and time and can be created using the Date constructor.

//console.log(myDate.toString()); // Current date and time
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString); 
// console.log(myDate.toLocaleString());
//console.log(typeof myDate); // object
let mycreatedDate = new Date(2026 , 8 , 30);
console.log(mycreatedDate.toDateString()); // Date object with specific date

let mynewcreatedDate = new Date(2026 , 8 , 30 , 9 , 41 , 36);
console.log(mynewcreatedDate.toLocaleString()); // Date object with specific date

let timestamp = Date.now(); // Current timestamp in milliseconds
// console.log(timestamp); 
// console.log(Date.now()/1000);

let newDate = new Date(); // newdate is a new Date object representing the current date 
newDate.toLocaleString('default' , {
    weekday: 'long', // Full name of the day of the week
    year: 'numeric', // Full numeric year
    month: 'long', // Full name of the month
    day: 'numeric', // Numeric day of the month
    hour: '2-digit', // Two-digit hour
    minute: '2-digit', // Two-digit minute
    second: '2-digit' // Two-digit second
})



 
