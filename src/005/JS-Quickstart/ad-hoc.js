// node --watch ad-hoc.js
// Assorted Topics
const log = console.log;
let msg;

// 1) Sample Arrow Function
// This is an Arrow Function that meets the
// requirements for a Predicate. A Predicate
// is a function that will return true or false.
const minLength = 
    (one) => one.length >= len;
//  \___/    \___ returned __/
//   |             boolean
//   | Parameter List


// 2) Setup
const names = ['Dan', 'Dana', 'Fred', 'Barney', 'Wilma', 'Betty'];
log(names);
let len = 4;

// 2a) Using .every()
msg = `All the names are ${checkLength()} ${len} characters or more long.`;
log(msg);

// 2b) Using .some()
let hasPartialName = 
    names.some(name => name.includes('Dan'));
//             \_ arrow function callback_/
log('hasPartialName: "Dan"', hasPartialName);

// Compare that to a longer version where you
// had to do the loop yourself.
for(let index = 0; index < names.length; index++) {
    // how .some gets the name
    let name = names[index];
    if(name.includes('Bar')) {
        hasPartialName = true;
    }
}
log('hasPartialName: "Bar"', hasPartialName);

// Hoisted Functions
function checkLength() {
    let result;
    if(names.every(minLength)) {
        result = ""
    } else {
        result = "NOT";
    }
    return result;
}
