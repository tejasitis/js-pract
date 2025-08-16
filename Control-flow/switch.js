// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }

//key is value variable for which i want to check everytime

const month = 3

switch (month) {
    case 1:                              //shift+alt+down_arrow to copy a line down
        console.log("january");
        break;
    case 1:
        console.log("january");
        break;                        //if there is no break statement,it will continue to execute  
                                      //all the next case excqpt the default case

    default:
        console.log("not a valid month");
        break;
}


// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }