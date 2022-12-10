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
// Create a variable called name with value Dane.
// Create a conditional that if the value and type of variable name equals 'Mary', then the console will log Hi, Mary!
// If the value and type of the of the variable equal anything except 'Mary', the console will log How do you do?
// The console logs 'How do you do?'

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
// Create a variable called secret.
// Create a variable called code with value of 123. 
// Create a conditional that if the type and value of variable code equals 123, then the value of variable secret will equal super, and the value of variable code will be multiplied by 2.
// Create a conditional that if the value of variable code is greater that 250, then the value of variable secret will equal duper.
// The console logs 'super'

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
// Create a variable called isStudent with a boolean value of true.
// Create a variable called age with a numerical value of 34.
// Create a variable called zip with a numerical value of 55407
// Create a conditional that if the value and type of variable isStudent equals true, AND, the valeu of zip is greater than 8000, then the console will log You're a student on the West Coast!
// Create a second conditionl that if the value and type of variable isStudent equals false OR the value of variable age is less than 30, then the console will log What are your hobbies?
// Create a third conditional that if the value and type of variable isStudent equals true, then the console will log Welcome to Prime!
// If all conditionals above are false, then the console will log How about the weather?

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

// FIX variable colorOne should equal blue, and colorTwo should equal red.
// let colorOne = 'blue'
// let colorTwo = 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX this only resets the value of variable colorOne, we also want to reset the variable of colorTwo
// if (mix === true) {
//    colorOne = 'purple';
//    colorTwo = 'purple';
// }

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX this conditional uses the operator || for OR, the prompt is AND, so should use operator &&.
//if (temp > 39 && time >= 4) {
//  console.log('throw away the food!');
//}

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

//FIX This conditional checks if minAge is less than or equal to age, when the prompt wants to check if age is greater than or equal to minAge. 
//We could rewrite the condition operator and switch the executions like this 

//if(age >= minAge) {
//  console.log('entry');
//} else {
//  console.log('no entry');
//}

//or we could just change the operator to not inclue the equals, which does not execute the prompt literally, but achieves its goal.

//if(minAge < age) {
//  console.log('no entry');
//} else {
//  console.log('enter');
//}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

