export function makeDeck() {
    const deck = [];
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const cards = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

    for (let suit of suits) {
        let value = 0;

        for (let card of cards) {
            const newCard = {};
            newCard.suit = suit;
            newCard.card = card;
            newCard.value = value;
            value++;

            deck.push(newCard);
        }
    }

    return deck;
}

console.log(makeDeck());