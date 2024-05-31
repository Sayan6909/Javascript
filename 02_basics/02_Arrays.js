const marvel_heroes=["ironman", "thor", "hulk"]
const dc_heroes=["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes); //push is pushing the existing array



// console.log(marvel_heroes);
// console.log(marvel_heroes[3] [1]);

// const all_heroes=marvel_heroes.concat(dc_heroes); //concat push to a new array and reurns a new array

// console.log(all_heroes);


//Spread operator

const all_new_heroes=[...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array=another_array.flat(Infinity);

// console.log(usable_another_array);


// console.log(Array.isArray("Sayan"));
// console.log(Array.from("Sayan"));
// console.log(Array.from({name:"Sayan"}));


let score=100
let score_2=200
let score_3=300

console.log(Array.of(score,score_2,score_3));