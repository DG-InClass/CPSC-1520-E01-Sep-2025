const container = document.getElementById('players');

const form = document.querySelector('form');
// TODO: Add Event Listener
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    console.log('Adding Players...');

    // Get the names
    const inputNames = evt.target.elements.playerNames;
    //                 <input name="playerNames" />
    const names = inputNames.value.split(',').map(name => name.trim());
    //            \____string____/
    //                             \string[]/
    //                                       \ transform new string[] /
    // console.log(names);
    if (names.length > 0) {
        // console.log(names.length);
        // Add players to the container
        names.forEach((player, index) => {
            // console.log(player, index);
            const html = `<div id="player-${index}"><h2>${player}</h2></div>`;
            // console.log(container);
            container.innerHTML += html;
        });
        // Show the container
        container.classList.remove('hidden');
        // Disable the button, hide the form
        evt.target.elements.createPlayers.setAttribute('disabled', 'true');
        evt.target.classList.add('hidden');

        // Get a brand new deck of cards
        let newCards = await freshCards();
        // The ... is called the "spread operator"
        shuffledCards.splice(0, shuffledCards.length, ...newCards);
        console.clear();
        console.log('New deck:', shuffledCards);
    }
})

const dealButton = document.getElementById('deal-me-in');
// TODO: Add Event Listener
dealButton.addEventListener('click', function(evt) {
    console.clear();
    const players = container.querySelectorAll('div');
    //                       \______________________/
    // I can use the .forEach() function that comes with the NodeList
    players.forEach(playerHand => {
        // TODO: Make sure there are enough cards left in the deck...

        // Deal a card to the player's hand
        const card = shuffledCards.pop();
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        console.log(img);
        playerHand.innerHTML += img;
    });
});

const freshCards = async function() {
    const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

    // Get a new shuffled deck
    // await prevents fetch from running asynchronously
    let resp = await fetch(`${BASE_URL}new/shuffle/`);
    let data = await resp.json();
    // console.log(data);
    let deckId = data.deck_id;

    // Draw all 52 cards
    resp = await fetch(`${BASE_URL}${deckId}/draw/?count=52`);
    data = await resp.json();
    console.log('Here are my cards:', data);

    // Return a clean array of all the card codes
    const codes = data.cards.map(oneCard => oneCard.code);
    return codes;
}

const shuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]
