const friends = ['Alan', 'Mark', 'Julia', 'Bella', 1];



const trocarAmigo = [
    ...friends.slice(0, 1), 'Maverick', ...friends.slice(1 + 1), 'Anna', ...friends.slice(5)
];

console.log(friends);
console.log(trocarAmigo);

// friends.map(i => {
//     console.log(i);
// })