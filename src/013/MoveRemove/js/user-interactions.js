/**
 * Configure user interactions related to Todo items (reminders).
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
export function configureTodoActions({todoForm, unsortedList, sortedList}) {
    // TODO: 
    setupFormProcessing({todoForm, unsortedList});
    setupButtonClicks({unsortedList, sortedList});
}

/**
 * Sets up the form processing to add new Todo items to the unsorted list.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLFormElement} document.todoForm Form for adding Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 */
const setupFormProcessing = function({todoForm, unsortedList}) {
    todoForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        // I'll ignore validation for the moment
        // <input name="todo" />
        const reminder = ev.target.elements.todo.value;
        const li = createUnsortedListItem(reminder);
        unsortedList.appendChild(li);
    });
}

/**
 * Sets up the event handlers and interactions for working with individual Todo items.
 * 
 * @param {Object} document An object referencing parts of the page related to Todo items
 * @param {HTMLUListElement} document.unsortedList Unordered list of Todo items
 * @param {HTMLOListElement} document.sortedList Ordered list of Todo items
 */
const setupButtonClicks = function({unsortedList, sortedList}) {
    // Challenge: Can you do this with ONE event handler?!

    // Only respond to clicks on buttons
    // Use the `Node.contains()` as part of determining the context
    // Distinguish the buttons based on the child's CSS Classes (see below for NOTES)
    // Move an item from unsorted to sorted using the `.appendChild()`
    // Move an item up or down in the list with `.insertBefore()`.
}


// **** Utility Functions *****
const createUnsortedListItem = function(text) {
    // <li>{text} <btn>trash</btn> <btn>move-right<btn>
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);
    const trashButton = createButton('secondary');

    // Assemble the parts

    return li;
}

const createButton = (className) => {
    const element = document.createElement('button');
    element.type = 'button';
    element.classList.add('outline', className);
    return element;
}

// ***** Utility Objects ******
const buttonType = {
    primary: 'primary',
    secondary: 'secondary'
}

const icon = {
    trash: 'la-trash',
    moveRight: 'la-arrow-right',
    moveUp: 'la-arrow-circle-up',
    moveDown: 'la-arrow-circle-down'
}


// NOTES:
//
// <i class="las la-arrow-circle-up"></i>
// <i class="las la-arrow-circle-down"></i>
// <i class="las la-arrow-right"></i>
// <i class="las la-trash"></i>
//
// <button type="button"></button>
//      class="outline primary"
//      class="outline secondary"
