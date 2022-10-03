// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Variable is created with the declaration as titled "name". The string value assigned to this variable is 'Dane'.
// We create a condition to run that checks to see if the "name" variable exactly matches the value of 'Mary'.
// If this condition is met, then we console.log 'Hi, Mary!'. If this condition is not met, we console.log 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Variable is created with the declaration as titled "secret". 
// Variable is created with the declaration as titled "code". The numeric value assigned to this variable is 123.
// We create a condition to run that checks to see if the "code" variable exactly matches the value of 123. 
// If so, the variable secret equals the value of 'super' and the code amount is multipled by 2.
// We create another condition to run that sees if the "code" variable is greater than 250. 
// If so, the variable secret equals the value of 'duper'.
// We console.log the variable secret to see its value.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Variable is created with the declaration as titled "isStudent" with the value set as true.
// Variable is created with the declaration as titled "age" with the value set as 34.
// Variable is created with the declaration as titled "zip" with the value set at 55407.
// We create a condition to run that checks to see if the 'isStudent' matches exactly with true as well as 'zip' being greater than 80000.
// If so, we console.log 'You're a student on the West Coast!'.
// Otherwise, we create an else if to see if 'isStudent' matches exactly with false or if 'age' is less than 30. 
// If these conditions are met, we console.log 'What are your hobbies?'.
// We add another else if to the condition to see if 'isStudent' exactly matches with true. If this matches exactly, we console.log 'Welcome to Prime!'.
// We add a final else condition if none of the above conditions are met to console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX- should be:
let colorOne = 'blue';
let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX- need to add the line of:
  colorTwo = 'purple';
underneath line 154.

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX- let time = 4;
const time = 4;

//FIX- && not ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX- should be:
if( age >= minAge ){
  console.log( 'enter');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

