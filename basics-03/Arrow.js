const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//different ways of writing functions in JavaScript
// 1. Function Declaration
function xyz(){
    return "xyz";
}

// 2. Function Expression
const abc = function(){
    let username = "hitesh";
    console.log(this);
}

//abc();

// 3. Arrow Function
const pqr = ( ) =>{
    let username = "hitesh";
    console.log(this);
}

//pqr();

//const ass = (num1 , num2) => num1+num2 ; //Implicit return 
//console.log(ass(80,140));

const ass = (num1 , num2) => ( num1+num2 ); //Implicit return, no need to write return 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()