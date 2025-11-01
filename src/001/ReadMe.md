# 001 - Kickstarter

Here, we're doing a little bit of a "reboot" on JavaScript. In the process, we're going to run JavaScript on its own within **Node** (no HTML/CSS). We can launch any of these JavaScript file by running `node --watch <filePath>` (where `<filePath>` is the path to/name of the JavaScript file we want to run).

- [`a-javascript-recap.js`](./a-javascript-recap.js) - 
- [`about-js-oddities.js`] - function params/args, dynamic typing (`typeof`), primitives vs. objects (Object Literal Syntax), and built-in object types (`Date`)
- [`arrays-and-loops.js`] - a quick run-through of loops in JavaScript, working with arrays, and some built-in array functions.
- [`about-modules.js`] (with [`module-exports.js`] and [`module-imports.js`])

## A JavaScript Recap

Here, we recalled displaying text in the console, variables, template strings, function basics, and function callbacks.

We also discovered a little tip on how to use comments to point out significant parts of the code you are writing. For example, when learning about template strings, we added a comment to point out the *placeholder* in the template string.

```js
// Template strings - uses backticks
let message = `My name is ${name}`;
// Placeholder            \_____/
```

## About JavaScript Oddities

JavaScript is different from languages such as C#, Java, and Visual Basic. At its heart, JavaScript is an **interpreted language**.

We'll discover what that means in terms of

- Dynamic Typing
- Function Parameters and Arguments
- Primitive Types
- If/Else and *truthy*/*falsy* conditional expressions
- Object Literal Syntax
  - **Bonus** - Destructuring Syntax 🎉

## About Modules

We're going to run our JavaScript code with modules. Begin by creating three files:

- `about-modules.js`
- `module-exports.js`
- `module-imports.js`

Once again, we launch Node to watch these files with the following command.

```ps
node --watch about-modules.js
```

Here's the code we will put in those files....

## Arrays and Loops

We'll do a quick recap on looping structures and then arrays.

```js
// 1) Strings and Arrays
//    An array is a collection of elements.
//    An array is like a comma-separated set of values.
topic("Strings and Arrays");
let message = "Work hard and you'll get Arrays!";
let words = message.split(' ');
log("When we split a sentence into words:\n", words);

// Discover for..in
//  The variable `index` is the position of an
//  item in the array. I use for..in whenever I
//  am interested in the location of the item in
//  the array.
for(let index in words) {
    let aWord = words[index];
    //          \__________/
    //           | words at the position index
    message = `words at [${index}] is ${aWord}`;
    log(message);
}
log();
// Discover for..of
//  The variable `aWord` is the actual item in the
//  array. I use for..of whenever I am interested in
//  directly getting the contents of the array
for(let aWord of words) {
    log('- ',aWord);
}

/* To compare the for..in and the for..of with a
   regular for statement, consider this equivalent:

for(let index = 0; index < words.length; index++) {
    let aWord = words[index];
    // do whatever with the `index` or `aWord` variables
}   
 */



// 2) Helpful Arrays for Dates
topic("Helpful Arrays for Dates");
// Get the current date. TODO: Try Date functions.
let now = new Date();
//  now.getYear()
//  now.getFullYear()
//  now.getMonth()  <-- A zero-based number
//  now.getDay()    <-- A zero-based number
//  now.getDate()

// Build our own arrays
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
log(`The month names are:\n  "${monthNames.join(', ')}"`);
// In the line above, the .join() is a function that
// every array has. It's purpose is to take all the 
// array items and combine them into a single string.

message = `Today is ${weekDays[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}\n`;

log(message);

for(let index = 0; index < weekDays.length; index++) {
    message = `weekdays[${index}] is ${weekDays[index]}`;
    log(message);
}


// ======================
/**
 * Displays the supplied title with a double-underline.
 * @param {string} title Text to display as a title.
 */
function topic(title) {
    log();
    log(title);
    log("==========");
}

```
