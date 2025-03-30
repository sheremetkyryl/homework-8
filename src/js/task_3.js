const cards = [
    'Карточка 1',
    'Карточка 2',
    'Карточка 3',
    'Карточка 4',
    'Карточка 5',
];

const cardToInsert = 'Карточка 6'
cards.splice(5, 0, cardToInsert)
console.log(cards)