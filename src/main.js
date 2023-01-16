const coffes = document.querySelectorAll('.coffe')
const counterTop = document.querySelector('#counterTop')
const qa = document.querySelectorAll('.qa-div')


let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
    cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length > 0) {
        counterTop.classList.remove('hidden')
        counterTop.innerText = cart.reduce((acc, e) => acc + e.quantity, 0)
    }
} else {
    cart = []
}


coffes.forEach(elements => {

    const coffe = { 
        name: elements.children[1].children[0].innerText,
        price: elements.children[1].children[1].children[0].innerText,
        img: elements.children[0].src,
        quantity: 1,
    }
    // children 2 = button
    if (coffe.quantity !== 0) {

        elements.children[2].addEventListener('click', () => {
            counterTop.classList.remove('hidden')
            if (cart.find(e => e.name === coffe.name)) {
                let i = cart.indexOf(cart.find(e => e.name === coffe.name))
                cart[i].quantity++
                localStorage.setItem('cart', JSON.stringify(cart))
            } else {
                cart.push(coffe)
                localStorage.setItem('cart', JSON.stringify(cart))
            }

            counterTop.innerText = cart.reduce((acc, e) => acc + e.quantity, 0)

        })
    }
})

qa.forEach(elements => {
    elements.children[0].addEventListener('click', () => {
        elements.children[1].classList.toggle('hidden')
        elements.children[2].classList.toggle('hidden')
    })
})








