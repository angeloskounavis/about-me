'use strict';

console.log('hi');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console');
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

let userName = prompt('Hi there, What is your name ?');
// console.log(userName);
alert('Hi ' + userName);

let likesFood = prompt('Do you think that I am fan of food? (yes or no)');
if (likesFood.toLowerCase() === 'yes'|| likesFood === 'yep') {
  // console.log('Of course I am, great job!');
  alert('Of course I am, great job!');
}
else if (likesFood.toLowerCase() === 'no'|| likesFood === 'nope') {
  // console.log('Oh come on now, of course I am. I love food!');
  alert('Oh come on now, of course I am. I love food!');
}

let likesCooking = prompt('Do you think that I like to cook? (yes or no)');
if (likesCooking.toLowerCase() === 'yes'|| likesCooking === 'yep') {
  // console.log('Of course I do, bring me some pastaaaa!');
  alert('Of course I do, bring me some pastaaaa!');
}
else if (likesCooking.toLowerCase() === 'no'|| likesCooking === 'nope') {
  // console.log('aww not again, of course I do!');
  alert('aww not again, of course I do!');
}

let watchGot =  prompt ('Do you think that I like to watch Game of Thrones?');
if (watchGot.toLowerCase() === 'yes' || watchGot === 'yep') {
  // console.log('Yesss, Game of Thrones is the best show ever!');
  alert('Yesss, Game of Thrones is the best show ever!')
}
else if (watchGot.toLowerCase() === 'no'|| watchGot === 'nope') {
  // console.log('Wrong, GOT is my favorite show');
  alert('Wrong, GOT is my favorite show');
}

let likesTravel = prompt ('Do you think I like to travel');
if (likesTravel.toLowerCase() === 'yes' || likesTravel === 'yep') {
  // console.log('Yes you are right. I love to travel and see new places!');
  alert('Yes you are right. I love to travel and see new places!');
}
else if (likesTravel.toLowerCase() === 'no' || likesTravel === 'nope') {
  // console.log('Nooo, of course I like to travel');
  alert('Nooo, of course I like to travel');
}


