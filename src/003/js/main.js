console.log('JavaScript file loaded!');
let feedback = document.getElementById('feedback');

// This is the function we will use to respond
// to click events
const handleClick = function(event) {
    event.preventDefault();
    // TODO: Use for exploration purposes
    // target is the element that was clicked
    const target = event.target; // 🎉 what was clicked
    feedback.innerText = `Clicked from ${target.tagName}`;
}

let heading = document.querySelector('h1');
heading.addEventListener('click', handleClick);

// TODO: Complete the rest of the tutorial