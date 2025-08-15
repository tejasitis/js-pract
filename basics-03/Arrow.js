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
