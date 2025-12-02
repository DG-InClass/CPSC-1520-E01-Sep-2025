/**
 * Generates a BINGO card from the set of card values and other options.
 * 
 * @param {object} options Options for creating a bingo card.
 * @param {boolean} options.freeSpace Whether a free space item should be used in the middle cell.
 * @param {{letter: string, values: number[]}[]} options.numbers The numbers for the BINGO columns.
 * @returns {HTMLTableElement} A `<table>` element with all the contents of the bingo card.
 */
export const createBingoCard = function(options) {
    const card = document.createElement('table');

    // It would be handy to have a variable for each of the
    // properties in the options parameter.
    // let freeSpace = options.freeSpace;
    // let numbers = options.numbers;
    // Let's try that with "destructuring syntax"
    let { freeSpace, numbers } = options;
    // think for a moment about the syntax for an import
    // import { createBingoCard } from './bingoCardGenerator';

    // debugger
    // TODO: Create the bingo card based on the options supplied.
    //     <table data-bingo-card>
    card.setAttribute('data-bingo-card', '');

    // 1) Create <thead> element
    const head = document.createElement('thead');
    // 2) Create a <tr>
    const row = document.createElement('tr');
    // 3) Create a <th> for each letter in the card's numbers
    numbers.forEach(bingoColumn => {
        const thTag = document.createElement('th');
        const text = document.createTextNode(bingoColumn.letter);
        thTag.appendChild(text);
        row.appendChild(thTag);
    });

    // Assemble what we have so far....
    head.appendChild(row);
    card.appendChild(head);
    debugger

    // 4) Create <tbody>
    const body = document.createElement('tbody');

    // 5) for each row of data, we create <tr> with <td> cells
    // loop through each number[index] and get the value for that row  number[colIndex].values[rowIndex]
    // build each row
    //    get each column cell for that row
    for(let rowIndex = 0; rowIndex < numbers.length; rowIndex++) {
        const dataRow = numbers[rowIndex];
        const trTag = document.createElement('tr');
        for(let colIndex = 0; colIndex < dataRow.values.length; colIndex++) {
            // Check to see if I need to do a "free cell"
            if(freeSpace && dataRow.values.length < 5 && colIndex === 2) {
                // inject a free cell
                const free = document.createElement('td');
                const word = document.createTextNode('FREE');
                free.appendChild(word);
                trTag.appendChild(free);
            }
            // Now I can create a cell of data
            const cellData = dataRow.values[colIndex];
            const cell = document.createElement('td');
            const num = document.createTextNode(cellData);
            cell.appendChild(num);
            trTag.appendChild(cell);
        }
        body.appendChild(trTag);
    }
    card.appendChild(body);
    debugger

    return card;
}
