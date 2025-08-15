//IIFE - Immediately Invoked Function Expression

(function chai(){      //named iifi
    console.log(`DB CONNECTED`);
}) ();  //here semi colon is mandatory because function is invoked but it does not know where to stop
        // and we have to end that 

// () first parenthesis is where we write our function
// and () second parenthesis is a execution call execute that function


( () => {
    console.log(`DB CONNECTED TWO`);
}) () ;

( (fname) => {
    console.log(`DB THREE CONNECTED FOR ${fname}`);
}) ("baklol");