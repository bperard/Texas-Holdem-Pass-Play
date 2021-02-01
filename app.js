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

export function shuffleDeck() {
    const unshuffledDeck = makeDeck();
    const shuffledDeck = [];

    for (let i = unshuffledDeck.length; i > 0; i--) {
        const cardIndex = Math.floor(Math.random() * i);
        shuffledDeck.push(...(unshuffledDeck.splice(cardIndex, 1)));
    }

    return shuffledDeck;
}

export function dealPlayerCards(shuffledDeck, usersArray) {
    const cardsDealt = 2;

    for (let i = 0; i < cardsDealt; i++) {
        for (let user of usersArray) {
            user.cards.push(shuffledDeck.pop());
        }
    }
}

const users = [
    {
        name: 'Cinturtle',
        cards: []
    },
    {
        name: 'b-rad',
        cards: []
    },
];

const deck = shuffleDeck();

dealPlayerCards(deck, users);

console.log(users);