var c = 8000 //global scoped variable  

if(true){   //block scoped
    let a = 10
    const b = 100
    var c = 1000  // var is function scoped, let and const are block scoped ,
    // here var does not care about block boundaries

    //console.log("inner a value : " + a);
}

let a = 999 
//console.log(c);
//console.log("outer a" , a); // a is not defined because it is block scoped

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//********************************************************************* */

console.log(addone(5));
function addone(value){
   return value +1;
}

//console.log(addTwo(5)); // This will throw an error because addTwo is not defined yet due to hoisting rules

const addTwo = function(value){
    return value +2;
}

