'use strict';

let score = 0;


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


function userName() {
  let userName = prompt('Hi there, What is your name ?');
  // console.log(userName);
  alert('Hi ' + userName);
}
userName();

let likesFood = prompt('Do you think that I am fan of food? (yes or no)');
console.log(likesFood);
let likesFoodLower = likesFood.toLowerCase();
if (likesFoodLower === 'yes' || likesFoodLower === 'yep') {
  // console.log('Of course I am, great job!');
  alert('Of course I am, great job!');
  score++;
} else if (likesFoodLower === 'no' || likesFoodLower === 'nope') {
  // console.log('Oh come on now, of course I am. I love food!');
  alert('Oh come on now, of course I am. I love food!');
}

let likesCooking = prompt('Do you think that I like to cook? (yes or no)');
if (likesCooking.toLowerCase() === 'yes' || likesCooking.toLowerCase() === 'yep') {
  // console.log('Of course I do, bring me some pastaaaa!');
  alert('Of course I do, bring me some pastaaaa!');
  score++;
}
else if (likesCooking.toLowerCase() === 'no' || likesCooking.toLowerCase() === 'nope') {
  // console.log('aww not again, of course I do!');
  alert('aww not again, of course I do!');
}

let watchGot = prompt('Do you think that I like to watch Game of Thrones?');
if (watchGot.toLowerCase() === 'yes' || watchGot.toLowerCase() === 'yep') {
  // console.log('Yesss, Game of Thrones is the best show ever!');
  alert('Yesss, Game of Thrones is the best show ever!');
  score++;
}
else if (watchGot.toLowerCase() === 'no' || watchGot.toLowerCase() === 'nope') {
  // console.log('Wrong, GOT is my favorite show');
  alert('Wrong, GOT is my favorite show');
}

// QUESTION NUMBER 5!!

let likesTravel = prompt('Do you think I like to travel');
if (likesTravel.toLowerCase() === 'yes' || likesTravel.toLowerCase() === 'yep') {
  // console.log('Yes you are right. I love to travel and see new places!');
  alert('Yes you are right. I love to travel and see new places!');
  score++;
}
else if (likesTravel.toLowerCase() === 'no' || likesTravel.toLowerCase() === 'nope') {
  // console.log('Nooo, of course I like to travel');
  alert('Nooo, of course I like to travel');
}

const myFavMovies = ['Braveheart', "Hangover 2", "Wolf of Wall Street"];

let attemptsThatRemain = 3;
let userGuess = prompt('Guess one of my favorite movies..');

while (attemptsThatRemain) {
  attemptsThatRemain--;
  console.log(`I am in the while loop. You have ${attemptsThatRemain} attempts remaining`);
  for (let i = 0; i < myFavMovies.length; i++) {
    if (userGuess === myFavMovies[i]) {
      alert('You are correct');
      score++;
      console.log('You are correct');
      attemptsThatRemain=0
      break
    }
  }
  if(attemptsThatRemain) {
alert(`You have ${attemptsThatRemain} attempts remaining`);
userGuess = prompt('Guess again');
}}

let myNumber = '5';

let numberAttempts = 4;

while (numberAttempts) {
  let numberGuess = prompt ('Heyy, guess my favorite number from 1-10');
  numberAttempts--;
  //or (let i= 0; i < myNumber) {
  if (numberGuess < myNumber) {
    alert('I\'m sorry that is too low. Try again');
    //numberAttempts = 0;
  }
  else if (numberGuess > myNumber) {
    alert ('Too high oh nooo. Try again');
    // numberAttempts = 0;
  }
  else if (numberGuess === myNumber) {
    alert('Nicee, you are correct!!');
    score++;
    break;
  }

  if(numberAttempts === 0) {
    alert('I am sorry, the correct answer is 5');
  }
}
alert ('You score is ' + score);
