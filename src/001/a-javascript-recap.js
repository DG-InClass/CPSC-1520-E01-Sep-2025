// a-javascript-recap.js
// node --watch a-javascript-recap.js
console.log('Recap of JS');

let name = 'Dan Gilleland';
console.log(name);

// an alias for the console.log()
const log = console.log;
log('This saves me some typing...');

// Template strings - uses backticks
let message = `My name is ${name}`;
// Placeholder            \_____/
log(message);

// Decision
if(message.length > 10) {
    log('You talk a lot, Dan');
} else {
    log('Tell me more...');
}

// Functions
const callMe = function(fn, data) {
    // I will pass the data into
    // the function fn
    fn(data); // I'm expecting fn to
              // process the data
}

callMe(log, 'This is an example of a callback');

const intoWords = function(text) {
    // break the text into an array
    // of strings.
    let words = text.split(' ');
    log(words);
}

callMe(intoWords, 'Strings can be divided based on some delimeter.');
