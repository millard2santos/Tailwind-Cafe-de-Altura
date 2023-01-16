const container = document.getElementById('container')
const empty = document.getElementById('empty')
const counter = document.getElementById('counter')
const subtotal = document.getElementById('subtotal')
const envio = document.getElementById('envio')
const total = document.getElementById('total')
const inputEnvio = document.querySelectorAll('.envio')
const counterTop = document.querySelector('#counterTop')
const envioDiv = document.querySelector('#envioDiv')







const change = (div, { quantity, price }, input) => {

    if (container.children.length <= 1 || cart.length < 0) {
        empty.classList.remove('hidden')
        counterTop.classList.add('hidden')
        counter.parentNode.innerText = 'Cesta'
        envioDiv.remove()
    }


    let cantidadTotalCafes = cart.reduce((acc, e) => acc + e.quantity, 0)
    counter.innerText = cantidadTotalCafes
    counterTop.innerText = cantidadTotalCafes


    let precioTotalCafes = cart.reduce((acc, e) => acc + Number(e.price) * Number(e.quantity), 0)
    subtotal.innerText = precioTotalCafes
    total.innerText = precioTotalCafes + input


    if(div){
        div.children[1].children[0].innerText = `${quantity * price}`
    }


}


let cart = JSON.parse(localStorage.getItem('cart'))


if (cart) {
    empty.classList.add('hidden')

    let cantidadRealCafes = cart.reduce((acc, e) => acc + e.quantity, 0)

    counterTop.innerText = cantidadRealCafes
    counter.innerText = cantidadRealCafes

    let InputEnvioValue = 0

    let precioTotalCafes = cart.reduce((acc, e) => acc + Number(e.price) * Number(e.quantity), 0)
    subtotal.innerText = precioTotalCafes
    total.innerText = precioTotalCafes

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
    <p class="font-semibold text-lg"><span>${Number(element.price) * element.quantity}</span>€</p>`

    div.classList.add('flex', 'justify-between', 'items-center', 'gap-6', 'border-b-1')
    container.append(div)



        if(i !== cart.length-1){
            const betweenLine = document.createElement('div')
            betweenLine.classList.add('w-full', 'h-px', 'bg-grey' ,'opacity-10')
            container.append(betweenLine)
            
        }
        
        
        

        // BOTON DE RESTA DE PRODUCTO

        div.children[0].children[0].children[0].addEventListener('click', () => {
            element.quantity--
            div.children[0].children[0].children[1].innerText = element.quantity
            if (element.quantity == 0) {

                if(div.nextElementSibling){
                    div.nextElementSibling.remove()
                }

                if(cart.length === 1 && div.previousElementSibling){
                    div.previousElementSibling.remove()
                }

                
                cart.splice(cart.findIndex(e => e.name === element.name), 1)
                div.remove()

                

            }

            localStorage.setItem('cart', JSON.stringify(cart))

            change(div, element, InputEnvioValue)
        })


        // BOTO DE SUMA DE PRODUCTO


        div.children[0].children[0].children[2].addEventListener('click', () => {
            element.quantity++
            localStorage.setItem('cart', JSON.stringify(cart))
            div.children[0].children[0].children[2].previousElementSibling.innerText++
            change(div, element, InputEnvioValue)
        })





    });

    


    if (container.children.length <= 1 || cart.length < 0) {
        empty.classList.remove('hidden')
        counterTop.classList.add('hidden')
        counter.parentNode.innerText = 'Cesta'
        envioDiv.remove()
    }


    inputEnvio.forEach(e => {
        e.addEventListener('click', () => {

            InputEnvioValue = Number(e.value)
            envio.innerText = e.value + '€'
            // total.innerText = precioTotalCafes + InputEnvioValue

            change(false, false, InputEnvioValue)

        })
    })



} else {
    empty.classList.remove('hidden')
    counterTop.classList.add('hidden')
    counter.parentNode.innerText = 'Cesta'
    envioDiv.remove()
}







