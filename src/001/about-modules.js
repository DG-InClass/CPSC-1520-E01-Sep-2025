// node --watch about-modules.js
// NOTE: If this isn't working for you, be sure you have the most recent version of NodeJS installed

// NOTE: When importing ECM modules in Node, include the file extension.
// When we import from other JS files,
// we can "alias" the name for the
// thing we are importing
import { about as aboutExports } from './module-exports.js';
import { about as aboutDepencencies } from './module-imports.js';

console.log('I use', aboutExports);
console.log('I use', aboutDepencencies);

// TODO: Time to explore....
// I can put my import statements
// "anywhere" in my code - e.g.:
import { talk } from './module-exports.js';
talk('Playing with code is a way to learn');
// NOTE: it's better practice to put your
//       imports all at the top of your
//       JavaScript file.
