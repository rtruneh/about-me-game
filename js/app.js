'use strict'
//asking user if they want to play
let answer1 = confirm('Would you like to play a game?')
if (!answer1) {
  alert('sorry to see you go');
} else {
  alert('come on in!');
}

//once user says ok, ask for name then enter the page
let user = prompt('what is your name?');
while (!user) {
  alert ('Seriously, I need your name.');
  user = prompt('What is your name?');
} 
if (user.length > 0) {
confirm('Hi ' + user + ' let\'s play!');
}

//quiz
function myQuiz() {
  let question1 = prompt('Does the author have a child?', 'enter yes or no');
 

  let question2 = prompt('Did the author work at the airport?', 'enter yes or no');
  while (question2 === 'no') {
    alert ('try again');
    question2 = prompt('Did the author work at the airport?', 'enter yes or no');
  } 

  let question3 = prompt('Did the author attend TSU?', 'enter yes or no');
  while (question3 === 'yes') {
    alert ('try again');
    question3 = prompt('Did the author work at the airport?', 'enter yes or no');
  } 
  

  let question4 = prompt('Is the author a man?');

  let question5 = prompt('Is the author a home owner?');

}

while (!user) {
  alert ('Seriously, I need your name.');
  user = prompt('What is your name?');


// convert the variable question1 to lower case to evaluate it
// switch (question1.toLowerCase()) {
//   case 'yes': 
//   break;
//   case 'YES':

 
// //break statement follows each case to 'break' the loop not needed if return is present
//   break;
//   case 'blue':
//   alert('your favorite color was blue!');
//   break;
// // default statement is what is fired in there event none of the cases occur
//   default:
//   alert('I don\'t know what your favorite color was ¯\\_(ツ)_/¯');
// }

//! in front of the word is false
// the below will run until user enters information

//display points and give points to user

// alert('you have ' + userPoints + ' points')