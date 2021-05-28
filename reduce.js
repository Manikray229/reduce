//sob gula k collect kore ek sathe deowa k reduce bole 
const friends = [
    {name: 'Manik', money: 23},
    {name: 'Bilash', money: 25},
    {name: 'Sahin', money: 38}
];
// const total3 = nums.map(num => num*2);
// console.log(total3)
// const total2 = nums.filter(num => num > 23)
// console.log(total2)

// const total1 = nums.find( num => num > 50);
// console.log(total1)

// const total = friends.reduce((sum, friend ) =>{ 
//     console.log(sum , friend)
//     return  sum + friend.money
// }

// , 0)
// console.log(total)

const final = friends.reduce((sum, friend) => sum + friend.money , 0 );
console.log(final);