const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



//console.log(Array.isArray("Hitesh"))

console.log(Array.from({name: "hitesh"})) // interesting

//console.log(Array.from("Tejas"));    // Convert a string to an array of characters
//console.log(Array.from([1, 2, 3], x => x * 2)); // Convert an array to a new array with each element multiplied by 2

let score1 = 100;
let score2 = 200;
let score3 = 300;

const ScoreArray = Array.of(score1, score2, score3); // Create an array from individual elements
console.log(ScoreArray);

console.log(Array.from(ScoreArray , x => x+20));