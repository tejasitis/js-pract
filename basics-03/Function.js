const { Calculator } = require("lucide-react");

//Functions in JS
function sayMyName (name){
    console.log("My name is "  + name);
}

//sayMyName("John"); // this is execution of function
sayMyName; // this is just a reference to the function

function addToooNumbers(number1, number2){
    console.log(number1 + number2);
}
 //addToooNumbers(3, 5); // this will print 8 to the console
// const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); // this will print undefined because the function does not return anything


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
    console.log("This will never be executed because return statement ends the function execution.");
}

const result = addTwoNumbers(3, 5) // The result variable inside the function is not the same as the result variable outside the function
// console.log("Result: ", result);
//The value that is returned from the function must be logged to see the output

function loginUserMessage(username){ //inside we can do username ="sam" to set a default value
    if (username !== undefined && username !== null) {
        return `${username} just logged in`;
    }
    else{
        return "Please enter valid username";
    }
}

//console.log(loginUserMessage());  

function calculatecartPrice(val1 , val2 , ...num2 ){  //here ... is rest operator , it allows us to pass any number of arguments
    return num2;
}
// console.log(calculatecartPrice(100,200,500,1000));



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//Directly passing object to function
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));