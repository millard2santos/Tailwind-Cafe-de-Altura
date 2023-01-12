const container = document.getElementById('container')
const empty = document.getElementById('empty')
const counter = document.getElementById('counter')
const subtotal = document.getElementById('subtotal')
const envio = document.getElementById('envio')
const total = document.getElementById('total')
const inputEnvio = document.querySelectorAll('.envio')
const counterTop = document.querySelector('#counterTop')

// quantity

const change = ({quantity,price}) => {
    counter.innerText = JSON.parse(localStorage.getItem('cart')).length
    counterTop.innerText = JSON.parse(localStorage.getItem('cart')).reduce((acc, e) => acc + e.quantity, 0)

    subtotal.innerText = JSON.parse(localStorage.getItem('cart')).reduce((acc,e) =>  acc + Number(e.price)*Number(e.quantity), 0)
    total.innerText = JSON.parse(localStorage.getItem('cart')).reduce((acc,e) =>  acc + Number(e.price)*Number(e.quantity), 0)

}


let cart;
if (JSON.parse(localStorage.getItem('cart'))) {
    empty.classList.add('hidden')
    counterTop.innerText = JSON.parse(localStorage.getItem('cart')).reduce((acc, e) => acc + e.quantity, 0)
    cart = JSON.parse(localStorage.getItem('cart'))
    // let cartFiltered = cart.filter((e, i) =>
    //     i === cart.findIndex((k) => (
    //         e.name === k.name
    //     ))
    // )
    // let cartFilteredLength = []
    // cartFiltered.forEach(e => {
    //     cartFilteredLength.push(cart.filter((x) => x.name === e.name).length);
    // })

    envio.innerText = 'GRATIS'
    counter.innerText = cart.length

    cart.forEach((element, i) => {
        const div = document.createElement('div')
        div.innerHTML = `<div class="flex gap-7">
        <div class="flex gap-3.5 items-center">
            <img src="/assets/icons/minus.png" alt="" class="py-1.5 w-3 cursor-pointer ">
            <div
                class="quantity w-6 h-6 flex justify-center items-center bg-greenCounter rounded-full text-xs text-green">
                ${element.quantity}</div>
            <img src="/assets/icons/plus.png" alt="" class="py-1.5 w-3 cursor-pointer">
        </div>
        <img src="${element.img}" alt="" class="w-[55px] h-[55px]">
        <div class="flex flex-col justify-center">
            <p class="font-semibold text-sm">${element.name}</p>
            <p class="text-sm">Paquete de café, 250gr</p>
        </div>
    </div>
    <p class="font-semibold text-lg"><span>${Number(element.price) * element.quantity}</span>,00€</p>`


        // IMG MINUS

        div.children[0].children[0].children[0].addEventListener('click', () => {

            // if(div.children[0].children[0].children[0].nextElementSibling.innerText != 0){
            //     // cart.splice(cart.findIndex(e => e.name === element.name),1)
            //     // localStorage.setItem('cart', JSON.stringify(cart))
            //     // div.children[0].children[0].children[0].nextElementSibling.innerText--
            // }

            element.quantity--
            div.children[0].children[0].children[1].innerText = element.quantity
            if (element.quantity == 0) {
                cart.splice(i,1)
                div.remove()
                localStorage.setItem('cart', JSON.stringify(cart))

                if (container.children.length <= 1 || cart.length < 0) {
                     empty.classList.remove('hidden')
                }
            } else {
                // cart.splice(cart.findIndex(e => e.name === element.name),1)
                // localStorage.setItem('cart', JSON.stringify(cart))
                
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            change(element)
        })

        // IMG MORE
        div.children[0].children[0].children[2].addEventListener('click', () => {
            element.quantity++
            localStorage.setItem('cart', JSON.stringify(cart))
            div.children[0].children[0].children[2].previousElementSibling.innerText++
            change(element)
        })


        div.classList.add('flex', 'justify-between', 'items-center', 'gap-6')
        container.append(div)
        subtotal.innerText = Number(subtotal.innerText) + Number(element.price) * element.quantity
        total.innerText = Number(total.innerText) + Number(element.price) * element.quantity

    });

    inputEnvio.forEach(e => {
        e.addEventListener('click', (event) => {
            event.target.value != '0' ? envio.innerText = event.target.value + ',00€' : envio.innerText = 'GRATIS'
            total.innerText = Number(total.innerText) + Number(e.value)
        })
    })


    // const moreLess = document.querySelectorAll('#moreLess > img')
    // moreLess.forEach((e, i) => {
    //     e.addEventListener('click', () => {
    //         // MINUS
    //         if (i === 0) {
    //             e.nextElementSibling.innerText--
    //             if (e.nextElementSibling.innerText == 0) {
    //                 e.parentNode.parentNode.parentNode.remove()
    //             }


    //             // MORE
    //         } else {

    //         }
    //     })
    // })






}





