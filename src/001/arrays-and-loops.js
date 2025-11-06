// node --watch arrays-and-loops.js
console.clear(); // clear the screen
const log = console.log;

// variables for looping...
let limit = 5;

topic("While Loops");
let count = 0;
while(count < limit) {
    // a `true` result enters the loop
    // Inside of the loop, we should make sure
    // that the conditions of the loop can be
    // changed so that the loop exits.
    count++; // <-- the thing that changes
             //     our loop's condition.
    log('while loop:', count);
}
log();

topic("Do-While Loops");
count = 0;
do {
    count++;
    log('do-while loop:', count);
} while(count < limit);
log();

topic("For Loops");
//  \__ init _/\_ cond xpr __/\_ inc _/
for (count = 0; count < limit; count++) {
    log('for loop:', count);
}
log();


topic("Strings and Arrays");
let message = "Work hard and you'll get Arrays!";
let words = message.split(' ');
log('When we split a sentence into words:\n');
console.table(words);
log();

topic("for..of Syntax");
for(let aWord of words) {
    log('-', aWord);
}

topic("for..in Syntax");
for(let position in words) {
    let theWord = words[position]
    log(`the word at [${position}] is ${theWord}`);
}
log(`... there are ${words.length} items in the array...\n`);



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
