const coffes = document.querySelectorAll('.coffe')
let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
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
    })
})


