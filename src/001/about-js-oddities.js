/* node --watch about-js-oddities.js

- Dynamic Typing
- Function Parameters and Arguments
- Primitive Types
- If/Else and truthy/falsy conditional expressions
- Object Literal Syntax
  - **Bonus** - Destructuring Syntax 🎉

 */

let now = new Date(); // Makes an object with the current date/time

// Notice all the arguments I am sending into console.log()
// I am sending in 4 arguments to the 
// log() function
console.log('This JavaScript file began at', now.toLocaleTimeString(), 'on', now.toDateString());

const talk = function(words) {
  console.log(words);
}
talk('As fast as I can....');
// JavaScript doesn't enforce the number
// of arguments sent into a function.
talk();
talk('About this', 'and that', 42);
talk(now.toDateString());
talk(0.1 + 0.1 + 0.1);

now.talk = talk;
now.talk('about dynamically types languages...');
console.log('The answer is:', console.answer);
console.answer = 42;
console.log('Now the answer is', console.answer);
console.log('---------');

// Truthy example
if(now) { // JS conditional expressions
  talk('now exists, and is truthy');
}

// Falsy example
if(0) {
  talk('this does not get shown');
} else {
  talk('The number 0 is "falsy"');
}

// another Falsy example
if('') {
  talk('What is there to say?')
} else {
  talk('Empty strings are falsy');
}

// How truthyness and dynamic typing
// can cause confusion...
if(now = 5) {
  // Why was that "truthy"?
  // Because I did an Assignment
  // instead of a comparison!
  // (now == 5)
  talk('Ah. Does that make sense?');
}

console.log('========\n');

// We can create our own objects with
// Object Literal syntax
// Object literals are wrapped in
// curly braces and contain a comma-
// separated set of
//    property: value
// pairs
let instructor = {
  name: "Dan Gilleland",
  yearsTeaching: 26,
  isCanadian: true
}

console.log(instructor);
talk(`${instructor.name} has taught a long time...`);
talk("Dan's needing to eat...");
