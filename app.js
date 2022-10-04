'use strict';

console.log('hi')

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will preint in the console');
}

/* 
&& - is the logical "and"
one false and it will not run

|| - is the logical "or"
one true and it will run

! - logical "not"

*/

let trueValue = true;
let falseValue = false;

if (trueValue && falseValue) {
  console.log('if evaluated to true');
}

let userName = prompt('What is your name ?');
console.log(userName);


let likesStarWars = prompt('Do you like Star Wars ?');

if (likesStarWars === 'yes'|| likesStarWars === 'y') { 
console.log('you are correct good job!')
}

likesStartWars = likesStarWars.toLowerCase();