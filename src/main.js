const coffes = document.querySelectorAll('.coffe')
const counterTop = document.querySelector('#counterTop')


const qa = document.querySelectorAll('.qa-div')
let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
    counterTop.innerText = JSON.parse(localStorage.getItem('cart')).length
    cart = JSON.parse(localStorage.getItem('cart'))
}else{
    cart = []
}

coffes.forEach(elements => {
    const coffe = {
        name : elements.children[1].children[0].innerText,
        price: elements.children[1].children[1].children[0].innerText,
        img: elements.children[0].src 
    } 
    // children 2 = button
    elements.children[2].addEventListener('click', () => {
        cart.push(coffe)
        localStorage.setItem('cart', JSON.stringify(cart))
        counterTop.innerText = JSON.parse(localStorage.getItem('cart')).length
        
    })
})

qa.forEach( elements => {
    elements.children[0].addEventListener('click', () => {
        elements.children[1].classList.toggle('hidden')
        elements.children[2].classList.toggle('hidden')
    })
})





