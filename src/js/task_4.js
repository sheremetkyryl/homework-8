const cards = [
    'Карточка 1',
    'Карточка 2',
    'Карточка 3',
    'Карточка 4',
    'Карточка 5',
];

const cardToUpdate = 'Карточка 4';
const updatedCard = 'Карточка 4(оновлена)'

cards.splice(3, 1, updatedCard)
console.log(cards)