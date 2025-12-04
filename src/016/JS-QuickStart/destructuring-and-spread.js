// node --watch destructuring-and-spread.js
console.clear();
const log = console.log;
log('Intermediate JavaScript');

// Recall we can use object literal syntax
// to "structure" our related data.
let person = {
    givenNames: 'Stewart Andrew',
    surname: `Dent`,
    dateOfBirth: new Date(2004, 0, 23)
}
log('Here is the person object:', person);

// Sometimes, we might want to "de-construct" an object to pull out some or all of its members and store/reference those values in other variables.
// "Destructuring syntax" is used to "unpack" an object.
let { givenNames } = person;
// In the above, the givenNames must be the
// exact spelling of the property inside of
// the person object.
// The regular way you might have seen it is:
// let givenNames = person.givenNames;
log('Here is the givenNames:', givenNames);

log('--------');

// We can also destructure arrays to get
// elements of the array into new variables.
let students = ['Andrew', 'Phillip', 'Kathy'];
log('An array of students:', students);
let [firstStudent,,lastStudent] = students;
log('The first student is:', firstStudent);
log('The last student is:', lastStudent);

log('=========');
// Lastly, let's look at the spread operator
log('\nCompare the following two outputs:');
log(students);
log(...students); // ... is the spread operator
// the above is equivalent to doing this:
log(students[0], students[1], students[2]);
//  \__ notice this is comma-separated _/

log('\n\n- the end -\n');
