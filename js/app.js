// // 'use strict'
// // //asking user if they want to play
// let answer1 = confirm('Would you like to play a game?')
// if (!answer1) {
//   alert('sorry to see you go');
// } else {
//   alert('come on in!');
// }

// //once user says ok, ask for name then enter the page
// let user = prompt('what is your name?');
// while (!user) {
//   alert ('Seriously, I need your name.');
//   user = prompt('What is your name?');
// } 
// if (user.length > 0) {
// confirm('Hi ' + user + ' let\'s play!');
// }

//game
// let points = 0
let i = 0;
let answer = 10;


function myQuiz() {

//   let question1 = prompt('Does the author have a child?', 'enter yes or no');
//     if (question1.toLowerCase() === 'yes') {
//   alert('That is correct');
//   points++;
//   alert('Total points: ' + points);
//  } else {
//    alert('Incorrect');
//    alert('Total points: ' + points);
//  }
//  let question2 = prompt('Did the author work at the airport?', 'enter yes or no');
//     if (question2.toLowerCase() === 'yes') {
//   alert('That is correct');
//   points++;
//   alert('Total points: ' + points);
//  } else {
//    alert('Incorrect');
//    alert('Total points: ' + points);
//  }
//  let question3 = prompt('Did the author attend TSU?', 'enter yes or no');
//     if (question3.toLowerCase() === 'no') {
//   alert('That is correct');
//   points++;
//   alert('Total points: ' + points)
//  } else {
//    alert('Incorrect');
//    alert('Total points: ' + points);
//  }
//  let question4 = prompt('Is the author a man?', 'enter yes or no');
//     if (question4.toLowerCase() === 'no') {
//   alert('That is correct');
//   points++;
//   alert('Total points: ' + points)
// } else {
//     alert('Incorrect');
//     alert('Total points: ' + points);
// }
// let question5 = prompt('Is the author a home owner?', 'enter yes or no');
//   if (question5.toLowerCase() === 'yes') {
//   alert('That is correct');
//   points++;
//   alert('Total points: ' + points)
// } else {
//     alert('Incorrect');
//     alert('Total points: ' + points);
// }

let question6 = prompt ('How many years did the author work at the airport?', 'enter number');
while (i < 4 && question6 !== answer) { 
  if (question6 < answer) {
  alert(`Too low ${3 - i} attempts left`);
  question6 = prompt('How many years did the author work at the airport?', 'enter number');
    }
  else if (question6 > answer) {
    alert(`Too high ${3 - i} attempts left`);
    question6 = prompt('How many years did the author work at the airport?', 'enter number');
    }
  else{
    alert('That is correct!!');
  }
  i++;
}
alert(`The answer is ${answer}`);

let array = ['Coffee', 'Tea', 'Lemonade', 'Water']
let rightAnswer = 'Coffee';
let question7 = prompt ('What do you think is the authors favorite drink?', 'Coffee? Tea? Lemonade? Water?');
while (i < 6 && question7 !== rightAnswer) { 
  if (question7 !== rightAnswer) {
  alert(`Try again ${5 - i} attempts left`);
  question7 = prompt('How many years did the author work at the airport?', 'enter number');
    }
  else(question7 === rightAnswer) {
    alert(`Too high ${5 - i} attempts left`);
    question7 = prompt('How many years did the author work at the airport?', 'enter number');
    }
  i++;
}
alert(`The answer is ${rightAnswer}`);


}
