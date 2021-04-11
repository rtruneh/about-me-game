'use strict'
// If conditional based confirm command
//ask user for their name
//let user enter text
//if no text is entered go back to prompt

// let user = prompt('What\'s your name?')
let user = prompt('what is your name?');


if (prompt.value == "") {
  alert('Seriously, I need your name.')
  } else {
  alert('Hi ' + user + ' are you ready to try you\'re luck?');
}

let answer1 = confirm('Hi ' + user + ' are you ready to try you\'re luck?')
if (answer1 === true) {
  alert('LET\'S PLAY!')
} else {
  alert('Sorry to see you go!')
}

//ask user a question
let question1 = prompt('Does the author have a child?', "Type yes or no")
  if (question1 === 'yes'.toUpperCase) {
    alert('That is correct')
  } else {
    alert('wrong, try again')
  }

let userPoints = 0;
let userAnswer = '';
let limit = 3;
let numGuesses = 0;

// while (userAnswer !== 'yes' && numGuesses < limit){
//     userAnswer= prompt('is popcorn you\'re fav food');
//     numGuesses++
// }

// alert('you have ' + userPoints + ' points')

// // convert the variable question1 to lower case to evaluate it
// // switch (question1.toLowerCase()) {
// //   case 'yes': 
// //   break;
// //   case 'YES':

 
// // //break statement follows each case to 'break' the loop not needed if return is present
// //   break;
// //   case 'blue':
// //   alert('your favorite color was blue!');
// //   break;
// // // default statement is what is fired in there event none of the cases occur
// //   default:
// //   alert('I don\'t know what your favorite color was ¯\\_(ツ)_/¯');
// // }

// //! in front of the word is false
// // the below will run until user enters information

// while(!user) {
//     user = prompt('what is your name? Really, we need it')
// }


// if (user !== 'steve') {
//     alert('too bad you\'re not a steve')
// }

// alert('hi ' + user + ' i am so glad you decided to join')

// let answer = prompt('is your fav food popcorn? Type yes or no'). toLocaleUpperCase

// //display points and give points to user

// // alert('you have ' + userPoints + ' points');

// //another way to give user their points
