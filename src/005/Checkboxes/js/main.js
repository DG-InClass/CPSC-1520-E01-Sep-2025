// Enter JavaScript for the exercise here...
const toggleAll = document.querySelector('[name=toggle]');

toggleAll.addEventListener('change', function (evt) {
    const target = evt.target;
    console.log(`main toggle is ${target.checked ? 'on' : 'off'}`);

    // Finding all the <input name="message" inputs
    const allMessages = document.querySelectorAll('[name=message]');
    // Notice the data type of allMessages in the browser console
    console.log(allMessages); // It's a NodeList, NOT an Array
    // While it's not an array, we can still
    // - Access individual <input> elements by index
    //    allMessages[0]  <--- first one
    // - Use its .forEach(), which works the same way as the
    //   Array's  .forEach()
    // - If we wanted to convert it to an array, we can use
    //   Array.from()
    // const inputArray = Array.from(allMessages);
    allMessages.forEach(el => {
        el.checked = target.checked;
        // If, instead of Matching the top checkbox,
        // I wanted to toggle the state of each el,
        // I could do this
        // el.checked = !el.checked; // Toggle/flip
    });
});

