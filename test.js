let array = [
    { name: 'Colombia Los Naranjos', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' },
    { name: 'Colombia Los Naranjos', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' },
    { name: 'Colombia ', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' },
    { name: 'Colombia ', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' },
    { name: 'Colombia ', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' },
    { name: 'Colombia Los Naranjos', price: '9,00€', img: 'http://127.0.0.1:5501/assets/coffe/colombiaBag.png' }
]

let arrayfiltered = array.filter((e, i) =>
    i === array.findIndex((t) => (
        e.name === t.name
    ))
)
let arrayfilteredLength = []

// arrayfiltered.forEach(e => {
//     console.log(array.filter((x) => x === e));
//     arrayfilteredLength.push(array.filter((x) => x === e).length);
// })

// console.log(arrayfiltered);
// console.log(arrayfilteredLength);



let array1 = [1,2,1,2,1,1,1,2,2,2,2,2,1]
let array2 = [1,2]
let arrayLength = []


array2.forEach( e => {
    arrayLength.push(array1.filter( x =>x === e).length)
})

console.log(arrayLength);