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
- Object Literal Syntax
  - **Bonus** - Destructuring Syntax 🎉

## Arrays and Loops



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
