// node --watch awesome-arrays.js
console.clear();
const log = console.log;

topic("Build your own arrays!");
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
log('The days of the week are:\n', weekDays);
// Get the current date and time.
let now = new Date();
let thisDay = weekDays[now.getDay()];
log(`Today is ${thisDay}`);

// TODO: Try creating an array of month names...
//       and then use now.getMonth()
// This is how we spell "Wednesday"
//  - Mercredi
log();

topic("Built-In Array Functions");
// .push and .pop <-- add/remove from the END of the array
weekDays.push('Nonday');
log(`We now have ${weekDays.length} days:\n${weekDays}`);
log('Compare dumping an array in a string (above) with this\n', weekDays);
log('time to remove', weekDays.pop());

// .unshift and .shift <-- add/remove from the START of the array
weekDays.unshift('Preday');
log('Starting off with', weekDays[0]);
log('We do not really have a', weekDays.shift());
log(weekDays.length);

// .forEach <--- loop through an array and run a callback function for each item in the array
// .map <-- generate a new array with transformed information
log();
const shorten = function(word) {
    return word.substring(0,3);
}
let shortNames = weekDays.map(shorten);
log(shortNames);


// .filter <-- generate a new array with items that match the filter (Predicate)


// .slice and .splice <--- just in time for Halloween...

topic("Also, consider sorting");
// .sort <-- sort an array (MUTATES the array)
let numbers = [2, 6, 4, 8, 3, 12, 7, 1];
log('Original Array:\n', numbers);
numbers.sort(numberComparison);
log('Sorted Array:\n', numbers);
// By default, .sort() treats each item in the array as a string and sorts in ascending order.
function numberComparison(a, b) {
    return parseFloat(a) - parseFloat(b);
}

// ======================
/**
 * Displays the supplied title with a double-underline.
 * @param {string} title Text to display as a title.
 */
function topic(title) {
    log();
    log(title);
    let underscore = new Array(title.length).fill('=');
    log(underscore.join(''));
}
