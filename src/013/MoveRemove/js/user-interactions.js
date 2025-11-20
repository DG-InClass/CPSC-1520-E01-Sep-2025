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
    // Think about the structure of our HTML
    //      - ul                <=== add our listener
    //          |- li
    //              |- text
    //              |- button
    //                  |- i
    //              |- button
    //                  | -i
    unsortedList.addEventListener('click', (ev) => {
        // ev.target.tagName  should be either 'BUTTON' or 'I'
        console.log(ev.target.tagName);
        const btn = getButton(ev.target);
        if(btn) { // if I have a button....
            /** @type {HTMLElement} */
            const child = btn.firstElementChild; // d-oh
            let action = "";
            child.classList.forEach(className => {
                if(className === icon.trash) action = icon.trash;
                if(className === icon.moveRight) action = icon.moveRight;
            });
            // Now that I know which "action" to perform,
            // I can do that action on my <li>
            const listItem = btn.parentElement;
            switch(action) {
                case icon.trash:
                    // remove
                    listItem.remove();
                    break;
                case icon.moveRight:
                    // move it
                    sortedList.appendChild(listItem);
                    // customize the list item
                    const moveUp = createButton(buttonType.primary);
                    const moveIcon = createFontIcon(icon.moveUp);
                    moveUp.appendChild(moveIcon);
                    listItem.replaceChild(moveUp, btn);

                    const moveDown = createButton(buttonType.primary);
                    const downIcon = createFontIcon(icon.moveDown);
                    moveDown.appendChild(downIcon);
                    listItem.appendChild(createSpace());
                    listItem.appendChild(moveDown);

                    break;
            }
        }
    });

    // TODO: Homework - Create the event listener for the
    //                  sorted list and respond to button
    //                  clicks with the correct action.
    //                  HINT: use the .insertBefore() method
    //                  on the HTML Elements

    // Challenge: Can you do this with ONE event handler?!

    // Only respond to clicks on buttons
    // Use the `Node.contains()` as part of determining the context
    // Distinguish the buttons based on the child's CSS Classes (see below for NOTES)
    // Move an item from unsorted to sorted using the `.appendChild()`
    // Move an item up or down in the list with `.insertBefore()`.
}


// **** Utility Functions *****
/**
 * Try to get the button element that was clicked on
 * @param {HTMLElement} element The target I am examining
 * @returns {HTMLButtonElement | null} What I found
 */
const getButton = (element) => {
    let result = null;
    if(element.tagName === 'BUTTON') result = element;
    else if(element.parentElement.tagName === 'BUTTON') result = element.parentElement;
    return result;
}

const createUnsortedListItem = function(text) {
    // <li>{text} <btn>trash</btn> <btn>move-right<btn>
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);
    const trashButton = createButton(buttonType.secondary);
    const trashIcon = createFontIcon(icon.trash);
    const moveButton = createButton(buttonType.primary);
    const moveIcon = createFontIcon(icon.moveRight);

    // Assemble the parts
    li.appendChild(textNode);
    li.appendChild(createSpace());
    li.appendChild(trashButton);
    trashButton.appendChild(trashIcon);
    li.appendChild(createSpace());
    li.appendChild(moveButton);
    moveButton.appendChild(moveIcon);

    return li;
}

const createFontIcon = (iconName) => {
    const element = document.createElement('i');
    element.classList.add('las', iconName);
    return element;
}

const createButton = (className) => {
    const element = document.createElement('button');
    element.type = 'button';
    element.classList.add('outline', className);
    return element;
}

const createSpace = () => document.createTextNode(' ');

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
