// A class is a blueprint for what an object "looks like" (information)
// and how the object behaves (instructions).
const Rectangle = class {
    // Information (properties/fields)
    #created;   // Private property - #
    height;     // Public property
    width;      // Public property
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return (this.width + this.height) * 2;
    }
    
    // Behaviours
    constructor(height, width) {
        // The job of a constructor is to make sure the object's
        // properties/fields have "meaningful" values.
        this.height = height;
        this.width = width;
        this.#created = new Date(); // When this rectangle was made
        Rectangle.#count++; // Increment each time a new Rectangle
                            // is being created.
    }

    report() {
        console.log(`This box was made on ${this.#created.toLocaleTimeString()}`);
    }

    /**
     * Render this rectangle into the DOM.
     * @param {HTMLElement} container The DOM element to hold this shape
     * @returns {HTMLDivElement} - This rectangle as a `<div>`
     */
    render(container) {
        // Create a `<div>` with certain styles
        // - w-[{width}px]
        // - h-[{height}px]
        const divEl = document.createElement('div');

        // NOTE: Attempting to generate Tailwind classes via
        //       string interpolation will NOT work, because
        //       Tailwind cannot predict what the height and
        //       width values might be.
        //       So, do NOT use the approach in these lines 🐞
        // const customWidth = `w-[${this.width}px]`;
        // const customHeight = `h-[${this.height}px]`;
        // divEl.classList.add(customWidth, customHeight);

        // NOTE: Instead, apply the styles as plain CSS to
        //       the divEl element. 🎉
        divEl.style.width = `${this.height}px`;
        divEl.style.height = `${this.width}px`;
        

        // Append the div to the container.
        container.appendChild(divEl);

        // Return a reference
        return divEl;
    }

    // Static member of the Rectangle class
    static #count = 0; // Private, static property/variable
    // A "getter" function
    static get count() {
        // Notice that I use the pattern of ClassName.memberName
        return Rectangle.#count;
    }
}

const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 100;
    const h = 55;
    
    // Create the Rectangle object.
    const box = new Rectangle(h, w); // Instantiate the class

    const domContainer = document.getElementById('shapes');
    box.render(domContainer);

    shapes.push(box);
    console.log('box created:', box);
    console.log(`There are ${Rectangle.count} boxes so far.`);
    box.report(); // call my method/function of my Rectangle instance
});
