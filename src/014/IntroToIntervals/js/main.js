const addDots = function() {
    let myOutput = document.getElementById('dots');
    myOutput.innerText += '.';
    myOutput.setAttribute('title', `There are ${myOutput.innerText.length} dots`);
}

// Start an interval
let cancellationRef = setInterval(addDots, 1250); // 1.25 seconds

// Add an event listener to the button that will stop the interval.
document.querySelector('button')
        .addEventListener('click', function(evt) {
            console.log('Button clicked', cancellationRef);
            // Any value that is false, null, undefined, "", or 0
            // is considered "falsy".
            // Anything else is considered "truthy"
            if(cancellationRef) {   // if "truthy"
                clearInterval(cancellationRef);
                cancellationRef = 0; // to indicate the interval is no
                                     // longer running.
                evt.target.innerText = "Continue Interval";
            } else {
                // Re-starting means creating a new interval/timer
                cancellationRef = setInterval(addDots, 1250);
                evt.target.innerText = "Stop Interval";
            }
        });
