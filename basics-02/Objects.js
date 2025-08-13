//Object.create //Constructor method - singleton object

//object literal

const mysymbol = Symbol("my symbol"); // Symbol is a primitive data type in JavaScript that represents a unique identifier.

const user = {
    name : "tejas",
    "full name" : "Tejas Chaturvedi",
    age: 22,
    [mysymbol] : "mykey1",
    location : "India",
    email : "tejas@google.com",
    isLoggedIn : false , 
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);

//console.log(user[mysymbol]); 
//console.log(typeof user[mysymbol]); // Symbol is a unique identifier, so it will not conflict with other properties.

// user.name = "baklol";
// Object.freeze(user);
// user.name = "mcbc";

//console.log(user);

user.greeting = function(){
    console.log(`hello ${this.name}`);
}

console.log(user.greeting());


