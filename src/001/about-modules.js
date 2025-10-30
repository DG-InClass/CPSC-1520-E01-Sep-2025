// node --watch about-modules.js
// NOTE: If this isn't working for you, be sure you have the most recent version of NodeJS installed

// NOTE: When importing ECM modules in Node, include the file extension.
import { about as aboutExports } from './module-exports.js';
import { about as aboutDepencencies } from './module-imports.js';

console.log('I use', aboutExports);
console.log('I use', aboutDepencencies);

// TODO: Time to explore....
