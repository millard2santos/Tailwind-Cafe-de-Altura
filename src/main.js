const coffes = document.querySelectorAll('.coffe')
const qa = document.querySelectorAll('.qa-div')
let cart = []

coffes.forEach(elements => {
    const coffe = {
        name : elements.children[1].children[0].innerText,
        price: elements.children[1].children[1].innerText,
        img: elements.children[0].src 
    } 
    // children 2 = button
    elements.children[2].addEventListener('click', () => {
        cart.push(coffe)
        localStorage.setItem('cart', JSON.stringify(cart))
    })
})

qa.forEach( elements => {
    elements.children[0].addEventListener('click', () => {
        elements.children[1].classList.toggle('hidden')
        elements.children[2].classList.toggle('hidden')
    })
})





