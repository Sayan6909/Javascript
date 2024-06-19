// const myObject={
//     js:'Javascript',
//     cpp:'c++',
//     Rb:'Ruby',
//     Swift:'Swift by Apple'
// }
// for (const key in myObject) {
//     // console.log(`${key} is shortcut for ${myObject[key]}`);
// }

// const language=["c++", "java", "js", "python", "ruby"]
// for (const key in language) {
//     console.log(language[key]);
// }

const map= new Map()
map.set('IN', 'India')
map.set('USA','United States of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(map[key]);
    
}