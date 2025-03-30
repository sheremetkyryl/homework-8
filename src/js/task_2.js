const cards = [
    'Карточка 1',
    'Карточка 2',
    'Карточка 3',
    'Карточка 4',
    'Карточка 5',
];



const cardToRemove = 'Карточка 3';
const cardIndex = cards.indexOf(cardToRemove);

if(cardIndex !== -1) {
    cards.splice(cardIndex, 1)
}

console.log(cards);


