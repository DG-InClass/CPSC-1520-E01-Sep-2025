// An example of using the DOM API to create elements
// AND modify their properties accordingly.
let link = document.createElement('a');
let google = document.createTextNode('Google');
link.appendChild(google);
link.href = 'https://google.ca';
link.target = '_blank';
