const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

let string = ''

console.log(friends.join(','));

for (let i = 0; i < friends.length; i++) {
    string += friends[i] + ',';
}
console.log(string)